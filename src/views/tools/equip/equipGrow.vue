
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
                  <div class="vx-row" style="margin: 20px 0 0 0;width: 100%;">
                    <vs-input v-for="(item,index) in materials" :key="index" :label-placeholder="item.name+' 单价'" v-model="item.value" style="margin: 5px;"/>
                  </div>
                </div>
                <div v-for="(item,index) in routes" :key="index" class="vx-row" style="margin: 20px 0 0 0;width: 100%;">
                  <vs-divider color="primary"> 成长路线{{index+1}} </vs-divider>
                  <span v-for="(list,index2) in routes[index].list" :key="index2"> -> {{list.name}}</span>
                  <vxe-table style="width:100%;" class="mytable-footer"
                    border
                    resizable
                    height="300"
                    highlight-hover-row
                    :show-footer="showFooter"
                    :footer-method="footerMethod"
                    :footer-cell-class-name="footerCellClassName3"
                    :data="tableData">
                    <vxe-table-column type="seq" width="60" fixed="left"></vxe-table-column>
                    <vxe-table-column v-for="(item,index) in 10" :key="index" field="name" title="Name" min-width="600" sortable></vxe-table-column>
                    <vxe-table-column field="age" title="Age" min-width="600"></vxe-table-column>
                    <vxe-table-column field="date" title="Date" min-width="600"></vxe-table-column>
                    <vxe-table-column field="rate" title="Rate" width="200" fixed="right"></vxe-table-column>
                  </vxe-table>
                  <!-- <table>
                    <thead>
                      <tr>
                        <th>支付</th>
                        <th>日期</th>
                        <th>金额</th>
                        <th>周期</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-label="支付">支付 #1</td>
                        <td data-label="日期">02/01/2015</td>
                        <td data-label="金额">￥2,311</td>
                        <td data-label="周期">01/01/2015 - 01/31/2015</td>
                      </tr>
                      <tr>
                        <td data-label="支付">支付 #2</td>
                        <td data-label="日期">03/01/2015</td>
                        <td data-label="金额">￥3,211</td>
                        <td data-label="周期">02/01/2015 - 02/28/2015</td>
                      </tr>
                    </tbody>
                  </table> -->
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
      showFooter: true,
      tableData: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, amount: 888, address: 'vxe-table 从入门到放弃' },
        { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, amount: 666, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: '1', age: 32, amount: 89, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: '0', age: 23, amount: 1000, address: 'vxe-table 从入门到放弃' },
        { id: 10005, name: 'Test5', role: 'Develop', sex: '0', age: 30, amount: 999, address: 'Shanghai' },
        { id: 10006, name: 'Test6', role: 'Designer', sex: '0', age: 21, amount: 998, address: 'vxe-table 从入门到放弃' },
        { id: 10007, name: 'Test7', role: 'Test', sex: '1', age: 29, amount: 2000, address: 'vxe-table 从入门到放弃' },
        { id: 10008, name: 'Test8', role: 'Develop', sex: '1 ', age: 35, amount: 999, address: 'vxe-table 从入门到放弃' }
      ]
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
      //console.log("/equip/grow/auction params",params)
      _this.$https.post("/equip/grow/auction",params).then((response) => { 
          if(response.code == 1){
              console.log(response.data)
              let materialsMap = response.data.materials;
              let materials = [];
              for (var obj in materialsMap) {
                materials.push({id: obj,name: materialsMap[obj]})
              }
              _this.materials = materials;
              _this.routes = response.data.routes;
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
    footerCellClassName3 ({ $rowIndex, column }) {
      if (column.type === 'seq') {
        if ($rowIndex === 0) {
          return 'col-blue'
        } else {
          return 'col-red'
        }
      } else if (column.property === 'age') {
        if ($rowIndex === 1) {
          return 'col-red'
        }
      }
    },
    footerMethod ({ columns, data }) {
      const means = []
      const sums = []
      const others = []
      columns.forEach((column, columnIndex) => {
        if (columnIndex === 0) {
          means.push('平均')
          sums.push('和值')
          others.push('其他')
        } else {
          let meanCell = null
          let sumCell = null
          let otherCell = '-'
          switch (column.property) {
            case 'age':
            case 'amount':
              meanCell = parseInt(XEUtils.mean(data, column.property))
              sumCell = XEUtils.sum(data, column.property)
              break
            case 'sex':
              otherCell = '无'
              break
          }
          means.push(meanCell)
          sums.push(sumCell)
          others.push(otherCell)
        }
      })
      // 返回一个二维数组的表尾合计
      return [means, sums, others]
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



table {
    border: 1px solid #ccc;
    width: 100%;
    margin:0;
    padding:0;
    border-collapse: collapse;
    border-spacing: 0;
    margin: 0 auto;
  }

  table tr {
    border: 1px solid #ddd;
    padding: 5px;
  }

  table th, table td {
    padding: 10px;
    text-align: center;
  }

  table th {
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 1px;
  }

  @media screen and (max-width: 600px) {

    table {
      border: 0;
    }

    table thead {
      display: none;
    }

    table tr {
      margin-bottom: 10px;
      display: block;
      border-bottom: 2px solid #ddd;
    }

    table td {
      display: block;
      text-align: right;
      font-size: 13px;
      border-bottom: 1px dotted #ccc;
    }

    table td:last-child {
      border-bottom: 0;
    }

    table td:before {
      content: attr(data-label);
      float: left;
      text-transform: uppercase;
      font-weight: bold;
    }
  }
</style>