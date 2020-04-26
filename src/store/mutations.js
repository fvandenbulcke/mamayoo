import mutationTypes from './mutationsTypes';


const updateCardAttributeFormat = (card) => {
  if (!card) { return null; }
  const {
    id, suit, value, playable,
  } = card;
  return {
    id: id.toLowerCase(),
    suit: suit.toLowerCase(),
    value,
    playable,
  };
};

const updateCardsAttributeFormat = (cards) => cards && cards.map(updateCardAttributeFormat);

export default {
  setDice(state, newDice) {
    state.mamayooDice = {
      result: newDice,
    }; // eslint-disable-line
  },
  [mutationTypes.SAVE_PLAYER](state, newPlayerName) {
    state.playerName = newPlayerName;
  },
  SOCKET_ONOPEN(state) {
    state.isConnected = true;
  },
  SOCKET_ONCLOSE(state) {
    state.isConnected = false;
  },
  SOCKET_ONERROR(state, event) {
    console.error(state, event);
  },
  // default handler called for all methods
  SOCKET_ONMESSAGE(state, message) {
    const { gameInfo, playerCards } = JSON.parse(message.data);
    const { howManyCardsToDonate, players, mamayooDice } = gameInfo;

    // players
    state.players = players.map((player) => {
      const p = {
        ...player,
        playedCard: updateCardAttributeFormat(player.playedCard),
      };
      return p;
    });

    // current player cards
    state.playerCards = updateCardsAttributeFormat(playerCards);

    // game state
    state.gameState = {
      status: gameInfo.state,
      maxCardToSelect: howManyCardsToDonate,
      mamayooDice,
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
