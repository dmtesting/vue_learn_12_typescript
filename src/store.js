import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      tasks: [
        {
          id: "1",
          status: "active",
          deadline: "2025-10-10",
          title: "Эта карточка задачи для курсовой",
          description: "lorem ipsum dolor",
        },
        {
          id: "2",
          status: "rejected",
          deadline: "2025-10-10",
          title: "Эта карточка задачи для курсовой",
          description: "lorem ipsum dolor",
        },
        {
          id: "3",
          status: "in_progress",
          deadline: "2025-10-10",
          title: "Эта карточка задачи для курсовой",
          description: "lorem ipsum dolor",
        },
      ],
    };
  },
  mutations: {
    createTask(state, payload) {
      state.tasks.push({
        id: "" + Date.now(),
        status: "active",
        deadline: payload.date.toISOString().slice(0, 10),
        title: payload.name,
        description: payload.description,
      });
    },
    changeTaskStatus(state, payload) {
      const task = state.tasks.find((innerTask) => innerTask.id === payload.id);

      if (task) {
        task.status = payload.status;
      }
    },
    removeTask(state, payload) {
      const index = state.tasks.findIndex(
        (innerTask) => innerTask.id === payload.id
      );

      if (index !== -1) {
        state.tasks.splice(index, 1);
      }
    },
  },
});
