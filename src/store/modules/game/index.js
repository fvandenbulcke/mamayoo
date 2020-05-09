import * as CONSTANTS from '@/utils/constants';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';


export default {
  namespaced: true,
  state: {
    orderedSuits: [
      CONSTANTS.SUIT_MAYOO, CONSTANTS.SUIT_HEART,
      CONSTANTS.SUIT_SPADE, CONSTANTS.SUIT_DIAMOND, CONSTANTS.SUIT_CLUB,
    ],
    gameState: {
      turnNumber: 1,
      status: 'give_card',
      maxCardToSelect: 2,
    },
    players: null,
    playerCards: null,
  },
  mutations,
  actions,
  getters,
};
