<template>
  <div>
    <button @click="updateTitleColor">换肤</button>
    <div class="todoapp">
      <todo-header></todo-header>
      <todo-main></todo-main>
      <todo-footer></todo-footer>
    </div>
    <my-button>默认按钮</my-button>
    <my-button type="danger">红色按钮</my-button>
    <my-button type="success">绿色按钮</my-button>
    <my-button type="primary">蓝色按钮</my-button>
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue' // shift + alt + 下
import TodoHeader from './components/TodoHeader.vue' // shift + alt + 下
import TodoMain from './components/TodoMain.vue' // shift + alt + 下
import MyButton from './components/Button'
export default {
  data () {
    return {}
  },

  components: {
    TodoFooter,
    TodoHeader,
    TodoMain,
    MyButton,
  },

  created () { },

  methods: {
    updateTitleColor() {
      this.$store.dispatch("title/getUpdateColor", "skyblue");
    }
  },
}
</script>

<style scoped></style>
