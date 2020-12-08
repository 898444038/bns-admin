
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
                <vs-divider color="primary"> 材料价格 </vs-divider>
                <div class="flex flex-wrap justify-between items-center">
                  <div class="vx-row" style="margin: 0;width: 100%;">
                    <vs-input v-for="(item,index) in materials" :key="index" :label-placeholder="item.name+' 单价'" v-model="item.value" @change="updateFooterEvent"/>
                  </div>
                </div>
                <div v-for="(item,index) in routes" :key="index" class="vx-row" style="margin: 20px 0 0 0;width: 100%;">
                  <vs-divider color="primary"> 成长路线{{index+1}} </vs-divider>
                  <span v-for="(list,index2) in item.list" :key="index2"> <i class="feather icon-chevrons-right"></i> {{list.name}}</span>
                  <vxe-table style="width:100%;margin-top: 8px;" class="mytable-footer"
                    :ref="'xTable'+index"
                    border
                    resizable
                    align="center"
                    highlight-hover-row
                    :show-footer="showFooter"
                    :footer-method="footerMethod"
                    :data="item.data">
                    <vxe-table-column type="seq" width="50" fixed="left"></vxe-table-column>
                    <vxe-table-column v-for="(t,j) in item.title" :key="j" :field="t.field" :title="t.title"></vxe-table-column>
                    <vxe-table-column title="总价" fixed="right">
                      <template v-slot="{ row }">
                        <span>{{ countAmount(row) }} 金</span>
                      </template>
                    </vxe-table-column>
                  </vxe-table>
                </div>
            </vs-tab>
        </vs-tabs>
    </vx-card>
  </div>
</template>

<script>
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
import vSelect from 'vue-select'
import XEUtils from 'xe-utils'

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
      materials:[],
      routes:[],
      titles:[],
      showFooter: true
    }
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    type(newObject, oldObject){
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
    resetForm(){
      this.type = '';
      this.start = '';
      this.end = '';
      this.materials = [];
      this.routes = [];
      this.titles = [];
    },
    auction(){
      var _this = this;
      let params = {
        type: this.type.code,
        startId: this.start.id,
        endId: this.end.id
      };
      //console.log("/equip/grow/auction params",params)
      _this.$https.post("/equip/grow/auction",params).then((response) => { 
          if(response.code == 1){
              //console.log("/equip/grow/auction",response.data)
              _this.materials = response.data.materials;
              _this.routes = response.data.routes;
              _this.titles = response.data.titles;
          }else{
              _this.$vs.dialog({color: 'danger',title: '警告',text: response.msg,accept: function(){} });
          }
      }).catch((error) => { console.log("error",error) });
    },
    getTypeList(){
        var _this = this;
        _this.$https.get("/equip/type/selectList",{}).then((response) => { 
            if(response.code == 1){
                //console.log(response)
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
              //console.log(response)
              _this.startOptions = response.data;
              _this.endOptions = response.data;
          }else{
              _this.$vs.dialog({color: 'danger',title: '警告',text: response.msg,accept: function(){} });
          }
      }).catch((error) => { console.log("error",error) });
    },
    countAmount (row) {
      let list = this.materials;
      let total = 0;
      for(let i=0;i<list.length;i++){
        let count = 0;
        for (let key of Object.keys(row)) {
          if(key == list[i].id){
            count = row[key];
          }
        }
        total += XEUtils.multiply(list[i].value, count)
      }
      return total;
    },
    countAllAmount (data) {
      return XEUtils.sum(data.map(row => this.countAmount(row)))
    },
    // 在值发生改变时更新表尾合计
    updateFooterEvent () {
      // console.log("this.$refs",this.$refs)
      // console.log("this.$refs.xTable0",this.$refs.xTable0)
      // for (let key of Object.keys(this.$refs)) {
      //   console.log("this.$refs[key]",this.$refs[key])
      //   this.$refs[key].updateFooter();
      // }
      // let xTable = this.$refs.xTable0;
      // xTable.updateFooter();
      let routes = JSON.parse(JSON.stringify(this.routes));
      this.routes = [];
      this.routes = routes;
    },
    footerMethod ({ columns, data }) {
      const means = []
      const sums = []
      columns.forEach((column, columnIndex) => {
        if (columnIndex === 0) {
          means.push('总量');
          sums.push('总计');
        } else if (columnIndex === (this.materials.length + 3)) {
          sums.push("共 "+this.countAllAmount(data)+" 金");
        }else {
          let meanCell = null;
          let sumCell = null;
          let list = this.materials;
          for(let i=0;i<list.length;i++){
            if(column.property == list[i].id){
              let count = XEUtils.sum(data, column.property);
              meanCell = count;
              let total = XEUtils.multiply(list[i].value, count);
              sumCell = total;
            }
          }
          if(meanCell){
            means.push(meanCell+" 个")
          }else{
            means.push(meanCell)
          }
          if(sumCell){
            sums.push(sumCell+" 金")
          }else{
            sums.push(sumCell)
          }
        }
      })
      // 返回一个二维数组的表尾合计
      return [means, sums]
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


.mytable-footer .col-blue {
  background-color: #2db7f5;
  color: #fff;
}
.mytable-footer .col-red {
  background-color: red;
  color: #fff;
}

.vxe-table .vxe-cell{word-break: keep-all!important;white-space:nowrap!important;}
.vs-con-input-label.is-label-placeholder {
    margin-top: 30px!important;
    margin-right: 5px!important;
}
</style>

<style>
.vxe-table .vxe-cell{word-break: keep-all!important;white-space:nowrap!important;}
</style>