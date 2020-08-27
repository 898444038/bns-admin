<template>
    <div>
        <div class="vx-row">
            <div class="vx-col w-1/1 md:w-1/1 xl:w-1/1">
                <vx-card title="任务池">
                    <div class="flex justify-between flex-wrap">
                        <draggable :move="onMove" @start="isDragging=true" @end="isDragging=false" :list="taskList" :group="{name:'tags',  pull:'clone', put:false }" class="p-2 cursor-move">
                            <vs-chip v-for="(item, index) in taskList" :key="index" color="primary"> {{ item.name }} </vs-chip>
                        </draggable>
                    </div>
                </vx-card>
            </div>
        </div>
        <vs-divider color="warning" class="mt-30"> 挑战 </vs-divider>
        <div class="vx-row">
            <div class="vx-col w-1/2 md:w-1/3 xl:w-1/4">
                <vx-card title="任务" collapse-action refresh-content-action @refresh="closeCardAnimation1">
                    <div class="flex justify-between flex-wrap">
                        <draggable :move="onMove" :list="data_1" :group="{name:'tags',pull:false}" class="p-2 cursor-move">
                            <vs-chip @click="remove(data_1,item)" v-for="(item, index) in data_1" :color="item.color" :key="index" closable> {{ item.name }} </vs-chip>
                        </draggable>
                    </div>
                </vx-card>
            </div>
            <div class="vx-col w-1/2 md:w-1/3 xl:w-1/4">
                <vx-card title="入门" collapse-action refresh-content-action @refresh="closeCardAnimation2">
                    <div class="flex justify-between flex-wrap">
                        <draggable :move="onMove" :list="data_2" :group="{name:'tags',pull:false}" class="p-2 cursor-move">
                            <vs-chip @click="remove(data_2,item)" v-for="(item, index) in data_2" :color="item.color" :key="index" closable> {{ item.name }} </vs-chip>
                        </draggable>
                    </div>
                </vx-card>
            </div>
            <div class="vx-col w-1/2 md:w-1/3 xl:w-1/4">
                <vx-card title="普通" collapse-action refresh-content-action @refresh="closeCardAnimation3">
                    <div class="flex justify-between flex-wrap">
                        <draggable :move="onMove" :list="data_3" :group="{name:'tags',pull:false}" class="p-2 cursor-move">
                            <vs-chip @click="remove(data_3,item)" v-for="(item, index) in data_3" :color="item.color" :key="index" closable> {{ item.name }} </vs-chip>
                        </draggable>
                    </div>
                </vx-card>
            </div>
            <div class="vx-col w-1/2 md:w-1/3 xl:w-1/4">
                <vx-card title="熟练" collapse-action refresh-content-action @refresh="closeCardAnimation4">
                    <div class="flex justify-between flex-wrap">
                        <draggable :move="onMove" :list="data_4" :group="{name:'tags',pull:false}" class="p-2 cursor-move">
                            <vs-chip @click="remove(data_4,item)" v-for="(item, index) in data_4" :color="item.color" :key="index" closable> {{ item.name }} </vs-chip>
                        </draggable>
                    </div>
                </vx-card>
            </div>
        </div>
        <div class="vx-row">
            <div class="vx-col w-1/1 md:w-1/1 xl:w-1/1">
                <vs-input-number :min="min" :max="max" :size="size" :step="step" label="最大任务数:" v-model="count"/>
                <vs-button @click="countChallenge" color="primary" icon-pack="feather" icon="icon-edit-2" style="margin: 0px 13px;width: 100%;">计算</vs-button>
            </div>
        </div>
    </div>
</template>
<script>
import draggable from 'vuedraggable'
import Prism from 'vue-prism-component'
export default {
    components: {
        draggable,
        Prism
    },
    data(){
        return {
            isDragging: false,
            resultData: '',
            taskList: [],
            data_1: [],
            data_2: [],
            data_3: [],
            data_4: [],

            min: 4,
            max: 10,
            count: 4,
            step: 1,
            size: '',//medium,small,mini
        }
    },
    mounted(){
        this.getTaskList();
        this.getWeekList();
    },
    methods:{
        countChallenge(){
            var _this = this;
            let ids1 = [];
            for(let i=0;i<_this.data_1.length;i++){
                ids1.push(_this.data_1[i].id);
            }
            let ids2 = [];
            for(let i=0;i<_this.data_2.length;i++){
                ids2.push(_this.data_2[i].id);
            }
            let ids3 = [];
            for(let i=0;i<_this.data_3.length;i++){
                ids3.push(_this.data_3[i].id);
            }
            let ids4 = [];
            for(let i=0;i<_this.data_4.length;i++){
                ids4.push(_this.data_4[i].id);
            }
            var params = {
                ids1: ids1.join(","),
                ids2: ids2.join(","),
                ids3: ids3.join(","),
                ids4: ids4.join(","),
                count: _this.count
            };
            _this.$https.post("/tools/countChallenge",params).then((response) => { 
                if(response.code == 1){
                    console.log("countChallenge",response);
                }else{
                    _this.$vs.dialog({color: 'danger',title: '警告',text: response.msg,accept: function(){}});
                }
            }).catch((error) => { 
                console.log(error);
            });
        },
        onMove({ relatedContext, draggedContext }) {
            const relatedElement = relatedContext.list;
            const draggedElement = draggedContext.element;
            let flag = true;
            for(let i=0;i<relatedElement.length;i++){
                if(relatedElement[i].id == draggedElement.id){
                    flag = false;
                }
            }
            return flag;
        },
        getTaskList(){
            var _this = this;
            var params = {};
            _this.$https.get("/task/challenge/selectList",params).then((response) => { 
                if(response.code == 1){
                    _this.taskList = response.data;
                    for(let i=0;i<_this.taskList.length;i++){
                        _this.taskList[i].color = 'primary';
                    }
                }else{
                    _this.$vs.dialog({
                        color: 'danger',
                        title: '警告',
                        text: response.msg,
                        accept: function(){

                        }
                    })
                }
            }).catch((error) => { 
                console.log(error) 
            })
        },
        getWeekList(){
            var _this = this;
            _this.$https.get("/task/table/selectListByWeek",{}).then((response) => { 
                if(response.code == 1){
                    console.log(response)
                    let result = response.data;
                    let obj = JSON.parse(JSON.stringify(response.data));
                    _this.resultData = obj;
                    _this.data_1 = result.data_1;
                    _this.data_2 = result.data_2;
                    _this.data_3 = result.data_3;
                    _this.data_4 = result.data_4;
                }else{
                    _this.$vs.dialog({
                        color: 'danger',
                        title: '警告',
                        text: response.msg,
                        accept: function(){

                        }
                    })
                }
            }).catch((error) => { 
                console.log(error) 
            })
        },
        closeCardAnimation1(card){
            let _this = this;
            let result = this.resultData;
            _this.data_1 = JSON.parse(JSON.stringify(result.data_1));
            card.removeRefreshAnimation(500);
        },
        closeCardAnimation2(card){
            let _this = this;
            let result = this.resultData;
            _this.data_2 = JSON.parse(JSON.stringify(result.data_2));
            card.removeRefreshAnimation(500);
        },
        closeCardAnimation3(card){
            let _this = this;
            let result = this.resultData;
            _this.data_3 = JSON.parse(JSON.stringify(result.data_3));
            card.removeRefreshAnimation(500);
        },
        closeCardAnimation4(card){
            let _this = this;
            let result = this.resultData;
            _this.data_4 = JSON.parse(JSON.stringify(result.data_4));
            card.removeRefreshAnimation(500);
        }
    }
}
</script>
<style scoped>

</style>