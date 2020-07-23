<template>
    <div class="vx-row">
		<div class="vx-col w-full mb-base">
			<vx-card style='margin: 0;'>
				<div class="vx-row mb-6">
                    <vs-tabs alignment="center">
                        <vs-tab label="洪门星计算" icon-pack="feather" icon="icon-home">
                            <div class="vx-row mb-6" style="margin-top: 20px;">
                                <div class="vx-col">
                                    <div class="centerx centery">
                                        <vs-slider icon="star" ticks max='35' v-model="stars"/>
                                    </div>
                                </div>
                                <div class="vx-col">
                                    <div class="centerx">
                                        <vs-input label-placeholder="当前已有经验(万)" v-model="currExp" class="is-label-placeholder" />
                                    </div>
                                </div>
                                <div class="vx-col">
                                    <div class="centerx">
                                        <vs-input label-placeholder="每日获得经验(万),例：200,500" v-model="dayExp" class="is-label-placeholder" />
                                    </div>
                                </div>
                                <div class="vx-col">
                                    <div class="centerx">
                                        <vs-button class="mr-3 mb-2 centery-1" @click="count">计算</vs-button>
                                        <vs-button color="warning" type="border" class="mb-2" @click="resetForm">重置</vs-button>
                                    </div>
                                </div>
                            </div>
                            <vs-divider> 对比图 </vs-divider>
                            <div class="vx-row mb-6" style="margin-top: 20px;">
                                <e-charts autoresize :options="bar" ref="bar" theme="ovilia-green" auto-resize />
                            </div>
                            <!-- <vs-divider> 成长图 </vs-divider>
                            <div class="vx-row mb-6" style="margin-top: 20px;">
                                <e-charts autoresize :options="line" ref="line" theme="ovilia-green" auto-resize />
                            </div> -->
                        </vs-tab>
                        <vs-tab label="侠义团计算" icon-pack="feather" icon="icon-box">
                            <div class="vx-row mb-6" style="margin-top: 20px;">
                                <div class="vx-col">
                                    <div class="centerx centery">
                                        <vs-slider icon="star" ticks max='150' v-model="chivalrous"/>
                                    </div>
                                </div>
                                <div class="vx-col">
                                    <div class="centerx">
                                        <vs-input label-placeholder="当前已有经验(万)" v-model="currExp2" class="is-label-placeholder" />
                                    </div>
                                </div>
                                <div class="vx-col">
                                    <div class="centerx">
                                        <vs-input label-placeholder="每日获得经验(万),例：20,50" v-model="dayExp2" class="is-label-placeholder" />
                                    </div>
                                </div>
                                <div class="vx-col">
                                    <div class="centerx">
                                        <vs-button class="mr-3 mb-2 centery-1" @click="count2">计算</vs-button>
                                        <vs-button color="warning" type="border" class="mb-2" @click="resetForm2">重置</vs-button>
                                    </div>
                                </div>
                            </div>
                            <vs-divider> 对比图 </vs-divider>
                            <div class="vx-row mb-6" style="margin-top: 20px;">
                                <e-charts autoresize :options="bar2" ref="bar2" theme="ovilia-green" auto-resize />
                            </div>
                        </vs-tab>

                    </vs-tabs>
					
				</div>
                <!-- <vs-divider position="center">Tips</vs-divider> -->
			</vx-card>
			
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
import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/chart/bar'
import theme from './theme.json'
ECharts.registerTheme('ovilia-green', theme)

import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
import vSelect from 'vue-select'

