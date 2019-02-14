<template>
  <div>
    <div class="log-form"> <!--注意此处不能再写dialog-cover否则会不能点击关闭-->
      <div class="log-line">
        <span class="log-line-lable">用户名：</span>
        <div class="log-line-input">
          <input type="text" v-model="userNameModel" placeholder="请输入用户名">
        </div>
        <span class="log-line-error">{{userErrors.errorText}}</span>
      </div>
      <div class="log-line">
        <span class="log-line-lable">密码：</span>
        <div class="log-line-input">
          <input type="passwd" v-model="passwordModel" placeholder="请输入密码">
        </div>
        <span class="log-line-error">{{pwdErrors.errorText}}</span>
      </div>
      <div class="log-line">
        <div class="log-line-btn">
          <a class="button" @click="onLogin">确定</a>
        </div>
      </div>
      <p class="errorTip">{{errorText}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      userNameModel: '',
      passwordModel: '',
      errorText: ''
    }
  },
  computed: {
    userErrors () {
      let errorText, status
      if (!/\w/g.test(this.userNameModel)) {
        status = false
        errorText = '用户名不合法'
      } else {
        status = true
        errorText = ''
      }
      if (!this.erroruserflag) {
        errorText = ''
        this.erroruserflag = true
      }
      return {
        status,
        errorText
      }
    },
    pwdErrors () {
      let errorText, status
      if (!/^\w{1,6}$/g.test(this.passwordModel)) {
        status = false
        errorText = '密码不合法'
      } else {
        status = true
        errorText = ''
      }
      if (!this.errorpwdflag) { // 这个方法要注意！！
        errorText = ''
        this.errorpwdflag = true
      }
      return {
        status,
        errorText
      }
    }
  },
  methods: {
    // closeMyself () {
    //   this.$emit('on-close')
    // },
    onLogin () {
      if (!this.userErrors.status || !this.pwdErrors.status) {
        this.errorText = '用户名密码不合法'
      } else {
        this.errorText = ''
        this.$http.get('api/login').then((res) => {
          this.$emit('on-username', res.data)
        }, (error) => {
          console.log(error)
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.log-line {
 margin: 0 110px;
}
.log-line-lable {
  width: 70px;
  font-size: 16px;
  display: inline-block;
}
.log-line-input {
  display: inline-block;
  line-height: 50px;
  vertical-align: middle;
}
.log-line-input input {
  height: 30px;
  width: 250px;
  padding: 0 10px;
  border: 1px solid #ccc;
}
.log-line-error {
  color: red;
  font-size: 12px;
}
.log-line-btn {
  padding-left: 100px;
  margin: 15px;
}
.button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
.button:hover {
  background: #4fc08d;
}
.errorTip{
  padding: 0 220px;
  color: red;
}
</style>
