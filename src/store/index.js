import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gameState: {
      toto: 'faitduvelo',
    },
    playerCards: [
      { suit: 'heart', value: '7' },
      { suit: 'diamond', value: '10' },
      { suit: 'payoo', value: '7' },
      { suit: 'club', value: '7' },
      { suit: 'spade', value: '4' },
      { suit: 'heart', value: '4' },
      { suit: 'payoo', value: '4' },
      { suit: 'diamond', value: '8' },
      { suit: 'club', value: '9' },
      { suit: 'diamond', value: '3' },
      { suit: 'spade', value: '10' },
    ],
  },
  mutations,
  actions,
  getters,
  modules: {
  },
});
