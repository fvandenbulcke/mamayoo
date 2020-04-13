import groupBy from 'lodash/groupBy';

const sortCards = (cardOne, cardTwo) => cardOne.value - cardTwo.value;

export default {
  isConnected({ isConnected }) {
    return isConnected;
  },
  player({ player }) {
    return player;
  },

  sortedPlayerCards({ orderedSuits, playerCards }) {
    const sortedCards = [];
    const groupedCards = groupBy(playerCards, 'suit');
    orderedSuits.forEach((suit) => {
      if (groupedCards[suit]) {
        sortedCards.push(...groupedCards[suit].sort(sortCards));
      }
    });
    return sortedCards;
  },

  playerCards(state, getters) {
    return getters.sortedPlayerCards.map((c) => {
      const cardWithId = {
        id: `${c.suit}${c.value}`,
        ...c,
      };
      return cardWithId;
    });
  },

  otherPlayers({ gameState, otherPlayers }) {
    return otherPlayers.map((p) => {
      const player = {
        ...p,
        ...gameState[p.id],
      };
      return player;
    });
  },

  gameState({ gameState }) {
    return gameState;
  },

  gameStatus({ gameState }) {
    return gameState.status;
  },
};
