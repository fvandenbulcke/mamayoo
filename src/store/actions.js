import groupBy from 'lodash/groupBy';

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
  giveCardsToNeighbour({ getters, commit }, cardIds) {
    const cards = groupBy(getters.playerCards, (card) => cardIds.includes(card.id));
    commit(mutationTypes.SAVE_PLAYER_CARDS, cards.false);
    return mamayooService.giveCardsToNeighbour(cards.true)
      .then((newState) => {
        commit(mutationTypes.SAVE_GAME_STATE, newState);
        // only for dev without backend
        const givenCards = [
          { suit: 'payoo', value: '20' },
          { suit: 'payoo', value: '19' },
        ];
        commit(mutationTypes.RECEIVE_CARDS, givenCards);
      });
  },
};
