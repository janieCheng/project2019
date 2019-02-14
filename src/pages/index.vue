<template>
  <div>
    <div class="index-wrap">
      <div class="index-left">
        <div class="index-left-block">
          <h2>全部产品</h2>

          <template v-for="i in productList">
            <h3>{{i.title}}</h3>
            <ul>
              <li v-for="item in i.list">
                <a :href="item.url">{{item.name}}</a>
                <span v-if="item.hot" class="hotStyle">HOT</span>
              </li>
            </ul>
            <hr v-if="!i.hr"> <!-- 不懂？ -->
          </template>
        </div>
        <div class="index-left-bottom">
          <h2>最新消息</h2>
          <ul>
            <li v-for="i in newsList">
              <a :href="i.url" class="new-item">{{ i.title }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="index-right">
        <div class="index-slideshow">
          <slide-show :slides = "slides" :inv="slideSpeed"></slide-show>
        </div>
        <div class="index-border-list">
          <div v-for="(i, index) in borderList" class="index-border-item"
          :class="[{'index-last' : index % 2 !==0}, 'index-board-' + i.id]">
            <div class="index-board-pic"> <!--图片的div包含全部其他标签 -->
              <h2>{{i.title}}</h2>
              <p>{{i.describe}}</p>
              <div class="index-boder-button">
                <router-link href="" class="button" :to="{path: i.url}">确定购买</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import slideShow from '../components/slideShow'
export default {
  created () {
    this.$http.get('api/getNewsList')
      .then((res) => {
        this.newsList = res.data.data // 注意此处是res.data.data而旧的代码是res.data
        console.log(res.data)
        console.log(res.data.data)
        console.log(this.newsList)
      }, (err) => {
        console.log(err)
      })
  },
  components: {
    slideShow
  },
  data () {
    return {
      slideSpeed: 2000,
      slides: [
        {
          url: require('../assets/slideShow/pic1.jpg'),
          title: 'pic1',
          href: '/detail/count'
        },
        {
          url: require('../assets/slideShow/pic2.jpg'),
          title: 'pic2',
          href: '/detail/analysis'
        },
        {
          url: require('../assets/slideShow/pic3.jpg'),
          title: 'pic3',
          href: '/detail/forecast'
        },
        {
          url: require('../assets/slideShow/pic4.jpg'),
          title: 'pic4',
          href: '/detail/publish'
        }
      ],
      productList: {
        pc: {
          title: 'pc产品',
          list: [
            {
              name: '数据统计',
              url: '/detail/analysis'
            },
            {
              name: '数据预测',
              url: '/detail/forecast',
              hot: true
            },
            {
              name: '流量分析',
              url: '/detail/count'
            },
            {
              name: '广告发布',
              url: '/detail/publish'
            }
          ]
        },
        app: {
          title: '手机应用类',
          hr: true,
          list: [
            {
              name: '91助手',
              url: ''
            },
            {
              name: '产品助手',
              url: ''
            },
            {
              name: '智能地图',
              url: ''
            },
            {
              name: '团队语音',
              url: ''
            }
          ]
        }
      },
      newsList: [],
      borderList: [
        {
          title: '开发产品',
          url: '/detail/count',
          describe: 'xxxx',
          saleout: false,
          id: 0
        },
        {
          title: '品牌营销',
          url: '/detail/analysis',
          describe: 'xxxx',
          saleout: false,
          id: 1
        },
        {
          title: '使命必达',
          url: '/detail/forecast',
          describe: 'xxxx',
          saleout: false,
          id: 2
        },
        {
          title: '开发产品',
          url: '/detail/publish',
          describe: 'xxxx',
          saleout: false,
          id: 3
        }
      ]
    }
  }
}
</script>

<style scoped>
/* 整个页面居中？怎么来 */
.button {
  background-color: #41B883;
  width: 70px;
  height: 40px;
  color: #fff;
  text-decoration: none;
}
.index-border-list {
  overflow: hidden;

}
.index-border-item {
  float: left; /*这一句使得原本独占一行的div变成一行两个div*/
  background-color: #fff;
  /* margin-right: 20px; */
  margin-right:20px;
  margin-bottom: 20px;
  width: 435px;
}
.index-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  background-color: #ddd;
}
.index-right {
  float: left;
  width: 900px;
  margin-left: 20px;
}
.index-left {
  width: 250px;
  float: left;
}
.index-left-block {
  background-color: #fff;
}
.index-left-bottom {
  background-color: #fff;
  height: 500px;
}
.index-left li {
  display: block;
}

.index-board-pic{
  min-height: 125px;
  padding-left: 120px;
}
.index-board-0 .index-board-pic{
  background: url(../assets/images/1.png) no-repeat;
}
.index-board-1 .index-board-pic{
  background: url(../assets/images/2.png) no-repeat;
}
.index-board-2 .index-board-pic{
  background: url(../assets/images/3.png) no-repeat;
}
.index-board-3 .index-board-pic{
  background: url(../assets/images/4.png) no-repeat;
}
.hotStyle {
  background-color: red;
  color: white;
  font-size: 10px;
}
.index-left h2{
  background-color: #41B883;
}
.index-last {
  margin-right: 0px;
}
.new-item {
  width: 200px;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
