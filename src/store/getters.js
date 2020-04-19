import groupBy from 'lodash/groupBy';

const sortCards = (cardOne, cardTwo) => cardOne.value - cardTwo.value;

export default {
  isConnected({ isConnected }) {
    return isConnected;
  },
  playerStatus({ player }) {
    const { name, score, state } = player;
    return {
      name,
      score,
      isTurn: state === 'IS_PLAYING',
    };
  },

  sortedPlayerCards({ orderedSuits, player }) {
    const sortedCards = [];
    const groupedCards = groupBy(player.cards, 'suit');
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

  otherPlayers({ otherPlayers }) {
    return otherPlayers.map((p) => {
      const { name, score, state } = p;
      return {
        name,
        score,
        isTurn: state === 'IS_PLAYING',
      };
    });
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
