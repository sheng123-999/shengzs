import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router/index.js'
import Vuex from 'vuex'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.prototype.$axios = axios
Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
var cartList = JSON.parse(localStorage.getItem('cartList') || '[]')
let aa = []
// 这是将购物车数据存储到本地
const store = new Vuex.Store({
  state: {
    productList: [],
    cartList: cartList
  },
  getters: {
    brands: state => {
      const brands = state.productList.map(item => item.brand)
      return getFileterArray(brands)
    },
    colors: state => {
      const colors = state.productList.map(item => item.color)
      return getFileterArray(colors)
    }
    // 获取有哪些颜色
  },
  mutations: {
    setProductList (state, data) {
      state.productList = data
    },
    addCart (state, id) {
      const isAdded = state.cartList.find(item => item.id === id)
      if (isAdded) {
        isAdded.count ++
      } else {
        state.cartList.push({
          id: id,
          count: 1
        })
      }
      localStorage.setItem('cartList', JSON.stringify(state.cartList))
    },
    emptyCart (state) {
      state.cartList = []
    },
    editCartCount (state, payload) {
      state.cartList.find(item => item.id === payload.id).count += payload.count
    },
    deleteCart (state, id) {
      const index = state.cartList.findIndex(item => item.id === id)
      state.cartList.splice(index, 1)
    }
  },
  actions: {
    getProductList (context) {
      setTimeout(() => {
        context.commit('setProductList', aa)
      }, 500)
    },
    buy (context) {
      return new Promise(resolve => {
        setTimeout(() => {
          context.commit('emptyCart')
          resolve()
        }, 500)
      })
    }
  }
})
// Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation
// 实际上是dispatch触发action而commit触发的是mutation，getters相当于是计算属性
// 就是mutation就是用来改变vuex中的变量，然后通过action去调用mutation 与此同时就是action可以执行异步操作，mutation只能执行同步操作
// context属性相当于一个新的store实例，但是并不是store实例本身
new Vue({
  el: '#app',
  router,
  store,
  // 注册store这样使得每个子组件都可以访问到，可以通过this.$store获取
  template: '<App/>',
  components: { App },
  mounted () {
    axios
      .get('../static/productjson.json')
      .then(function (res) {
        aa = res.data
        console.log(aa[1])
      })
      .catch(function (error) {
        console.log(error)
      })
  }
})
function getFileterArray (array) {
  const res = []
  const json = {}
  for (let i = 0; i < array.length; i++) {
    const _self = array[i]
    if (!json[_self]) {
      res.push(_self)
      json[_self] = 1
    }
  }
  return res
}
