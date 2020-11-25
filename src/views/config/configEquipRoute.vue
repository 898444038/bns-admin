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
                <vs-tab code="0" label="武器">
                  <div class="vx-row" style="margin-top: 20px;">
                    <div v-for="(item,index) in lineData0" :key="index" class="vx-col w-full sm:w-1/2 lg:w-1/2 mb-base">
                      <vx-card :title="item.startItemName+' -> '+item.endItemName">
                        <div class="vx-row" style="padding: 5px;margin: 6px 0;background-color: #eee;">
                          <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"></div>
                          <div class="vx-col w-full md:w-6/12 lg:w-6/12 xl:w-6/12">名称</div>
                          <div class="vx-col w-full md:w-4/12 lg:w-4/12 xl:w-4/12">数量</div>
                          <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"></div>
                        </div>
                        <SlickList :lockToContainerEdges="true" class="list" lockAxis="y" v-model="item.equipMaterialList" style="border: 0;">
                          <SlickItem class="list-item" v-for="(item2, index2) in item.equipMaterialList" :index="index2" :key="index2">
                            <div class="vx-row" style="margin: 0;">
                              <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"><i class="feather icon-move" style="font-size: 24px;line-height: 36px;cursor: move;"></i></div>
                              <div class="vx-col w-full md:w-6/12 lg:w-6/12 xl:w-6/12">
                                <v-select label="name" placeholder='材料' v-model='item2.material' :options="materials" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
                              </div>
                              <div class="vx-col w-full md:w-4/12 lg:w-4/12 xl:w-4/12">
                                <vs-input class="inputx" placeholder="数量" v-model="item2.count" style="width: 100%;"/>
                              </div>
                              <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"><vs-button type="falt" @click="remove(0,index,index2)" style="border: 0;padding:0;"><i class="feather icon-trash-2" style="font-size: 24px;line-height: 36px;cursor:pointer;color: #333;"></i></vs-button></div>
                            </div>
                          </SlickItem>
                        </SlickList>
                        <div class="flex justify-between flex-wrap" style="margin-top: 8px;">
                          <vs-button type="relief" size="small" color="danger" class="mr-3 mb-2 centery-1" @click="add(item)">新增</vs-button>
                          <vs-button type="relief" size="small" class="mb-2" @click="save(item)">保存</vs-button>
                        </div>
                      </vx-card>
                    </div>
                  </div>
                </vs-tab>
                <vs-tab code="1" label="元气石">
                  <div class="vx-row" style="margin-top: 20px;">
                    <div v-for="(item,index) in lineData1" :key="index" class="vx-col w-full sm:w-1/2 lg:w-1/2 mb-base">
                      <vx-card :title="item.startItemName+' -> '+item.endItemName">
                        <div class="vx-row" style="padding: 5px;margin: 6px 0;background-color: #eee;">
                          <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"></div>
                          <div class="vx-col w-full md:w-6/12 lg:w-6/12 xl:w-6/12">名称</div>
                          <div class="vx-col w-full md:w-4/12 lg:w-4/12 xl:w-4/12">数量</div>
                          <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"></div>
                        </div>
                        <SlickList :lockToContainerEdges="true" class="list" lockAxis="y" v-model="item.equipMaterialList" style="border: 0;">
                          <SlickItem class="list-item" v-for="(item2, index2) in item.equipMaterialList" :index="index2" :key="index2">
                            <div class="vx-row" style="margin: 0;">
                              <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"><i class="feather icon-move" style="font-size: 24px;line-height: 36px;cursor: move;"></i></div>
                              <div class="vx-col w-full md:w-6/12 lg:w-6/12 xl:w-6/12">
                                <v-select label="name" placeholder='材料' v-model='item2.material' :options="materials" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
                              </div>
                              <div class="vx-col w-full md:w-4/12 lg:w-4/12 xl:w-4/12">
                                <vs-input class="inputx" placeholder="数量" v-model="item2.count" style="width: 100%;"/>
                              </div>
                              <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"><vs-button type="falt" @click="remove(1,index,index2)" style="border: 0;padding:0;"><i class="feather icon-trash-2" style="font-size: 24px;line-height: 36px;cursor:pointer;color: #333;"></i></vs-button></div>
                            </div>
                          </SlickItem>
                        </SlickList>
                        <div class="flex justify-between flex-wrap" style="margin-top: 8px;">
                          <vs-button type="relief" size="small" color="danger" class="mr-3 mb-2 centery-1" @click="add(item)">新增</vs-button>
                          <vs-button type="relief" size="small" class="mb-2" @click="save(item)">保存</vs-button>
                        </div>
                      </vx-card>
                    </div>
                  </div>
                </vs-tab>
                <vs-tab code="2" label="真气石">
                  <div class="vx-row" style="margin-top: 20px;">
                    <div v-for="(item,index) in lineData2" :key="index" class="vx-col w-full sm:w-1/2 lg:w-1/2 mb-base">
                      <vx-card :title="item.startItemName+' -> '+item.endItemName">
                        <div class="vx-row" style="padding: 5px;margin: 6px 0;background-color: #eee;">
                          <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"></div>
                          <div class="vx-col w-full md:w-6/12 lg:w-6/12 xl:w-6/12">名称</div>
                          <div class="vx-col w-full md:w-4/12 lg:w-4/12 xl:w-4/12">数量</div>
                          <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"></div>
                        </div>
                        <SlickList :lockToContainerEdges="true" class="list" lockAxis="y" v-model="item.equipMaterialList" style="border: 0;">
                          <SlickItem class="list-item" v-for="(item2, index2) in item.equipMaterialList" :index="index2" :key="index2">
                            <div class="vx-row" style="margin: 0;">
                              <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"><i class="feather icon-move" style="font-size: 24px;line-height: 36px;cursor: move;"></i></div>
                              <div class="vx-col w-full md:w-6/12 lg:w-6/12 xl:w-6/12">
                                <v-select label="name" placeholder='材料' v-model='item2.material' :options="materials" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
                              </div>
                              <div class="vx-col w-full md:w-4/12 lg:w-4/12 xl:w-4/12">
                                <vs-input class="inputx" placeholder="数量" v-model="item2.count" style="width: 100%;"/>
                              </div>
                              <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"><vs-button type="falt" @click="remove(2,index,index2)" style="border: 0;padding:0;"><i class="feather icon-trash-2" style="font-size: 24px;line-height: 36px;cursor:pointer;color: #333;"></i></vs-button></div>
                            </div>
                          </SlickItem>
                        </SlickList>
                        <div class="flex justify-between flex-wrap" style="margin-top: 8px;">
                          <vs-button type="relief" size="small" color="danger" class="mr-3 mb-2 centery-1" @click="add(item)">新增</vs-button>
                          <vs-button type="relief" size="small" class="mb-2" @click="save(item)">保存</vs-button>
                        </div>
                      </vx-card>
                    </div>
                  </div>
                </vs-tab>
                <vs-tab code="3" label="项链">
                  <div class="vx-row" style="margin-top: 20px;">
                    <div v-for="(item,index) in lineData3" :key="index" class="vx-col w-full sm:w-1/2 lg:w-1/2 mb-base">
                      <vx-card :title="item.startItemName+' -> '+item.endItemName">
                        <div class="vx-row" style="padding: 5px;margin: 6px 0;background-color: #eee;">
                          <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"></div>
                          <div class="vx-col w-full md:w-6/12 lg:w-6/12 xl:w-6/12">名称</div>
                          <div class="vx-col w-full md:w-4/12 lg:w-4/12 xl:w-4/12">数量</div>
                          <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"></div>
                        </div>
                        <SlickList :lockToContainerEdges="true" class="list" lockAxis="y" v-model="item.equipMaterialList" style="border: 0;">
                          <SlickItem class="list-item" v-for="(item2, index2) in item.equipMaterialList" :index="index2" :key="index2">
                            <div class="vx-row" style="margin: 0;">
                              <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"><i class="feather icon-move" style="font-size: 24px;line-height: 36px;cursor: move;"></i></div>
                              <div class="vx-col w-full md:w-6/12 lg:w-6/12 xl:w-6/12">
                                <v-select label="name" placeholder='材料' v-model='item2.material' :options="materials" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
                              </div>
                              <div class="vx-col w-full md:w-4/12 lg:w-4/12 xl:w-4/12">
                                <vs-input class="inputx" placeholder="数量" v-model="item2.count" style="width: 100%;"/>
                              </div>
                              <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"><vs-button type="falt" @click="remove(3,index,index2)" style="border: 0;padding:0;"><i class="feather icon-trash-2" style="font-size: 24px;line-height: 36px;cursor:pointer;color: #333;"></i></vs-button></div>
                            </div>
                          </SlickItem>
                        </SlickList>
                        <div class="flex justify-between flex-wrap" style="margin-top: 8px;">
                          <vs-button type="relief" size="small" color="danger" class="mr-3 mb-2 centery-1" @click="add(item)">新增</vs-button>
                          <vs-button type="relief" size="small" class="mb-2" @click="save(item)">保存</vs-button>
                        </div>
                      </vx-card>
                    </div>
                  </div>
                </vs-tab>
                <vs-tab code="4" label="耳环">
                  <div class="vx-row" style="margin-top: 20px;">
                    <div v-for="(item,index) in lineData4" :key="index" class="vx-col w-full sm:w-1/2 lg:w-1/2 mb-base">
                      <vx-card :title="item.startItemName+' -> '+item.endItemName">
                        <div class="vx-row" style="padding: 5px;margin: 6px 0;background-color: #eee;">
                          <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"></div>
                          <div class="vx-col w-full md:w-6/12 lg:w-6/12 xl:w-6/12">名称</div>
                          <div class="vx-col w-full md:w-4/12 lg:w-4/12 xl:w-4/12">数量</div>
                          <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"></div>
                        </div>
                        <SlickList :lockToContainerEdges="true" class="list" lockAxis="y" v-model="item.equipMaterialList" style="border: 0;">
                          <SlickItem class="list-item" v-for="(item2, index2) in item.equipMaterialList" :index="index2" :key="index2">
                            <div class="vx-row" style="margin: 0;">
                              <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"><i class="feather icon-move" style="font-size: 24px;line-height: 36px;cursor: move;"></i></div>
                              <div class="vx-col w-full md:w-6/12 lg:w-6/12 xl:w-6/12">
                                <v-select label="name" placeholder='材料' v-model='item2.material' :options="materials" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
                              </div>
                              <div class="vx-col w-full md:w-4/12 lg:w-4/12 xl:w-4/12">
                                <vs-input class="inputx" placeholder="数量" v-model="item2.count" style="width: 100%;"/>
                              </div>
                              <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"><vs-button type="falt" @click="remove(4,index,index2)" style="border: 0;padding:0;"><i class="feather icon-trash-2" style="font-size: 24px;line-height: 36px;cursor:pointer;color: #333;"></i></vs-button></div>
                            </div>
                          </SlickItem>
                        </SlickList>
                        <div class="flex justify-between flex-wrap" style="margin-top: 8px;">
                          <vs-button type="relief" size="small" color="danger" class="mr-3 mb-2 centery-1" @click="add(item)">新增</vs-button>
                          <vs-button type="relief" size="small" class="mb-2" @click="save(item)">保存</vs-button>
                        </div>
                      </vx-card>
                    </div>
                  </div>
                </vs-tab>
                <vs-tab code="5" label="戒指">
                  <div class="vx-row" style="margin-top: 20px;">
                    <div v-for="(item,index) in lineData5" :key="index" class="vx-col w-full sm:w-1/2 lg:w-1/2 mb-base">
                      <vx-card :title="item.startItemName+' -> '+item.endItemName">
                        <div class="vx-row" style="padding: 5px;margin: 6px 0;background-color: #eee;">
                          <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"></div>
                          <div class="vx-col w-full md:w-6/12 lg:w-6/12 xl:w-6/12">名称</div>
                          <div class="vx-col w-full md:w-4/12 lg:w-4/12 xl:w-4/12">数量</div>
                          <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"></div>
                        </div>
                        <SlickList :lockToContainerEdges="true" class="list" lockAxis="y" v-model="item.equipMaterialList" style="border: 0;">
                          <SlickItem class="list-item" v-for="(item2, index2) in item.equipMaterialList" :index="index2" :key="index2">
                            <div class="vx-row" style="margin: 0;">
                              <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"><i class="feather icon-move" style="font-size: 24px;line-height: 36px;cursor: move;"></i></div>
                              <div class="vx-col w-full md:w-6/12 lg:w-6/12 xl:w-6/12">
                                <v-select label="name" placeholder='材料' v-model='item2.material' :options="materials" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
                              </div>
                              <div class="vx-col w-full md:w-4/12 lg:w-4/12 xl:w-4/12">
                                <vs-input class="inputx" placeholder="数量" v-model="item2.count" style="width: 100%;"/>
                              </div>
                              <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"><vs-button type="falt" @click="remove(5,index,index2)" style="border: 0;padding:0;"><i class="feather icon-trash-2" style="font-size: 24px;line-height: 36px;cursor:pointer;color: #333;"></i></vs-button></div>
                            </div>
                          </SlickItem>
                        </SlickList>
                        <div class="flex justify-between flex-wrap" style="margin-top: 8px;">
                          <vs-button type="relief" size="small" color="danger" class="mr-3 mb-2 centery-1" @click="add(item)">新增</vs-button>
                          <vs-button type="relief" size="small" class="mb-2" @click="save(item)">保存</vs-button>
                        </div>
                      </vx-card>
                    </div>
                  </div>
                </vs-tab>
                <vs-tab code="6" label="手镯">
                  <div class="vx-row" style="margin-top: 20px;">
                    <div v-for="(item,index) in lineData6" :key="index" class="vx-col w-full sm:w-1/2 lg:w-1/2 mb-base">
                      <vx-card :title="item.startItemName+' -> '+item.endItemName">
                        <div class="vx-row" style="padding: 5px;margin: 6px 0;background-color: #eee;">
                          <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"></div>
                          <div class="vx-col w-full md:w-6/12 lg:w-6/12 xl:w-6/12">名称</div>
                          <div class="vx-col w-full md:w-4/12 lg:w-4/12 xl:w-4/12">数量</div>
                          <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"></div>
                        </div>
                        <SlickList :lockToContainerEdges="true" class="list" lockAxis="y" v-model="item.equipMaterialList" style="border: 0;">
                          <SlickItem class="list-item" v-for="(item2, index2) in item.equipMaterialList" :index="index2" :key="index2">
                            <div class="vx-row" style="margin: 0;">
                              <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"><i class="feather icon-move" style="font-size: 24px;line-height: 36px;cursor: move;"></i></div>
                              <div class="vx-col w-full md:w-6/12 lg:w-6/12 xl:w-6/12">
                                <v-select label="name" placeholder='材料' v-model='item2.material' :options="materials" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
                              </div>
                              <div class="vx-col w-full md:w-4/12 lg:w-4/12 xl:w-4/12">
                                <vs-input class="inputx" placeholder="数量" v-model="item2.count" style="width: 100%;"/>
                              </div>
                              <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"><vs-button type="falt" @click="remove(6,index,index2)" style="border: 0;padding:0;"><i class="feather icon-trash-2" style="font-size: 24px;line-height: 36px;cursor:pointer;color: #333;"></i></vs-button></div>
                            </div>
                          </SlickItem>
                        </SlickList>
                        <div class="flex justify-between flex-wrap" style="margin-top: 8px;">
                          <vs-button type="relief" size="small" color="danger" class="mr-3 mb-2 centery-1" @click="add(item)">新增</vs-button>
                          <vs-button type="relief" size="small" class="mb-2" @click="save(item)">保存</vs-button>
                        </div>
                      </vx-card>
                    </div>
                  </div>
                </vs-tab>
                <vs-tab code="7" label="腰带">
                  <div class="vx-row" style="margin-top: 20px;">
                    <div v-for="(item,index) in lineData7" :key="index" class="vx-col w-full sm:w-1/2 lg:w-1/2 mb-base">
                      <vx-card :title="item.startItemName+' -> '+item.endItemName">
                        <div class="vx-row" style="padding: 5px;margin: 6px 0;background-color: #eee;">
                          <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"></div>
                          <div class="vx-col w-full md:w-6/12 lg:w-6/12 xl:w-6/12">名称</div>
                          <div class="vx-col w-full md:w-4/12 lg:w-4/12 xl:w-4/12">数量</div>
                          <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"></div>
                        </div>
                        <SlickList :lockToContainerEdges="true" class="list" lockAxis="y" v-model="item.equipMaterialList" style="border: 0;">
                          <SlickItem class="list-item" v-for="(item2, index2) in item.equipMaterialList" :index="index2" :key="index2">
                            <div class="vx-row" style="margin: 0;">
                              <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"><i class="feather icon-move" style="font-size: 24px;line-height: 36px;cursor: move;"></i></div>
                              <div class="vx-col w-full md:w-6/12 lg:w-6/12 xl:w-6/12">
                                <v-select label="name" placeholder='材料' v-model='item2.material' :options="materials" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
                              </div>
                              <div class="vx-col w-full md:w-4/12 lg:w-4/12 xl:w-4/12">
                                <vs-input class="inputx" placeholder="数量" v-model="item2.count" style="width: 100%;"/>
                              </div>
                              <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"><vs-button type="falt" @click="remove(7,index,index2)" style="border: 0;padding:0;"><i class="feather icon-trash-2" style="font-size: 24px;line-height: 36px;cursor:pointer;color: #333;"></i></vs-button></div>
                            </div>
                          </SlickItem>
                        </SlickList>
                        <div class="flex justify-between flex-wrap" style="margin-top: 8px;">
                          <vs-button type="relief" size="small" color="danger" class="mr-3 mb-2 centery-1" @click="add(item)">新增</vs-button>
                          <vs-button type="relief" size="small" class="mb-2" @click="save(item)">保存</vs-button>
                        </div>
                      </vx-card>
                    </div>
                  </div>
                </vs-tab>
                <vs-tab code="8" label="手套">
                  <div class="vx-row" style="margin-top: 20px;">
                    <div v-for="(item,index) in lineData8" :key="index" class="vx-col w-full sm:w-1/2 lg:w-1/2 mb-base">
                      <vx-card :title="item.startItemName+' -> '+item.endItemName">
                        <div class="vx-row" style="padding: 5px;margin: 6px 0;background-color: #eee;">
                          <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"></div>
                          <div class="vx-col w-full md:w-6/12 lg:w-6/12 xl:w-6/12">名称</div>
                          <div class="vx-col w-full md:w-4/12 lg:w-4/12 xl:w-4/12">数量</div>
                          <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"></div>
                        </div>
                        <SlickList :lockToContainerEdges="true" class="list" lockAxis="y" v-model="item.equipMaterialList" style="border: 0;">
                          <SlickItem class="list-item" v-for="(item2, index2) in item.equipMaterialList" :index="index2" :key="index2">
                            <div class="vx-row" style="margin: 0;">
                              <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"><i class="feather icon-move" style="font-size: 24px;line-height: 36px;cursor: move;"></i></div>
                              <div class="vx-col w-full md:w-6/12 lg:w-6/12 xl:w-6/12">
                                <v-select label="name" placeholder='材料' v-model='item2.material' :options="materials" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
                              </div>
                              <div class="vx-col w-full md:w-4/12 lg:w-4/12 xl:w-4/12">
                                <vs-input class="inputx" placeholder="数量" v-model="item2.count" style="width: 100%;"/>
                              </div>
                              <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"><vs-button type="falt" @click="remove(8,index,index2)" style="border: 0;padding:0;"><i class="feather icon-trash-2" style="font-size: 24px;line-height: 36px;cursor:pointer;color: #333;"></i></vs-button></div>
                            </div>
                          </SlickItem>
                        </SlickList>
                        <div class="flex justify-between flex-wrap" style="margin-top: 8px;">
                          <vs-button type="relief" size="small" color="danger" class="mr-3 mb-2 centery-1" @click="add(item)">新增</vs-button>
                          <vs-button type="relief" size="small" class="mb-2" @click="save(item)">保存</vs-button>
                        </div>
                      </vx-card>
                    </div>
                  </div>
                </vs-tab>
                <vs-tab code="9" label="魂">
                  <div class="vx-row" style="margin-top: 20px;">
                    <div v-for="(item,index) in lineData9" :key="index" class="vx-col w-full sm:w-1/2 lg:w-1/2 mb-base">
                      <vx-card :title="item.startItemName+' -> '+item.endItemName">
                        <div class="vx-row" style="padding: 5px;margin: 6px 0;background-color: #eee;">
                          <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"></div>
                          <div class="vx-col w-full md:w-6/12 lg:w-6/12 xl:w-6/12">名称</div>
                          <div class="vx-col w-full md:w-4/12 lg:w-4/12 xl:w-4/12">数量</div>
                          <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"></div>
                        </div>
                        <SlickList :lockToContainerEdges="true" class="list" lockAxis="y" v-model="item.equipMaterialList" style="border: 0;">
                          <SlickItem class="list-item" v-for="(item2, index2) in item.equipMaterialList" :index="index2" :key="index2">
                            <div class="vx-row" style="margin: 0;">
                              <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"><i class="feather icon-move" style="font-size: 24px;line-height: 36px;cursor: move;"></i></div>
                              <div class="vx-col w-full md:w-6/12 lg:w-6/12 xl:w-6/12">
                                <v-select label="name" placeholder='材料' v-model='item2.material' :options="materials" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
                              </div>
                              <div class="vx-col w-full md:w-4/12 lg:w-4/12 xl:w-4/12">
                                <vs-input class="inputx" placeholder="数量" v-model="item2.count" style="width: 100%;"/>
                              </div>
                              <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"><vs-button type="falt" @click="remove(9,index,index2)" style="border: 0;padding:0;"><i class="feather icon-trash-2" style="font-size: 24px;line-height: 36px;cursor:pointer;color: #333;"></i></vs-button></div>
                            </div>
                          </SlickItem>
                        </SlickList>
                        <div class="flex justify-between flex-wrap" style="margin-top: 8px;">
                          <vs-button type="relief" size="small" color="danger" class="mr-3 mb-2 centery-1" @click="add(item)">新增</vs-button>
                          <vs-button type="relief" size="small" class="mb-2" @click="save(item)">保存</vs-button>
                        </div>
                      </vx-card>
                    </div>
                  </div>
                </vs-tab>
                <vs-tab code="10" label="灵">
                  <div class="vx-row" style="margin-top: 20px;">
                    <div v-for="(item,index) in lineData10" :key="index" class="vx-col w-full sm:w-1/2 lg:w-1/2 mb-base">
                      <vx-card :title="item.startItemName+' -> '+item.endItemName">
                        <div class="vx-row" style="padding: 5px;margin: 6px 0;background-color: #eee;">
                          <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"></div>
                          <div class="vx-col w-full md:w-6/12 lg:w-6/12 xl:w-6/12">名称</div>
                          <div class="vx-col w-full md:w-4/12 lg:w-4/12 xl:w-4/12">数量</div>
                          <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"></div>
                        </div>
                        <SlickList :lockToContainerEdges="true" class="list" lockAxis="y" v-model="item.equipMaterialList" style="border: 0;">
                          <SlickItem class="list-item" v-for="(item2, index2) in item.equipMaterialList" :index="index2" :key="index2">
                            <div class="vx-row" style="margin: 0;">
                              <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"><i class="feather icon-move" style="font-size: 24px;line-height: 36px;cursor: move;"></i></div>
                              <div class="vx-col w-full md:w-6/12 lg:w-6/12 xl:w-6/12">
                                <v-select label="name" placeholder='材料' v-model='item2.material' :options="materials" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
                              </div>
                              <div class="vx-col w-full md:w-4/12 lg:w-4/12 xl:w-4/12">
                                <vs-input class="inputx" placeholder="数量" v-model="item2.count" style="width: 100%;"/>
                              </div>
                              <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"><vs-button type="falt" @click="remove(10,index,index2)" style="border: 0;padding:0;"><i class="feather icon-trash-2" style="font-size: 24px;line-height: 36px;cursor:pointer;color: #333;"></i></vs-button></div>
                            </div>
                          </SlickItem>
                        </SlickList>
                        <div class="flex justify-between flex-wrap" style="margin-top: 8px;">
                          <vs-button type="relief" size="small" color="danger" class="mr-3 mb-2 centery-1" @click="add(item)">新增</vs-button>
                          <vs-button type="relief" size="small" class="mb-2" @click="save(item)">保存</vs-button>
                        </div>
                      </vx-card>
                    </div>
                  </div>
                </vs-tab>
                <vs-tab code="11" label="守护石">
                  <div class="vx-row" style="margin-top: 20px;">
                    <div v-for="(item,index) in lineData11" :key="index" class="vx-col w-full sm:w-1/2 lg:w-1/2 mb-base">
                      <vx-card :title="item.startItemName+' -> '+item.endItemName">
                        <div class="vx-row" style="padding: 5px;margin: 6px 0;background-color: #eee;">
                          <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"></div>
                          <div class="vx-col w-full md:w-6/12 lg:w-6/12 xl:w-6/12">名称</div>
                          <div class="vx-col w-full md:w-4/12 lg:w-4/12 xl:w-4/12">数量</div>
                          <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"></div>
                        </div>
                        <SlickList :lockToContainerEdges="true" class="list" lockAxis="y" v-model="item.equipMaterialList" style="border: 0;">
                          <SlickItem class="list-item" v-for="(item2, index2) in item.equipMaterialList" :index="index2" :key="index2">
                            <div class="vx-row" style="margin: 0;">
                              <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"><i class="feather icon-move" style="font-size: 24px;line-height: 36px;cursor: move;"></i></div>
                              <div class="vx-col w-full md:w-6/12 lg:w-6/12 xl:w-6/12">
                                <v-select label="name" placeholder='材料' v-model='item2.material' :options="materials" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
                              </div>
                              <div class="vx-col w-full md:w-4/12 lg:w-4/12 xl:w-4/12">
                                <vs-input class="inputx" placeholder="数量" v-model="item2.count" style="width: 100%;"/>
                              </div>
                              <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"><vs-button type="falt" @click="remove(11,index,index2)" style="border: 0;padding:0;"><i class="feather icon-trash-2" style="font-size: 24px;line-height: 36px;cursor:pointer;color: #333;"></i></vs-button></div>
                            </div>
                          </SlickItem>
                        </SlickList>
                        <div class="flex justify-between flex-wrap" style="margin-top: 8px;">
                          <vs-button type="relief" size="small" color="danger" class="mr-3 mb-2 centery-1" @click="add(item)">新增</vs-button>
                          <vs-button type="relief" size="small" class="mb-2" @click="save(item)">保存</vs-button>
                        </div>
                      </vx-card>
                    </div>
                  </div>
                </vs-tab>
                <vs-tab code="12" label="星">
                  <div class="vx-row" style="margin-top: 20px;">
                    <div v-for="(item,index) in lineData12" :key="index" class="vx-col w-full sm:w-1/2 lg:w-1/2 mb-base">
                      <vx-card :title="item.startItemName+' -> '+item.endItemName">
                        <div class="vx-row" style="padding: 5px;margin: 6px 0;background-color: #eee;">
                          <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"></div>
                          <div class="vx-col w-full md:w-6/12 lg:w-6/12 xl:w-6/12">名称</div>
                          <div class="vx-col w-full md:w-4/12 lg:w-4/12 xl:w-4/12">数量</div>
                          <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"></div>
                        </div>
                        <SlickList :lockToContainerEdges="true" class="list" lockAxis="y" v-model="item.equipMaterialList" style="border: 0;">
                          <SlickItem class="list-item" v-for="(item2, index2) in item.equipMaterialList" :index="index2" :key="index2">
                            <div class="vx-row" style="margin: 0;">
                              <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"><i class="feather icon-move" style="font-size: 24px;line-height: 36px;cursor: move;"></i></div>
                              <div class="vx-col w-full md:w-6/12 lg:w-6/12 xl:w-6/12">
                                <v-select label="name" placeholder='材料' v-model='item2.material' :options="materials" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
                              </div>
                              <div class="vx-col w-full md:w-4/12 lg:w-4/12 xl:w-4/12">
                                <vs-input class="inputx" placeholder="数量" v-model="item2.count" style="width: 100%;"/>
                              </div>
                              <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"><vs-button type="falt" @click="remove(12,index,index2)" style="border: 0;padding:0;"><i class="feather icon-trash-2" style="font-size: 24px;line-height: 36px;cursor:pointer;color: #333;"></i></vs-button></div>
                            </div>
                          </SlickItem>
                        </SlickList>
                        <div class="flex justify-between flex-wrap" style="margin-top: 8px;">
                          <vs-button type="relief" size="small" color="danger" class="mr-3 mb-2 centery-1" @click="add(item)">新增</vs-button>
                          <vs-button type="relief" size="small" class="mb-2" @click="save(item)">保存</vs-button>
                        </div>
                      </vx-card>
                    </div>
                  </div>
                </vs-tab>
                <vs-tab code="13" label="宝石">
                  <div class="vx-row" style="margin-top: 20px;">
                    <div v-for="(item,index) in lineData13" :key="index" class="vx-col w-full sm:w-1/2 lg:w-1/2 mb-base">
                      <vx-card :title="item.startItemName+' -> '+item.endItemName">
                        <div class="vx-row" style="padding: 5px;margin: 6px 0;background-color: #eee;">
                          <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"></div>
                          <div class="vx-col w-full md:w-6/12 lg:w-6/12 xl:w-6/12">名称</div>
                          <div class="vx-col w-full md:w-4/12 lg:w-4/12 xl:w-4/12">数量</div>
                          <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"></div>
                        </div>
                        <SlickList :lockToContainerEdges="true" class="list" lockAxis="y" v-model="item.equipMaterialList" style="border: 0;">
                          <SlickItem class="list-item" v-for="(item2, index2) in item.equipMaterialList" :index="index2" :key="index2">
                            <div class="vx-row" style="margin: 0;">
                              <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"><i class="feather icon-move" style="font-size: 24px;line-height: 36px;cursor: move;"></i></div>
                              <div class="vx-col w-full md:w-6/12 lg:w-6/12 xl:w-6/12">
                                <v-select label="name" placeholder='材料' v-model='item2.material' :options="materials" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
                              </div>
                              <div class="vx-col w-full md:w-4/12 lg:w-4/12 xl:w-4/12">
                                <vs-input class="inputx" placeholder="数量" v-model="item2.count" style="width: 100%;"/>
                              </div>
                              <div class="vx-col w-full md:w-1/12 lg:w-1/12 xl:w-1/12"><vs-button type="falt" @click="remove(13,index,index2)" style="border: 0;padding:0;"><i class="feather icon-trash-2" style="font-size: 24px;line-height: 36px;cursor:pointer;color: #333;"></i></vs-button></div>
                            </div>
                          </SlickItem>
                        </SlickList>
                        <div class="flex justify-between flex-wrap" style="margin-top: 8px;">
                          <vs-button type="relief" size="small" color="danger" class="mr-3 mb-2 centery-1" @click="add(item)">新增</vs-button>
                          <vs-button type="relief" size="small" class="mb-2" @click="save(item)">保存</vs-button>
                        </div>
                      </vx-card>
                    </div>
                  </div>
                </vs-tab>
            </vs-tabs>
        </vs-tab>
      </vs-tabs>
    </div>
  </vx-card>
