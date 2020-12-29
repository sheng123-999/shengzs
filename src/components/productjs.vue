<template>
    <div v-if="product">
        <div class="product">
            <div class="product-image col-8">
                <img :src="product.image">
            </div>
            <div class="product-info col-4">
                <h1 class="product-name">{{ product.name }}</h1>
                <div class="product-cost">￥{{ product.cost }}</div>
                <div
                    class="el-icon-shopping-cart-full btn btn-primary"
                    @click="handleAddToCart">加入购物车</div>
            </div>
        </div>
        <div class="introduce container">
          产品介绍：
          <p>{{product.introduce}}</p>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      id: parseInt(this.$route.params.id),
    //   解析字符串返回整数,接收路径的参数
      product: null
    }
  },
  methods: {
    getProduct () {
      setTimeout(() => {
        this.product = this.$store.state.productList.find(item => item.id === this.id)
      }, 500)
    },
    handleAddToCart () {
      this.$store.commit('addCart', this.id)
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>

<style scoped>
.introduce{
  color: blue;
}
.product{
    margin: 32px;
    padding: 32px;
    background: #fff;
    border: 1px solid #dddee1;
    border-radius: 10px;
    overflow: hidden;
}
.product-image{
    height: 500px;
    text-align: center;
    float: left;
}
.product-image img{
    height: 80%;
}
.product-info{
    padding: 150px 0 250px;
    height: 150px;
    text-align: center;
    float: right;
}
.product-cost{
    color: #f2352e;
    margin: 8px 0;
}
.product-desc{
    background: #fff;
    margin: 32px;
    padding: 32px;
    border: 1px solid #dddee1;
    border-radius: 10px;
    text-align: center;
}
.product-desc img{
    display: block;
    width: 50%;
    margin: 32px auto;
    padding: 32px;
    border-bottom: 1px solid #dddee1;
}
.product-name{
  text-align: center;
  color:black;
}
</style>
