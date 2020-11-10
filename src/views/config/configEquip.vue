<template>
  <div>
    <vx-card>
      <vxe-form :data="queryData" @submit="getData">
        <vxe-form-item title="名称" field="name" :title-prefix="{ message: '抽奖名称' }">
          <template v-slot>
            <vxe-input v-model="queryData.name" placeholder="请输入名称"></vxe-input>
          </template>
        </vxe-form-item>
        <vxe-form-item>
          <template v-slot>
            <vxe-button type="submit" status="primary">查询</vxe-button>
            <vxe-button type="reset">重置</vxe-button>
          </template>
        </vxe-form-item>
      </vxe-form>

      <vxe-toolbar>
        <template v-slot:buttons>
          <!-- <vxe-button @click="exportDataEvent">导出数据</vxe-button> -->
          <!-- <vxe-input v-model="filterName" type="search" placeholder="搜索"></vxe-input> -->
          <vxe-button @click="insertItem()"><i class="feather icon-plus"></i>新增</vxe-button>
          <vs-dropdown vs-trigger-click class="ml-auto md:block hidden cursor-pointer" style="float:right;">
            <vs-button radius icon="icon-settings" icon-pack="feather" />
            <vs-dropdown-menu class="w-auto">
              <vs-dropdown-item>
                <div @click="$router.push('/tools/equipGrow').catch(() => {})" class="flex items-center">
                  <feather-icon icon="icon-navigation" class="inline-block mr-2" svgClasses="w-4 h-4" />
                  <span>装备模拟器</span>
                </div>
              </vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>
        </template>
      </vxe-toolbar>
      <vxe-table
        border stripe round resizable auto-resize
        ref="xTable"
        :export-config="{isPrint: false}"
        :show-header="true"
        show-header-overflow
        show-overflow
        show-footer-overflow
        highlight-hover-row 
        highlight-current-row
        highlight-hover-column
        highlight-current-column
        :radio-config="{labelField: 'name', trigger: 'row'}"
        max-height="400"
        height="auto"
        :align="allAlign"
        :seq-config="{startIndex: 0}"
        :scroll-y="{gt: -1}"
        :scroll-x="{gt: -1}"
        :keyboard-config="{isArrow: true}"
        :checkbox-config="{trigger: 'row', highlight: true, range: true}"
        empty-text="没有更多数据了！"
        :data="tableData">
            <vxe-table-column type="seq"  title="序号" width="60"></vxe-table-column>
            <!-- <vxe-table-column type="radio" width="60"></vxe-table-column>
            <vxe-table-column type="checkbox" width="60" style="padding: 0;"></vxe-table-column> -->
            <vxe-table-column field="name" title="名称" :title-help="{message: '抽奖名称'}"></vxe-table-column>
            <!-- <vxe-table-column field="age" title="Age" formatter="formatAmount" sortable></vxe-table-column>
            <vxe-table-column field="sex" title="Sex" formatter="formatSex" :filters="[{value:'0',label:'女'},{value:'1',label:'男'}]"></vxe-table-column>
            <vxe-table-column field="sex2" title="Sex2" :formatter="['formatDate', 'yyyy-MM-dd']" sortable :filters="[{value:'0',label:'女'},{value:'1',label:'男'}]" :filter-multiple="false"></vxe-table-column>
            <vxe-table-column field="address" title="Address" show-overflow></vxe-table-column> -->
            <vxe-table-column title="操作" width="120" show-overflow>
              <template v-slot="{ row }">
                <vx-tooltip text="编辑">
                  <vxe-button type="text" @click="editItem(row)"><i class="feather icon-check-square"></i></vxe-button>
                </vx-tooltip>
                <vx-tooltip text="删除" v-show="false">
                  <vxe-button type="text" v-show="false" @click="removeItem(row)"><i class="feather icon-trash-2"></i></vxe-button>
                </vx-tooltip>
                <vx-tooltip text="设置抽奖项">
                  <vxe-button type="text" @click="settingsItem(row)"><i class="feather icon-settings"></i></vxe-button>
                </vx-tooltip>
                <vx-tooltip text="设置规则">
                  <vxe-button type="text" @click="rules = true"><i class="feather icon-tag"></i></vxe-button>
                </vx-tooltip>
              </template>
            </vxe-table-column>
      </vxe-table>
      <vxe-pager
        background
        :size="size"
        :current-page="tablePage.currentPage"
        :page-size="tablePage.pageSize"
        :total="tablePage.totalResult"
        :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
        @page-change="handlePageChange">
      </vxe-pager>
      <vue-loading v-show="loading" type="spin" color="#20a0ff"></vue-loading>
    </vx-card>

    <vxe-modal v-model="showEdit" :title="selectRow ? '编辑&保存' : '新增&保存'" width="800" min-width="600" min-height="300" :loading="loading" resize destroy-on-close>
      <template v-slot>
        <vxe-form :data="formData" :items="formItems" :rules="formRules" title-align="right" title-width="100" @submit="submitItem"></vxe-form>
      </template>
    </vxe-modal>

    <vxe-modal v-model="settings" title="设置抽奖项" width="800">
      <template v-slot>
        <vs-button @click="addLuckItem()"><i class="feather icon-plus"></i>新增</vs-button>
        <div class="vx-row" style="padding: 5px;margin: 6px 0;background-color: #eee;">
          <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"></div>
          <div class="vx-col w-full md:w-4/12 lg:w-4/12 xl:w-4/12">名称</div>
          <div class="vx-col w-full md:w-3/12 lg:w-3/12 xl:w-3/12">权重</div>
          <div class="vx-col w-full md:w-3/12 lg:w-3/12 xl:w-3/12">备注</div>
          <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12">删除</div>
        </div>
        <SlickList :lockToContainerEdges="true" class="list" lockAxis="y" v-model="items" style="height: 380px;overflow: scroll;border: 0;">
          <SlickItem class="list-item" v-for="(item, index) in items" :index="index" :key="index">
            <div class="vx-row" style="margin: 0;">
              <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"><i class="feather icon-move" style="font-size: 24px;line-height: 36px;cursor: move;"></i></div>
              <div class="vx-col w-full md:w-4/12 lg:w-4/12 xl:w-4/12"><vs-input class="inputx" placeholder="名称" v-model="item.name" style="width: 100%;"/></div>
              <div class="vx-col w-full md:w-3/12 lg:w-3/12 xl:w-3/12"><vs-input class="inputx" placeholder="权重" v-model="item.weight" style="width: 100%;"/></div>
              <div class="vx-col w-full md:w-3/12 lg:w-3/12 xl:w-3/12"><vs-input class="inputx" placeholder="备注" v-model="item.remark" style="width: 100%;"/></div>
              <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"><vs-button type="falt" @click="removeLuckItem(index)" style="border: 0;padding:0;"><i class="feather icon-trash-2" style="font-size: 24px;line-height: 36px;cursor:pointer;color: #333;"></i></vs-button></div>
            </div>
          </SlickItem>
        </SlickList>
        <vxe-form title-align="right" title-width="60">
          <vxe-form-item align="center" span="24">
            <template v-slot>
              <vs-button style="width:100%" @click="submitLuckItem">提交</vs-button>
              <!-- <vxe-button type="reset">重置</vxe-button> -->
            </template>
          </vxe-form-item>
        </vxe-form>
      </template>
    </vxe-modal>

    <vxe-modal v-model="rules" width="600" title="设置抽奖规则" show-footer>
      <template v-slot>
        
      </template>
    </vxe-modal>
    <!-- <vue-loading type="balls" color="#d9544e" :size="{ width: '100px', height: '100px' }"></vue-loading>
    <vue-loading type="bars" color="#d9544e" :size="{ width: '100px', height: '100px' }"></vue-loading>
    <vue-loading type="beat" color="#d9544e" :size="{ width: '100px', height: '100px' }"></vue-loading>
    <vue-loading type="bubbles" color="#d9544e" :size="{ width: '100px', height: '100px' }"></vue-loading>
    <vue-loading type="cylon" color="#d9544e" :size="{ width: '100px', height: '100px' }"></vue-loading>
    <vue-loading type="spiningDubbles" color="#d9544e" :size="{ width: '100px', height: '100px' }"></vue-loading>
    <vue-loading type="barsCylon" color="#d9544e" :size="{ width: '100px', height: '100px' }"></vue-loading> -->
  </div>
