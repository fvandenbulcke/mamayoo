import Vue from 'vue';

import mamayooService from '@/services/mamayooService';
import mutationTypes from './mutationsTypes';

export default {
  savePlayer({ commit }, player) {
    return commit(mutationTypes.SAVE_PLAYER, { name: player });
  },
  createTable({ dispatch }) {
    return mamayooService.createTable()
      .then((response) => dispatch('joinTable', response.createdTable));
  },
  joinTable(tableId) {
    Vue.prototype.$socket.send(
      JSON.stringify({ action: 'GAME_JOIN', value: tableId }),
    );
  },
  startGame() {
    Vue.prototype.$socket.send(
      JSON.stringify({ action: 'GAME_START' }),
    );
  },
  giveCardsToNeighbour(store, cardIds) {
    const cardIdsUpperCase = cardIds.map((c) => c.toUpperCase());
    Vue.prototype.$socket.send(
      JSON.stringify({ action: 'GIVE_CARD', value: JSON.stringify(cardIdsUpperCase) }),
    );
  },
};
