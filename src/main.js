/*=========================================================================================
  File Name: main.js
  Description: main vue(js) file
==========================================================================================*/


import Vue from 'vue'
import App from './App.vue'

// Vuesax Component Framework
import Vuesax from 'vuesax'
import 'material-icons/iconfont/material-icons.css' //Material Icons
import 'vuesax/dist/vuesax.css'; // Vuesax
Vue.use(Vuesax)


import XEUtils from 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
Vue.use(VXETable)
Vue.prototype.$XModal = VXETable.modal
Vue.prototype.$XPrint = VXETable.print
Vue.prototype.$XSaveFile = VXETable.saveFile
Vue.prototype.$XReadFile = VXETable.readFile
// 自定义全局的格式化处理函数
VXETable.formats.mixin({
    // 格式化性别
    formatSex ({ cellValue }) {
        return cellValue ? (cellValue === '1' ? '男' : '女') : ''
    },
    // 格式化下拉选项
    formatSelect ({ cellValue }, list) {
        const item = list.find(item => item.value === cellValue)
        return item ? item.label : ''
    },
    // 格式化日期，默认 yyyy-MM-dd HH:mm:ss
    formatDate ({ cellValue }, format) {
        return XEUtils.toDateString(cellValue, format || 'yyyy-MM-dd HH:mm:ss')
    },
    // 四舍五入金额，每隔3位逗号分隔，默认2位数
    formatAmount ({ cellValue }, digits = 2) {
        return XEUtils.commafy(XEUtils.toNumber(cellValue), { digits: digits })
    },
    // 格式化银行卡，默认每4位空格隔开
    formatBankcard ({ cellValue }) {
        return XEUtils.commafy(XEUtils.toString(cellValue), { spaceNumber: 4, separator: ' ' })
    },
    // 四舍五入,默认两位数
    formatFixedNumber ({ cellValue }, digits = 2) {
        return XEUtils.toFixed(XEUtils.round(cellValue, digits), digits)
    },
    // 向下舍入,默认两位数
    formatCutNumber ({ cellValue }, digits = 2) {
        return XEUtils.toFixed(XEUtils.floor(cellValue, digits), digits)
    },
    // 转换 moment 类型为字符串
    toMomentString ({ cellValue }, format) {
        return cellValue ? cellValue.format(format) : ''
    }
})


// axios
import axios from "./axios.js"
Vue.prototype.$http = axios
import axios2 from "./axios2.js"
Vue.prototype.$https = axios2

// API Calls
import "./http/requests"

// mock
import "./fake-db/index.js"

// Theme Configurations
import '../themeConfig.js'


// ACL
import acl from './acl/acl'


// Globally Registered Components
import './globalComponents.js'


// Styles: SCSS
import './assets/scss/main.scss'


// Tailwind
import '@/assets/css/main.css'


// Vue Router
import router from './router'


// Vuex Store
import store from './store/store'


// i18n
import i18n from './i18n/i18n'


// Vuexy Admin Filters
import './filters/filters'


// Clipboard
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard);


// Tour
import VueTour from 'vue-tour'
Vue.use(VueTour)
require('vue-tour/dist/vue-tour.css')


// VeeValidate
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);


// Google Maps
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
    load: {
        // Add your API key here
        key: 'YOUR_API_KEY',
        libraries: 'places', // This is required if you use the Auto complete plug-in
    },
})

// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from 'vue2-hammer'
Vue.use(VueHammer)


// PrismJS
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'


// Feather font icon
require('./assets/css/iconfont.css')


// Vue select css
// Note: In latest version you have to add it separately
// import 'vue-select/dist/vue-select.css';


Vue.config.productionTip = false

new Vue({
    router,
    store,
    i18n,
    acl,
    render: h => h(App)
}).$mount('#app')
