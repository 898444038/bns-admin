<template>
  <!-- <vx-card>
    <div class="mt-5">
      <vs-tabs alignment="center">
        <vs-tab v-for="(item,index) in typeOptions" :key="index" :label="item.name">
          {{item.name}}
        </vs-tab>
      </vs-tabs>
    </div>
  </vx-card> -->
  <vx-card>
    <div class="mt-5">
      <vs-tabs alignment="center">
        <vs-tab label="路线" icon-pack="feather" icon="icon-home">
            <vs-tabs position="left" v-model="activeTab">
                <vs-tab label="武器">
                  <!-- <vx-timeline :data="timelineData" /> -->
                </vs-tab>
                <vs-tab label="元气石"></vs-tab>
                <vs-tab label="真气石"></vs-tab>
                <vs-tab label="项链"></vs-tab>
                <vs-tab label="耳环"></vs-tab>
                <vs-tab label="戒指"></vs-tab>
                <vs-tab label="手镯"></vs-tab>
                <vs-tab label="腰带"></vs-tab>
                <vs-tab label="手套"></vs-tab>
                <vs-tab label="魂"></vs-tab>
                <vs-tab label="灵"></vs-tab>
                <vs-tab label="守护石"></vs-tab>
                <vs-tab label="星"></vs-tab>
                <vs-tab label="宝石"></vs-tab>
            </vs-tabs>
        </vs-tab>
      </vs-tabs>
    </div>
  </vx-card>
</template>


<script>
import VxTimeline from "@/components/timeline/VxTimeline2"
export default {
  components: {
    VxTimeline
  },
  data() {
    return {
      typeOptions: [],
      activeTab: '',
      timelineData: [],
    }
  },
  created () {
    this.getTypeList();
  },
  mounted () {
    this.activeTab = 0;
    this.getLineData();
  },
  watch: {
    activeTab(value){
      console.log("activeTab",value);
      let options = this.typeOptions;
      for(let i=0;i<options.length;i++){
        if(options[i].code == value){
          console.log("activeTab name",options[i].id+"|"+options[i].name);
        }
      }
    }
  },
  methods:{
    getTab(){
      console.log("activeTab",this.activeTab);
      let options = this.typeOptions;
      for(let i=0;i<options.length;i++){
        if(options[i].code == this.activeTab){
          console.log("activeTab name",options[i].id+"|"+options[i].name);
        }
      }
    },
    getTypeList(){
      var _this = this;
      _this.$https.get("/equip/type/selectList",{}).then((response) => { 
          if(response.code == 1){
              _this.typeOptions = response.data;
              console.log("_this.typeOptions",_this.typeOptions)
          }else{
              _this.$vs.dialog({color: 'danger',title: '警告',text: response.msg,accept: function(){} });
          }
      }).catch((error) => { console.log("error",error) });
    },
    getLineData(){
      let list = [];
      for(let i=0;i<10;i++){
        list.push({
          color: "primary",
          icon: "PlusIcon",
          title: "龙闪"+(i+1),
          desc: "Bonbon macaroon jelly beans gummi bears jelly",
          time: "25 mins Ago"
        })
      }
      this.timelineData = list;
    }
  }
}

</script>
<style>

</style>
