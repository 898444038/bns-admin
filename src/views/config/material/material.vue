<!-- =========================================================================================
  File Name: DataListThumbView.vue
  Description: Data List - Thumb View
  ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <div id="data-list-thumb-view" class="data-list-container">

    <data-view-sidebar :isSidebarActive="addNewDataSidebar" @closeSidebar="toggleDataSidebar" :data="sidebarData" />
    <!-- 搜索栏 -->
    <vs-table ref="table" multiple v-model="selected" pagination :max-items="itemsPerPage" search :data="materials">
      <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">
        <div class="flex flex-wrap-reverse items-center">
          <!-- ACTION - DROPDOWN -->
          <vs-dropdown vs-trigger-click class="cursor-pointer mr-4 mb-4" style="display:none">
            <div class="p-4 shadow-drop rounded-lg d-theme-dark-bg cursor-pointer flex items-center justify-center text-lg font-medium w-32">
              <span class="mr-2">操作</span>
              <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
            </div>
            <vs-dropdown-menu>
              <vs-dropdown-item>
                <span class="flex items-center">
                  <feather-icon icon="TrashIcon" svgClasses="h-4 w-4" class="mr-2" />
                  <span>删除</span>
                </span>
              </vs-dropdown-item>
              <!-- <vs-dropdown-item>
                <span class="flex items-center">
                  <feather-icon icon="ArchiveIcon" svgClasses="h-4 w-4" class="mr-2" />
                  <span>保存</span>
                </span>
              </vs-dropdown-item> -->
              <vs-dropdown-item>
                <span class="flex items-center">
                  <feather-icon icon="FileIcon" svgClasses="h-4 w-4" class="mr-2" />
                  <span>打印</span>
                </span>
              </vs-dropdown-item>
              <!-- <vs-dropdown-item>
                <span class="flex items-center">
                  <feather-icon icon="SaveIcon" svgClasses="h-4 w-4" class="mr-2" />
                  <span>Another Action</span>
                </span>
              </vs-dropdown-item> -->
            </vs-dropdown-menu>
          </vs-dropdown>
          <!-- ADD NEW -->
          <div class="p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-between text-lg font-medium text-base text-primary border border-solid border-primary" @click="addNewData">
              <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
              <span class="ml-2 text-base text-primary">新增</span>
          </div>
        </div>


        <!-- ITEMS PER PAGE -->
        <vs-dropdown vs-trigger-click class="cursor-pointer mb-4 mr-4">
          <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
            <span class="mr-2">当前 {{ currentPage * itemsPerPage - (itemsPerPage - 1) }} 至 {{ materials.length - currentPage * itemsPerPage > 0 ? currentPage * itemsPerPage : materials.length }} 条,共 {{ queriedItems }} 条</span>
            <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
          </div>
          <!-- <vs-button class="btn-drop" type="line" color="primary" icon-pack="feather" icon="icon-chevron-down"></vs-button> -->
          <vs-dropdown-menu>
            <vs-dropdown-item @click="itemsPerPage=5">
              <span>每页显示5条</span>
            </vs-dropdown-item>
            <vs-dropdown-item @click="itemsPerPage=10">
              <span>每页显示10条</span>
            </vs-dropdown-item>
            <vs-dropdown-item @click="itemsPerPage=15">
              <span>每页显示15条</span>
            </vs-dropdown-item>
            <vs-dropdown-item @click="itemsPerPage=20">
              <span>每页显示20条</span>
            </vs-dropdown-item>
          </vs-dropdown-menu>
        </vs-dropdown>
      </div>

      <!-- 列表数据 -->
      <template slot="thead">
        <vs-th>图片</vs-th>
        <vs-th sort-key="name">名称</vs-th>
        <vs-th sort-key="num">封印符数量</vs-th>
        <vs-th sort-key="type">类型</vs-th>
        <vs-th sort-key="price">单价</vs-th>
        <vs-th>操作</vs-th>
      </template>

      <template slot-scope="{data}">
        <tbody>
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
            <vs-td class="img-container">
              <img :src="tr.image" class="product-img" />
            </vs-td>
            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.name }}</p>
            </vs-td>
            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.num }}</p>
            </vs-td>
            <vs-td>
              <vs-chip :color="getOrderStatusColor(tr.type)" class="product-order-status">{{ tr.type == '0'?'材料':'装备' | title }}</vs-chip>
            </vs-td>
            <vs-td>
              <p class="product-price">${{ tr.price }}</p>
            </vs-td>
            <vs-td class="whitespace-no-wrap">
              <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary stroke-current" @click.stop="editData(tr)" />
              <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger stroke-current" class="ml-2" @click.stop="deleteData(tr.id)" />
            </vs-td>
          </vs-tr>
        </tbody>
      </template>
    </vs-table>
  </div>
