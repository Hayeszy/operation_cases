<template>
  <div>
    <button @click="updateTitleColor">换肤</button>
    <div class="todoapp">
      <todo-header></todo-header>
      <todo-main></todo-main>
      <todo-footer></todo-footer>
    </div>
    <button title="按钮"></button>
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue' // shift + alt + 下
import TodoHeader from './components/TodoHeader.vue' // shift + alt + 下
import TodoMain from './components/TodoMain.vue' // shift + alt + 下
export default {
  data () {
    return {}
  },

  components: {
    TodoFooter,
    TodoHeader,
    TodoMain,
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
