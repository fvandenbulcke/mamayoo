export default {
  namespaced: true,
  state: {
    message: null,
  },
  mutations: {
    SOCKET_ONMESSAGE(state, message) {
      state.message = message;
    },
  },
  getters: {
    message({ message }) {
      return message;
    },
  },
};
