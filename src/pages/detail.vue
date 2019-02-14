<template>
  <div class="detail-wrap">
    <div class="detail-left">
      <div class="detail-board">
        <img :src="imgChg">
        <ul>
          <!-- <li v-for="i in pros">{{i.name}}</li> -->
          <router-link v-for="i in pros" tag="li" active-class="active" :to="{path: i.path}">
            {{i.name}}
          </router-link>
        </ul>
      </div>
    </div>
    <div class="detail-right">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.$http.get('/api/products')
      .then((res) => {
        this.pros = res.data.data // 注意此处是res.data.data而旧的代码是res.data
        console.log(res.data)
      }, (err) => {
        console.log(err)
        console.log('errerrerr')
      })
  },
  data () {
    return {
      helo: 'welcom detail',
      pros: [], // 记得不要忘记写这个！！！
      imgMap: {
        '/detail/count': require('../assets/images/1.png'),
        '/detail/forecast': require('../assets/images/2.png'),
        '/detail/analysis': require('../assets/images/3.png'),
        '/detail/publish': require('../assets/images/4.png')
      }
    }
  },
  computed: {
    imgChg () {
      return this.imgMap[this.$route.path]
    }
  }
}
</script>

<style>
/* count\forecast\analysis\publish页面的css */
.sales-board {
  background-color: #fff;
  color: #000;
}
.sales-board-des ul li {
  color: #000;
  display: block;
}
.sales-board-des p {
  line-height: normal;
}
.intro-pic {
  margin: 5px 15px;
}
.sales-board-intro{
  padding: 15px 20px;
}
.sales-board-form{
  padding: 15px 20px;
}
.sales-board-des {
  border-top: 20px solid #f0f2f5;
  border-bottom: 20px solid #f0f2f5;
  padding: 15px 20px;
}
.sales-board-line {
  clear: both;
  padding-bottom: 20px;
}
.sales-board-line-left {
    display: inline-block;
    width: 100px;
}
.sales-board-line-right {
    display: inline-block;
    width: 75%;
}
.sales-board-line-right li{
  color: #000;
}
/* detail页面的css */
.detail-wrap {
  width: 1200px;
  overflow: hidden;
}
.detail-left {
  width: 250px;
  float: left;
}
.detail-right {
  width: 900px;
  float: left;
  margin-left: 20px;
}
.detail-board{
  background-color: #fff;
  margin: 20px;
  padding: 0 0 5px;
}
.detail-board img {
  margin: 5px 50px;
}
.detail-board li{
  display: block;
  color: #41B883;
  cursor: pointer;
  padding: 5px;
}
/* .detail-board li:hover {
  background-color: #41B883;
  color: #fff;
} */
.detail-board li:hover {
  background-color: #41B883;
  color: #fff;
}
</style>
