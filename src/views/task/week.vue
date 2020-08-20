<template>
<div>
  <div class="vx-row">
    <div>
        <h6 class="mt-5 mb-3">任务</h6>
        <draggable :list="list1" :group="{name:'tags',  pull:'clone', put:false }" class="p-2 cursor-move">
        <vs-chip v-for="(listItem, index) in list1" :key="index"> {{ listItem }} </vs-chip>
        </draggable>
    </div>
  </div>
  <div class="vx-row">
      <div class="vx-col w-1/2 md:w-1/3 xl:w-1/4">
        <vx-card>
            <h5 class="mb-2">周一</h5>
            <vs-divider color="success"> 任务 </vs-divider>
            <draggable :list="data1_1" :group="{name:'tags'}" class="p-2 cursor-move">
                <vs-chip v-for="(listItem, index) in data1_1" :key="index"> {{ listItem }} </vs-chip>
            </draggable>
            <vs-divider color="success"> 入门 </vs-divider>
            <draggable :list="data1_2" :group="{name:'tags'}" class="p-2 cursor-move">
                <vs-chip v-for="(listItem, index) in data1_2" :key="index"> {{ listItem }} </vs-chip>
            </draggable>
            <vs-divider color="success"> 普通 </vs-divider>
            <draggable :list="data1_3" :group="{name:'tags'}" class="p-2 cursor-move">
                <vs-chip v-for="(listItem, index) in data1_3" :key="index"> {{ listItem }} </vs-chip>
            </draggable>
            <vs-divider color="success"> 熟练 </vs-divider>
            <draggable :list="data1_4" :group="{name:'tags'}" class="p-2 cursor-move">
                <vs-chip v-for="(listItem, index) in data1_4" :key="index"> {{ listItem }} </vs-chip>
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

export default {
  data() {
    return {
      list1: ["照耀西洛的净化之光", "平息愤怒","雷鸣峡谷","暴风之砂神殿"],
      data1_1: ["照耀西洛的净化之光","平息愤怒","雷鸣峡谷","暴风之砂神殿"],
      data1_2: ["炼狱熔炉","悬浮祭坛"],
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
</style>