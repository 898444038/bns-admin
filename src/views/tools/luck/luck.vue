
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
    <vs-tabs alignment="center">
      <vs-tab label="抽奖模拟" icon-pack="feather" icon="icon-home">
        <!-- <vx-card> -->
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

            <div class="vx-row"  style="margin: 15px 0px 0px;width:100%">
              <vs-divider color="primary"> 统计 </vs-divider>
              <div class="vx-row" style="margin: 0;width: 100%;">
                <div class="vx-col w-full mb-base">
                  <vs-table :data="totalList">
                    <template slot="thead">
                      <vs-th style="min-width: 60px;">名称</vs-th>
                      <vs-th style="min-width: 80px;">权重</vs-th>
                      <vs-th style="min-width: 80px;">中奖数量</vs-th>
                      <vs-th>中奖位置</vs-th>
                    </template>
                    <template slot-scope="{data}">
                      <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                        <vs-td :data="data[indextr].name"> {{ data[indextr].name }} </vs-td>
                        <vs-td :data="data[indextr].weight"> {{ data[indextr].weight }} </vs-td>
                        <vs-td :data="data[indextr].count"> {{ data[indextr].count }} </vs-td>
                        <vs-td class="word-td" :data="data[indextr].index"> {{ data[indextr].index }} </vs-td>
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
                      <vs-th style="min-width: 60px;">名称</vs-th>
                      <vs-th style="min-width: 80px;">权重</vs-th>
                      <vs-th style="min-width: 80px;">中奖数量</vs-th>
                      <vs-th>中奖位置</vs-th>
                    </template>
                    <template slot-scope="{data}">
                      <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                        <vs-td :data="data[indextr].name"> {{ data[indextr].name }} </vs-td>
                        <vs-td :data="data[indextr].weight"> {{ data[indextr].weight }} </vs-td>
                        <vs-td :data="data[indextr].count"> {{ data[indextr].count }} </vs-td>
                        <vs-td class="word-td" :data="data[indextr].index"> {{ data[indextr].index }} </vs-td>
                      </vs-tr>
                    </template>
                  </vs-table>
                </div>
              </div>
            </div>
          </div>

        <!-- </vx-card> -->
      </vs-tab>
      <!-- Treasure hunt -->
      <vs-tab label="寻宝" icon-pack="feather" icon="icon-home">
        <div class="vx-row">
          <div class="vx-col w-4/12 md:w-4/12 xl:w-4/12">
            <div v-for="(item,index) in huntGroups" :key="index" class="flex">
                <div v-for="(item2,index2) in item" :key="index2" class="flex-1 bg-grid-color h-12 flex">
                  <span class="sm:flex hidden m-auto" v-if="item2.isShow">{{item2.value}}</span>
                </div>
            </div>
          </div>
          <div class="vx-col w-8/12 md:w-8/12 xl:w-8/12">
            <div class="vx-row">
              <div v-for="(item,index) in huntList1" :key="index" class="vx-col w-1/4 md:w-1/4 xl:w-1/4" style="padding: 0px 8px;">
                <statistics-card-line
                    hideChart hideIcon
                    class="mb-4 hunt"
                    :statistic="item.value"
                    :statisticTitle="item.name" />
              </div>
            </div>
            <div class="vx-row">
              <div v-for="(item,index) in huntList2" :key="index" class="vx-col w-1/4 md:w-1/4 xl:w-1/4" style="padding: 0px 8px;">
                <statistics-card-line
                    hideChart hideIcon
                    class="mb-4 hunt"
                    :statistic="item.value"
                    :statisticTitle="item.name" />
              </div>
            </div>
            <div class="vx-row">
              <div v-for="(item,index) in huntList3" :key="index" class="vx-col w-1/6 md:w-1/6 xl:w-1/6" style="padding: 0px 8px;">
                <statistics-card-line
                    hideChart hideIcon
                    class="mb-4 hunt"
                    :statistic="item.value"
                    :statisticTitle="item.name" />
              </div>
            </div>
            <div class="vx-row">
              <span style="display: block;margin-left: 10px;margin-bottom: 8px;">已使用 {{huntKey}} 把寻宝钥匙</span>
            </div>
            <div class="vx-row">
              <vs-button @click="refreshStatisticsHunt" class="operate-btn" type="relief">重新统计</vs-button>
              <vs-button @click="refreshHunt" class="operate-btn" type="relief">刷新奖池</vs-button>
              <vs-button @click="getSeriesHunt" class="operate-btn" type="relief" color="success">十连抽</vs-button>
              <vs-button @click="getSingleHunt" class="operate-btn" type="relief" color="success">单抽</vs-button>
            </div>
          </div>
        </div>
        
      </vs-tab>
      <vs-tab label="大转盘" icon-pack="feather" icon="icon-home">
        <LuckyWheel
          style="width: 310px; height: 310px"
          ref="LuckyWheel"
          :prizes="prizesWheel"
          :default-style="defaultStyleWheel"
          :blocks="blocksWheel"
          :buttons="buttonsWheel"
          @start="startCallBackWheel"
          @end="endCallBackWheel"
        />
      </vs-tab>
      <vs-tab label="九宫格" icon-pack="feather" icon="icon-home">
        <LuckyGrid
          style="width: 310px; height: 310px"
          ref="LuckDraw"
          :prizes="prizes"
          :button="btnConfig"
          :blocks="blocks"
          :default-style="defaultStyle"
          :active-style="activeStyle"
          @start="startCallBack"
          @end="endCallBack"
        />
      </vs-tab>
    </vs-tabs>
    </vx-card>
  </div>
