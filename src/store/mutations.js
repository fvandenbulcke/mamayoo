import groupBy from 'lodash/groupBy';
import mutationTypes from './mutationsTypes';


const updateCardAttributeFormat = (card) => {
  const { id, suit, value } = card;
  return {
    id: id.toLowerCase(),
    suit: suit.toLowerCase(),
    value,
  };
};

const updateCardsAttributeFormat = (cards) => cards && cards.map(updateCardAttributeFormat);

function savePlayer(state, { newPlayer, playerCards }) {
  state.player = {
    ...newPlayer,
    playedCard: newPlayer.playedCard && updateCardAttributeFormat(newPlayer.playedCard),
    cards: playerCards && updateCardsAttributeFormat(playerCards),
  };
}

function saveGameState(state, { status, howManyCardsToDonate, mamayooDice }) {
  state.gameState = {
    status,
    maxCardToSelect: howManyCardsToDonate,
    mamayooDice,
  };
}

const saveOtherPlayers = (state, newOtherPlayers) => {
  state.otherPlayers = newOtherPlayers.map((p) => {
    const otherPlayer = {
      ...p,
      playedCard: p.playedCard && updateCardAttributeFormat(p.playedCard),
    };
    return otherPlayer;
  });
};

export default {
  setDice(state, newDice) {
    state.mamayooDice = {
      result: newDice,
    }; // eslint-disable-line
  },
  [mutationTypes.SAVE_PLAYER](state, newPlayer) {
    savePlayer(state, { newPlayer });
  },
  /* [mutationTypes.SAVE_GAME_STATE](state, newGameState) {
    state.gameState = newGameState; // eslint-disable-line
  },
  [mutationTypes.SAVE_PLAYER_CARDS](state, newPlayersCards) {
    state.playerCards = newPlayersCards; // eslint-disable-line
  },
  [mutationTypes.RECEIVE_CARDS](state, newCards) {
    state.playerCards = state.playerCards.concat(newCards); // eslint-disable-line
  }, */
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

    const playerName = state.player.name;
    const groupPlayers = groupBy(players, (p) => p.name === playerName);

    const localPlayer = groupPlayers.true && groupPlayers.true[0];
    savePlayer(state, { newPlayer: localPlayer, playerCards });

    const otherPlayers = groupPlayers.false || [];
    if (otherPlayers.length > 1
      && otherPlayers.some((p) => p.order < localPlayer.order)) {
      while (otherPlayers.slice(-1).pop().order > localPlayer.order) {
        otherPlayers.unshift(otherPlayers.pop());
      }
    }
    saveOtherPlayers(state, otherPlayers);

    saveGameState(state, { status: gameInfo.state, howManyCardsToDonate, mamayooDice });
  },
  // mutations for reconnect methods
  SOCKET_RECONNECT(state, count) {
    console.info(state, count);
  },
  SOCKET_RECONNECT_ERROR(state) {
    state.socket.reconnectError = true;
  },
};
