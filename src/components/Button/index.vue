<template>
  <button
    class="my-btn"
    :class="`my-button-${type}`"
  >
    <span>
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: 'Button',
  components: {},
  props: {
    type: {
      type: String,
      default: ""
    }
  },
  created () { },
  data () {
    return {}
  }
}
</script>
<style lang='less' scoped>
.my-btn {
  margin-left: 10px;
  background-color: #fff;
  border-radius: 4px;
  border: none;
  bottom: 1px solid #ccc;
  outline: none;
  color: #000;
  width: 98px;
  height: 40px;
  margin-left: 10px;
  margin-bottom: 10px;
}
.my-button-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus {
    background: #66b1ff;
    background-color: #66b1ff;
    color: #fff;
  }
}
.my-button-success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    background: #85ce61;
    background-color: #85ce61;
    color: #fff;
  }
}
.my-button-danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    background: #f78989;
    background-color: #f78989;
    color: #fff;
  }
}
</style>