export default {
  components: {
    'v-select': vSelect,
    StatisticsCardLine,
    ECharts
  },
  data(){
    return {
        stars:[20,25],
        chivalrous:[100,110],
        currExp:'0',
        dayExp:'200,500',
        currExp2:'0',
        dayExp2:'20,50',
        bar: {
            legend: {},
            tooltip: {},
            dataset: {
                source: [

                ]
            },
            xAxis: { type: 'category' },
            yAxis: {},
            series: [
                { name: "",type: 'bar' }, 
            ]
        },
        line: {
            visualMap: [{ show: false, type: 'continuous', seriesIndex: 0, min: 0, max: 400 }],
            tooltip: { trigger: 'axis' },
            xAxis: { data: [""] },
            yAxis: { splitLine: {show: false}, },
            series: [{ name: "", type: 'line', showSymbol: false, data: [0] }]
        },
        bar2: {
            legend: {},
            tooltip: {},
            dataset: { source: [ ] },
            xAxis: { type: 'category' },
            yAxis: {},
            series: [ { name: "",type: 'bar' },  ]
        },
        line2: {
            visualMap: [{ show: false, type: 'continuous', seriesIndex: 0, min: 0, max: 400 }],
            tooltip: { trigger: 'axis' },
            xAxis: { data: [""] },
            yAxis: { splitLine: {show: false}, },
            series: [{ name: "", type: 'line', showSymbol: false, data: [0] }]
        },
    }
  },
  created(){

  },
  watch : {

  },
  methods:{
        checkNumber(n){
            var filter  = /^([1-9]\d*|0)(\.\d{1,2})?$/;
            return filter.test(n);
        },
        resetForm(){
            this.stars = [20,25];
            this.currExp = '0';
            this.dayExp = '200,500';
        },
        resetForm2(){
            this.chivalrous = [100,110];
            this.currExp2 = '0';
            this.dayExp2 = '20,50';
        },
        resetBar(){
            this.bar = {
                legend: {},
                tooltip: {},
                dataset: { source: [ ] },
                xAxis: { type: 'category' },
                yAxis: {},
                series: [ { name: "",type: 'bar' },  ]
            }
        },
        resetBar2(){
            this.bar2 = {
                legend: {},
                tooltip: {},
                dataset: { source: [ ] },
                xAxis: { type: 'category' },
                yAxis: {},
                series: [ { name: "",type: 'bar' },  ]
            }
        },
        //星级计算
        count(){
            var _this = this;
            _this.resetBar();
            var params = {
                start: _this.stars[0],
                end: _this.stars[1],
                currExp: _this.currExp,
                dayExp: _this.dayExp,
            };
            _this.$https.post("/star/countStar",params).then((response) => { 
                if(response.code == 1){
                    var result = response.data;
                    _this.line.xAxis.data = result.xAxis;
                    var seriesList = [];

                    var sourceList = [];
                    var pList = ['Product'];
                    for(let x=0;x<result.list[0].data.length;x++){
                        pList.push("");
                    }
                    sourceList.push(pList);

                    for(var i=0;i<result.list.length;i++){
                        seriesList.push({
                            name: result.list[i].name,
                            type: 'line',
                            showSymbol: false,
                            data: result.list[i].data,
                        })
                        sourceList.push([result.list[i].name].concat(result.list[i].data));
                    }
                    _this.line.series = seriesList;

                    var seriesBarList = [];
                    for(var j=0;j<result.xAxis.length;j++){
                        seriesBarList.push({
                            name: result.xAxis[j],type: 'bar'
                        });
                    }
                    _this.bar.series = seriesBarList;

                    _this.bar.dataset.source = sourceList;
                }
            }).catch((error) => { 
                console.log(error) 
            })
        },
        //侠义团计算
        count2(){
            var _this = this;
            _this.resetBar2();
            var params = {
                start: _this.chivalrous[0],
                end: _this.chivalrous[1],
                currExp: _this.currExp2,
                dayExp: _this.dayExp2,
            };
            _this.$https.post("/chivalrous/countChivalrous",params).then((response) => { 
                if(response.code == 1){
                    var result = response.data;
                    _this.line2.xAxis.data = result.xAxis;
                    var seriesList = [];

                    var sourceList = [];
                    var pList = ['Product'];
                    for(let x=0;x<result.list[0].data.length;x++){
                        pList.push("");
                    }
                    sourceList.push(pList);

                    for(var i=0;i<result.list.length;i++){
                        seriesList.push({
                            name: result.list[i].name,
                            type: 'line',
                            showSymbol: false,
                            data: result.list[i].data,
                        })
                        sourceList.push([result.list[i].name].concat(result.list[i].data));
                    }
                    _this.line2.series = seriesList;

                    var seriesBarList = [];
                    for(var j=0;j<result.xAxis.length;j++){
                        seriesBarList.push({
                            name: result.xAxis[j],type: 'bar'
                        });
                    }
                    _this.bar2.series = seriesBarList;

                    _this.bar2.dataset.source = sourceList;
                }
            }).catch((error) => { 
                console.log(error) 
            })
        },
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