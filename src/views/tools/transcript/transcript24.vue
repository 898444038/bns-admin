<template>
    <div class="vx-row">
		<div class="vx-col w-full mb-base">
			<vx-card style='margin: 0;'>
				<div class="vx-row mb-6">
                    <vs-tabs alignment="center">
                        <vs-tab label="海蛇补给基地" icon-pack="feather" icon="icon-home">
                            <div class="vx-row">
                                <div class="vx-col w-full lg:w-1/3 sm:w-1/2 mb-base" style='margin-bottom: 1rem !important;'>
                                    <vs-button color="primary" type="filled" target href="https://mp.weixin.qq.com/s?__biz=MTk1NzE5MjkyMQ==&mid=2648721568&idx=3&sn=c2934c30852a3e75b5ee1963ad7ae95d&chksm=44837b1673f4f200851430e51e3f9c9001b6202a0571a41cd0cd5b6ad0d325d1c0a98359157b&mpshare=1&scene=1&srcid=0823WfKBL8JSr67WiSVjbYBw&sharer_sharetime=1598167045257&sharer_shareid=00aac78f36ae77a0895b4dc83775b2d5&key=af1bfbb7845d3a49df4faf8ee52174ad4b202de01c2b59af2bdfbf9cd5fccbd6eac67b3400fd3c183b33c78cb556bdb42f1146954cf6cd1028dd523520eef665c43668139b1dfb193b0828dc2059136e3164f76b7f42581a6e26d5c6a225970e6bc8872a28341103760d54c65aef6e1b24db6c7f2d5eeb0258c6a826582ea3f6&ascene=1&uin=MjI4NTI2NzAyOQ%3D%3D&devicetype=Windows+10+x64&version=62090529&lang=zh_CN&exportkey=A4dQN5NBLvqbeef0iXhKThc%3D&pass_ticket=Zbfs7XlCS4qjUmwcJhgXrZlyfwyG4V51EM72sQFbT1J7LqrOmQewEEw9putesDZh">
                                        查看攻略
                                    </vs-button>
                                </div>
                            </div>
                            <div class="vx-row">
                                <div class="vx-col w-full lg:w-1/3 sm:w-1/2 mb-base">
                                    <vx-card class="p-2" :class="[activeClass1]">
                                        <div class="text-center">
                                            <h4>守卫-暴戾鱼王</h4>
                                            <p class="text-grey">14亿4000万</p>
                                        </div>
                                        <div class="count-down text-center">
                                            <countdown :time="value1">
                                                <template slot-scope="props">
                                                    <div class="single-counter">
                                                        <span class="timer">{{ props.minutes }}</span>
                                                        <span>Minutes</span>
                                                    </div>
                                                    <div class="single-counter">
                                                        <span class="timer">{{ props.seconds }}</span>
                                                        <span>Seconds</span>
                                                    </div>
                                                </template>
                                            </countdown>
                                        </div>
                                        <div class="flex justify-between text-center">
                                            <span style="margin: 10px auto;">
                                                <p class="text-xl font-semibold">
                                                    <vx-tooltip text="减1分钟">
                                                        <vs-button @click="cutTime(1)" radius color="primary" type="border" icon-pack="feather" icon="icon-minus" style="float: left;"></vs-button>
                                                    </vx-tooltip>
                                                    <vx-tooltip text="更新死亡时间">
                                                        <flat-pickr :config="configdateTimePicker" v-model="time1" placeholder="选择时间" style="margin-left:10px;margin-right:10px;"/>
                                                    </vx-tooltip>
                                                    <vx-tooltip text="加1分钟">
                                                        <vs-button @click="addTime(1)" radius color="primary" type="border" icon-pack="feather" icon="icon-plus" style="float: right;"></vs-button>
                                                    </vx-tooltip>
                                                </p>
                                            </span>
                                        </div>
                                    </vx-card>
                                </div>

                                <div class="vx-col w-full lg:w-1/3 sm:w-1/2 mb-base">
                                    <vx-card class="p-2" :class="[activeClass2]">
                                        <div class="text-center">
                                            <h4>大厨-楼杏花</h4>
                                            <p class="text-grey">15亿6000万</p>
                                        </div>
                                        <div class="count-down text-center">
                                            <countdown :time="value2">
                                                <template slot-scope="props">
                                                    <div class="single-counter">
                                                        <span class="timer">{{ props.minutes }}</span>
                                                        <span>Minutes</span>
                                                    </div>
                                                    <div class="single-counter">
                                                        <span class="timer">{{ props.seconds }}</span>
                                                        <span>Seconds</span>
                                                    </div>
                                                </template>
                                            </countdown>
                                        </div>
                                        <div class="flex justify-between text-center">
                                            <span style="margin: 10px auto;">
                                                <p class="text-xl font-semibold">
                                                    <vx-tooltip text="减1分钟">
                                                        <vs-button @click="cutTime(2)" radius color="primary" type="border" icon-pack="feather" icon="icon-minus" style="float: left;"></vs-button>
                                                    </vx-tooltip>
                                                    <vx-tooltip text="更新死亡时间">
                                                        <flat-pickr :config="configdateTimePicker" v-model="time2" placeholder="选择时间" style="margin-left:10px;margin-right:10px;"/>
                                                    </vx-tooltip>
                                                    <vx-tooltip text="加1分钟">
                                                        <vs-button @click="addTime(2)" radius color="primary" type="border" icon-pack="feather" icon="icon-plus" style="float: right;"></vs-button>
                                                    </vx-tooltip>
                                                </p>
                                            </span>
                                        </div>
                                    </vx-card>
                                </div>

                                <div class="vx-col w-full lg:w-1/3 sm:w-1/2 mb-base">
                                    <vx-card class="p-2" :class="[activeClass3]">
                                        <div class="text-center">
                                            <h4>内务班长-酒保</h4>
                                            <p class="text-grey">18亿5000万</p>
                                        </div>
                                        <div class="count-down text-center">
                                            <countdown :time="value3">
                                                <template slot-scope="props">
                                                    <div class="single-counter">
                                                        <span class="timer">{{ props.minutes }}</span>
                                                        <span>Minutes</span>
                                                    </div>
                                                    <div class="single-counter">
                                                        <span class="timer">{{ props.seconds }}</span>
                                                        <span>Seconds</span>
                                                    </div>
                                                </template>
                                            </countdown>
                                        </div>
                                        <div class="flex justify-between text-center">
                                            <span style="margin: 10px auto;">
                                                <p class="text-xl font-semibold">
                                                    <vx-tooltip text="减1分钟">
                                                        <vs-button @click="cutTime(3)" radius color="primary" type="border" icon-pack="feather" icon="icon-minus" style="float: left;"></vs-button>
                                                    </vx-tooltip>
                                                    <vx-tooltip text="更新死亡时间">
                                                        <flat-pickr :config="configdateTimePicker" v-model="time3" placeholder="选择时间" style="margin-left:10px;margin-right:10px;"/>
                                                    </vx-tooltip>
                                                    <vx-tooltip text="加1分钟">
                                                        <vs-button @click="addTime(3)" radius color="primary" type="border" icon-pack="feather" icon="icon-plus" style="float: right;"></vs-button>
                                                    </vx-tooltip>
                                                </p>
                                            </span>
                                        </div>
                                    </vx-card>
                                </div>
                            </div>


                            <div class="vx-row mb-6" style="margin-top: 20px;">
                                
                            </div>
                            
                        </vs-tab>
                        <vs-tab label="血浪鲨湾" icon-pack="feather" icon="icon-home">
                            <div class="vx-row mb-6" style="margin-top: 20px;">
                                
                            </div>
                            
                        </vs-tab>
                    </vs-tabs>
					
				</div>
                <!-- <vs-divider position="center">Tips</vs-divider> -->
			</vx-card>
			<!-- </vx-card> -->
            <div class="vx-row" style="margin-top: 20px;">
                
            </div>
		</div>
    </div>
