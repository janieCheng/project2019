<template>
  <div>
    <div class="dialog-wrap" v-if="isShow">
      <div class="dialog-cover" @click="closeMyself"></div>
      <div class="dialog-content">
        <p class="dialog-close" @click="closeMyself">x</p>
        <slot>empty</slot>
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
.dialog-cover {
  background-color: #000;
  opacity: .4;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
}
.dialog-content {
  background-color: #fff;
  width: 50%;
  position: fixed; /*fixed是相对浏览页面进行绝对定位*/
  height: 20%px;
  top: 40%;
  left: 50%;
  margin-left: -25% /*使得content居中*/
}
.dialog-close {
  position: absolute;
  right: 5px;
  top: 5px;
  width: 20px;
  height: 20px;
  text-align: center;
  cursor: pointer;
  margin: 0;
  color: #000;
}
</style>
