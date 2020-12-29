import Vue from 'vue'
import Router from 'vue-router'
import list from '../components/list'
import hello from '../components/hello'
import productjs from '../components/productjs'
import zhuce from '../components/zhuce'

Vue.use(Router)
// Vue.use(list)
// Vue.use(resolve)

export default new Router({
  routes: [
    {
      path: '/listsss',
      name: 'list',
      component: list
      // 此处是依赖组件的path路径只不过是自己设置而已
    },
    {
      path: '/hello',
      name: 'hello',
      component: hello
    },
    {
      path: '/productjs/:id',
      name: 'productjs',
      component: productjs
    },
    {
      path: '/zhuce',
      name: 'zhuce',
      component: zhuce
    }
  ]
})
