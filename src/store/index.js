import { createStore } from 'vuex';

export default createStore({
  state: {
    statuses: ['to do', 'in progress', 'done'],
    tasks: [
      // {
      //   name: 'buy 1 helicopter',
      //   status: 'to do',
      // },
      // {
      //   name: 'learn to swear',
      //   status: 'done',
      // },
      // {
      //   name: 'become a hero',
      //   status: 'in progress',
      // },
    ],
  },
  mutations: {
    addTask(state) {
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },

    deleteTask(state) {
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
  },

  actions: {
    insertTask({ commit }) {
      commit('addTask');
    },

    removeTask({ commit }) {
      commit('deleteTask');
    },
  },

  getters: {
    statuses: state => state.statuses,
    tasks: state => state.tasks,
  },
});
