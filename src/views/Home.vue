<template>
  <div>
    <AddTodo
      @add="addTodo"
      :loading="getAddingStatus"
      :error="getAddingError"
    />
    <hr class="my-10" />
    <TodoContainer
      :todos="todos"
      :loading="getTodoLoading"
      :error="error"
      @toggleTodoStatus="toggleTodo"
      @deleteTodo="deleteTodo"
    />
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  components: {
    TodoContainer: () => import("@/components/TodoContainer"),
    AddTodo: () => import("@/components/AddTodo"),
  },
  computed: {
    todos() {
      return this.$store.getters.todos("data");
    },
    getTodoLoading() {
      return this.$store.getters.todos("loading");
    },
    error() {
      return this.$store.getters.todos("error");
    },
    getAddingStatus() {
      return this.$store.getters.addTodo("loading");
    },
    getAddingError() {
      return this.$store.getters.addTodo("error");
    },
  },
  mounted() {
    this.getTodos();
  },
  methods: {
    ...mapActions([
      "addTodo",
      "getTodos",
      "toggleTodo",
      "deleteTodo",
    ]),
  },
};
</script>
