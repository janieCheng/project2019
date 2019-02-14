<template>
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv"> <!--两函数没有括号的-->
    <div class="slide-img">
      <a :href="slides[nowindex].href">
        <!-- <img :src="slides[nowindex].url"> -->
        <transition name="slide-fade">
          <img v-if="isShow" :src="slides[nowindex].url">
        </transition>
        <transition name="slide-fade-new"> <!-- 为什么教程是old？？？ -->
          <img v-if="!isShow" :src="slides[nowindex].url">
        </transition>
      </a>
    </div>
    <h3>{{slides[nowindex].title}}</h3>
    <ul class="slide-pages">
      <li @click="goto(preIndex)"><a>&lt;</a></li>
      <li v-for="(i,index) in slides" @click="goto(index)">
        <a>{{index +1}}</a>
      </li>
      <li @click="goto(nextIndex)"><a>&gt;</a></li>
    </ul>
  </div>
</template>

<script>
// import { clearInterval } from 'timers' 这句话不能写的
export default {
  props: {
    slides: {
      type: Array,
      default: []
    },
    inv: {
      type: Number,
      default: 1000
    }
  },
  data () {
    return {
      hello: 'Welcome to Your slide App',
      nowindex: 2,
      isShow: true
    }
  },
  computed: {
    preIndex () {
      if (this.nowindex === 0) {
        return this.slides.length - 1
      } else {
        return this.nowindex - 1
      }
    },
    nextIndex () {
      if (this.nowindex === this.slides.length - 1) {
        return 0
      } else {
        return this.nowindex + 1
      }
    }
  },
  methods: {
    goto (index) {
      this.isShow = false
      setTimeout(() => {
        this.isShow = true
        this.nowindex = index
      }, 10)
    },
    runInv () {
      this.setInv = setInterval(() => {
        this.goto(this.nextIndex) // 多用this，注意this
      }, this.inv)
    },
    clearInv () {
      clearInterval(this.setInv)
    }
  },
  mounted () {
    this.runInv() // 调用runinv()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slide-fade-enter-active {
  transition: all .5s;
}
.slide-fade-enter {
  transform: translateX(900px);
}
.slide-fade-new-leave-active {
  transition: all .5s;
  transform: translateX(-900px);
}
.slide-show {
position: relative;
  margin: 15px 15px 15px 0;
  width: 900px;
  height: 400px;
  overflow: hidden;
}
.slide-show h3 {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #000;
  opacity: .5;
  bottom: 0;
  height: 30px;
  text-align: left;
  padding-left: 15px;
  margin: 0px;
}
.slide-show li {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
  margin: 0px;
}
.slide-img {
  width: 100%;
}
.slide-img img {
  width: 100%;
  position: absolute;
  top: 0;
}
.slide-pages {
  position: absolute; /*使得ul内嵌*/
  bottom: 5px;
  right: 15px;
  margin: 0px;
}
.slide-pages li {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
}
.slide-pages li .on {
  text-decoration: underline;
}
</style>