</template>

<script>
import Vue from 'vue'
//https://github.com/LuckDraw/vue-luck-draw
import LuckDraw from 'vue-luck-draw'
Vue.use(LuckDraw)

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
      //大转盘
      prizesWheel: [],
      defaultStyleWheel: {
        fontColor: '#d64737',
        fontSize: '14px',
        speed:30
      },
      blocksWheel: [
        { padding: '13px', background: '#d64737' }
      ],
      buttonsWheel: [
        { radius: '50px', background: '#d64737' },
        { radius: '45px', background: '#fff' },
        { radius: '41px', background: '#f6c66f', pointer: true },
        {
          radius: '35px', background: '#ffdea0',
          imgs: [{ src: require('@/assets/images/luck/button.png'), width: '65%', top: '-50%' }]
        }
      ],
      //九宫格
      luckyNum: 0,
      prizes: [],
      blocks: [
        { padding: '15px', background: '#ffc27a', borderRadius: 28 },
        { padding: '4px', background: '#ff4a4c', borderRadius: 23 },
        { padding: '4px', background: '#ff625b', borderRadius: 20 },
      ],
      defaultStyle: {
        gutter: 5,
        borderRadius: 15,
        fontColor: '#DF424B',
        fontSize: '14px',
        textAlign: 'center',
        background: '#fff',
        shadow: '0 5 1 #ebf1f4'
      },
      activeStyle: {
        background: 'linear-gradient(270deg, #FFDCB8, #FDC689)',
        shadow: ''
      },
      huntList1:[
        {name:'1等',rate:1,value:0},
        {name:'2等',rate:1,value:0},
        {name:'3等',rate:1,value:0},
        {name:'4等',rate:1,value:0},
      ],
      huntList2:[
        {name:'特别奖励',rate:1,value:0},
        {name:'5~7等',rate:3,value:0},
        {name:'8~10等',rate:3,value:0},
        {name:'幸运奖励',rate:10,value:0},
      ],
      huntList3:[
        {name:'11~15等',rate:5,value:0},
        {name:'16~25等',rate:10,value:0},
        {name:'26~40等',rate:15,value:0},
        {name:'41~60等',rate:20,value:0},
        {name:'61~80等',rate:20,value:0},
        {name:'81~100等',rate:20,value:0},
      ],
      huntGroups: [],
      cuurHunts:[],//显示数字
      cuurHunts2:[],//真实数字
      totalHunts:[],
      huntKey:0,//已用寻宝钥匙数量
    }
  },
  watch: {
    
  },
  computed: {
    //九宫格
    btnConfig () {
      return {
        x: 1,
        y: 1,
        background: 'linear-gradient(270deg, #FFDCB8, #FDC689)',
        shadow: '0 5 1 #e89b4f',
        fonts: [
          { text: this.luckyNum+'次', fontColor: '#fff', top: '73%', fontSize: '11px' },
        ],
        imgs: [
          { src: require('@/assets/images/luck/button.png'), width: '65%', top: '13%' },
          { src: require('@/assets/images/luck/btn.png'), width: '50%', top: '73%' }
        ]
      }
    }
  },
  methods: {
    refreshStatisticsHunt(){
      this.huntKey = 0;
      this.refreshHuntList();
      this.refreshHunt();
    },
    //刷新
    refreshHunt(){
      this.cuurHunts = [];
      this.huntUpdate();
    },
    refreshHuntList(){
      this.huntList1 = [
        {name:'1等',rate:1,value:0},
        {name:'2等',rate:1,value:0},
        {name:'3等',rate:1,value:0},
        {name:'4等',rate:1,value:0},
      ],
      this.huntList2 = [
        {name:'特别奖励',rate:1,value:0},
        {name:'5~7等',rate:3,value:0},
        {name:'8~10等',rate:3,value:0},
        {name:'幸运奖励',rate:10,value:0},
      ],
      this.huntList3 = [
        {name:'11~15等',rate:5,value:0},
        {name:'16~25等',rate:10,value:0},
        {name:'26~40等',rate:15,value:0},
        {name:'41~60等',rate:20,value:0},
        {name:'61~80等',rate:20,value:0},
        {name:'81~100等',rate:20,value:0},
      ]
    },
    //十连抽
    getSeriesHunt(){
      for(let i=0;i<10;i++){
        this.getSingleHunt();
      }
    },
    //单次抽取
    getSingleHunt(){
      let hunts = this.cuurHunts;
      if(hunts.length == 10){
        this.cuurHunts = [];
        hunts = [];
        this.huntUpdate();
      }

      let groups = this.huntGroups;
      let n = this.randomNumber(1, 101,hunts);
      
      if(hunts.length < 10){
        let value = '';
        aaa:for(let i=0;i<groups.length;i++){
          for(let j=0;j<groups[i].length;j++){
            if(groups[i][j].id == n){
              groups[i][j].isShow = true;
              value = groups[i][j].value2;
              break aaa;
            }
          }
        }
        this.cuurHunts.push(n);
        this.huntKey++;
        if(value==1){
          this.huntList1[0].value++;
        }else if(value==2){
          this.huntList1[1].value++;
        }else if(value==3){
          this.huntList1[2].value++;
        }else if(value==4){
          this.huntList1[3].value++;
        }else if(value>=5 && value <=7){
          this.huntList2[1].value++;
        }else if(value>=8 && value <=10){
          this.huntList2[2].value++;
        }else if(value>=11 && value <=15){
          this.huntList3[0].value++;
        }else if(value>=16 && value <=25){
          this.huntList3[1].value++;
        }else if(value>=26 && value <=40){
          this.huntList3[2].value++;
        }else if(value>=41 && value <=60){
          this.huntList3[3].value++;
        }else if(value>=61 && value <=80){
          this.huntList3[4].value++;
        }else if(value>=81 && value <=100){
          this.huntList3[5].value++;
        }
      }
      console.log(hunts.length,this.cuurHunts)
    },
    //生成不重复随机数
    randomNumber(min,max,arr){
      let i = Math.floor(Math.random() * (max - min)) + min;
      for(let x=0;x<arr.length;x++){
        if(arr[x] == i){
          return this.randomNumber(min,max,arr);
        }
      }
      return i;
    },
    //刷新数字算法
    huntUpdate(){
      let numbers = [];
      let numbers2 = [];
      for(let i=1;i<=100;i++){
        numbers.push(i);
        numbers2.push(i);
      }
      numbers = this.shuffle(numbers);
      numbers2 = this.shuffle(numbers2);
      let result = [];
      let splitNumber = 10;
      let id = 0;
      for(let j=0;j<numbers.length;j+=splitNumber){
        let splitList = numbers.slice(j,j+splitNumber);
        let splitList2 = numbers2.slice(j,j+splitNumber);
        let list = [];
        for(let k=0;k<splitList.length;k++){
          id++;
          list.push({
            id:id,
            isShow:false,
            value:splitList[k],
            value2:splitList2[k]
          });
        }
        result.push(list);
      }
      this.huntGroups = result;
      console.log(this.huntGroups)
    },
    //打乱顺序
    shuffle(arr) {
      let i = arr.length;
      let j = 0;
      while (i) {
        j = Math.floor(Math.random() * i--);
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    },
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
      this.dataList = [];
      this.totalList = [];
    },
    //大转盘
    getPrizesListWheel () {
      this.prizesWheel = []
      let data = ['1元红包', '100元红包', '0.5元红包', '2元红包', '10元红包', '50元红包', '0.3元红包', '5元红包']
      data.forEach((item, index) => {
        this.prizesWheel.push({
          title: item,
          background: index % 2 ? '#f9e3bb' : '#f8d384',
          fonts: [{ text: item, top: '10%' }],
          imgs:[{ src: require('@/assets/images/luck/'+index+'.png'), width: '30%', top: '35%' }],
        })
      })
    },
    startCallBackWheel () {
      this.$refs.LuckyWheel.play()
      setTimeout(() => {
        // this.$refs.LuckyWheel.stop(Math.random() * 8 >> 0)
        this.$refs.LuckyWheel.stop(1)
      }, 1000)
    },
    endCallBackWheel (prize) {
      alert('恭喜你获得'+prize.title)
    },
    //九宫格
    getPrizeList () {
      // 模拟接口请求奖品列表
      setTimeout(() => {
        const data = [
          { name: '1元红包', img: require('@/assets/images/luck/0.png') },
          { name: '100元红包', img: require('@/assets/images/luck/1.png') },
          { name: '0.5元红包', img: require('@/assets/images/luck/2.png') },
          { name: '2元红包', img: require('@/assets/images/luck/3.png') },
          { name: '10元红包', img: require('@/assets/images/luck/4.png') },
          { name: '50元红包', img: require('@/assets/images/luck/5.png') },
          { name: '0.3元红包', img: require('@/assets/images/luck/6.png') },
          { name: '5元红包', img: require('@/assets/images/luck/7.png') }
        ]
        this.prizes = []
        this.luckyNum = 1
        let axis = [[0, 0], [1, 0], [2, 0], [2, 1], [2, 2], [1, 2], [0, 2], [0, 1]]
        for (let i = 0; i < 8; i++) {
          let item = data[i]
          this.prizes.push({
            index: i, x: axis[i][0], y: axis[i][1],
            fonts: [{ text: item.name, top: '72%' }],
            imgs: [{ src: item.img, width: '55%', top: '10%' }]
          })
        }
      }, 0)
    },
    startCallBack () {
      if (!this.luckyNum) return this.$message.error('还剩0次抽奖机会')
      this.$refs.LuckDraw.play()
      setTimeout(() => {
        this.$refs.LuckDraw.stop(Math.random() * 7 >> 0)
      }, 2000)
    },
    endCallBack (prize) {
      alert('恭喜你获得大奖: '+prize.fonts[0].text)
      this.luckyNum--
    }
  },
  mounted() {
    this.huntUpdate();//寻宝
    this.getLuckList();
    this.getPrizesListWheel();//大转盘
    this.getPrizeList();//九宫格
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
.word-td{Word-break: break-all;}
.vs-tabs--content{margin-top: 10px;}
.operate-btn{margin-left: 8px!important;}

.flex-1{border: 1px solid #ccc;margin: 1px;}
</style>