</template>

<script>
import DataViewSidebar from '../materialSidebar.vue'
import moduleDataList from "@/store/material/moduleMaterial.js"

export default {
  components: {
    DataViewSidebar
  },
  data() {
    return {
      selected: [],
      // materials: [],
      itemsPerPage: 5,//每页显示条数
      isMounted: false,
      addNewDataSidebar: false,
      sidebarData: {},
    }
  },
  computed: {
    currentPage() {
      if(this.isMounted) {
        return this.$refs.table.currentx
      }
      return 0
    },
    materials() {
      return this.$store.state.material.materials;
    },
    queriedItems() {
      return this.$refs.table ? this.$refs.table.queriedResults.length : this.materials.length
    }
  },
  methods: {
    addNewData() {
      this.sidebarData = {}
      this.toggleDataSidebar(true)
    },
    deleteData(id) {
      this.$store.dispatch("material/removeItem", id).catch(err => { console.error(err) })
    },
    editData(data) {
      // this.sidebarData = JSON.parse(JSON.stringify(this.blankData))
      this.sidebarData = data
      this.toggleDataSidebar(true)
    },
    getOrderStatusColor(type) {
      if(type == '0') return "warning"
      if(type == '1') return "success"
      return "primary"
    },
    getPopularityColor(num) {
      if(num > 90) return "success"
      if(num >70) return "primary"
      if(num >= 50) return "warning"
      if(num < 50) return "danger"
      return "primary"
    },
    toggleDataSidebar(val=false) {
      this.addNewDataSidebar = val
    }
  },
  created() {
    if(!moduleDataList.isRegistered) {
      this.$store.registerModule('material', moduleDataList)
      moduleDataList.isRegistered = true
    }
    this.$store.dispatch("material/fetchItems")
  },
  mounted() {
    this.isMounted = true;
  }
}
</script>

<style lang="scss">
#data-list-thumb-view {
  .vs-con-table {

    .product-name {
      max-width: 23rem;
    }

    .vs-table--header {
      display: flex;
      flex-wrap: wrap-reverse;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
      > span {
        display: flex;
        flex-grow: 1;
      }

      .vs-table--search{
        padding-top: 0;

        .vs-table--search-input {
          padding: 0.9rem 2.5rem;
          font-size: 1rem;

          &+i {
            left: 1rem;
          }

          &:focus+i {
            left: 1rem;
          }
        }
      }
    }

    .vs-table {
      border-collapse: separate;
      border-spacing: 0 1.3rem;
      padding: 0 1rem;


      tr{
          box-shadow: 0 4px 20px 0 rgba(0,0,0,.05);
          td{
            padding: 10px;
            &:first-child{
              border-top-left-radius: .5rem;
              border-bottom-left-radius: .5rem;
            }
            &:last-child{
              border-top-right-radius: .5rem;
              border-bottom-right-radius: .5rem;
            }
            &.img-container {
              // width: 1rem;
              // background: #fff;

              span {
                display: flex;
                justify-content: flex-start;
              }

              .product-img {
                height: 110px;
              }
            }
          }
          td.td-check{
            padding: 20px !important;
          }
      }
    }

    .vs-table--thead{
      th {
        padding-top: 0;
        padding-bottom: 0;

        .vs-table-text{
          text-transform: uppercase;
          font-weight: 600;
        }
      }
      th.td-check{
        padding: 0 15px !important;
      }
      tr{
        background: none;
        box-shadow: none;
      }
    }

    .vs-table--pagination {
      justify-content: center;
    }
  }
}
</style>
