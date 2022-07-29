<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li
      :class="{completed: item.done}"
      v-for="item in list"
      :key="item.id"
    >
      <div class="view">
        <input
          v-model="item.done"
          class="toggle"
          type="checkbox"
        />
        <label>{{item.name}}</label>
        <button
          class="destroy"
          @click="delFn(item.id)"
        ></button>
      </div>
    </li>
  </ul>

</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("todoList");
export default {
  data () {
    return {
    };
  },
  methods: {
    delFn(id) {
      this.delTodoList(id)
    },
    ...mapActions(["delTodoList"]),
  },
  computed: {
    ...mapState(["list"])
  }
}
</script>
