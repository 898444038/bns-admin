<template>
    <div class="vx-row">
		<div class="vx-col w-full mb-base">
			<vx-card style='margin: 0;'>
				<div class="vx-row mb-6">
                    <vs-tabs alignment="center">
                        <vs-tab label="白雾森林" icon-pack="feather" icon="icon-home">
                            <div class="vx-row">
                                <div class="vx-col w-full lg:w-1/3 sm:w-1/2 mb-base" style='margin-bottom: 1rem !important;'>
                                    <vs-button color="primary" type="filled">新增频道</vs-button>
                                </div>
                            </div>
                            <div class="vx-row">
                                <!-- <div v-for="(item,index) in fdl" :key="index" class="vx-col w-full lg:w-1/3 sm:w-1/3 mb-base">
                                    <vx-card :title="item.title" class="p-2" refresh-content-action @refresh="closeCard">
                                        <div class="count-down text-center">
                                            <countdown :time="item.value">
                                                <template slot-scope="props">
                                                    <div class="single-counter"><span class="timer">{{ props.hours }}</span><span>Hours</span></div>
                                                    <div class="single-counter"><span class="timer">{{ props.minutes }}</span><span>Minutes</span></div>
                                                    <div class="single-counter"><span class="timer">{{ props.seconds }}</span><span>Seconds</span></div>
                                                </template>
                                            </countdown>
                                        </div>
                                        <div class="flex justify-between text-center">
                                            <span style="margin: 10px auto;">
                                                <p class="text-xl font-semibold">
                                                    <vx-tooltip text="减1分钟">
                                                        <vs-button @click="cutTime0(index)" radius color="primary" type="border" icon-pack="feather" icon="icon-minus" style="float: left;"></vs-button>
                                                    </vx-tooltip>
                                                    <vx-tooltip text="更新死亡时间">
                                                        <flat-pickr :config="configdateTimePicker" v-model="item.time" placeholder="选择时间" style="margin-left:10px;margin-right:10px;width: 100px;"/>
                                                    </vx-tooltip>
                                                    <vx-tooltip text="加1分钟">
                                                        <vs-button @click="addTime0(index)" radius color="primary" type="border" icon-pack="feather" icon="icon-plus" style="float: right;"></vs-button>
                                                    </vx-tooltip>
                                                </p>
                                            </span>
                                        </div>
                                    </vx-card>
                                </div> -->
                                <div class="vx-col w-full lg:w-1/3 sm:w-1/3 mb-base">
                                    <vx-card :title="fdl_title_1" class="p-2" refresh-content-action @refresh="closeFdlCard1">
                                        <div class="count-down text-center">
                                            <countdown :time="fdl_value_1">
                                                <template slot-scope="props">
                                                    <div class="single-counter"><span class="timer">{{ props.hours }}</span><span>Hours</span></div>
                                                    <div class="single-counter"><span class="timer">{{ props.minutes }}</span><span>Minutes</span></div>
                                                    <div class="single-counter"><span class="timer">{{ props.seconds }}</span><span>Seconds</span></div>
                                                </template>
                                            </countdown>
                                        </div>
                                        <div class="flex justify-between text-center">
                                            <span style="margin: 10px auto;">
                                                <p class="text-xl font-semibold">
                                                    <vx-tooltip text="减1分钟"><vs-button @click="cutTime0(1)" radius color="primary" type="border" icon-pack="feather" icon="icon-minus" style="float: left;"></vs-button></vx-tooltip>
                                                    <vx-tooltip text="更新死亡时间"><flat-pickr :config="configdateTimePicker" v-model="fdl_time_1" placeholder="选择时间" style="margin-left:10px;margin-right:10px;width: 100px;"/></vx-tooltip>
                                                    <vx-tooltip text="加1分钟"><vs-button @click="addTime0(1)" radius color="primary" type="border" icon-pack="feather" icon="icon-plus" style="float: right;"></vs-button></vx-tooltip>
                                                </p>
                                            </span>
                                        </div>
                                    </vx-card>
                                </div>
                                <div class="vx-col w-full lg:w-1/3 sm:w-1/3 mb-base">
                                    <vx-card :title="fdl_title_2" class="p-2" refresh-content-action @refresh="closeFdlCard2">
                                        <div class="count-down text-center">
                                            <countdown :time="fdl_value_2">
                                                <template slot-scope="props">
                                                    <div class="single-counter"><span class="timer">{{ props.hours }}</span><span>Hours</span></div>
                                                    <div class="single-counter"><span class="timer">{{ props.minutes }}</span><span>Minutes</span></div>
                                                    <div class="single-counter"><span class="timer">{{ props.seconds }}</span><span>Seconds</span></div>
                                                </template>
                                            </countdown>
                                        </div>
                                        <div class="flex justify-between text-center">
                                            <span style="margin: 10px auto;">
                                                <p class="text-xl font-semibold">
                                                    <vx-tooltip text="减1分钟"><vs-button @click="cutTime0(2)" radius color="primary" type="border" icon-pack="feather" icon="icon-minus" style="float: left;"></vs-button></vx-tooltip>
                                                    <vx-tooltip text="更新死亡时间"><flat-pickr :config="configdateTimePicker" v-model="fdl_time_2" placeholder="选择时间" style="margin-left:10px;margin-right:10px;width: 100px;"/></vx-tooltip>
                                                    <vx-tooltip text="加1分钟"><vs-button @click="addTime0(2)" radius color="primary" type="border" icon-pack="feather" icon="icon-plus" style="float: right;"></vs-button></vx-tooltip>
                                                </p>
                                            </span>
                                        </div>
                                    </vx-card>
                                </div>
                                <div class="vx-col w-full lg:w-1/3 sm:w-1/3 mb-base">
                                    <vx-card :title="fdl_title_3" class="p-2" refresh-content-action @refresh="closeFdlCard3">
                                        <div class="count-down text-center">
                                            <countdown :time="fdl_value_3">
                                                <template slot-scope="props">
                                                    <div class="single-counter"><span class="timer">{{ props.hours }}</span><span>Hours</span></div>
                                                    <div class="single-counter"><span class="timer">{{ props.minutes }}</span><span>Minutes</span></div>
                                                    <div class="single-counter"><span class="timer">{{ props.seconds }}</span><span>Seconds</span></div>
                                                </template>
                                            </countdown>
                                        </div>
                                        <div class="flex justify-between text-center">
                                            <span style="margin: 10px auto;">
                                                <p class="text-xl font-semibold">
                                                    <vx-tooltip text="减1分钟"><vs-button @click="cutTime0(3)" radius color="primary" type="border" icon-pack="feather" icon="icon-minus" style="float: left;"></vs-button></vx-tooltip>
                                                    <vx-tooltip text="更新死亡时间"><flat-pickr :config="configdateTimePicker" v-model="fdl_time_3" placeholder="选择时间" style="margin-left:10px;margin-right:10px;width: 100px;"/></vx-tooltip>
                                                    <vx-tooltip text="加1分钟"><vs-button @click="addTime0(3)" radius color="primary" type="border" icon-pack="feather" icon="icon-plus" style="float: right;"></vs-button></vx-tooltip>
                                                </p>
                                            </span>
                                        </div>
                                    </vx-card>
                                </div>
                                <div class="vx-col w-full lg:w-1/3 sm:w-1/3 mb-base">
                                    <vx-card :title="fdl_title_4" class="p-2" refresh-content-action @refresh="closeFdlCard4">
                                        <div class="count-down text-center">
                                            <countdown :time="fdl_value_4">
                                                <template slot-scope="props">
                                                    <div class="single-counter"><span class="timer">{{ props.hours }}</span><span>Hours</span></div>
                                                    <div class="single-counter"><span class="timer">{{ props.minutes }}</span><span>Minutes</span></div>
                                                    <div class="single-counter"><span class="timer">{{ props.seconds }}</span><span>Seconds</span></div>
                                                </template>
                                            </countdown>
                                        </div>
                                        <div class="flex justify-between text-center">
                                            <span style="margin: 10px auto;">
                                                <p class="text-xl font-semibold">
                                                    <vx-tooltip text="减1分钟"><vs-button @click="cutTime0(4)" radius color="primary" type="border" icon-pack="feather" icon="icon-minus" style="float: left;"></vs-button></vx-tooltip>
                                                    <vx-tooltip text="更新死亡时间"><flat-pickr :config="configdateTimePicker" v-model="fdl_time_4" placeholder="选择时间" style="margin-left:10px;margin-right:10px;width: 100px;"/></vx-tooltip>
                                                    <vx-tooltip text="加1分钟"><vs-button @click="addTime0(4)" radius color="primary" type="border" icon-pack="feather" icon="icon-plus" style="float: right;"></vs-button></vx-tooltip>
                                                </p>
                                            </span>
                                        </div>
                                    </vx-card>
                                </div>
                                <div class="vx-col w-full lg:w-1/3 sm:w-1/3 mb-base">
                                    <vx-card :title="fdl_title_5" class="p-2" refresh-content-action @refresh="closeFdlCard5">
                                        <div class="count-down text-center">
                                            <countdown :time="fdl_value_5">
                                                <template slot-scope="props">
                                                    <div class="single-counter"><span class="timer">{{ props.hours }}</span><span>Hours</span></div>
                                                    <div class="single-counter"><span class="timer">{{ props.minutes }}</span><span>Minutes</span></div>
                                                    <div class="single-counter"><span class="timer">{{ props.seconds }}</span><span>Seconds</span></div>
                                                </template>
                                            </countdown>
                                        </div>
                                        <div class="flex justify-between text-center">
                                            <span style="margin: 10px auto;">
                                                <p class="text-xl font-semibold">
                                                    <vx-tooltip text="减1分钟"><vs-button @click="cutTime0(5)" radius color="primary" type="border" icon-pack="feather" icon="icon-minus" style="float: left;"></vs-button></vx-tooltip>
                                                    <vx-tooltip text="更新死亡时间"><flat-pickr :config="configdateTimePicker" v-model="fdl_time_5" placeholder="选择时间" style="margin-left:10px;margin-right:10px;width: 100px;"/></vx-tooltip>
                                                    <vx-tooltip text="加1分钟"><vs-button @click="addTime0(5)" radius color="primary" type="border" icon-pack="feather" icon="icon-plus" style="float: right;"></vs-button></vx-tooltip>
                                                </p>
                                            </span>
                                        </div>
                                    </vx-card>
                                </div>
                                <div class="vx-col w-full lg:w-1/3 sm:w-1/3 mb-base">
                                    <vx-card :title="fdl_title_6" class="p-2" refresh-content-action @refresh="closeFdlCard6">
                                        <div class="count-down text-center">
                                            <countdown :time="fdl_value_6">
                                                <template slot-scope="props">
                                                    <div class="single-counter"><span class="timer">{{ props.hours }}</span><span>Hours</span></div>
                                                    <div class="single-counter"><span class="timer">{{ props.minutes }}</span><span>Minutes</span></div>
                                                    <div class="single-counter"><span class="timer">{{ props.seconds }}</span><span>Seconds</span></div>
                                                </template>
                                            </countdown>
                                        </div>
                                        <div class="flex justify-between text-center">
                                            <span style="margin: 10px auto;">
                                                <p class="text-xl font-semibold">
                                                    <vx-tooltip text="减1分钟"><vs-button @click="cutTime0(6)" radius color="primary" type="border" icon-pack="feather" icon="icon-minus" style="float: left;"></vs-button></vx-tooltip>
                                                    <vx-tooltip text="更新死亡时间"><flat-pickr :config="configdateTimePicker" v-model="fdl_time_6" placeholder="选择时间" style="margin-left:10px;margin-right:10px;width: 100px;"/></vx-tooltip>
                                                    <vx-tooltip text="加1分钟"><vs-button @click="addTime0(6)" radius color="primary" type="border" icon-pack="feather" icon="icon-plus" style="float: right;"></vs-button></vx-tooltip>
                                                </p>
                                            </span>
                                        </div>
                                    </vx-card>
                                </div>
                                <div class="vx-col w-full lg:w-1/3 sm:w-1/3 mb-base">
                                    <vx-card :title="fdl_title_7" class="p-2" refresh-content-action @refresh="closeFdlCard7">
                                        <div class="count-down text-center">
                                            <countdown :time="fdl_value_7">
                                                <template slot-scope="props">
                                                    <div class="single-counter"><span class="timer">{{ props.hours }}</span><span>Hours</span></div>
                                                    <div class="single-counter"><span class="timer">{{ props.minutes }}</span><span>Minutes</span></div>
                                                    <div class="single-counter"><span class="timer">{{ props.seconds }}</span><span>Seconds</span></div>
                                                </template>
                                            </countdown>
                                        </div>
                                        <div class="flex justify-between text-center">
                                            <span style="margin: 10px auto;">
                                                <p class="text-xl font-semibold">
                                                    <vx-tooltip text="减1分钟"><vs-button @click="cutTime0(7)" radius color="primary" type="border" icon-pack="feather" icon="icon-minus" style="float: left;"></vs-button></vx-tooltip>
                                                    <vx-tooltip text="更新死亡时间"><flat-pickr :config="configdateTimePicker" v-model="fdl_time_7" placeholder="选择时间" style="margin-left:10px;margin-right:10px;width: 100px;"/></vx-tooltip>
                                                    <vx-tooltip text="加1分钟"><vs-button @click="addTime0(7)" radius color="primary" type="border" icon-pack="feather" icon="icon-plus" style="float: right;"></vs-button></vx-tooltip>
                                                </p>
                                            </span>
                                        </div>
                                    </vx-card>
                                </div>
                                <div class="vx-col w-full lg:w-1/3 sm:w-1/3 mb-base">
                                    <vx-card :title="fdl_title_8" class="p-2" refresh-content-action @refresh="closeFdlCard8">
                                        <div class="count-down text-center">
                                            <countdown :time="fdl_value_8">
                                                <template slot-scope="props">
                                                    <div class="single-counter"><span class="timer">{{ props.hours }}</span><span>Hours</span></div>
                                                    <div class="single-counter"><span class="timer">{{ props.minutes }}</span><span>Minutes</span></div>
                                                    <div class="single-counter"><span class="timer">{{ props.seconds }}</span><span>Seconds</span></div>
                                                </template>
                                            </countdown>
                                        </div>
                                        <div class="flex justify-between text-center">
                                            <span style="margin: 10px auto;">
                                                <p class="text-xl font-semibold">
                                                    <vx-tooltip text="减1分钟"><vs-button @click="cutTime0(8)" radius color="primary" type="border" icon-pack="feather" icon="icon-minus" style="float: left;"></vs-button></vx-tooltip>
                                                    <vx-tooltip text="更新死亡时间"><flat-pickr :config="configdateTimePicker" v-model="fdl_time_8" placeholder="选择时间" style="margin-left:10px;margin-right:10px;width: 100px;"/></vx-tooltip>
                                                    <vx-tooltip text="加1分钟"><vs-button @click="addTime0(8)" radius color="primary" type="border" icon-pack="feather" icon="icon-plus" style="float: right;"></vs-button></vx-tooltip>
                                                </p>
                                            </span>
                                        </div>
                                    </vx-card>
                                </div>
                                <div class="vx-col w-full lg:w-1/3 sm:w-1/3 mb-base">
                                    <vx-card :title="fdl_title_9" class="p-2" refresh-content-action @refresh="closeFdlCard9">
                                        <div class="count-down text-center">
                                            <countdown :time="fdl_value_9">
                                                <template slot-scope="props">
                                                    <div class="single-counter"><span class="timer">{{ props.hours }}</span><span>Hours</span></div>
                                                    <div class="single-counter"><span class="timer">{{ props.minutes }}</span><span>Minutes</span></div>
                                                    <div class="single-counter"><span class="timer">{{ props.seconds }}</span><span>Seconds</span></div>
                                                </template>
                                            </countdown>
                                        </div>
                                        <div class="flex justify-between text-center">
                                            <span style="margin: 10px auto;">
                                                <p class="text-xl font-semibold">
                                                    <vx-tooltip text="减1分钟"><vs-button @click="cutTime0(9)" radius color="primary" type="border" icon-pack="feather" icon="icon-minus" style="float: left;"></vs-button></vx-tooltip>
                                                    <vx-tooltip text="更新死亡时间"><flat-pickr :config="configdateTimePicker" v-model="fdl_time_9" placeholder="选择时间" style="margin-left:10px;margin-right:10px;width: 100px;"/></vx-tooltip>
                                                    <vx-tooltip text="加1分钟"><vs-button @click="addTime0(9)" radius color="primary" type="border" icon-pack="feather" icon="icon-plus" style="float: right;"></vs-button></vx-tooltip>
                                                </p>
                                            </span>
                                        </div>
                                    </vx-card>
                                </div>
                                <div class="vx-col w-full lg:w-1/3 sm:w-1/3 mb-base">
                                    <vx-card :title="fdl_title_10" class="p-2" refresh-content-action @refresh="closeFdlCard10">
                                        <div class="count-down text-center">
                                            <countdown :time="fdl_value_10">
                                                <template slot-scope="props">
                                                    <div class="single-counter"><span class="timer">{{ props.hours }}</span><span>Hours</span></div>
                                                    <div class="single-counter"><span class="timer">{{ props.minutes }}</span><span>Minutes</span></div>
                                                    <div class="single-counter"><span class="timer">{{ props.seconds }}</span><span>Seconds</span></div>
                                                </template>
                                            </countdown>
                                        </div>
                                        <div class="flex justify-between text-center">
                                            <span style="margin: 10px auto;">
                                                <p class="text-xl font-semibold">
                                                    <vx-tooltip text="减1分钟"><vs-button @click="cutTime0(10)" radius color="primary" type="border" icon-pack="feather" icon="icon-minus" style="float: left;"></vs-button></vx-tooltip>
                                                    <vx-tooltip text="更新死亡时间"><flat-pickr :config="configdateTimePicker" v-model="fdl_time_10" placeholder="选择时间" style="margin-left:10px;margin-right:10px;width: 100px;"/></vx-tooltip>
                                                    <vx-tooltip text="加1分钟"><vs-button @click="addTime0(10)" radius color="primary" type="border" icon-pack="feather" icon="icon-plus" style="float: right;"></vs-button></vx-tooltip>
                                                </p>
                                            </span>
                                        </div>
                                    </vx-card>
                                </div>
                                <div class="vx-col w-full lg:w-1/3 sm:w-1/3 mb-base">
                                    <vx-card :title="fdl_title_11" class="p-2" refresh-content-action @refresh="closeFdlCard11">
                                        <div class="count-down text-center">
                                            <countdown :time="fdl_value_11">
                                                <template slot-scope="props">
                                                    <div class="single-counter"><span class="timer">{{ props.hours }}</span><span>Hours</span></div>
                                                    <div class="single-counter"><span class="timer">{{ props.minutes }}</span><span>Minutes</span></div>
                                                    <div class="single-counter"><span class="timer">{{ props.seconds }}</span><span>Seconds</span></div>
                                                </template>
                                            </countdown>
                                        </div>
                                        <div class="flex justify-between text-center">
                                            <span style="margin: 10px auto;">
                                                <p class="text-xl font-semibold">
                                                    <vx-tooltip text="减1分钟"><vs-button @click="cutTime0(11)" radius color="primary" type="border" icon-pack="feather" icon="icon-minus" style="float: left;"></vs-button></vx-tooltip>
                                                    <vx-tooltip text="更新死亡时间"><flat-pickr :config="configdateTimePicker" v-model="fdl_time_11" placeholder="选择时间" style="margin-left:10px;margin-right:10px;width: 100px;"/></vx-tooltip>
                                                    <vx-tooltip text="加1分钟"><vs-button @click="addTime0(11)" radius color="primary" type="border" icon-pack="feather" icon="icon-plus" style="float: right;"></vs-button></vx-tooltip>
                                                </p>
                                            </span>
                                        </div>
                                    </vx-card>
                                </div>
                                <div class="vx-col w-full lg:w-1/3 sm:w-1/3 mb-base">
                                    <vx-card :title="fdl_title_12" class="p-2" refresh-content-action @refresh="closeFdlCard12">
                                        <div class="count-down text-center">
                                            <countdown :time="fdl_value_12">
                                                <template slot-scope="props">
                                                    <div class="single-counter"><span class="timer">{{ props.hours }}</span><span>Hours</span></div>
                                                    <div class="single-counter"><span class="timer">{{ props.minutes }}</span><span>Minutes</span></div>
                                                    <div class="single-counter"><span class="timer">{{ props.seconds }}</span><span>Seconds</span></div>
                                                </template>
                                            </countdown>
                                        </div>
                                        <div class="flex justify-between text-center">
                                            <span style="margin: 10px auto;">
                                                <p class="text-xl font-semibold">
                                                    <vx-tooltip text="减1分钟"><vs-button @click="cutTime0(12)" radius color="primary" type="border" icon-pack="feather" icon="icon-minus" style="float: left;"></vs-button></vx-tooltip>
                                                    <vx-tooltip text="更新死亡时间"><flat-pickr :config="configdateTimePicker" v-model="fdl_time_12" placeholder="选择时间" style="margin-left:10px;margin-right:10px;width: 100px;"/></vx-tooltip>
                                                    <vx-tooltip text="加1分钟"><vs-button @click="addTime0(12)" radius color="primary" type="border" icon-pack="feather" icon="icon-plus" style="float: right;"></vs-button></vx-tooltip>
                                                </p>
                                            </span>
                                        </div>
                                    </vx-card>
                                </div>
                            </div>
                        </vs-tab>
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
                                    <vx-card class="p-2" :class="[activeClass1]" refresh-content-action @refresh="closeCardAnimation1">
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
                                    <vx-card class="p-2" :class="[activeClass2]" refresh-content-action @refresh="closeCardAnimation2">
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
                                    <vx-card class="p-2" :class="[activeClass3]" refresh-content-action @refresh="closeCardAnimation3">
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
            refresh_fdl: 60000,
            fdl:[
                {cardId: 1,title: '1x',value: 0,time: new Date().getTime(),times: new Date().getTime(),refresh: 60000},
                {cardId: 2,title: '2x',value: 0,time: new Date().getTime(),times: new Date().getTime(),refresh: 60000}
            ],
            fdl_title_1: '1x',
            fdl_value_1: 0,
            fdl_time_1: new Date().getTime(),
            fdl_times_1: new Date().getTime(),
            fdl_refresh_1: 0,

            fdl_title_2: '2x',
            fdl_value_2: 0,
            fdl_time_2: new Date().getTime(),
            fdl_times_2: new Date().getTime(),
            fdl_refresh_2: 0,

            fdl_title_3: '3x',
            fdl_value_3: 0,
            fdl_time_3: new Date().getTime(),
            fdl_times_3: new Date().getTime(),
            fdl_refresh_3: 0,

            fdl_title_4: '4x',
            fdl_value_4: 0,
            fdl_time_4: new Date().getTime(),
            fdl_times_4: new Date().getTime(),
            fdl_refresh_4: 0,

            fdl_title_5: '5x',
            fdl_value_5: 0,
            fdl_time_5: new Date().getTime(),
            fdl_times_5: new Date().getTime(),
            fdl_refresh_5: 0,

            fdl_title_6: '6x',
            fdl_value_6: 0,
            fdl_time_6: new Date().getTime(),
            fdl_times_6: new Date().getTime(),
            fdl_refresh_6: 0,

            fdl_title_7: '7x',
            fdl_value_7: 0,
            fdl_time_7: new Date().getTime(),
            fdl_times_7: new Date().getTime(),
            fdl_refresh_7: 0,

            fdl_title_8: '8x',
            fdl_value_8: 0,
            fdl_time_8: new Date().getTime(),
            fdl_times_8: new Date().getTime(),
            fdl_refresh_8: 0,

            fdl_title_9: '9x',
            fdl_value_9: 0,
            fdl_time_9: new Date().getTime(),
            fdl_times_9: new Date().getTime(),
            fdl_refresh_9: 0,

            fdl_title_10: '10x',
            fdl_value_10: 0,
            fdl_time_10: new Date().getTime(),
            fdl_times_10: new Date().getTime(),
            fdl_refresh_10: 0,

            fdl_title_11: '11x',
            fdl_value_11: 0,
            fdl_time_11: new Date().getTime(),
            fdl_times_11: new Date().getTime(),
            fdl_refresh_11: 0,

            fdl_title_12: '12x',
            fdl_value_12: 0,
            fdl_time_12: new Date().getTime(),
            fdl_times_12: new Date().getTime(),
            fdl_refresh_12: 0,

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

            transcript24_hs_1:'',
            transcript24_hs_2:'',
            transcript24_hs_3:'',
        }
    },
    mounted(){
        var _this = this;
        var params = {codes:'transcript24_hs_1,transcript24_hs_2,transcript24_hs_3,refresh_fdl'};
        _this.$https.get("/config/selectMap",params).then((response) => { 
            if(response.code == 1){
                _this.transcript24_hs_1 = response.data.transcript24_hs_1;
                _this.transcript24_hs_2 = response.data.transcript24_hs_2;
                _this.transcript24_hs_3 = response.data.transcript24_hs_3;
                _this.refresh_fdl = parseInt(response.data.refresh_fdl);

                _this.refresh1 = response.data.transcript24_hs_1;
                _this.refresh2 = response.data.transcript24_hs_2;
                _this.refresh3 = response.data.transcript24_hs_3;
                _this.refresh3 = response.data.transcript24_hs_3;
                _this.fdl_refresh_1 = _this.refresh_fdl;
                _this.fdl_refresh_2 = _this.refresh_fdl;
                _this.fdl_refresh_3 = _this.refresh_fdl;
                _this.fdl_refresh_4 = _this.refresh_fdl;
                _this.fdl_refresh_5 = _this.refresh_fdl;
                _this.fdl_refresh_6 = _this.refresh_fdl;
                _this.fdl_refresh_7 = _this.refresh_fdl;
                _this.fdl_refresh_8 = _this.refresh_fdl;
                _this.fdl_refresh_9 = _this.refresh_fdl;
                _this.fdl_refresh_10 = _this.refresh_fdl;
                _this.fdl_refresh_11 = _this.refresh_fdl;
                _this.fdl_refresh_12 = _this.refresh_fdl;
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
        closeCard(card){
            let _this = this;
            var list = this.fdl;
            var item = {};
            var index = '';
            for(let i=0;i<list.length;i++){
                if(list[i].title == card.title){
                    index = i;
                    item = JSON.parse(JSON.stringify(list[i]));
                    break;
                }
            }
            let nowTime = this.getNowTime();
            if(item){
                item.value = this.refresh_fdl;
                item.time = nowTime;
                item.times = nowTime;
                item.refresh = this.refresh_fdl;
                //list[index] = item;
            }
            this.fdl.splice(index, 1, item)
            this.$set(_this.fdl,index,item);
            card.removeRefreshAnimation(500);
        },
        closeFdlCard1(card){let nowTime = this.getNowTime();this.fdl_value_1=0;this.fdl_time_1=nowTime;this.fdl_times_1=nowTime;card.removeRefreshAnimation(500);},
        closeFdlCard2(card){let nowTime = this.getNowTime();this.fdl_value_2=0;this.fdl_time_2=nowTime;this.fdl_times_2=nowTime;card.removeRefreshAnimation(500);},
        closeFdlCard3(card){let nowTime = this.getNowTime();this.fdl_value_3=0;this.fdl_time_3=nowTime;this.fdl_times_3=nowTime;card.removeRefreshAnimation(500);},
        closeFdlCard4(card){let nowTime = this.getNowTime();this.fdl_value_4=0;this.fdl_time_4=nowTime;this.fdl_times_4=nowTime;card.removeRefreshAnimation(500);},
        closeFdlCard5(card){let nowTime = this.getNowTime();this.fdl_value_5=0;this.fdl_time_5=nowTime;this.fdl_times_5=nowTime;card.removeRefreshAnimation(500);},
        closeFdlCard6(card){let nowTime = this.getNowTime();this.fdl_value_6=0;this.fdl_time_6=nowTime;this.fdl_times_6=nowTime;card.removeRefreshAnimation(500);},
        closeFdlCard7(card){let nowTime = this.getNowTime();this.fdl_value_7=0;this.fdl_time_7=nowTime;this.fdl_times_7=nowTime;card.removeRefreshAnimation(500);},
        closeFdlCard8(card){let nowTime = this.getNowTime();this.fdl_value_8=0;this.fdl_time_8=nowTime;this.fdl_times_8=nowTime;card.removeRefreshAnimation(500);},
        closeFdlCard9(card){let nowTime = this.getNowTime();this.fdl_value_9=0;this.fdl_time_9=nowTime;this.fdl_times_9=nowTime;card.removeRefreshAnimation(500);},
        closeFdlCard10(card){let nowTime = this.getNowTime();this.fdl_value_10=0;this.fdl_time_10=nowTime;this.fdl_times_10=nowTime;card.removeRefreshAnimation(500);},
        closeFdlCard11(card){let nowTime = this.getNowTime();this.fdl_value_11=0;this.fdl_time_11=nowTime;this.fdl_times_11=nowTime;card.removeRefreshAnimation(500);},
        closeFdlCard12(card){let nowTime = this.getNowTime();this.fdl_value_12=0;this.fdl_time_12=nowTime;this.fdl_times_12=nowTime;card.removeRefreshAnimation(500);},
        closeCardAnimation1(card){
            let nowTime = this.getNowTime();
            this.value1 = 0;
            this.time1 = nowTime;
            this.times1 = nowTime;
            this.refresh1 = this.transcript24_hs_1;
            this.activeClass1 = '';
            card.removeRefreshAnimation(500);
        },
        closeCardAnimation2(card){
            let nowTime = this.getNowTime();
            this.value2 = 0;
            this.time2 = nowTime;
            this.times2 = nowTime;
            this.refresh2 = this.transcript24_hs_2;
            this.activeClass2 = '';
            card.removeRefreshAnimation(500);
        },
        closeCardAnimation3(card){
            let nowTime = this.getNowTime();
            this.value3 = 0;
            this.time3 = nowTime;
            this.times3 = nowTime;
            this.refresh3 = this.transcript24_hs_3;
            this.activeClass3 = '';
            card.removeRefreshAnimation(500);
        },
        cutTime0(type){
            let value=0;
            let time=0;
            let times=0;
            if(type==1){value = this.fdl_value_1;time = this.fdl_time_1;times = this.fdl_times_1;}
            else if(type==2){value = this.fdl_value_2;time = this.fdl_time_2;times = this.fdl_times_2;}
            else if(type==3){value = this.fdl_value_3;time = this.fdl_time_3;times = this.fdl_times_3;}
            else if(type==4){value = this.fdl_value_4;time = this.fdl_time_4;times = this.fdl_times_4;}
            else if(type==5){value = this.fdl_value_5;time = this.fdl_time_5;times = this.fdl_times_5;}
            else if(type==6){value = this.fdl_value_6;time = this.fdl_time_6;times = this.fdl_times_6;}
            else if(type==7){value = this.fdl_value_7;time = this.fdl_time_7;times = this.fdl_times_7;}
            else if(type==8){value = this.fdl_value_8;time = this.fdl_time_8;times = this.fdl_times_8;}
            else if(type==9){value = this.fdl_value_9;time = this.fdl_time_9;times = this.fdl_times_9;}
            else if(type==10){value = this.fdl_value_10;time = this.fdl_time_10;times = this.fdl_times_10;}
            else if(type==11){value = this.fdl_value_11;time = this.fdl_time_11;times = this.fdl_times_11;}
            else if(type==12){value = this.fdl_value_12;time = this.fdl_time_12;times = this.fdl_times_12;}
            let nowTime = new Date().getTime();
            let refresh = this.refresh_fdl;
            if(nowTime - times >= refresh){
                times = nowTime - refresh;
                time = times;
                value = 0;
            }else{
                times -= 60000;
                time = times;
                value = nowTime - times;
            }
            if(type==1){this.fdl_value_1 = value;this.fdl_time_1 = time;this.fdl_times_1 = times;}
            else if(type==2){this.fdl_value_2 = value;this.fdl_time_2 = time;this.fdl_times_2 = times;}
            else if(type==3){this.fdl_value_3 = value;this.fdl_time_3 = time;this.fdl_times_3 = times;}
            else if(type==4){this.fdl_value_4 = value;this.fdl_time_4 = time;this.fdl_times_4 = times;}
            else if(type==5){this.fdl_value_5 = value;this.fdl_time_5 = time;this.fdl_times_5 = times;}
            else if(type==6){this.fdl_value_6 = value;this.fdl_time_6 = time;this.fdl_times_6 = times;}
            else if(type==7){this.fdl_value_7 = value;this.fdl_time_7 = time;this.fdl_times_7 = times;}
            else if(type==8){this.fdl_value_8 = value;this.fdl_time_8 = time;this.fdl_times_8 = times;}
            else if(type==9){this.fdl_value_9 = value;this.fdl_time_9 = time;this.fdl_times_9 = times;}
            else if(type==10){this.fdl_value_10 = value;this.fdl_time_10 = time;this.fdl_times_10 = times;}
            else if(type==11){this.fdl_value_11 = value;this.fdl_time_11 = time;this.fdl_times_11 = times;}
            else if(type==12){this.fdl_value_12 = value;this.fdl_time_12 = time;this.fdl_times_12 = times;}
        },
        addTime0(type){
            let value=0;
            let time=0;
            let times=0;
            if(type==1){value = this.fdl_value_1;time = this.fdl_time_1;times = this.fdl_times_1;}
            else if(type==2){value = this.fdl_value_2;time = this.fdl_time_2;times = this.fdl_times_2;}
            else if(type==3){value = this.fdl_value_3;time = this.fdl_time_3;times = this.fdl_times_3;}
            else if(type==4){value = this.fdl_value_4;time = this.fdl_time_4;times = this.fdl_times_4;}
            else if(type==5){value = this.fdl_value_5;time = this.fdl_time_5;times = this.fdl_times_5;}
            else if(type==6){value = this.fdl_value_6;time = this.fdl_time_6;times = this.fdl_times_6;}
            else if(type==7){value = this.fdl_value_7;time = this.fdl_time_7;times = this.fdl_times_7;}
            else if(type==8){value = this.fdl_value_8;time = this.fdl_time_8;times = this.fdl_times_8;}
            else if(type==9){value = this.fdl_value_9;time = this.fdl_time_9;times = this.fdl_times_9;}
            else if(type==10){value = this.fdl_value_10;time = this.fdl_time_10;times = this.fdl_times_10;}
            else if(type==11){value = this.fdl_value_11;time = this.fdl_time_11;times = this.fdl_times_11;}
            else if(type==12){value = this.fdl_value_12;time = this.fdl_time_12;times = this.fdl_times_12;}
            let refresh = this.refresh_fdl;
            let nowTime = new Date().getTime();
            if(nowTime - times < 60000){
                times = nowTime;
                time = times;
                value = refresh;
            }else{
                times += 60000;
                time = times;
                value = nowTime - times;
            }
            if(type==1){this.fdl_value_1 = value;this.fdl_time_1 = time;this.fdl_times_1 = times;}
            else if(type==2){this.fdl_value_2 = value;this.fdl_time_2 = time;this.fdl_times_2 = times;}
            else if(type==3){this.fdl_value_3 = value;this.fdl_time_3 = time;this.fdl_times_3 = times;}
            else if(type==4){this.fdl_value_4 = value;this.fdl_time_4 = time;this.fdl_times_4 = times;}
            else if(type==5){this.fdl_value_5 = value;this.fdl_time_5 = time;this.fdl_times_5 = times;}
            else if(type==6){this.fdl_value_6 = value;this.fdl_time_6 = time;this.fdl_times_6 = times;}
            else if(type==7){this.fdl_value_7 = value;this.fdl_time_7 = time;this.fdl_times_7 = times;}
            else if(type==8){this.fdl_value_8 = value;this.fdl_time_8 = time;this.fdl_times_8 = times;}
            else if(type==9){this.fdl_value_9 = value;this.fdl_time_9 = time;this.fdl_times_9 = times;}
            else if(type==10){this.fdl_value_10 = value;this.fdl_time_10 = time;this.fdl_times_10 = times;}
            else if(type==11){this.fdl_value_11 = value;this.fdl_time_11 = time;this.fdl_times_11 = times;}
            else if(type==12){this.fdl_value_12 = value;this.fdl_time_12 = time;this.fdl_times_12 = times;}
        },
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
        },
        fdl_time_1(val){let _this = this;let timestamp = _this.strToTime(val);_this.fdl_value_1 = _this.refresh_fdl - (_this.getNowTime() - timestamp);},
        fdl_time_2(val){let _this = this;let timestamp = _this.strToTime(val);_this.fdl_value_2 = _this.refresh_fdl - (_this.getNowTime() - timestamp);},
        fdl_time_3(val){let _this = this;let timestamp = _this.strToTime(val);_this.fdl_value_3 = _this.refresh_fdl - (_this.getNowTime() - timestamp);},
        fdl_time_4(val){let _this = this;let timestamp = _this.strToTime(val);_this.fdl_value_4 = _this.refresh_fdl - (_this.getNowTime() - timestamp);},
        fdl_time_5(val){let _this = this;let timestamp = _this.strToTime(val);_this.fdl_value_5 = _this.refresh_fdl - (_this.getNowTime() - timestamp);},
        fdl_time_6(val){let _this = this;let timestamp = _this.strToTime(val);_this.fdl_value_6 = _this.refresh_fdl - (_this.getNowTime() - timestamp);},
        fdl_time_7(val){let _this = this;let timestamp = _this.strToTime(val);_this.fdl_value_7 = _this.refresh_fdl - (_this.getNowTime() - timestamp);},
        fdl_time_8(val){let _this = this;let timestamp = _this.strToTime(val);_this.fdl_value_8 = _this.refresh_fdl - (_this.getNowTime() - timestamp);},
        fdl_time_9(val){let _this = this;let timestamp = _this.strToTime(val);_this.fdl_value_9 = _this.refresh_fdl - (_this.getNowTime() - timestamp);},
        fdl_time_10(val){let _this = this;let timestamp = _this.strToTime(val);_this.fdl_value_10 = _this.refresh_fdl - (_this.getNowTime() - timestamp);},
        fdl_time_11(val){let _this = this;let timestamp = _this.strToTime(val);_this.fdl_value_11 = _this.refresh_fdl - (_this.getNowTime() - timestamp);},
        fdl_time_12(val){let _this = this;let timestamp = _this.strToTime(val);_this.fdl_value_12 = _this.refresh_fdl - (_this.getNowTime() - timestamp);},
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