</template>

<script>
import CountDown from 'vue2-countdown'
import VueCountdown from '@chenfengyuan/vue-countdown'
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
    components: {
        flatPickr,
        'countdown': VueCountdown,
        CountDown
    },
    data() {
        return {
            //倒计时//时间插件//刷新时间
            value1: 0,
            time1: new Date().getTime(),
            times1: new Date().getTime(),
            refresh1: 60000*3,
            activeClass1:'',

            value2: 0,
            time2: new Date().getTime(),
            times2: new Date().getTime(),
            refresh2: 60000*6,
            activeClass2:'',

            value3: 0,
            time3: new Date().getTime(),
            times3: new Date().getTime(),
            refresh3: 60000*10,
            activeClass3:'',

            configdateTimePicker: {
              enableTime: true,
              enableSeconds: true,
              noCalendar: true
            },
        }
    },
    methods:{
        cutTime(type){
            let nowTime = new Date().getTime();
            if(type == 1){
                if(nowTime - this.times1 >= this.refresh1){
                    this.times1 = nowTime - this.refresh1;
                    this.time1 = this.times1;
                    this.value1 = 0;
                }else{
                    this.times1 -= 60000;
                    this.time1 = this.times1;
                    this.value1 = nowTime - this.times1;
                }
                this.toggleClass(type);
            }else if(type == 2){
                if(nowTime - this.times2 >= this.refresh2){
                    this.times2 = nowTime - this.refresh2;
                    this.time2 = this.times2;
                    this.value2 = 0;
                }else{
                    this.times2 -= 60000;
                    this.time2 = this.times2;
                    this.value2 = nowTime - this.times2;
                }
                this.toggleClass(type);
            }else if(type == 3){
                if(nowTime - this.times3 >= this.refresh3){
                    this.times3 = nowTime - this.refresh3;
                    this.time3 = this.times3;
                    this.value3 = 0;
                }else{
                    this.times3 -= 60000;
                    this.time3 = this.times3;
                    this.value3 = nowTime - this.times3;
                }
                this.toggleClass(type);
            }
        },
        addTime(type){
            let nowTime = new Date().getTime();
            if(type == 1){
                if(nowTime - this.times1 < 60000){
                    this.times1 = nowTime;
                    this.time1 = this.times1;
                    this.value1 = this.refresh1;
                }else{
                    this.times1 += 60000;
                    this.time1 = this.times1;
                    this.value1 = nowTime - this.times1;
                }
                this.toggleClass(type);
            }else if(type == 2){
                if(nowTime - this.times2 < 60000){
                    this.times2 = nowTime;
                    this.time2 = this.times2;
                    this.value2 = this.refresh2;
                }else{
                    this.times2 += 60000;
                    this.time2 = this.times2;
                    this.value2 = nowTime - this.times2;
                }
                this.toggleClass(type);
            }else if(type == 3){
                if(nowTime - this.times3 < 60000){
                    this.times3 = nowTime;
                    this.time3 = this.times3;
                    this.value3 = this.refresh3;
                }else{
                    this.times3 += 60000;
                    this.time3 = this.times3;
                    this.value3 = nowTime - this.times3;
                }
                this.toggleClass(type);
            }
        },
        toggleClass(type){
            if(type == 1){
                let value = this.value1;
                if(value<=120000 && value>60000){
                    this.activeClass1 = "arrow_red";
                }else if(value<=60000 && value>60000){
                    this.activeClass1 = "arrow_red";
                }else if(value<=0){
                    this.activeClass1 = "";
                }
            }else if(type == 2){
                let value = this.value2;
                if(value<=120000 && value>60000){
                    this.activeClass2 = "arrow_red";
                }else if(value<=60000 && value>60000){
                    this.activeClass2 = "arrow_red";
                }else if(value<=0){
                    this.activeClass2 = "";
                }
            }else if(type == 3){
                let value = this.value3;
                if(value<=120000 && value>60000){
                    this.activeClass3 = "arrow_red";
                }else if(value<=60000 && value>60000){
                    this.activeClass3 = "arrow_red";
                }else if(value<=0){
                    this.activeClass3 = "";
                }
            }
        },
        strToTime(val1){
            var timestamp1 = val1;
            if((val1+"").indexOf(":") != -1){
                timestamp1 = new Date(this.getDate()+" "+val1).getTime();
            }
            return timestamp1;
        },
        getNowTime(){
            return new Date().getTime();
        },
        getDate(){
            let datetime = new Date();
            let year = datetime.getFullYear();
            let month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
            let date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
            return year+"-"+month+"-"+date;
        }
    },
    watch: {
        time1(val1){
            let _this = this;
            let timestamp = _this.strToTime(val1);
            _this.value1 = _this.refresh1 - (_this.getNowTime() - timestamp);
            this.toggleClass(1);
        },
        time2(val1){
            let _this = this;
            let timestamp = _this.strToTime(val1);
            _this.value2 = _this.refresh2 - (_this.getNowTime() - timestamp);
            this.toggleClass(2);
        },
        time3(val1){
            let _this = this;
            let timestamp = _this.strToTime(val1);
            _this.value3 = _this.refresh3 - (_this.getNowTime() - timestamp);
            this.toggleClass(3);
        }
    }
}

</script>

<style scoped>
.con-vs-tooltip{
    float: left;
}

.arrow_green{
    animation: tip-green 800ms ease-out infinite alternate;
}

.arrow_red{
    animation: tip-red 800ms ease-out infinite alternate;
}

@keyframes tip-green {
    0% {
        border-color: #393;
        box-shadow: 0 0 5px rgba(0,255,0,.2), inset 0 0 5px rgba(0,255,0,.1), 0 1px 0 #393;
    }
    100% {
        border-color: #6f6;
        box-shadow: 0 0 20px rgba(0,255,0,.6), inset 0 0 10px rgba(0,255,0,.4), 0 1px 0 #6f6;
    }
}

@keyframes tip-red {
    0% {
        border-color: #E74C3C;
        box-shadow: 0 0 5px rgba(231, 76, 60,.2), inset 0 0 5px rgba(231, 76, 60,.1), 0 1px 0 #E74C3C;
    }
    100% {
        border-color: #C0392B;
        box-shadow: 0 0 20px rgba(192, 57, 43,.6), inset 0 0 10px rgba(192, 57, 43,.4), 0 1px 0 #C0392B;
    }
}
</style>