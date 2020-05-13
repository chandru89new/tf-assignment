const fetchTodosFromStorage = () =>
  JSON.parse(localStorage.getItem("todos") || "[]");
const saveToStorage = (data) =>
  localStorage.setItem("todos", JSON.stringify(data));

export default {
  getTodos: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const todos = fetchTodosFromStorage();
        resolve(todos);
      }, 100);
    });
  },
  addTodo: ({ description } = {}) => {
    return new Promise((resolve, reject) => {
      if (!description) reject("No todo text given.");
      const todos = fetchTodosFromStorage();
      const newTodos = todos.concat({
        id: Math.floor(Math.random() * 1000 + 1000),
        description,
        isComplete: false,
        created: new Date(),
      });
      saveToStorage(newTodos);
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  },
  toggleTodoState: ({ id }) => {
    return new Promise((res, rej) => {
      if (!id) rej("No id given.");
      const todos = fetchTodosFromStorage();
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        } else {
          return todo;
        }
      });
      saveToStorage(newTodos);
      res(true);
    });
  },
  removeTodo: ({ id }) => {
    return new Promise((res, rej) => {
      if (!id) rej("No id given.");
      const todos = fetchTodosFromStorage();
      const newTodos = todos.filter((todo) => todo.id !== id);
      saveToStorage(newTodos);
      res(true);
    });
  },
};
