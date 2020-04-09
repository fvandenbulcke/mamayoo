import mamayooService from '@/services/mamayooService';

import mutationTypes from './mutationsTypes';

export default {
  createTable({ dispatch }) {
    return mamayooService.createTable()
      .then((response) => dispatch('joinTable', response.createdTable));
  },
  joinTable({ commit }, tableId) {
    return mamayooService.joinTable(tableId)
      .then((newState) => commit(mutationTypes.SAVE_GAME_STATE, newState));
  },
  giveCardsToNeighbour({ commit }, cards) {
    return mamayooService.giveCardsToNeighbour(cards)
      .then((newState) => commit(mutationTypes.SAVE_GAME_STATE, newState));
  },
};
