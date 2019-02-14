<template>
  <div> <!-- 记得外面要包一层div，否则报错 -->
    <div class="app-header">
      <router-link :to="{path: '/'}">
        <img src="../assets/logo.png" class="logo">
      </router-link>
      <ul class="nav-unlist">
        <li>{{username}}</li>
        <li v-if="username!== ''">退出</li>
        <li v-if="username=== ''" class="nav-list" @click="logClick">登录&nbsp; </li>
        <li v-if="username=== ''" class="nav-list" @click="regClick">注册&nbsp; </li>
        <li @click="aboutClick">关于&nbsp; </li>
      </ul>
    </div>
    <div class="app-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-footer"><p>©2019 shopping-demo</p></div>

    <my-dialog :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')"> <!--注意此处用@on-close-->
      <p> dialog</p>
    </my-dialog>

    <my-dialog :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')"> <!--注意此处用@on-close-->
      <log-form @on-username="userLog">
        <p>logform</p>
      </log-form>
    </my-dialog>

    <my-dialog :is-show="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')"> <!--注意此处用@on-close-->
      <reg-form>
        <p>regform</p>
      </reg-form>
    </my-dialog>
  </div>
</template>

<script>
import Dialog from './base/dialog' // 注意路径的写法
import LogForm from './base/logForm'
import RegForm from './base/regForm'

export default {
  components: {
    MyDialog: Dialog, // 注意写法
    LogForm,
    RegForm
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isShowAboutDialog: false,
      isShowLogDialog: false,
      isShowRegDialog: false,
      username: ''
    }
  },
  methods: {
    // aboutClick (attr) {
    //   this[attr] = true
    // },
    aboutClick () {
      this.isShowAboutDialog = true
    },
    logClick () {
      this.isShowLogDialog = true
    },
    regClick () {
      this.isShowRegDialog = true
    },
    closeDialog (attr) {
      this[attr] = false
    },
    userLog (data) {
      console.log(data.username)
      this.closeDialog('isShowLogDialog')
      this.username = data.data.username // 这里有一个问题？名字关联不上网页
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.logo {
  width: 70px;
  margin: 5px 5px 5px 45px;
}
.app-content {
  background-color: #ddd;
}
.app-footer {
  background: rgb(58, 56, 56);
  text-align: center;
  height: 50px;
}
.app-footer>p {
  color: #bbb;
  padding-top: 10px;
}
.app-header {
  background: black no-repeat;
  width: 100%;
  height: 80px;
}
.nav-unlist {
  color:blanchedalmond;
  float: right;
}
.nav-list {

  border-right: 1px solid #fff
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  color: white;
}
a {
  color: #42b983;
}
</style>
