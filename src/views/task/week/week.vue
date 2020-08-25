<template>
<div>
  <div class="vx-row">
    <div class="vx-col w-1/1 md:w-1/1 xl:w-1/1">
        <vs-button @click="addNewData" color="primary" type="border" icon-pack="feather" icon="icon-edit-2" style="display:none;">添加挑战任务</vs-button>

        <data-view-sidebar :isSidebarActive="addNewDataSidebar" @closeSidebar="toggleDataSidebar" @updateData="getTaskList" :data="sidebarData" />

        <draggable :move="onMove" @start="isDragging=true" @end="isDragging=false" :list="taskList" :group="{name:'tags',  pull:'clone', put:false }" class="p-2 cursor-move">
          <vs-chip v-for="(item, index) in taskList" :key="index" color="primary"> {{ item.name }} </vs-chip>
        </draggable>
    </div>

  </div>
  <div class="vx-row">
      <div class="vx-col w-1/2 md:w-1/3 xl:w-1/4">
        <vx-card title="周一" collapse-action refresh-content-action @refresh="closeCardAnimationDemo">
            <vs-divider color="primary"> 任务 </vs-divider>
            <draggable :move="onMove" :list="data1_1" :group="{name:'tags',pull:false}" class="p-2 cursor-move">
                <vs-chip @click="remove(data1_1,item)" v-for="(item, index) in data1_1" :key="index" closable> {{ item.name }} </vs-chip>
            </draggable>
            <vs-divider color="success" class="mt-30"> 入门 </vs-divider>
            <draggable :move="onMove" :list="data1_2" :group="{name:'tags',pull:false}" class="p-2 cursor-move">
                <vs-chip @click="remove(data1_2,item)" v-for="(item, index) in data1_2" :key="index" closable> {{ item.name }} </vs-chip>
            </draggable>
            <vs-divider color="warning" class="mt-30"> 普通 </vs-divider>
            <draggable :move="onMove" :list="data1_3" :group="{name:'tags',pull:false}" class="p-2 cursor-move">
                <vs-chip @click="remove(data1_3,item)" v-for="(item, index) in data1_3" :key="index" closable> {{ item.name }} </vs-chip>
            </draggable>
            <vs-divider color="danger" class="mt-30"> 熟练 </vs-divider>
            <draggable :move="onMove" :list="data1_4" :group="{name:'tags',pull:false}" class="p-2 cursor-move">
                <vs-chip @click="remove(data1_4,item)" v-for="(item, index) in data1_4" :key="index" closable> {{ item.name }} </vs-chip>
            </draggable>
        </vx-card>
      </div>
      <div class="vx-col w-1/2 md:w-1/3 xl:w-1/4">
        <vx-card title="周二" collapse-action refresh-content-action @refresh="closeCardAnimationDemo">
            <vs-divider color="primary"> 任务 </vs-divider>
            <draggable :move="onMove" :list="data2_1" :group="{name:'tags',pull:false}" class="p-2 cursor-move">
                <vs-chip @click="remove(data2_1,item)" v-for="(item, index) in data2_1" :key="index" closable> {{ item.name }} </vs-chip>
            </draggable>
            <vs-divider color="success" class="mt-30"> 入门 </vs-divider>
            <draggable :move="onMove" :list="data2_2" :group="{name:'tags',pull:false}" class="p-2 cursor-move">
                <vs-chip @click="remove(data2_2,item)" v-for="(item, index) in data2_2" :key="index" closable> {{ item.name }} </vs-chip>
            </draggable>
            <vs-divider color="warning" class="mt-30"> 普通 </vs-divider>
            <draggable :move="onMove" :list="data2_3" :group="{name:'tags',pull:false}" class="p-2 cursor-move">
                <vs-chip @click="remove(data2_3,item)" v-for="(item, index) in data2_3" :key="index" closable> {{ item.name }} </vs-chip>
            </draggable>
            <vs-divider color="danger" class="mt-30"> 熟练 </vs-divider>
            <draggable :move="onMove" :list="data2_4" :group="{name:'tags',pull:false}" class="p-2 cursor-move">
                <vs-chip @click="remove(data2_4,item)" v-for="(item, index) in data2_4" :key="index" closable> {{ item.name }} </vs-chip>
            </draggable>
        </vx-card>
      </div>
      <div class="vx-col w-1/2 md:w-1/3 xl:w-1/4">
        <vx-card title="周三" collapse-action refresh-content-action @refresh="closeCardAnimationDemo">
            <vs-divider color="primary"> 任务 </vs-divider>
            <draggable :move="onMove" :list="data3_1" :group="{name:'tags',pull:false}" class="p-2 cursor-move">
                <vs-chip @click="remove(data3_1,item)" v-for="(item, index) in data3_1" :key="index" closable> {{ item.name }} </vs-chip>
            </draggable>
            <vs-divider color="success" class="mt-30"> 入门 </vs-divider>
            <draggable :move="onMove" :list="data3_2" :group="{name:'tags',pull:false}" class="p-2 cursor-move">
                <vs-chip @click="remove(data3_2,item)" v-for="(item, index) in data3_2" :key="index" closable> {{ item.name }} </vs-chip>
            </draggable>
            <vs-divider color="warning" class="mt-30"> 普通 </vs-divider>
            <draggable :move="onMove" :list="data3_3" :group="{name:'tags',pull:false}" class="p-2 cursor-move">
                <vs-chip @click="remove(data3_3,item)" v-for="(item, index) in data3_3" :key="index" closable> {{ item.name }} </vs-chip>
            </draggable>
            <vs-divider color="danger" class="mt-30"> 熟练 </vs-divider>
            <draggable :move="onMove" :list="data3_4" :group="{name:'tags',pull:false}" class="p-2 cursor-move">
                <vs-chip @click="remove(data3_4,item)" v-for="(item, index) in data3_4" :key="index" closable> {{ item.name }} </vs-chip>
            </draggable>
        </vx-card>
      </div>
      <div class="vx-col w-1/2 md:w-1/3 xl:w-1/4">
        <vx-card title="周四" collapse-action refresh-content-action @refresh="closeCardAnimationDemo">
            <vs-divider color="primary"> 任务 </vs-divider>
            <draggable :move="onMove" :list="data4_1" :group="{name:'tags',pull:false}" class="p-2 cursor-move">
                <vs-chip @click="remove(data4_1,item)" v-for="(item, index) in data4_1" :key="index" closable> {{ item.name }} </vs-chip>
            </draggable>
            <vs-divider color="success" class="mt-30"> 入门 </vs-divider>
            <draggable :move="onMove" :list="data4_2" :group="{name:'tags',pull:false}" class="p-2 cursor-move">
                <vs-chip @click="remove(data4_2,item)" v-for="(item, index) in data4_2" :key="index" closable> {{ item.name }} </vs-chip>
            </draggable>
            <vs-divider color="warning" class="mt-30"> 普通 </vs-divider>
            <draggable :move="onMove" :list="data4_3" :group="{name:'tags',pull:false}" class="p-2 cursor-move">
                <vs-chip @click="remove(data4_3,item)" v-for="(item, index) in data4_3" :key="index" closable> {{ item.name }} </vs-chip>
            </draggable>
            <vs-divider color="danger" class="mt-30"> 熟练 </vs-divider>
            <draggable :move="onMove" :list="data4_4" :group="{name:'tags',pull:false}" class="p-2 cursor-move">
                <vs-chip @click="remove(data4_4,item)" v-for="(item, index) in data4_4" :key="index" closable> {{ item.name }} </vs-chip>
            </draggable>
        </vx-card>
      </div>
      
  </div>
  <div class="vx-row" style="margin-top: 15px;">
    <div class="vx-col w-1/2 md:w-1/3 xl:w-1/4">
      <vx-card title="周五" collapse-action refresh-content-action @refresh="closeCardAnimationDemo">
          <vs-divider color="primary"> 任务 </vs-divider>
          <draggable :move="onMove" :list="data5_1" :group="{name:'tags',pull:false}" class="p-2 cursor-move">
              <vs-chip @click="remove(data5_1,item)" v-for="(item, index) in data5_1" :key="index" closable> {{ item.name }} </vs-chip>
          </draggable>
          <vs-divider color="success" class="mt-30"> 入门 </vs-divider>
          <draggable :move="onMove" :list="data5_2" :group="{name:'tags',pull:false}" class="p-2 cursor-move">
              <vs-chip @click="remove(data5_2,item)" v-for="(item, index) in data5_2" :key="index" closable> {{ item.name }} </vs-chip>
          </draggable>
          <vs-divider color="warning" class="mt-30"> 普通 </vs-divider>
          <draggable :move="onMove" :list="data5_3" :group="{name:'tags',pull:false}" class="p-2 cursor-move">
              <vs-chip @click="remove(data5_3,item)" v-for="(item, index) in data5_3" :key="index" closable> {{ item.name }} </vs-chip>
          </draggable>
          <vs-divider color="danger" class="mt-30"> 熟练 </vs-divider>
          <draggable :move="onMove" :list="data5_4" :group="{name:'tags',pull:false}" class="p-2 cursor-move">
              <vs-chip @click="remove(data5_4,item)" v-for="(item, index) in data5_4" :key="index" closable> {{ item.name }} </vs-chip>
          </draggable>
      </vx-card>
    </div>
    <div class="vx-col w-1/2 md:w-1/3 xl:w-1/4">
      <vx-card title="周六" collapse-action refresh-content-action @refresh="closeCardAnimationDemo">
          <vs-divider color="primary"> 任务 </vs-divider>
          <draggable :move="onMove" :list="data6_1" :group="{name:'tags',pull:false}" class="p-2 cursor-move">
              <vs-chip @click="remove(data6_1,item)" v-for="(item, index) in data6_1" :key="index" closable> {{ item.name }} </vs-chip>
          </draggable>
          <vs-divider color="success" class="mt-30"> 入门 </vs-divider>
          <draggable :move="onMove" :list="data6_2" :group="{name:'tags',pull:false}" class="p-2 cursor-move">
              <vs-chip @click="remove(data6_2,item)" v-for="(item, index) in data6_2" :key="index" closable> {{ item.name }} </vs-chip>
          </draggable>
          <vs-divider color="warning" class="mt-30"> 普通 </vs-divider>
          <draggable :move="onMove" :list="data6_3" :group="{name:'tags',pull:false}" class="p-2 cursor-move">
              <vs-chip @click="remove(data6_3,item)" v-for="(item, index) in data6_3" :key="index" closable> {{ item.name }} </vs-chip>
          </draggable>
          <vs-divider color="danger" class="mt-30"> 熟练 </vs-divider>
          <draggable :move="onMove" :list="data6_4" :group="{name:'tags',pull:false}" class="p-2 cursor-move">
              <vs-chip @click="remove(data6_4,item)" v-for="(item, index) in data6_4" :key="index" closable> {{ item.name }} </vs-chip>
          </draggable>
      </vx-card>
    </div>
    <div class="vx-col w-1/2 md:w-1/3 xl:w-1/4">
      <vx-card title="周日" collapse-action refresh-content-action @refresh="closeCardAnimationDemo">
          <vs-divider color="primary"> 任务 </vs-divider>
          <draggable :move="onMove" :list="data7_1" :group="{name:'tags',pull:false}" class="p-2 cursor-move">
              <vs-chip @click="remove(data7_1,item)" v-for="(item, index) in data7_1" :key="index" closable> {{ item.name }} </vs-chip>
          </draggable>
          <vs-divider color="success" class="mt-30"> 入门 </vs-divider>
          <draggable :move="onMove" :list="data7_2" :group="{name:'tags',pull:false}" class="p-2 cursor-move">
              <vs-chip @click="remove(data7_2,item)" v-for="(item, index) in data7_2" :key="index" closable> {{ item.name }} </vs-chip>
          </draggable>
          <vs-divider color="warning" class="mt-30"> 普通 </vs-divider>
          <draggable :move="onMove" :list="data7_3" :group="{name:'tags',pull:false}" class="p-2 cursor-move">
              <vs-chip @click="remove(data7_3,item)" v-for="(item, index) in data7_3" :key="index" closable> {{ item.name }} </vs-chip>
          </draggable>
          <vs-divider color="danger" class="mt-30"> 熟练 </vs-divider>
          <draggable :move="onMove" :list="data7_4" :group="{name:'tags',pull:false}" class="p-2 cursor-move">
              <vs-chip @click="remove(data7_4,item)" v-for="(item, index) in data7_4" :key="index" closable> {{ item.name }} </vs-chip>
          </draggable>
      </vx-card>
    </div>
    <div class="vx-col w-1/2 md:w-1/3 xl:w-1/4">
      <vx-card title="每周挑战" collapse-action refresh-content-action @refresh="closeCardAnimationDemo">
          
      </vx-card>
    </div>
  </div>
  <div class="vx-row" style="margin-top: 30px;">
      <vs-button @click="updateAll" color="primary" icon-pack="feather" icon="icon-edit-2" :class="{ 'submit': isSubmit }" style="display:none;margin: 0px 13px;width: 100%;">保存更改</vs-button>
  </div>
