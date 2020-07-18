<template>
    <div class="vx-row">
		<div class="vx-col w-full mb-base">
			<vx-card style='margin: 0;'>
				<div class="vx-row mb-6">
                    <vs-tabs alignment="center">
                        <vs-tab label="组队竞拍" icon-pack="feather" icon="icon-home">
                            <div class="vx-row mb-6">
                                <div class="vx-col">
                                    <div class="centerx centery">
                                        <vs-input-number :min="min" :max="max" :size="size" :step="step" label="人数:" v-model="count"/>
                                    </div>
                                </div>
                                <div class="vx-col">
                                    <div class="centerx" style="margin-top: 17px;min-width: 160px;">
                                        <v-select  label="name" placeholder='请选择(非必选)' v-model='material' :options="materials" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
                                    </div>
                                </div>
                                <div class="vx-col">
                                    <div class="centerx">
                                        <vs-input label-placeholder="材料单价(金)" v-model="price" class="is-label-placeholder" />
                                    </div>
                                </div>

                                <div class="vx-col" v-show="fyfShow">
                                    <div class="centerx centery">
                                        <vs-input-number min="0" max="48" :size="size" :step="step" label="封印符数量:" v-model="fyfCount"/>
                                    </div>
                                </div>
                                <div class="vx-col" v-show="fyfShow">
                                    <div class="centerx">
                                        <vs-input label-placeholder="封印符单价(金)" v-model="fyfPrice" class="is-label-placeholder" />
                                    </div>
                                </div>
                                
                                <div class="vx-col">
                                    <div class="centerx">
                                        <vs-button class="mr-3 mb-2 centery-1" @click="auction">计算</vs-button>
                                        <vs-button color="warning" type="border" class="mb-2" @click="resetForm">重置</vs-button>
                                    </div>
                                </div>
                            </div>
                            <vs-divider color="success"> 最低竞拍价 </vs-divider>
                            <div class="vx-row">
                                <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
                                    <statistics-card-line
                                    hideChart
                                    class="mb-base"
                                    icon="CpuIcon"
                                    icon-right
                                    :statistic="auctionData.min.auction"
                                    statisticTitle="竞拍价" />
                                </div>

                                <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
                                    <statistics-card-line
                                    hideChart
                                    class="mb-base"
                                    icon="ServerIcon"
                                    icon-right
                                    :statistic="auctionData.min.mine"
                                    statisticTitle="我的收益"
                                    color="success" />
                                </div>

                                <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
                                    <statistics-card-line
                                    hideChart
                                    class="mb-base"
                                    icon="ActivityIcon"
                                    icon-right
                                    :statistic="auctionData.min.other"
                                    statisticTitle="队友收益"
                                    color="danger" />
                                </div>
                            </div>
                            <vs-divider color="warning"> 平分竞拍价 </vs-divider>
                            <div class="vx-row">
                                <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
                                    <statistics-card-line
                                    hideChart
                                    class="mb-base"
                                    icon="CpuIcon"
                                    icon-right
                                    :statistic="auctionData.mid.auction"
                                    statisticTitle="竞拍价" />
                                </div>

                                <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
                                    <statistics-card-line
                                    hideChart
                                    class="mb-base"
                                    icon="ServerIcon"
                                    icon-right
                                    :statistic="auctionData.mid.mine"
                                    statisticTitle="我的收益"
                                    color="success" />
                                </div>

                                <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
                                    <statistics-card-line
                                    hideChart
                                    class="mb-base"
                                    icon="ActivityIcon"
                                    icon-right
                                    :statistic="auctionData.mid.other"
                                    statisticTitle="队友收益"
                                    color="danger" />
                                </div>
                            </div>
                            <vs-divider color="danger"> 最高竞拍价 </vs-divider>
                            <div class="vx-row">
                                <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
                                    <statistics-card-line
                                    hideChart
                                    class="mb-base"
                                    icon="CpuIcon"
                                    icon-right
                                    :statistic="auctionData.max.auction"
                                    statisticTitle="竞拍价" />
                                </div>

                                <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
                                    <statistics-card-line
                                    hideChart
                                    class="mb-base"
                                    icon="ServerIcon"
                                    icon-right
                                    :statistic="auctionData.max.mine"
                                    statisticTitle="我的收益"
                                    color="success" />
                                </div>

                                <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
                                    <statistics-card-line
                                    hideChart
                                    class="mb-base"
                                    icon="ActivityIcon"
                                    icon-right
                                    :statistic="auctionData.max.other"
                                    statisticTitle="队友收益"
                                    color="danger" />
                                </div>
                            </div>
                        </vs-tab>
                        <vs-tab label="逃税计算" icon-pack="feather" icon="icon-box">
                            <div class="vx-row mb-6">
                                <div class="vx-col">
                                    <div class="centerx centery">
                                        <vs-input-number :min="min2" :max="max2" :size="size" :step="step" label="数量:" v-model="count2"/>
                                    </div>
                                </div>
                                <div class="vx-col">
                                    <div class="centerx" style="margin-top: 17px;min-width: 160px;">
                                        <v-select  label="name" placeholder='请选择(非必选)' v-model='material2' :options="materials" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
                                    </div>
                                </div>
                                <div class="vx-col">
                                    <div class="centerx">
                                        <vs-input label-placeholder="材料单价(金)" v-model="price2" class="is-label-placeholder" />
                                    </div>
                                </div>

                                <div class="vx-col" v-show="fyfShow2">
                                    <div class="centerx centery">
                                        <vs-input-number min="0" max="48" :size="size" :step="step" label="封印符数量:" v-model="fyfCount2"/>
                                    </div>
                                </div>
                                <div class="vx-col" v-show="fyfShow2">
                                    <div class="centerx">
                                        <vs-input label-placeholder="封印符单价(金)" v-model="fyfPrice2" class="is-label-placeholder" />
                                    </div>
                                </div>

                                <div class="vx-col">
                                    <div class="centerx">
                                        <vs-button class="mr-3 mb-2 centery-1" @click="auction2">计算</vs-button>
                                        <vs-button color="warning" type="border" class="mb-2" @click="resetForm2">重置</vs-button>
                                    </div>
                                </div>
                            </div>
                            <div class="vx-row">
                                <div v-if="!fyfShow2" class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                                    <statistics-card-line :statistic="taxEvasion.tsdj" statisticTitle="单个收益" hideChart class="mb-base" icon="CpuIcon" icon-right />
                                </div>

                                <div v-if="!fyfShow2" class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                                    <statistics-card-line :statistic="taxEvasion.tszj" statisticTitle="总收益" hideChart class="mb-base" icon="ServerIcon" icon-right color="success" />
                                </div>

                                <div v-if="fyfShow2" class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                                    <statistics-card-line :statistic="taxEvasion.qftsdj" statisticTitle="去符单个收益" hideChart class="mb-base" icon="CpuIcon" icon-right />
                                </div>

                                <div v-if="fyfShow2" class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                                    <statistics-card-line :statistic="taxEvasion.qftszj" statisticTitle="去符总收益" hideChart class="mb-base" icon="ServerIcon" icon-right color="success" />
                                </div>

                                <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                                    <statistics-card-line :statistic="taxEvasion.dsj" statisticTitle="单个亏损" hideChart class="mb-base" icon="ActivityIcon" icon-right color="danger" />
                                </div>

                                <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                                    <statistics-card-line :statistic="taxEvasion.zsj" statisticTitle="总亏损" hideChart class="mb-base" icon="AlertOctagonIcon" icon-right color="warning" />
                                </div>
                            </div>
                        </vs-tab>

                        <vs-tab label="团本收益计算" icon-pack="feather" icon="icon-box" style="display:none">
                            <div class="vx-row mb-6">
                                <div class="vx-col">
                                    <div class="centerx centery">
                                        <vs-input-number :min="min2" :max="max2" :size="size" :step="step" label="数量:" v-model="count2"/>
                                    </div>
                                </div>
                                <div class="vx-col">
                                    <div class="centerx" style="margin-top: 17px;min-width: 160px;">
                                        <v-select  label="name" placeholder='请选择(非必选)' v-model='material2' :options="materials" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
                                    </div>
                                </div>
                                <div class="vx-col">
                                    <div class="centerx">
                                        <vs-input label-placeholder="材料单价(金)" v-model="price2" class="is-label-placeholder" />
                                    </div>
                                </div>
                                <div class="vx-col">
                                    <div class="centerx" style="margin-top: 17px;">
                                        <vs-button radius color="primary" type="border" icon-pack="feather" icon="icon-plus"></vs-button>
                                    </div>
                                </div>
                            </div>
                            <div class="vx-row mb-6">
                                <div class="vx-col">
                                    <div class="centerx centery">
                                        <vs-input-number :min="min2" :max="max2" :size="size" :step="step" label="数量:" v-model="count"/>
                                    </div>
                                </div>
                                <div class="vx-col">
                                    <div class="centerx" style="margin-top: 17px;min-width: 160px;">
                                        <v-select  label="name" placeholder='请选择(非必选)' v-model='material' :options="materials" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
                                    </div>
                                </div>
                                <div class="vx-col">
                                    <div class="centerx">
                                        <vs-input label-placeholder="材料单价(金)" v-model="price" class="is-label-placeholder" />
                                    </div>
                                </div>
                                <div class="vx-col">
                                    <div class="centerx" style="margin-top: 17px;">
                                        <!-- <vs-button radius color="primary" type="border" icon-pack="feather" icon="icon-plus" style="float: left;margin-right: 10px;"></vs-button> -->
                                        <vs-button radius color="primary" type="border" icon-pack="feather" icon="icon-minus"></vs-button>
                                    </div>
                                </div>
                            </div>
                            <div class="vx-row mb-6">
                                <div class="vx-col">
                                    <div class="centerx centery">
                                        <vs-input-number :min="min" :max="max" :size="size" :step="step" label="人数:" v-model="count"/>
                                    </div>
                                </div>
                                <div class="vx-col">
                                    <div class="centerx">
                                        <vs-input label-placeholder="其他收益(金)" v-model="price" class="is-label-placeholder" />
                                    </div>
                                </div>
                                <div class="vx-col">
                                    <div class="centerx">
                                        <vs-button class="mr-3 mb-2 centery-1" @click="auction2">计算</vs-button>
                                        <vs-button color="warning" type="border" class="mb-2" @click="resetForm2">重置</vs-button>
                                    </div>
                                </div>
                            </div>
                            <div class="vx-row">
                                <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                                    <statistics-card-line
                                    hideChart
                                    class="mb-base"
                                    icon="CpuIcon"
                                    icon-right
                                    :statistic="taxEvasion.tsdj"
                                    statisticTitle="单个收益" />
                                </div>

                                <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                                    <statistics-card-line
                                    hideChart
                                    class="mb-base"
                                    icon="ServerIcon"
                                    icon-right
                                    :statistic="taxEvasion.tszj"
                                    statisticTitle="总收益"
                                    color="success" />
                                </div>

                                <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                                    <statistics-card-line
                                    hideChart
                                    class="mb-base"
                                    icon="ActivityIcon"
                                    icon-right
                                    :statistic="taxEvasion.dsj"
                                    statisticTitle="单个亏损"
                                    color="danger" />
                                </div>

                                <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                                    <statistics-card-line
                                    hideChart
                                    class="mb-base"
                                    icon="AlertOctagonIcon"
                                    icon-right
                                    :statistic="taxEvasion.zsj"
                                    statisticTitle="总亏损"
                                    color="warning" />
                                </div>
                            </div>
                        </vs-tab>
                    </vs-tabs>
					
				</div>
                <!-- <vs-divider position="center">Tips</vs-divider> -->
			</vx-card>
			<!-- </vx-card> -->
            <div class="vx-row" style="margin-top: 20px;">
                <div class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base">
                    <vx-card>
                        单笔交易税
                        <br><br>
                        <vs-table :data="dbDatas">
                            <template slot="thead">
                                <vs-th>起始金额</vs-th>
                                <vs-th>截止金额</vs-th>
                                <vs-th>扣税</vs-th>
                            </template>
                            <template slot-scope="{data}">
                                <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                                    <vs-td :data="data[indextr].startPrice">
                                    {{ data[indextr].startPrice }}
                                    </vs-td>
                                    <vs-td :data="data[indextr].endPrice">
                                    {{ data[indextr].endPrice }}
                                    </vs-td>
                                    <vs-td :data="data[indextr].tax">
                                    {{ data[indextr].tax }}
                                    </vs-td>
                                </vs-tr>
                            </template>
                        </vs-table>
                    </vx-card>
                </div>
                <div class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base">
                    <vx-card>
                        日累计交易税
                        <br><br>
                        <vs-table :data="rljDatas">
                            <template slot="thead">
                                <vs-th>起始金额</vs-th>
                                <vs-th>截止金额</vs-th>
                                <vs-th>扣税</vs-th>
                            </template>
                            <template slot-scope="{data}">
                                <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                                    <vs-td :data="data[indextr].startPrice">
                                    {{ data[indextr].startPrice }}
                                    </vs-td>
                                    <vs-td :data="data[indextr].endPrice">
                                    {{ data[indextr].endPrice }}
                                    </vs-td>
                                    <vs-td :data="data[indextr].tax">
                                    {{ data[indextr].tax }}
                                    </vs-td>
                                </vs-tr>
                            </template>
                        </vs-table>
                    </vx-card>
                </div>
                <div class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base">
                    <vx-card>
                        拍卖行上架手续费
                        <br><br>
                        <vs-table :data="sjDatas">
                            <template slot="thead">
                                <vs-th>起始数量</vs-th>
                                <vs-th>截止数量</vs-th>
                                <vs-th>扣税</vs-th>
                            </template>
                            <template slot-scope="{data}">
                                <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                                    <vs-td :data="data[indextr].startCount">
                                    {{ data[indextr].startCount }}
                                    </vs-td>
                                    <vs-td :data="data[indextr].endCount">
                                    {{ data[indextr].endCount }}
                                    </vs-td>
                                    <vs-td :data="data[indextr].tax">
                                    {{ data[indextr].tax }}
                                    </vs-td>
                                </vs-tr>
                            </template>
                        </vs-table>
                    </vx-card>
                </div>
            </div>
		</div>
    </div>


