<template>
  <div>
    <div class="reg-form"> <!--注意此处不能再写dialog-cover否则会不能点击关闭-->
      <div class="reg-line">
        <span class="reg-line-span">用户名：</span>
        <div class="reg-line-input">
          <input type="text">
        </div>
      </div>
      <div class="reg-line">
        <span class="reg-line-span">密码：</span>
        <div class="reg-line-input">
          <input type="text">
        </div>
      </div>
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
      helo: 'welcom regform'
    }
  },
  methods: {
    closeMyself () {
      this.$emit('on-close')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .reg-cover {
  background-color: #000;
  opacity: .3;
  width: 100%;
  height: 100%;
  position: fixed;
} */
.reg-content {
  background-color: #fff;
  width: 50%;
  height: 30%;
  position: fixed;
}
</style>
