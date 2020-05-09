import Vue from 'vue';
import Vuex from 'vuex';

import mamayooService from '@/services/mamayooService';

import mutationTypes from './mutationsTypes';
import game from './modules/game';
import error from './modules/error';

Vue.use(Vuex);

const actions = {
  savePlayer({ commit }, player) {
    return commit(mutationTypes.SAVE_PLAYER, player);
  },
  createTable({ dispatch }) {
    return mamayooService.createTable()
      .then((response) => dispatch('joinTable', response.createdTable));
  },
};

const mutations = {
  [mutationTypes.SAVE_PLAYER](state, newPlayerName) {
    state.playerName = newPlayerName;
  },
  SOCKET_ONOPEN(state) {
    state.isConnected = true;
  },
  SOCKET_ONCLOSE(state, event) {
    console.info('SOCKET_ONCLOSE');
    state.isConnected = false;
    console.info(event);
  },
  // mutations for reconnect methods
  SOCKET_RECONNECT() {
    console.info('SOCKET_RECONNECT');
  },
  SOCKET_RECONNECT_ERROR() {
    console.info('SOCKET_RECONNECT_ERROR');
  },
};

const getters = {
  playerName({ playerName }) {
    return playerName;
  },

  isConnected({ isConnected }) {
    return isConnected;
  },
};

export default new Vuex.Store({
  state: {
    playerName: null,
    isConnected: false,
  },
  mutations,
  actions,
  getters,
  modules: {
    game,
    error,
  },
});
