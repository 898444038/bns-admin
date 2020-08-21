<template>
<div>
  <div class="vx-row">
    <div class="vx-col w-1/2 md:w-1/3 xl:w-1/3">
        <h6 class="mt-5 mb-3">任务池</h6>
        <draggable :move="onMove" @start="isDragging=true" @end="isDragging=false" :list="taskList" :group="{name:'tags',  pull:'clone', put:false }" class="p-2 cursor-move">
          <vs-chip v-for="(item, index) in taskList" :key="index" color="primary"> {{ item.name }} </vs-chip>
        </draggable>
    </div>
  </div>
  <div class="vx-row">
      <div class="vx-col w-1/2 md:w-1/3 xl:w-1/4">
        <vx-card>
            <h5 class="mb-2">周一</h5>
            <vs-divider color="primary"> 任务 </vs-divider>
            <draggable :move="onMove" :list="data1_1" :group="{name:'tags'}" class="p-2 cursor-move">
                <vs-chip @click="remove(data1_1,item)" v-for="(item, index) in data1_1" :key="index" closable> {{ item.name }} </vs-chip>
            </draggable>
            <vs-divider color="success"> 入门 </vs-divider>
            <draggable :move="onMove" :list="data1_2" :group="{name:'tags'}" class="p-2 cursor-move">
                <vs-chip @click="remove(data1_2,item)" v-for="(item, index) in data1_2" :key="index" closable> {{ item.name }} </vs-chip>
            </draggable>
            <vs-divider color="warning"> 普通 </vs-divider>
            <draggable :move="onMove" :list="data1_3" :group="{name:'tags'}" class="p-2 cursor-move">
                <vs-chip @click="remove(data1_3,item)" v-for="(item, index) in data1_3" :key="index" closable> {{ item.name }} </vs-chip>
            </draggable>
            <vs-divider color="danger"> 熟练 </vs-divider>
            <draggable :move="onMove" :list="data1_4" :group="{name:'tags'}" class="p-2 cursor-move">
                <vs-chip @click="remove(data1_4,item)" v-for="(item, index) in data1_4" :key="index" closable> {{ item.name }} </vs-chip>
            </draggable>
        </vx-card>
      </div>
      <div class="vx-col w-1/2 md:w-1/3 xl:w-1/4">
        <vx-card>
            <h5 class="mb-2">周二</h5>
            <draggable :list="data2" :group="{name:'tags'}" class="p-2 cursor-move">
                <vs-chip v-for="(listItem, index) in data2" :key="index"> {{ listItem }} </vs-chip>
            </draggable>
        </vx-card>
      </div>
      <div class="vx-col w-1/2 md:w-1/3 xl:w-1/4">
        <vx-card>
            <h5 class="mb-2">周三</h5>
            <draggable :list="data3" :group="{name:'tags'}" class="p-2 cursor-move">
                <vs-chip v-for="(listItem, index) in data3" :key="index"> {{ listItem }} </vs-chip>
            </draggable>
        </vx-card>
      </div>
      <div class="vx-col w-1/2 md:w-1/3 xl:w-1/4">
        <vx-card>
            <h5 class="mb-2">周四</h5>
            <draggable :list="data4" :group="{name:'tags'}" class="p-2 cursor-move">
                <vs-chip v-for="(listItem, index) in data4" :key="index"> {{ listItem }} </vs-chip>
            </draggable>
        </vx-card>
      </div>
      
  </div>
    <div class="vx-row" style="margin-top: 15px;">
      <div class="vx-col w-1/2 md:w-1/3 xl:w-1/4">
        <vx-card>
            <h5 class="mb-2">周五</h5>
            <draggable :list="data5" :group="{name:'tags'}" class="p-2 cursor-move">
                <vs-chip v-for="(listItem, index) in data5" :key="index"> {{ listItem }} </vs-chip>
            </draggable>
        </vx-card>
      </div>
      <div class="vx-col w-1/2 md:w-1/3 xl:w-1/4">
        <vx-card>
            <h5 class="mb-2">周六</h5>
            <draggable :list="data6" :group="{name:'tags'}" class="p-2 cursor-move">
                <vs-chip v-for="(listItem, index) in data6" :key="index"> {{ listItem }} </vs-chip>
            </draggable>
        </vx-card>
      </div>
      <div class="vx-col w-1/2 md:w-1/3 xl:w-1/4">
        <vx-card>
            <h5 class="mb-2">周日</h5>
            <draggable :list="data7" :group="{name:'tags'}" class="p-2 cursor-move">
                <vs-chip v-for="(listItem, index) in data7" :key="index"> {{ listItem }} </vs-chip>
            </draggable>
        </vx-card>
      </div>
      <div class="vx-col w-1/2 md:w-1/3 xl:w-1/4">
        <vx-card>
            <h5 class="mb-2">每周挑战</h5>
            <draggable :list="data7" :group="{name:'tags'}" class="p-2 cursor-move">
                <vs-chip v-for="(listItem, index) in data7" :key="index"> {{ listItem }} </vs-chip>
            </draggable>
        </vx-card>
      </div>
    </div>
</div>
</template>

<script>
import draggable from 'vuedraggable'
import Prism from 'vue-prism-component'
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
      isDragging: false,
      delayedDragging: false,
      taskList: [
        {id:1,name:"照耀西洛的净化之光"},
        {id:2,name:"平息愤怒"},
        {id:3,name:"雷鸣峡谷"},
        {id:4,name:"暴风之砂神殿"}
      ],
      data1_1: [
        {id:1,name:"照耀西洛的净化之光"},
        {id:2,name:"平息愤怒"},
        {id:3,name:"雷鸣峡谷"},
        {id:4,name:"暴风之砂神殿"}
      ],
      data1_2: [
        {id:5,name:"炼狱熔炉"},
        {id:6,name:"悬浮祭坛"},
      ],
      data1_3: ["遗失的海鸣巢穴","暴风之砂神殿","被诅咒的海盗船","诡面梨园","蟠桃园","南天圣地"],
      data1_4: ["南天收藏库","天命孵化场","扭曲的天目宫","雷鸣峡谷","0号机库","人偶的废宅"],
      data2: ["照耀西洛的净化之光"],
      data3: ["照耀西洛的净化之光"],
      data4: ["照耀西洛的净化之光"],
      data5: ["照耀西洛的净化之光"],
      data6: ["照耀西洛的净化之光"],
      data7: ["照耀西洛的净化之光"],
    }
  },
  components: {
    draggable,
    Prism
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
      console.log("relatedElement",relatedElement);
      console.log("draggedElement",draggedElement);
      let flag = true;
      for(let i=0;i<relatedElement.length;i++){
        if(relatedElement[i].id == draggedElement.id){
          flag = false;
        }
      }
      return flag;
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
    }
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
.vs-chip-primary {
}
.vs-chip-success {
}
.vs-chip-danger {
}
.vs-chip-warning {
}
.vs-chip-info {
}
.vs-chip-dark {

}
</style>