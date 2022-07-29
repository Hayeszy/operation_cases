<template>
  <header class="header">
    <h1 :style="{ color }">todos</h1>
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
    />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model="inputValue"
      @keyup.enter="enterFn"
    />
  </header>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers('todoList')
export default {
  data () {
    return {
      inputValue: "",
    };
  },
  methods: {
    //添加内容
    enterFn () {
      if (this.inputValue.trim().length === 0) return this.inputValue = ""
      let res = this.$store.state.todoList.list

      let id = this.list[res.length - 1].id + 1

      const newObj = {
        id,
        name: this.inputValue,
        done: false,
      };

      console.log(newObj);

      this.$store.dispatch("todoList/addTodoList", newObj);
      this.inputValue = "";
    },
  },
  computed: {
    ...mapState(["list"]),
    color () {
      return this.$store.state.title.color;
    },
  },
};
</script>
