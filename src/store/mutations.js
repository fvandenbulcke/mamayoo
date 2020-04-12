import mutationTypes from './mutationsTypes';

export default {
  [mutationTypes.SAVE_GAME_STATE](state, newGameState) {
    state.gameState = newGameState; // eslint-disable-line
  },
  [mutationTypes.SAVE_PLAYER_CARDS](state, newPlayersCards) {
    state.playerCards = newPlayersCards; // eslint-disable-line
  },
  [mutationTypes.RECEIVE_CARDS](state, newCards) {
    state.playerCards = state.playerCards.concat(newCards); // eslint-disable-line
  },
};
