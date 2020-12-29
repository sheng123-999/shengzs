<template>
  <!-- 根 -->
  <div>
    <div class="header container-fluid">
      <div class="col-9 header-left" style="height:48px;float:left;">
        <router-link to="/listsss"
          class="header-title">电商示例网站
        </router-link>
      </div>
      <div class="header-menu col-2" style="float:right;">
        <router-link to="/hello" class="header-menu-cart">
          购物车
          <span v-if="cartList.length" ref="shopcar">{{ cartList.length }}</span>
        </router-link>
        <i class="el-icon-shopping-cart-full"></i>
      </div>
      <!-- <div class="col-1" style="float:left;">
        <router-link to="/zhuce">注册/登录</router-link> 
      </div> -->
        <!-- <div class="go">
          <i class="el-icon-shopping-cart-full"></i>
          <br>购<br>物<br>车<br>
        </div> -->
      <div style="clear:both;"></div>
      <router-view></router-view>
      <div style="clear:both;"></div>
    </div>
  </div>
      <!-- <router-view></router-view>
      <router-link to="/hello">显示</router-link> -->
      <!-- 挂载所有的路由组件，to就是那个路由当中的路径path -->  
</template>

<script>
import Product from '../src/components/product'
export default {
  name: 'app',
  components: {Product},
  computed: {
    cartList () {
      return this.$store.state.cartList
      // 通过this.$store.state获取我们想要的数据
    }
  },
  methods: {
    goHead () {
      scrollTo(0, 0)
    }
  },
  created: function () {
    this.$router.push('listsss')
    // 刷新页面都跳到listsss页面
  }
}
</script>

<style>
.go{
  position: fixed;
  width: 40px;
  height: 300px;
  bottom: 200px;
  right: 0px;
  background:rgba(125,125,125, 0.3);
  z-index: 3;
  text-align: center;
  /* border-radius: 50%; */
}
*{
  margin: 0px;
  padding: 0px;
}
a{
  text-decoration: none;
}
body{
  background: #f8f8f9;
}
.header{
  height: 48px;
  line-height: 48px;
  background: rgba(0,0,0,0.8);
  color: #fff;
}
.header-title{
  padding: 0 32px;
  float: left;
  color: #fff;
}
.head-menu{
  margin-right:32px; 
}
.head-menu-cart{
  color: #fff;
}
.head-menu-cart span{
  display: inline-block;
  width: 16px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  border-radius: 50%;
  background: #ff5500;
  color: #fff;
  font-size: 12px;
}
</style>