</template>

<script>
import { VueLoading } from 'vue-loading-template'
import { SlickList, SlickItem } from 'vue-slicksort'

export default {
  components: {
    VueLoading,
    SlickItem,
    SlickList
  },
  data() {
    return {
      settings: false,
      rules: false,
      loading: false,
      selectRow: null,
      showEdit: false,
      filterName: '',//搜索
      size: "medium",//medium / small / mini
      allAlign: 'left',//left居左,center居中,right居右
      queryData: {
        name: '',
      },
      formData: {
        id: '',
        name: '',
      },
      tableData: [],
      itemData: [],
      tablePage: {
        currentPage: 1,
        pageSize: 10,
        totalResult: 0
      },
      sexList: [
        {label: '女',value: '0'},
        {label: '男',value: '1'}
      ],
      formRules: {
        name: [
          { required: true, message: '请输入名称' },
          { min: 2, max: 30, message: '长度在 2 到 30 个字符' }
        ],
        nickname: [
          { required: true, message: '请输入昵称' }
        ],
        sex: [
          { required: true, message: '请选择性别' }
        ]
      },
      formItems: [
        { field: 'name', title: '名称', span: 12, itemRender: { name: '$input', props: { placeholder: '请输入名称' } } },

        { align: 'center', span: 24, titleAlign: 'left', itemRender: { name: '$buttons', children: [{ props: { type: 'submit', content: '提交', status: 'primary' } }, { props: { type: 'reset', content: '重置' } }] } }
      ],
      items: [
        {name:'',weight:'',remark:''}
      ]
    }
  },
  created () {
    this.getData();
  },
  mounted() {
    
  },
  watch: {
    
  },
  computed: {
    
  },
  methods: {
    addLuckItem(){
      this.items.push({name:'',weight:'',remark:''});
    },
    removeLuckItem(index){
      if(this.items.length <=1){
        this.$XModal.message({ message: '无法继续删除',zIndex:222222 })
        return;
      }
      this.items.splice(index,1);
    },
    submitLuckItem(){
      var _this = this;
      _this.loading = true;
      var params = {
        id: this.formData.id,
        items: JSON.stringify(this.items)
      }
      _this.$https.post("/luck/update",params).then((response) => { 
        console.log("luck update response",response);
        if(response.code == 1){
            _this.settings = false;
            _this.$vs.dialog({color: 'success',title: '成功',text: "更新成功",accept: function(){}});
        }else{
            _this.$vs.dialog({color: 'danger',title: '警告',text: response.msg,accept: function(){}});
        }
        _this.loading = false;
      }).catch((error) => { console.log(error) });
    },
    // 导出
    exportDataEvent () {
      this.$refs.xTable.openExport({
        // 默认勾选源
        original: true
      })
    },
    handlePageChange ({ currentPage, pageSize }) {
      this.tablePage.currentPage = currentPage
      this.tablePage.pageSize = pageSize
      this.getData()
    },
    getData(){
      var _this = this;
      _this.loading = true;
      var queryParams = {
        pageNo: _this.tablePage.currentPage,
        pageSize: _this.tablePage.pageSize,
        name: _this.queryData.name
      }
      _this.$https.get("/luck/selectPage",queryParams).then((response) => { 
        console.log("luck selectPage response",response);
        if(response.code == 1){
          _this.tableData = response.data.data;
          _this.tablePage.totalResult = response.data.totalPage;
          _this.loading = false;
        }else{
            _this.$vs.dialog({color: 'danger',title: '警告',text: response.msg,accept: function(){}});
        }
      }).catch((error) => { console.log(error) });
    },
    insertItem () {
      this.formData = {
        id: '',
        name: '',
      }
      this.selectRow = null
      this.showEdit = true
    },
    editItem (row) {
      this.formData = {
        id: row.id,
        name: row.name,
      }
      this.selectRow = row
      this.showEdit = true
    },
    removeItem (row) {
      this.$XModal.confirm('您确定要删除该数据?').then(type => {
        if (type === 'confirm') {
          this.$refs.xTable.remove(row)
        }
      })
    },
    settingsItem(row){
      this.formData = {
        id: row.id,
      }
      this.settings = true
      this.items = JSON.parse(row.items);
      if(!this.items){
        this.items = []
      }
    },
    submitItem () {
      var _this = this;
      _this.loading = true
      if (_this.selectRow) {
        _this.$https.post("/luck/update", _this.formData).then((response) => { 
          console.log("luck update response",response)
          if(response.code == 1){
            _this.$XModal.message({ message: '保存成功', status: 'success' })
            Object.assign(_this.selectRow, _this.formData)
          }else{
            _this.$vs.dialog({color: 'danger',title: '警告',text: response.msg,accept: function(){}})
          }
          _this.loading = false
          _this.showEdit = false
        }).catch((error) => { console.log(error) })
      } else {
        _this.$https.post("/luck/insert", _this.formData).then((response) => { 
          console.log("luck insert response",response)
          if(response.code == 1){
            _this.$XModal.message({ message: '新增成功', status: 'success' })
            _this.formData.id = response.data;
            _this.$refs.xTable.insert(_this.formData)
          }else{
            _this.$vs.dialog({color: 'danger',title: '警告',text: response.msg,accept: function(){}})
          }
          _this.loading = false
          _this.showEdit = false
        }).catch((error) => { console.log(error) })
      }
    }
  },
}

</script>

<style scoped>
.vxe-modal--wrapper{ z-index: 100001!important;}
.vs-dropdown--item{
  width: 110px;
}
.vue-loading{
  position: absolute;
  left: 50%;
  top: 50%;
}
.con-vs-tooltip{
  display: inline-block;
  padding: 0 4px 0 4px;
}
.list-item{
  z-index: 222222;
  /* border: 1px solid rgb(238, 238, 238); */
  padding: 5px;
  margin: 6px 0;
}
</style>