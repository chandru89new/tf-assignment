import Vue from "vue";
import Vuex from "vuex";
import CustomAxios from "@/utils/axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: {
      data: [],
      error: null,
      loading: false,
    },
    addingTodo: {
      loading: false,
      error: null,
    },
    theme: {
      mode: "light",
      fontSize: "default",
    },
  },
  getters: {
    todos: (state) => (key) => state.todos[key],
    addTodo: (state) => (key) => state.addingTodo[key],
    theme: (state) => state.theme,
  },
  mutations: {
    updateTodos(state, { data, error = null, loading = false } = {}) {
      Vue.set(state, "todos", { data, error, loading });
    },
    updateAddingStatus(state, { loading = false, error = null }) {
      Vue.set(state, "addingTodo", { loading, error });
    },
    updateTheme(state, payload) {
      state.theme = payload;
    },
  },
  actions: {
    async getTodos({ commit }, { silent = false } = {}) {
      !silent && commit("updateTodos", { loading: true });
      try {
        const todos = await CustomAxios.getTodos();
        commit("updateTodos", { data: todos });
      } catch (e) {
        commit("updateTodos", { data: [], error: e });
      }
    },
    async addTodo({ commit, dispatch }, { description }) {
      commit("updateAddingStatus", { loading: true });
      try {
        const res = await CustomAxios.addTodo({ description });
        if (res) commit("updateAddingStatus", { loading: false });
        else throw new Error("Could not save at this time.");
        dispatch("getTodos", { silent: true });
      } catch (e) {
        commit("updateAddingStatus", { error: e });
      }
    },
    async toggleTodo({ state, commit, dispatch }, { id }) {
      commit("updateTodos", { ...state.todos, error: null });
      try {
        const res = await CustomAxios.toggleTodoState({ id });
        if (!res) throw new Error("Could not update.");
        dispatch("getTodos", { silent: true });
      } catch (e) {
        commit("updateTodos", {
          ...state.todos,
          error: e.message || e,
        });
      }
    },
    async deleteTodo({ state, commit, dispatch }, { id }) {
      commit("updateTodos", { ...state.todos, error: null });
      try {
        const res = await CustomAxios.removeTodo({ id });
        if (!res) throw new Error("Could not delete.");
        dispatch("getTodos", { silent: true });
      } catch (e) {
        commit("updateTodos", {
          ...state.todos,
          error: e.message || e,
        });
      }
    },
  },
  modules: {},
});
