
<template>
  <div id="ag-grid-demo">
    <!-- DROPDOWN -->
    <div class="flex flex-wrap justify-between items-center" style="margin-bottom:15px;">
      <vs-dropdown vs-trigger-click class="ml-auto md:block hidden cursor-pointer">
        <vs-button radius icon="icon-settings" icon-pack="feather" />
        <vs-dropdown-menu class="w-auto">
          <vs-dropdown-item>
            <div @click="$router.push('/config/equip').catch(() => {})" class="flex items-center">
              <feather-icon icon="UserIcon" class="inline-block mr-2" svgClasses="w-4 h-4" />
              <span>装备配置</span>
            </div>
          </vs-dropdown-item>
        </vs-dropdown-menu>
      </vs-dropdown>
    </div>
    <vx-card>
        <vs-tabs alignment="center">
            <vs-tab label="成长计算" icon-pack="feather" icon="icon-home">
                <!-- TABLE ACTION ROW -->
                <div class="flex flex-wrap justify-between items-center">
                    <div class="vx-row" style="margin: 20px 0 0 0;width: 100%;">
                        <div class="vx-col">
                            <div class="centerx" style="margin-top: 17px;min-width: 160px;">
                                <v-select  label="name" placeholder='请选择类型' v-model='type' :options="typeOptions" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
                            </div>
                        </div>
                        <div class="vx-col">
                            <div class="centerx" style="margin-top: 17px;min-width: 160px;">
                                <v-select  label="name" placeholder='请选择起始' v-model='start' :options="startOptions" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
                            </div>
                        </div>
                        <div class="vx-col">
                            <div class="centerx" style="margin-top: 17px;min-width: 160px;">
                                <v-select  label="name" placeholder='请选择目标' v-model='end' :options="endOptions" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
                            </div>
                        </div>
                        
                        <div class="vx-col">
                            <div class="centerx">
                                <vs-button type="relief" class="mr-3 mb-2 centery-1" @click="auction">计算</vs-button>
                                <vs-button type="relief" color="warning" class="mb-2" @click="resetForm">重置</vs-button>
                            </div>
                        </div>
                    </div>
                </div>
                <vs-divider color="primary"> 价格 </vs-divider>
                <vs-divider color="primary"> 路线 </vs-divider>
            </vs-tab>
        </vs-tabs>
    </vx-card>
  </div>
</template>

<script>
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
import vSelect from 'vue-select'
export default {
  components: {
    'v-select': vSelect,
    StatisticsCardLine
  },
  data() {
    return {
      size: '',//medium,small,mini
      typeOptions:[],
      type:'',
      startOptions:[],
      start:'',
      endOptions:[],
      end:'',
    }
  },
  watch: {
    type(newObject, oldObject){
        console.log(newObject,oldObject)
        //newObject.id,newObject.name,newObject.code
        this.startOptions = [];
        this.start = '';
        this.endOptions = [];
        this.end = '';
        this.getItemList();
    }
  },
  computed: {
    
  },
  methods: {
    resetForm(){},
    auction(){
      var _this = this;
      let params = {
        type: this.type.code,
        startId: this.start.id,
        endId: this.end.id
      };
      console.log("/equip/grow/auction params",params)
      _this.$https.post("/equip/grow/auction",params).then((response) => { 
          if(response.code == 1){
              console.log(response)
          }else{
              _this.$vs.dialog({color: 'danger',title: '警告',text: response.msg,accept: function(){} });
          }
      }).catch((error) => { console.log("error",error) });
    },
    getTypeList(){
        var _this = this;
        _this.$https.get("/equip/type/selectList",{}).then((response) => { 
            if(response.code == 1){
                console.log(response)
                _this.typeOptions = response.data;
            }else{
                _this.$vs.dialog({color: 'danger',title: '警告',text: response.msg,accept: function(){} });
            }
        }).catch((error) => { console.log("error",error) });
    },
    getItemList(){
      var _this = this;
      let params = {
        type: this.type.code,
      };
      _this.$https.post("/equip/grow/options",params).then((response) => { 
          if(response.code == 1){
              console.log(response)
              _this.startOptions = response.data;
              _this.endOptions = response.data;
          }else{
              _this.$vs.dialog({color: 'danger',title: '警告',text: response.msg,accept: function(){} });
          }
      }).catch((error) => { console.log("error",error) });
    }
  },
  mounted() {
    this.getTypeList();
  }
}

</script>

<style scoped>
.centerx,.centerx .vs-con-input-label{
  margin-top: 0!important;
}
.vs-dropdown--item{
  width: 110px;
}
.v-select .vs__dropdown-menu{
    max-height:300px;
}
.word-td{Word-break: break-all;}
.vs-tabs--content{margin-top: 10px;    min-height: 450px;}
.v-select ul{height:200px}
</style>