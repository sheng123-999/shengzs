<template>
    <div v-show="list.length">
      <div class="list-control">
        <div class="list-control-order">
          <span class="btn btn-default">排序: </span>
          <span
            class="list-control-order-item btn btn-default"
            :class="{on: order === ''}"
            @click="handleOrderDefault">默认</span>
          <span
            class="list-control-order-item btn btn-default"
            :class="{on: order === 'sales'}"
            @click="handleOrderSales">销量
            <template v-if="order === 'sales'">↓</template></span>
          <span
            class="list-control-order-item btn btn-default"
            :class="{on: order.indexOf('cost') > -1}"
            @click="handleOrderCost">价格
            <template v-if = " order === 'cost-asc'">↑</template>  
            <template v-if = " order === 'cost-desc'">↓</template>  
          </span>  
        </div>
           <div class="list-control-filter"></div>
          <span class="btn btn-default">位置:</span>
          <span
            class="list-control-filter-item btn btn-default"
            :class="{ on: item === filterBrand}"
            v-for="item in brands"
            :key="item"
            @click="handleFilterBrand(item)">{{ item }}</span>
          <div class="list-control-filter"></div>
          <span class="btn btn-default">颜色:</span>
          <span
            class="list-control-filter-item btn btn-default"
            :class="{ on: item === filterColor}"
            v-for="item in colors"
            :key="item"
            @click="handleFilterColor(item)">{{ item }}</span>
      </div>
        <Product v-for="(item,index) in filteredAndOrderedList" 
          :info="item" :key="item.id"
          v-show="index<=up && index>=down"
        >
        </Product>
        <div style="clear:both;"></div>
        <!-- 把product作为组件传入，可以直接引用 -->
        <!-- <navbottom></navbottom> -->
        <ul>
          <li class="btn btn-primary col-6" @click="downCount">上一页</li>
          <li class="btn btn-primary col-6" @click="upCount">下一页</li>
          <div style="clear:both;"></div>
        </ul>
  </div>
</template>
<script>
import Product from './product.vue'
// import navbottom from './navbottom'
export default {
  name: 'list',
  components: { Product },
  methods: {
    upCount () {
      if (this.up + 8 >= this.countss.length + 7) {
        alert('没有下一页了！！')
      } else {
        this.up += 8
        this.down += 8
      }
    },
    downCount () {
      if (this.down - 8 < 0) {
        alert('没有上一页了！！')
      } else {
        this.up -= 8
        this.down -= 8
      }
    },
    handleOrderDefault () {
      this.order = ''
    },
    handleOrderSales () {
      this.order = 'sales'
    },
    handleOrderCost () {
      if (this.order === 'cost-desc') {
        this.order = 'cost-asc'
      } else {
        this.order = 'cost-desc'
      }
    },
    handleFilterBrand (brand) {
      if (this.filterBrand === brand) {
        this.filterBrand = ''
      } else {
        this.filterBrand = brand
      }
    },
    handleFilterColor (color) {
      if (this.filterColor === color) {
        this.filterColor = ''
      } else {
        this.filterColor = color
      }
    }
  },
  computed: {
    list () {
      return this.$store.state.productList
    },
    brands () {
      return this.$store.getters.brands
    },
    colors () {
      return this.$store.getters.colors
      // 所有种类的颜色的数组
    },
    filteredAndOrderedList () {
      var list = [...this.list]
      // 数组转存
      if (this.filterBrand !== '') {
        list = list.filter(item => item.brand === this.filterBrand)
        // 这是箭头函数的形式
      }
      if (this.filterColor !== '') {
        let aaaa = this.filterColor
        list = list.filter(function (item) {
          return item.color === aaaa
        })
        // 此处实现了过滤，也就是将颜色做对比，因为在回调函数中this的指向就会发生改变，所以先记录一下,如果相等就将其保存
      }
      if (this.order !== '') {
        if (this.order === 'sales') {
          list = list.sort((a, b) => b.sales - a.sales)
        } else if (this.order === 'cost-desc') {
          list = list.sort((a, b) => b.cost - a.cost)
        } else if (this.order === 'cost-asc') {
          list = list.sort((a, b) => a.cost - b.cost)
        }
      }
      this.countss = list
      return list
    }
  },
  mounted () {
    this.$store.dispatch('getProductList')
  },
  data () {
    return {
      order: '',
      filterBrand: '',
      filterColor: '',
      up: 7,
      down: 0,
      countss: Array
    }
  }
}
</script>
<style scoped>
ul li{
  float: left;
}
.list-control {
  background: #fff;
  border-radius: 6px;
  margin: 16px;
  padding: 16px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}
.list-control-filter{
  margin-bottom: 16px;
}
.list-control-filter-item,
.list-control-order-item{
  cursor: pointer;
  display: inline-block;
  border: 1px solid #e9eaec;
  border-radius: 4px;
  margin-right: 6px;
  padding: 2px 6px;
}
.list-control-filter-item.on,
.list-control-order-item.on{
  background: #f2352e;
  border: 1px solid #f2352e;
  color: #fff;
}
</style>


