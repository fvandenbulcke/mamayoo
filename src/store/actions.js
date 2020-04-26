import Vue from 'vue';

import mamayooService from '@/services/mamayooService';
import mutationTypes from './mutationsTypes';

export default {
  savePlayer({ commit }, player) {
    return commit(mutationTypes.SAVE_PLAYER, player);
  },
  createTable({ dispatch }) {
    return mamayooService.createTable()
      .then((response) => dispatch('joinTable', response.createdTable));
  },
  joinTable(store, tableId) {
    Vue.prototype.$socket.send(
      JSON.stringify({ action: 'GAME_JOIN', value: tableId }),
    );
  },
  startGame() {
    Vue.prototype.$socket.send(
      JSON.stringify({ action: 'GAME_START' }),
    );
  },
  rollDice() {
    Vue.prototype.$socket.send(
      JSON.stringify({ action: 'ROLL_DICE' }),
    );
  },
  giveCardsToNeighbour(store, cardIds) {
    const cardIdsUpperCase = cardIds.map((c) => c.toUpperCase());
    Vue.prototype.$socket.send(
      JSON.stringify({ action: 'GIVE_CARD', value: JSON.stringify(cardIdsUpperCase) }),
    );
    return Promise.resolve();
  },
  playCard(store, cardId) {
    Vue.prototype.$socket.send(
      JSON.stringify({ action: 'PLAY_CARD', value: cardId.toUpperCase() }),
    );
    return Promise.resolve();
  },
};
