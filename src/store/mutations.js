import groupBy from 'lodash/groupBy';

import mutationTypes from './mutationsTypes';

export default {
  [mutationTypes.SAVE_PLAYER](state, newPlayer) {
    state.player = newPlayer; // eslint-disable-line
  },
  [mutationTypes.SAVE_GAME_STATE](state, newGameState) {
    state.gameState = newGameState; // eslint-disable-line
  },
  [mutationTypes.SAVE_PLAYER_CARDS](state, newPlayersCards) {
    state.playerCards = newPlayersCards; // eslint-disable-line
  },
  [mutationTypes.RECEIVE_CARDS](state, newCards) {
    state.playerCards = state.playerCards.concat(newCards); // eslint-disable-line
  },
  SOCKET_ONOPEN(state) {
    state.isConnected = true;
  },
  SOCKET_ONCLOSE(state) {
    state.socket.isConnected = false;
  },
  SOCKET_ONERROR(state, event) {
    console.error(state, event);
  },
  // default handler called for all methods
  SOCKET_ONMESSAGE(state, message) {
    const { gameInfo } = JSON.parse(message.data);
    console.log(gameInfo);
    console.log(Object.keys(gameInfo));
    const groupPlayers = groupBy(gameInfo.players, (p) => p.name === state.player);
    console.log(groupPlayers);
    state.otherPlayers = groupPlayers.false;
  },
  // mutations for reconnect methods
  SOCKET_RECONNECT(state, count) {
    console.info(state, count);
  },
  SOCKET_RECONNECT_ERROR(state) {
    state.socket.reconnectError = true;
  },
};
