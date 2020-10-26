
<template>
  <div id="ag-grid-demo">
    <!-- DROPDOWN -->
    <div class="flex flex-wrap justify-between items-center" style="margin-bottom:15px;">
      <vs-dropdown vs-trigger-click class="ml-auto md:block hidden cursor-pointer">
        <vs-button radius icon="icon-settings" icon-pack="feather" />
        <vs-dropdown-menu class="w-auto">
          <vs-dropdown-item>
            <div @click="$router.push('/config/luck').catch(() => {})" class="flex items-center">
              <feather-icon icon="UserIcon" class="inline-block mr-2" svgClasses="w-4 h-4" />
              <span>抽奖配置</span>
            </div>
          </vs-dropdown-item>
        </vs-dropdown-menu>
      </vs-dropdown>
    </div>
    
    <vx-card>
      <!-- TABLE ACTION ROW -->
      <div class="flex flex-wrap justify-between items-center">
        <div class="vx-row" style="margin: 20px 0 0 0;width: 100%;">
          <div class="vx-col">
              <div class="centerx" style="margin-top: 17px;min-width: 160px;">
                  <v-select  label="name" placeholder='请选择' v-model='luck' :options="lucks" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
              </div>
          </div>
          <div class="vx-col">
              <div class="centerx">
                  <vs-input label-placeholder="轮数" v-model="loop" class="is-label-placeholder" />
              </div>
          </div>
          <div class="vx-col">
              <div class="centerx">
                  <vs-input label-placeholder="每轮数量" v-model="count" class="is-label-placeholder" />
              </div>
          </div>
          
          <div class="vx-col">
              <div class="centerx">
                  <vs-button class="mr-3 mb-2 centery-1" @click="auction">计算</vs-button>
                  <vs-button color="warning" type="border" class="mb-2" @click="resetForm">重置</vs-button>
              </div>
          </div>
        </div>

        <div class="vx-row" v-show="showTotal" style="margin: 15px 0px 0px;width:100%">
          <vs-divider color="primary"> 统计 </vs-divider>
          <div class="vx-row" style="margin: 0;width: 100%;">
            <div class="vx-col w-full mb-base">
              <vs-table :data="totalList">
                <template slot="thead">
                  <vs-th style="width:200px">名称</vs-th>
                  <vs-th style="width:100px">权重</vs-th>
                  <vs-th style="width:200px">中奖数量</vs-th>
                  <vs-th>中奖位置</vs-th>
                </template>
                <template slot-scope="{data}">
                  <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td :data="data[indextr].name"> {{ data[indextr].name }} </vs-td>
                    <vs-td :data="data[indextr].weight"> {{ data[indextr].weight }} </vs-td>
                    <vs-td :data="data[indextr].count"> {{ data[indextr].count }} </vs-td>
                    <vs-td :data="data[indextr].index"> {{ data[indextr].index }} </vs-td>
                  </vs-tr>
                </template>
              </vs-table>
            </div>
          </div>
        </div>

        <div v-for="(data,index) in dataList" :key="index" class="vx-row" style="margin: 15px 0px 0px;width:100%">
          <vs-divider color="primary"> 第{{data.loop}}轮 </vs-divider>
          <div class="vx-row" style="margin: 0;width: 100%;">
            <div class="vx-col w-full mb-base">
              <vs-table :data="data.list">
                <template slot="thead">
                  <vs-th style="width:200px">名称</vs-th>
                  <vs-th style="width:100px">权重</vs-th>
                  <vs-th style="width:200px">中奖数量</vs-th>
                  <vs-th>中奖位置</vs-th>
                </template>
                <template slot-scope="{data}">
                  <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td :data="data[indextr].name"> {{ data[indextr].name }} </vs-td>
                    <vs-td :data="data[indextr].weight"> {{ data[indextr].weight }} </vs-td>
                    <vs-td :data="data[indextr].count"> {{ data[indextr].count }} </vs-td>
                    <vs-td :data="data[indextr].index"> {{ data[indextr].index }} </vs-td>
                  </vs-tr>
                </template>
              </vs-table>
            </div>
          </div>
        </div>
      </div>

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
      luck: '',
      lucks: [],
      loop: 10,
      count: 50,
      showTotal: false,
      dataList: [],
      totalList: [],
    }
  },
  watch: {
    
  },
  computed: {
    
  },
  methods: {
    getLuckList(){
      var _this = this;
      _this.$https.get("/luck/selectList",{}).then((response) => { 
        console.log("luck selectList response",response);
        if(response.code == 1){
          _this.lucks = response.data;
        }else{
            _this.$vs.dialog({color: 'danger',title: '警告',text: response.msg,accept: function(){}});
        }
      }).catch((error) => { console.log(error) });
    },
    auction(){
      var _this = this;
      var params = {
        id: _this.luck.id,
        loop: _this.loop,
        count: _this.count
      }
      _this.$https.post("/luck/calculate",params).then((response) => { 
        if(response.code == 1){
            console.log("luck update response",response.data);
            _this.$vs.dialog({color: 'success',title: '成功',text: "抽奖完成",accept: function(){}});
            _this.dataList = response.data.list;
            _this.totalList = response.data.total;
            _this.showTotal = true;
        }else{
            _this.$vs.dialog({color: 'danger',title: '警告',text: response.msg,accept: function(){}});
            _this.showTotal = false;
        }
      }).catch((error) => { console.log(error) });
    },
    resetForm(){
      this.luck = '';
      this.loop = 10;
      this.count = 50;
    },
  },
  mounted() {
    this.getLuckList();
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
</style>