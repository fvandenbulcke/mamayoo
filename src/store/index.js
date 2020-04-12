import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    orderedSuits: ['payoo', 'heart', 'diamond', 'spade', 'club'],
    playerId: 'player0',
    gameState: {
      turnNumber: 1,
      status: 'give_card',
      maxCardToSelect: 2,
      player0: { points: 0, status: 'played' },
      player1: { points: 10, status: 'played' },
      player2: { points: 20, status: 'played' },
      player3: { points: 30, status: 'playing' },
      player4: { points: 40, status: 'toPlay' },
      player5: { points: 50, status: 'toPlay' },
      player6: { points: 60, status: 'toPlay' },
      player7: { points: 70, status: 'toPlay' },
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
    otherPlayers: [
      { id: 'player1', name: 'Thomas' },
      { id: 'player2', name: 'Lucie' },
      { id: 'player3', name: 'Julien' },
      { id: 'player4', name: 'Matthieu' },
      { id: 'player5', name: 'Eric' },
      { id: 'player6', name: 'Greg' },
      { id: 'player7', name: 'Sebastien' },
    ],
  },
  mutations,
  actions,
  getters,
  modules: {
  },
});
