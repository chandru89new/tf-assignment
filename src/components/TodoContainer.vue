<template>
  <div>
    <template v-if="loading">
      Loading...
    </template>
    <template v-else>
      <div v-if="error" class="mb-3 text-red-500">
        {{ error }}
      </div>
      <div v-if="todos.length">
        <div v-for="todo in todos" :key="todo.id">
          <TodoItem
            @toggleStatus="toggleTodoStatus"
            @delete="deleteTodo"
            v-bind="todo"
            class="mb-5"
          />
        </div>
      </div>
      <div v-else>
        No todos yet.
      </div>
    </template>
  </div>
</template>
<script>
export default {
  components: {
    TodoItem: () => import("@/components/TodoItem"),
  },
  props: {
    todos: { type: Array, default: () => [] },
    loading: { type: Boolean, default: false },
    error: { type: String, default: null },
  },
  methods: {
    toggleTodoStatus(data) {
      this.$emit("toggleTodoStatus", data);
    },
    deleteTodo(data) {
      this.$emit("deleteTodo", data);
    },
  },
};
</script>
