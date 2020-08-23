<!-- =========================================================================================
  File Name: AddNewDataSidebar.vue
  Description: Add New Data - Sidebar component
  ----------------------------------------------------------------------------------------

========================================================================================== -->


<template>
  <vs-sidebar position-right parent="body" default-index="1" color="primary" class="add-new-data-sidebar items-no-padding" spacer v-model="isSidebarActiveLocal">
    <div class="mt-6 flex items-center justify-between px-6">
        <h4>{{ Object.entries(this.data).length === 0 ? "新增" : "更新" }}</h4>
        <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>
    <VuePerfectScrollbar class="scroll-area--data-list-add-new" :settings="settings" :key="$vs.rtl">
      <div class="p-6">
        <!-- 名称 -->
        <vs-input label="名称" v-model="name" class="mt-5 w-full" name="item-name" v-validate="'required'" />
        <span class="text-danger text-sm" v-show="errors.has('item-name')">{{ errors.first('item-name') }}</span>
        <!-- 任务侠义值 -->
        <vs-input label="任务侠义值" v-model="chivalrous1" class="mt-5 w-full" name="item-chivalrous1" v-validate="'required'" />
        <span class="text-danger text-sm" v-show="errors.has('item-chivalrous1')">{{ errors.first('item-chivalrous1') }}</span>
        <!-- 挑战侠义值 -->
        <vs-input label="挑战侠义值" v-model="chivalrous2" class="mt-5 w-full" name="item-chivalrous2" v-validate="'required'" />
        <span class="text-danger text-sm" v-show="errors.has('item-chivalrous2')">{{ errors.first('item-chivalrous2') }}</span>
        <!-- 斩首侠义值 -->
        <vs-input label="斩首侠义值" v-model="chivalrous3" class="mt-5 w-full" name="item-chivalrous3" v-validate="'required'" />
        <span class="text-danger text-sm" v-show="errors.has('item-chivalrous3')">{{ errors.first('item-chivalrous3') }}</span>
      </div>
    </VuePerfectScrollbar>

    <div class="flex flex-wrap items-center p-6" slot="footer">
      <vs-button class="mr-6" @click="submitData" :disabled="!isFormValid">提交</vs-button>
      <vs-button type="border" color="danger" @click="isSidebarActiveLocal = false">取消</vs-button>
    </div>


  </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true
    },
    data: {
      type: Object,
      default: () => {},
    }
  },
  watch: {
    isSidebarActive(val) {
      if(!val) return
      if(Object.entries(this.data).length === 0) {
        this.initValues()
        this.$validator.reset()
      }else {
        let { id, name, chivalrous1, chivalrous2, chivalrous3} = JSON.parse(JSON.stringify(this.data))
        this.id = id
        this.name = name
        this.chivalrous1 = chivalrous1
        this.chivalrous2 = chivalrous2
        this.chivalrous3 = chivalrous3
        this.initValues()
      }
      // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataName, this.dataCategory, this.dataOrder_status, this.dataPrice } = JSON.parse(JSON.stringify(this.data))
    }
  },
  data() {
    return {
      id: null,
      name: "",
      chivalrous1: '',
      chivalrous2: '',
      chivalrous3: '',
      settings: { // perfectscrollbar settings
          maxScrollbarLength: 60,
          wheelSpeed: .60,
      },
    }
  },
  computed: {
    isSidebarActiveLocal: {
      get() {
        return this.isSidebarActive
      },
      set(val) {
        if(!val) {
          this.$emit('closeSidebar')
          // this.$validator.reset()
          // this.initValues()
        }
      }
    },
    isFormValid() {
      return !this.errors.any() && this.name && this.chivalrous1 && this.chivalrous2 && this.chivalrous3
    }
  },
  methods: {
    initValues() {
      if(this.data.id) return
        this.id = null
        this.name = ""
        this.chivalrous1 = ''
        this.chivalrous2 = ''
        this.chivalrous3 = ''
    },
    submitData() {
      this.$validator.validateAll().then(result => {
          if (result) {
            const obj = {
              id: this.id,
              name: this.name,
              chivalrous1: this.chivalrous1,
              chivalrous2: this.chivalrous2,
              chivalrous3: this.chivalrous3,
            }

            if(this.id !== null && this.id >= 0) {
              this.$store.dispatch("taskWeek/updateItem", obj).catch(err => { console.error(err) })
            }else{
              delete obj.id
              obj.popularity = 0
              this.$store.dispatch("taskWeek/addItem", obj).catch(err => { console.error(err) })
            }

            this.$emit('closeSidebar')
            this.initValues()
            this.$emit('updateData')
            //this.$router.push("/config/material").catch(() => {})
          }
      })
    },
  },
  components: {
    VuePerfectScrollbar,
  }
}
</script>

<style lang="scss" scoped>
.add-new-data-sidebar {
  ::v-deep .vs-sidebar--background {
    z-index: 52010;
  }

  ::v-deep .vs-sidebar {
    z-index: 52010;
    width: 400px;
    max-width: 90vw;

    .img-upload {
      margin-top: 2rem;

      .con-img-upload {
        padding: 0;
      }

      .con-input-upload {
        width: 100%;
        margin: 0;
      }
    }
  }
}

.scroll-area--data-list-add-new {
    // height: calc(var(--vh, 1vh) * 100 - 4.3rem);
    height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 82px);
}
</style>