<!-- <div id="form-element-number-input-demo">
    <vx-card>
        <div class="centerx">
            <vs-input-number min="13" max="21" v-model="number1"/>
        </div>
    </vx-card>
</div> -->
</template>

<script>
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
import vSelect from 'vue-select'
export default {
  components: {
    'v-select': vSelect,
    StatisticsCardLine
  },
  data(){
    return {
      min: 2,
      max: 6,
      count: 6,
      price: '',
      step: 1,
      size: '',//medium,small,mini
      material:'',
      fyfCount:0,
      fyfPrice:0,
      fyfShow:false,
      
      min2: 1,
      max2: 9999,
      count2: 1,
      price2: '',
      material2:'',
      fyfCount2:0,
      fyfPrice2:0,
      fyfShow2:false,

      dbDatas: [
        {"id": 1, "startPrice": "0", "endPrice": "99金99银99铜", "tax": "5%"},
        {"id": 2, "startPrice": "100", "endPrice": "999金99银99铜", "tax": "6%"},
        {"id": 3, "startPrice": "1000", "endPrice": "4999金99银99铜", "tax": "7%"},
        {"id": 4, "startPrice": "5000", "endPrice": "9999金99银99铜", "tax": "9%"},
        {"id": 5, "startPrice": "10000", "endPrice": "-", "tax": "10%"},
      ],
      rljDatas: [
        {"id": 1, "startPrice": "0", "endPrice": "499金99银99铜", "tax": "0%"},
        {"id": 2, "startPrice": "500", "endPrice": "999金99银99铜", "tax": "1%"},
        {"id": 3, "startPrice": "1000", "endPrice": "1999金99银99铜", "tax": "2%"},
        {"id": 4, "startPrice": "2000", "endPrice": "9999金99银99铜", "tax": "3%"},
        {"id": 5, "startPrice": "10000", "endPrice": "-", "tax": "10%"},
      ],
      sjDatas: [
        {"id": 1, "startCount": "1", "endCount": "10", "tax": "0%"},
        {"id": 2, "startCount": "11", "endCount": "50", "tax": "1%"},
        {"id": 3, "startCount": "51", "endCount": "100", "tax": "2%"},
        {"id": 4, "startCount": "101", "endCount": "250", "tax": "3%"},
        {"id": 5, "startCount": "251", "endCount": "500", "tax": "5%"},
        {"id": 6, "startCount": "501", "endCount": "1000", "tax": "8%"},
        {"id": 7, "startCount": "1001", "endCount": "2000", "tax": "11%"},
        {"id": 8, "startCount": "2001", "endCount": "5000", "tax": "13%"},
        {"id": 9, "startCount": "5001", "endCount": "9999", "tax": "15%"},
      ],

      taxEvasion: {
          tsdj: '0',
          tszj: '0',
          dsj: '0',
          zsj: '0',
      },
      auctionData:{
        mid: {
            auction: '0',
            mine: '0',
            other: '0',
        },
        min: {
            auction: '0',
            mine: '0',
            other: '0',
        },
        max: {
            auction: '0',
            mine: '0',
            other: '0',
        },
      },
      materials: [],
      fyf:''
    }
  },
  created(){
    var _this = this;
    this.$https.get("/material/simpleList",{}).then((response) => { 
        if(response.code == 1){
            _this.materials = response.data.list;
            _this.fyf = response.data.fyf;
        }else{
            this.$vs.dialog({
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
  watch : {
    material :function(val) {
        if(val){
            this.price = val.price;
            if(val.type == 1){
                this.fyfShow = true;
                this.fyfCount = val.num;
                this.fyfPrice = this.fyf.price;
            }else{
                this.fyfShow = false;
                this.fyfPrice = 0;
                this.fyfCount = 0;
            }
        }else{
            this.price = 0;
            this.fyfShow = false
        }
        
    },
    material2 :function(val) {
        if(val){
            this.price2 = val.price;
            if(val.type == 1){
                this.fyfShow2 = true;
                this.fyfCount2 = val.num;
                this.fyfPrice2 = this.fyf.price;
            }else{
                this.fyfShow2 = false;
                this.fyfPrice2 = 0;
                this.fyfCount2 = 0;
            }
        }else{
            this.price2 = 0;
            this.fyfShow2 = false
        }
    }
  },
  methods:{
        checkNumber(n){
            var filter  = /^([1-9]\d*|0)(\.\d{1,2})?$/;
            return filter.test(n);
        },
        resetForm(){
            this.count = 6;
            this.price = '';
            this.materials = '';
            this.auctionData = {
                mid: {
                    auction: '0',
                    mine: '0',
                    other: '0',
                },
                min: {
                    auction: '0',
                    mine: '0',
                    other: '0',
                },
                max: {
                    auction: '0',
                    mine: '0',
                    other: '0',
                },
            }
        },
        resetForm2(){
            this.count2 = 1;
            this.price2 = '';
            this.material2 = '';
            this.taxEvasion.tsdj = '0';
            this.taxEvasion.tszj = '0';
            this.taxEvasion.dsj = '0';
            this.taxEvasion.zsj = '0';
        },
        //组队竞拍计算
        auction(){
            var _this = this;
            var flag = _this.checkNumber(_this.price);
            if(!flag){
                _this.$vs.dialog({
                    color: 'danger',
                    title: '警告',
                    text: '请输入正确的价格',
                    accept: function(){

                    }
                })
                return;
            }
            var params = {
                count: this.count,
                price: this.price,
                fyfCount: this.fyfCount,
                fyfPrice: this.fyfPrice
            }
            this.$https.post("/tools/auction",params).then((response) => { 
                if(response.code == 1){
                    _this.auctionData = response.data;
                }else{
                    this.$vs.dialog({
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
        //逃税计算
        auction2(){
            var _this = this;
            var flag = _this.checkNumber(this.price2);
            if(!flag){
                this.$vs.dialog({
                    color: 'danger',
                    title: '警告',
                    text: '请输入正确的价格',
                    accept: function(){

                    }
                })
                return;
            }
            var params = {
                count: this.count2,
                price: this.price2,
                fyfCount: this.fyfCount2,
                fyfPrice: this.fyfPrice2
            }
            this.$https.post("/tools/taxEvasion",params).then((response) => { 
                if(response.code == 1){
                    _this.taxEvasion = response.data;
                }else{
                    this.$vs.dialog({
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
        }
  }
}
</script>

<style scoped>
.centery{
    margin-top: 22px;
}
.centery-1{
    margin-top: 15px;
}
.vx-card-1{
    padding: 5px;
    margin: 15px 8px 15px 15px;
}
.vx-card-2{
    padding: 5px;
    margin: 15px 8px 15px 8px;
}
.vx-card-3{
    padding: 5px;
    margin: 15px 15px 15px 8px;
}
.vs__dropdown-menu{
    overflow-y: scroll;
    height: 50px;
}
</style>