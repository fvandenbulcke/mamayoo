import groupBy from 'lodash/groupBy';

const sortCards = (cardOne, cardTwo) => cardOne.value - cardTwo.value;

export default {
  playerName({ playerName }) {
    return playerName;
  },

  isConnected({ isConnected }) {
    return isConnected;
  },

  players({ players }) {
    return players && players.map((p) => {
      const player = {
        ...p,
        isTurn: p.state === 'IS_PLAYING',
      };
      delete player.state;
      return player;
    });
  },

  groupedPlayers({ playerName }, { players }) {
    const groupPlayers = players && groupBy(players, (p) => p.name === playerName);
    return groupPlayers;
  },

  localPlayer(state, { groupedPlayers }) {
    return groupedPlayers && groupedPlayers.true[0];
  },

  otherPlayers(state, { groupedPlayers, localPlayer }) {
    const otherPlayers = groupedPlayers && groupedPlayers.false;
    if (otherPlayers && otherPlayers.length > 1
      && otherPlayers.some((p) => p.order < localPlayer.order)) {
      while (otherPlayers.slice(-1).pop().order > localPlayer.order) {
        otherPlayers.unshift(otherPlayers.pop());
      }
    }
    return otherPlayers;
  },

  playerCards({ orderedSuits, playerCards }) {
    if (!playerCards) { return []; }
    const sortedCards = [];
    const groupedCards = groupBy(playerCards, 'suit');
    orderedSuits.forEach((suit) => {
      if (groupedCards[suit]) {
        sortedCards.push(...groupedCards[suit].sort(sortCards));
      }
    });
    return sortedCards;
  },

  gameState({ gameState }) {
    return gameState;
  },

  gameStatus({ gameState }) {
    return gameState.status;
  },

  maxCardToSelect({ gameState }) {
    return gameState.maxCardToSelect;
  },

  mamayooDice({ gameState }) {
    return gameState.mamayooDice;
  },
};
