<template>
    <div class="product col-lg-3 col-sm-12" ref="cls">
        <router-link
            :to="'/productjs/'+info.id"
            class="product-main">
        <img :src=" info.image ">     
        <h6>{{ info.name }}</h6>
        <div
            class="product-color"
            :style="{ background: colors[info.color] }"></div>
        <div class="product-cost">￥{{ info.cost }}</div>
        <button
            class="product-add-cart btn btn-primary"
            @click.prevent="handleCart" @click="ball_show = !ball_show" ref="btnshop">加入购物车</button>
        <!-- <div class="ball-container">  
          <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter">
            <div class="ball" v-show="ball_show" ref="ball"></div>  
          </transition>  
        </div> -->
        </router-link>
    </div>
</template>

<script>
export default {
  props: {
    info: Object
  },
  data () {
    return {
      colors: {
        '白色': '#ffffff',
        '黄色': '#FFD700',
        '红色': '#f2352e',
        '绿色': '006400'
      },
      ball_show: false
    }
  },
  methods: {
    handleCart () {
      this.$store.commit('addCart', this.info.id)
    }
    // beforeEnter (el) {
    //   let pp = this.$refs.btnshop.getBoundingClientRect()
    //   let ss = this.$refs.cls.getBoundingClientRect()
    //   let top = ss.right - pp.left
    //   let bottom = ss.bottom - pp.bottom
    //   el.style.transform = `translate(${top}px, -${bottom}px)`
    // },
    // enter (el, done) {
    //   let ball = this.$refs.ball.getBoundingClientRect()
    //   let top = 1400 - ball.left
    //   let bottom = 0 - ball.top
    //   el.offsetTop
    //   el.style.transform = `translate(${top}px, ${bottom}px)`
    //   el.style.transition = 'all 2s cubic-bezier(0.11, 0.92, 0.98, 0.75)'
    //   done()
    // },
    // afterEnter (el) {
    //   this.ball_show = !this.ball_show
    // }
  }
}
</script>

<style scoped>
.ball{
  width: 15px;
  height: 15px;
  background: red;
  z-index: 100;
  border-radius: 50%;
  position: fixed;
}
.product{
    float: left;
    transition: all 1s;
}
.product:hover{
  transform: scale(1.1);
}
.product-main{
    display: block;
    margin: 16px;
    padding: 16px;
    border: 1px solid #dddee1;
    border-radius: 6px;
    overflow: hidden;
    background: #fff;
    text-align: center;
    position: relative;
}
.product-main img{
    width: 100%;
}
h4{
    color: #222;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.product-main:hover h4{
    color: #0070c9;
}
.product-color{
    display: block;
    width: 16px;
    height: 16px;
    border: 1px solid #dddee1;
    border-radius: 50%;
    margin: 6px auto;
}
.product-cost{
    color: #de4037;
    margin-top: 6px;
}
.product-add-cart{
    display: none;
    padding: 4px 8px;
    background: #2d8cf0;
    color: #fff;
    font-size: 12px;
    border-radius: 3px;
    cursor: pointer;
    position: absolute;
    top: 5px;
    right: 5px; 
}
.product-main:hover .product-add-cart{
    display: inline-block;
}
</style>
