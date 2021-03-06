<!-- =========================================================================================
    File Name: AgGridTable.vue
    Description: Ag Grid table
    ----------------------------------------------------------------------------------------

========================================================================================== -->


<template>
  <div id="ag-grid-demo">
    <!-- DROPDOWN -->
    <div class="flex flex-wrap justify-between items-center" style="margin-bottom:15px;">
      <vs-dropdown vs-trigger-click class="ml-auto md:block hidden cursor-pointer">
        <vs-button radius icon="icon-settings" icon-pack="feather" />
        <vs-dropdown-menu class="w-auto">
          <vs-dropdown-item>
            <div @click="$router.push('/tools/luck').catch(() => {})" class="flex items-center">
              <feather-icon icon="UserIcon" class="inline-block mr-2" svgClasses="w-4 h-4" />
              <span>抽奖模拟器</span>
            </div>
          </vs-dropdown-item>
        </vs-dropdown-menu>
      </vs-dropdown>
    </div>
    <vx-card>
      <!-- TABLE ACTION ROW -->
      <div class="flex flex-wrap justify-between items-center">

        <!-- ITEMS PER PAGE -->
        <div class="mb-4 md:mb-0 mr-4 ag-grid-table-actions-left">
          <vs-dropdown vs-trigger-click class="cursor-pointer">
            <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
              <span class="mr-2">当前第{{ currentPage * paginationPageSize - (paginationPageSize - 1) }}页 | 每页{{ contacts.length - currentPage * paginationPageSize > 0 ? currentPage * paginationPageSize : contacts.length }}条 | 共{{ contacts.length }}条</span>
              <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
            </div>
            <!-- <vs-button class="btn-drop" type="line" color="primary" icon-pack="feather" icon="icon-chevron-down"></vs-button> -->
            <vs-dropdown-menu>
              <vs-dropdown-item @click="gridApi.paginationSetPageSize(10)"><span>10</span></vs-dropdown-item>
              <vs-dropdown-item @click="gridApi.paginationSetPageSize(20)"><span>20</span></vs-dropdown-item>
              <vs-dropdown-item @click="gridApi.paginationSetPageSize(50)"><span>50</span></vs-dropdown-item>
              <vs-dropdown-item @click="gridApi.paginationSetPageSize(100)"><span>100</span></vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>
        </div>

        <!-- TABLE ACTION COL-2: SEARCH & EXPORT AS CSV -->
        <div class="flex flex-wrap items-center justify-between ag-grid-table-actions-right">
          <vs-input class="mb-4 md:mb-0 mr-4" v-model="searchQuery" @input="updateSearchQuery" placeholder="Search..." />
          <vs-button class="mb-4 md:mb-0" @click="gridApi.exportDataAsCsv()">导出CSV</vs-button>
        </div>
      </div>
      <ag-grid-vue
        ref="agGridTable"
        :gridOptions="gridOptions"
        class="ag-theme-material w-100 my-4 ag-grid-table"
        :columnDefs="columnDefs"
        :defaultColDef="defaultColDef"
        :rowData="contacts"
        rowSelection="multiple"
        colResizeDefault="shift"
        :animateRows="true"
        :floatingFilter="true"
        :pagination="true"
        :paginationPageSize="paginationPageSize"
        :suppressPaginationPanel="true"
        :enableRtl="$vs.rtl">
      </ag-grid-vue>
      <vs-pagination
        :total="totalPages"
        :max="maxPageNumbers"
        v-model="currentPage" />

    </vx-card>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue"
import contacts from '../ui-elements/ag-grid-table/data.json'

import '@/assets/scss/vuexy/extraComponents/agGridStyleOverride.scss'

export default {
  components: {
    AgGridVue
  },
  data() {
    return {
      searchQuery: '',
      gridOptions: {},
      maxPageNumbers: 11,
      gridApi: null,
      defaultColDef: {
        sortable: true,
        editable: true,
        resizable: true,
        suppressMenu: true
      },
      columnDefs: [
        {
          headerName: '名称',
          field: 'email',
          filter: true,
          width: 250,
          pinned: 'left'
        },
        {
          headerName: 'First Name',
          field: 'firstname',
          width: 175,
          filter: true,
          checkboxSelection: true,
          headerCheckboxSelectionFilteredOnly: true,
          headerCheckboxSelection: true,
        },
        {
          headerName: 'Last Name',
          field: 'lastname',
          filter: true,
          width: 175,
        },
        {
          headerName: 'Company',
          field: 'company',
          filter: true,
          width: 250,
        },
        {
          headerName: 'City',
          field: 'city',
          filter: true,
          width: 150,
        },
        {
          headerName: 'Country',
          field: 'country',
          filter: true,
          width: 150,
        },
        {
          headerName: 'State',
          field: 'state',
          filter: true,
          width: 125,
        },
        {
          headerName: 'Zip',
          field: 'zip',
          filter: true,
          width: 125,
        },
        {
          headerName: 'Followers',
          field: 'followers',
          filter: "agNumberColumnFilter",
          width: 125,
        },
        {
          headerName: 'operate',
          field: '',
          editable: false,
          width: 125,
          cellRenderer: (params) => {
            console.log(params)
            return '<button>' + '11111' + '</button>';
          },
        },
      ],
      contacts: contacts,
    }
  },
  watch: {
    '$store.state.windowWidth'(val) {
      if(val <= 576) {
        this.maxPageNumbers = 4
        this.gridOptions.columnApi.setColumnPinned('email', null)
      }
      else this.gridOptions.columnApi.setColumnPinned('email', 'left')
    }
  },
  computed: {
    paginationPageSize() {
      if(this.gridApi) return this.gridApi.paginationGetPageSize()
      else return 50
    },
    totalPages() {
      if(this.gridApi) return this.gridApi.paginationGetTotalPages()
      else return 0
    },
    currentPage: {
      get() {
        if(this.gridApi) return this.gridApi.paginationGetCurrentPage() + 1
        else return 1
      },
      set(val) {
        this.gridApi.paginationGoToPage(val - 1)
      }
    }
  },
  methods: {
    updateSearchQuery(val) {
      this.gridApi.setQuickFilter(val)
    }
  },
  mounted() {
    this.gridApi = this.gridOptions.api
    if(this.$vs.rtl) {
      const header = this.$refs.agGridTable.$el.querySelector(".ag-header-container")
      header.style.left = "-" + String(Number(header.style.transform.slice(11,-3)) + 9) + "px"
    }
  }
}

</script>

<style scoped>
.vs-dropdown--item{
  width: 110px;
}
</style>