</div>
</template>

<script>
import draggable from 'vuedraggable'
import Prism from 'vue-prism-component'
import DataViewSidebar from '../weekSidebar.vue'
import moduleDataList from "@/store/task/moduleWeek.js"
/*
setData: 设置值时的回调函数
onChoose: 选择单元时的回调函数
onStart: 开始拖动时的回调函数
onEnd: 拖动结束时的回调函数
onAdd: 添加单元时的回调函数
onUpdate: 排序发生变化时的回调函数
onRemove: 单元被移动到另一个列表时的回调函数
onFilter: 尝试选择一个被filter过滤的单元的回调函数
onMove: 移动单元时的回调函数
onClone: clone时的回调函数
以上函数对象的属性：
to: 移动到的列表的容器
from：来源列表容器
item: 被移动的单元
clone: 副本的单元
oldIndex：移动前的序号
newIndex：移动后的序号

*/
export default {
  data() {
    return {
      isSubmit: false,
      isDragging: false,
      delayedDragging: false,

      taskList: [],

      data1_1: [],
      data1_2: [],
      data1_3: [],
      data1_4: [],

      data2_1: [],
      data2_2: [],
      data2_3: [],
      data2_4: [],

      data3_1: [],
      data3_2: [],
      data3_3: [],
      data3_4: [],

      data4_1: [],
      data4_2: [],
      data4_3: [],
      data4_4: [],

      data5_1: [],
      data5_2: [],
      data5_3: [],
      data5_4: [],

      data6_1: [],
      data6_2: [],
      data6_3: [],
      data6_4: [],

      data7_1: [],
      data7_2: [],
      data7_3: [],
      data7_4: [],

      addNewDataSidebar: false,
      sidebarData: {},
    }
  },
  components: {
    DataViewSidebar,
    draggable,
    Prism
  },
  mounted(){
    this.getTaskList();
    this.getDataList();
    var _this = this;
    var params = {codes:'week_submit'};
    _this.$https.get("/config/selectMap",params).then((response) => { 
      if(response.code == 1){
          var flag = response.data.week_submit;
          if(flag == '1'){
            _this.isSubmit = true;
          }else{
            _this.isSubmit = false;
          }
      }else{
          _this.$vs.dialog({
              color: 'danger',
              title: '警告',
              text: response.msg,
              accept: function(){

              }
          })
          _this.resetForm2();
      }
    }).catch((error) => { 
      console.log(error) 
    })
  },
  methods:{
    remove(array,item) {
        array.splice(array.indexOf(item), 1)
    },
    // draggedContext: 被拖拽元素的上下文
    // index:拖拽元素的指针
    // element: 拖拽数据本身
    // futureIndex: 拖动后的index
    
    // relatedContext: 拖入区域的上下文
    // index: 目标元素的index
    // element:目标数据本身
    // list: 拖入的列表
    // component:目标组件
    onMove({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.list;
      const draggedElement = draggedContext.element;
      console.log("relatedContext",relatedContext.index)
      console.log("relatedElement",relatedElement);
      console.log("draggedElement",draggedElement);
      let flag = true;
      for(let i=0;i<relatedElement.length;i++){
        if(relatedElement[i].id == draggedElement.id){
          flag = false;
        }
      }
      if(flag){
        //this.insert(1,1,this.data1_1);
      }
      return flag;
    },
    getTaskList(){
      var _this = this;
      var params = {};
      _this.$https.get("/task/challenge/selectList",params).then((response) => { 
        if(response.code == 1){
            _this.taskList = response.data;
        }else{
            _this.$vs.dialog({
                color: 'danger',
                title: '警告',
                text: response.msg,
                accept: function(){

                }
            })
            _this.resetForm2();
        }
      }).catch((error) => { 
          console.log(error) 
      })
    },
    getDataList(){
      var _this = this;
      var params = {};
      _this.$https.get("/task/table/selectGroupList",params).then((response) => { 
        if(response.code == 1){
            var result = response.data;

            _this.data1_1 = result.data1_1;
            _this.data1_2 = result.data1_2;
            _this.data1_3 = result.data1_3;
            _this.data1_4 = result.data1_4;

            _this.data2_1 = result.data2_1;
            _this.data2_2 = result.data2_2;
            _this.data2_3 = result.data2_3;
            _this.data2_4 = result.data2_4;

            _this.data3_1 = result.data3_1;
            _this.data3_2 = result.data3_2;
            _this.data3_3 = result.data3_3;
            _this.data3_4 = result.data3_4;

            _this.data4_1 = result.data4_1;
            _this.data4_2 = result.data4_2;
            _this.data4_3 = result.data4_3;
            _this.data4_4 = result.data4_4;

            _this.data5_1 = result.data5_1;
            _this.data5_2 = result.data5_2;
            _this.data5_3 = result.data5_3;
            _this.data5_4 = result.data5_4;

            _this.data6_1 = result.data6_1;
            _this.data6_2 = result.data6_2;
            _this.data6_3 = result.data6_3;
            _this.data6_4 = result.data6_4;

            _this.data7_1 = result.data7_1;
            _this.data7_2 = result.data7_2;
            _this.data7_3 = result.data7_3;
            _this.data7_4 = result.data7_4;

        }else{
            _this.$vs.dialog({
                color: 'danger',
                title: '警告',
                text: response.msg,
                accept: function(){

                }
            })
            _this.resetForm2();
        }
      }).catch((error) => { 
          console.log(error) 
      })
    },
    addNewData() {
      this.sidebarData = {}
      this.toggleDataSidebar(true)
    },
    toggleDataSidebar(val=false) {
      this.addNewDataSidebar = val
      if(!moduleDataList.isRegistered) {
        this.$store.registerModule('taskWeek', moduleDataList)
        moduleDataList.isRegistered = true
      }
      this.$store.dispatch("taskWeek/fetchItems")
    },
    // 刷新card
    closeCardAnimationDemo(card) {
      card.removeRefreshAnimation(3000);
    },
    insert(week,type,list){
      var _this = this;
      var params = {
        weekName: week,
        type: type,
        taskChallengeMapList: list
      };
      _this.$https.post("/task/table/insertList",params).then((response) => { 
        if(response.code == 1){
            console.log("")
        }else{
            _this.$vs.dialog({
                color: 'danger',
                title: '警告',
                text: response.msg,
                accept: function(){

                }
            })
            _this.resetForm2();
        }
      }).catch((error) => { 
          console.log(error) 
      })
    },
    updateAll(){
      this.insert(1,1,this.data1_1);
      this.insert(1,2,this.data1_2);
      this.insert(1,3,this.data1_3);
      this.insert(1,4,this.data1_4);

      this.insert(2,1,this.data2_1);
      this.insert(2,2,this.data2_2);
      this.insert(2,3,this.data2_3);
      this.insert(2,4,this.data2_4);

      this.insert(3,1,this.data3_1);
      this.insert(3,2,this.data3_2);
      this.insert(3,3,this.data3_3);
      this.insert(3,4,this.data3_4);

      this.insert(4,1,this.data4_1);
      this.insert(4,2,this.data4_2);
      this.insert(4,3,this.data4_3);
      this.insert(4,4,this.data4_4);

      this.insert(5,1,this.data5_1);
      this.insert(5,2,this.data5_2);
      this.insert(5,3,this.data5_3);
      this.insert(5,4,this.data5_4);

      this.insert(6,1,this.data6_1);
      this.insert(6,2,this.data6_2);
      this.insert(6,3,this.data6_3);
      this.insert(6,4,this.data6_4);

      this.insert(7,1,this.data7_1);
      this.insert(7,2,this.data7_2);
      this.insert(7,3,this.data7_3);
      this.insert(7,4,this.data7_4);
    },
    delete(id){
      console.log(id)
    }
  },
  watch: {
    isDragging(newValue) {
      if (newValue) {
        this.delayedDragging = true;
        return;
      }
      this.$nextTick(() => {
        this.delayedDragging = false;
      });
    },
    // data1_1(){
    //   this.insert(1,1,this.data1_1);
    // },
    // data1_2(){
    //   this.insert(1,2,this.data1_2);
    // },
    // data1_3(){
    //   this.insert(1,3,this.data1_3);
    // },
    // data1_4(){
    //   this.insert(1,4,this.data1_4);
    // },
  }
}
</script>

<style scoped>
.vx-card,.vx-card__collapsible-content,.vx-card__body,.vx-card__body .cursor-move{
    height: 100%;
}
.vx-card{
  margin-top: 15px;
}
.mt-30{
  margin-top: 25px!important;
}
.vs-divider {
  margin-bottom: 0!important;
}
.submit{
  display:none;
}
</style>