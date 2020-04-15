import groupBy from 'lodash/groupBy';

import mutationTypes from './mutationsTypes';

const savePlayer = (state, newPlayer) => { state.player = newPlayer; };
const saveOtherPlayers = (state, newOtherPlayers) => { state.otherPlayers = newOtherPlayers; };
const toLowerCase = (cards) => cards.map(({ id, suit, value }) => {
  const cardToLowerCase = {
    id: id.toLowerCase(),
    suit: suit.toLowerCase(),
    value,
  };
  return cardToLowerCase;
});

export default {
  [mutationTypes.SAVE_PLAYER](state, newPlayer) {
    savePlayer(state, newPlayer);
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
    const { gameInfo, playerCards } = JSON.parse(message.data);
    const { howManyCardsToDonate, players } = gameInfo;

    const playerName = state.player.name;
    const groupPlayers = groupBy(players, (p) => p.name === playerName);

    const player = {
      ...groupPlayers.true[0],
      cards: playerCards && toLowerCase(playerCards),
    };
    savePlayer(state, player);
    saveOtherPlayers(state, groupPlayers.false);
    state.gameState = {
      status: gameInfo.state,
      maxCardToSelect: howManyCardsToDonate,
    };
  },
  // mutations for reconnect methods
  SOCKET_RECONNECT(state, count) {
    console.info(state, count);
  },
  SOCKET_RECONNECT_ERROR(state) {
    state.socket.reconnectError = true;
  },
};
