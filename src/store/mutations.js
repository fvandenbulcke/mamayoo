import mutationTypes from './mutationsTypes';

export default {
  [mutationTypes.SAVE_GAME_STATE](state, newGameState) {
    state.gameState = newGameState; // eslint-disable-line
  },
};
