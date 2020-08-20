<template>
<div>
  <div class="vx-row">
    <div>
        <h6 class="mt-5 mb-3">Tag Source</h6>
        <draggable :list="list1" :group="{name:'tags',  pull:'clone', put:false }" class="p-2 cursor-move">
        <vs-chip v-for="(listItem, index) in list1" :key="index"> {{ listItem }} </vs-chip>
        </draggable>
    </div>
    <div>
        <h6 class="mt-5 mb-3">Your Tags</h6>
        <draggable :list="list2" :group="{name: 'tags'}" class="p-2 cursor-move">
        <vs-chip v-for="(listItem, index) in list2" :key="index"> {{ listItem }} </vs-chip>
        </draggable>
    </div>
  </div>
  <div class="vx-row">
      <div class="vx-col w-1/2 md:w-1/3 xl:w-1/6">
        <vx-card>
            <h5 class="mb-2">周一</h5>
            <draggable :list="data1" :group="{name:'tags'}" class="p-2 cursor-move">
                <vs-chip v-for="(listItem, index) in data1" :key="index"> {{ listItem }} </vs-chip>
            </draggable>
        </vx-card>
      </div>
      <div class="vx-col w-1/2 md:w-1/3 xl:w-1/6">
        <vx-card>
            <draggable :list="data2" :group="{name:'tags'}" class="p-2 cursor-move">
                <vs-chip v-for="(listItem, index) in data2" :key="index"> {{ listItem }} </vs-chip>
            </draggable>
        </vx-card>
      </div>
      <div class="vx-col w-1/2 md:w-1/3 xl:w-1/6">
        <vx-card>
            <draggable :list="data3" :group="{name:'tags'}" class="p-2 cursor-move">
                <vs-chip v-for="(listItem, index) in data3" :key="index"> {{ listItem }} </vs-chip>
            </draggable>
        </vx-card>
      </div>
      <div class="vx-col w-1/2 md:w-1/3 xl:w-1/6">
        <vx-card>
            <draggable :list="data4" :group="{name:'tags'}" class="p-2 cursor-move">
                <vs-chip v-for="(listItem, index) in data4" :key="index"> {{ listItem }} </vs-chip>
            </draggable>
        </vx-card>
      </div>
      <div class="vx-col w-1/2 md:w-1/3 xl:w-1/6">
        <vx-card>
            <draggable :list="data5" :group="{name:'tags'}" class="p-2 cursor-move">
                <vs-chip v-for="(listItem, index) in data5" :key="index"> {{ listItem }} </vs-chip>
            </draggable>
        </vx-card>
      </div>
      <div class="vx-col w-1/2 md:w-1/3 xl:w-1/6">
        <vx-card>
            <draggable :list="data6" :group="{name:'tags'}" class="p-2 cursor-move">
                <vs-chip v-for="(listItem, index) in data6" :key="index"> {{ listItem }} </vs-chip>
            </draggable>
        </vx-card>
      </div>
      <div class="vx-col w-1/2 md:w-1/3 xl:w-1/6">
        <vx-card>
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
      list1: ["youtube", "google", "facebook", "twitter", "instagram", "pinterest", "tinder", "slack", "discord", "github", "gitlab"],
      list2: ["google", "youtube"],
      data1: ["google"],
      data2: ["google"],
      data3: ["google"],
      data4: ["google"],
      data5: ["google"],
      data6: ["google"],
      data7: ["google"],
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
</style>