</template>


<script>
import VxTimeline from "@/components/timeline/VxTimeline2"
import { SlickList, SlickItem } from 'vue-slicksort'
import vSelect from 'vue-select'

export default {
  components: {
    VxTimeline,
    SlickItem,
    SlickList,
    'v-select': vSelect,
  },
  data() {
    return {
      typeOptions: [],
      activeTab: '',
      lineData0: [],
      lineData1: [],
      lineData2: [],
      lineData3: [],
      lineData4: [],
      lineData5: [],
      lineData6: [],
      lineData7: [],
      lineData8: [],
      lineData9: [],
      lineData10: [],
      lineData11: [],
      lineData12: [],
      lineData13: [],
      
      materials: [],//所有材料
    }
  },
  created () {
    this.getTypeList();
    this.getMaterials();
  },
  mounted () {
    this.activeTab = 0;
    // this.getLineData();
  },
  watch: {
    activeTab(value){
      console.log("watch activeTab",value);
      this.getLineData(value);
    }
  },
  methods:{
    getTab(){
      console.log("methods activeTab",this.activeTab);
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
    getLineData(code){
      var _this = this;
      var params = {
        type: code
      }
      _this.$https.get("/equip/grow/selectList",params).then((response) => { 
          if(response.code == 1){
              console.log("response.data",response.data)
              if(code == 0){ _this.lineData0 = response.data; }
              else if(code == 1){ _this.lineData1 = response.data; }
              else if(code == 2){ _this.lineData2 = response.data; }
              else if(code == 3){ _this.lineData3 = response.data; }
              else if(code == 4){ _this.lineData4 = response.data; }
              else if(code == 5){ _this.lineData5 = response.data; }
              else if(code == 6){ _this.lineData6 = response.data; }
              else if(code == 7){ _this.lineData7 = response.data; }
              else if(code == 8){ _this.lineData8 = response.data; }
              else if(code == 9){ _this.lineData9 = response.data; }
              else if(code == 10){ _this.lineData10 = response.data; }
              else if(code == 11){ _this.lineData11 = response.data; }
              else if(code == 12){ _this.lineData12 = response.data; }
              else if(code == 13){ _this.lineData13 = response.data; }
          }else{
              _this.$vs.dialog({color: 'danger',title: '警告',text: response.msg,accept: function(){} });
          }
      }).catch((error) => { console.log("error",error) });
    },
    add(item){
      if(!item.equipMaterialList){
        item.equipMaterialList = [];
      }
      item.equipMaterialList.push({name:'',count:1});
      console.log("add item",item)
    },
    save(item){
      console.log("save item",item)
      var _this = this;
      let params = {
        id: item.id,
        materials: JSON.stringify(item.equipMaterialList)
      };
      _this.$https.post("/equip/grow/update",params).then((response) => { 
        if(response.code == 1){
            _this.$vs.dialog({color: 'success',title: '成功',text: "更新成功",accept: function(){}});
        }else{
            _this.$vs.dialog({ color: 'danger', title: '警告', text: response.msg, accept: function(){ } })
        }
      }).catch((error) => { console.log(error) })
    },
    remove(code,index,index2){
      let list = [];
      if(code == 0){
        list = JSON.parse(JSON.stringify(this.lineData0[index].equipMaterialList));
        list.splice(index2,1)
        this.lineData0[index].equipMaterialList = [{}];
        if(list.length != 0){
          this.lineData0[index].equipMaterialList = list;
        }
      }
      else if(code == 1){ 
        list = JSON.parse(JSON.stringify(this.lineData1[index].equipMaterialList));
        list.splice(index2,1)
        this.lineData1[index].equipMaterialList = [{}];
        if(list.length != 0){
          this.lineData1[index].equipMaterialList = list;
        }
      }
      else if(code == 2){ 
        list = JSON.parse(JSON.stringify(this.lineData2[index].equipMaterialList));
        list.splice(index2,1)
        this.lineData2[index].equipMaterialList = [{}];
        if(list.length != 0){
          this.lineData2[index].equipMaterialList = list;
        }
      }
      else if(code == 3){ 
        list = JSON.parse(JSON.stringify(this.lineData3[index].equipMaterialList));
        list.splice(index2,1)
        this.lineData3[index].equipMaterialList = [{}];
        if(list.length != 0){
          this.lineData3[index].equipMaterialList = list;
        }
      }
      else if(code == 4){ 
        list = JSON.parse(JSON.stringify(this.lineData4[index].equipMaterialList));
        list.splice(index2,1)
        this.lineData4[index].equipMaterialList = [{}];
        if(list.length != 0){
          this.lineData4[index].equipMaterialList = list;
        }
      }
      else if(code == 5){ 
        list = JSON.parse(JSON.stringify(this.lineData5[index].equipMaterialList));
        list.splice(index2,1)
        this.lineData5[index].equipMaterialList = [{}];
        if(list.length != 0){
          this.lineData5[index].equipMaterialList = list;
        }
      }
      else if(code == 6){ 
        list = JSON.parse(JSON.stringify(this.lineData6[index].equipMaterialList));
        list.splice(index2,1)
        this.lineData6[index].equipMaterialList = [{}];
        if(list.length != 0){
          this.lineData6[index].equipMaterialList = list;
        }
      }
      else if(code == 7){ 
        list = JSON.parse(JSON.stringify(this.lineData7[index].equipMaterialList));
        list.splice(index2,1)
        this.lineData7[index].equipMaterialList = [{}];
        if(list.length != 0){
          this.lineData7[index].equipMaterialList = list;
        }
      }
      else if(code == 8){ 
        list = JSON.parse(JSON.stringify(this.lineData8[index].equipMaterialList));
        list.splice(index2,1)
        this.lineData8[index].equipMaterialList = [{}];
        if(list.length != 0){
          this.lineData8[index].equipMaterialList = list;
        }
      }
      else if(code == 9){ 
        list = JSON.parse(JSON.stringify(this.lineData9[index].equipMaterialList));
        list.splice(index2,1)
        this.lineData9[index].equipMaterialList = [{}];
        if(list.length != 0){
          this.lineData9[index].equipMaterialList = list;
        }
      }
      else if(code == 10){ 
        list = JSON.parse(JSON.stringify(this.lineData10[index].equipMaterialList));
        list.splice(index2,1)
        this.lineData10[index].equipMaterialList = [{}];
        if(list.length != 0){
          this.lineData10[index].equipMaterialList = list;
        }
      }
      else if(code == 11){ 
        list = JSON.parse(JSON.stringify(this.lineData11[index].equipMaterialList));
        list.splice(index2,1)
        this.lineData11[index].equipMaterialList = [{}];
        if(list.length != 0){
          this.lineData11[index].equipMaterialList = list;
        }
      }
      else if(code == 12){ 
        list = JSON.parse(JSON.stringify(this.lineData12[index].equipMaterialList));
        list.splice(index2,1)
        this.lineData12[index].equipMaterialList = [{}];
        if(list.length != 0){
          this.lineData12[index].equipMaterialList = list;
        }
      }
      else if(code == 13){
        list = JSON.parse(JSON.stringify(this.lineData13[index].equipMaterialList));
        list.splice(index2,1)
        this.lineData13[index].equipMaterialList = [{}];
        if(list.length != 0){
          this.lineData13[index].equipMaterialList = list;
        }
      }

    },
    getMaterials(){
      var _this = this;
      this.$https.get("/material/simpleList",{}).then((response) => { 
        if(response.code == 1){
            _this.materials = response.data.list;
        }else{
            this.$vs.dialog({ color: 'danger', title: '警告', text: response.msg, accept: function(){ } })
        }
      }).catch((error) => { console.log(error) })
    }
  }
}

</script>
<style scoped>
.list-item{
  margin-top: 8px;
}
</style>