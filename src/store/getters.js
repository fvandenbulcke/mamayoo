import groupBy from 'lodash/groupBy';

const sortCards = (cardOne, cardTwo) => cardOne.value - cardTwo.value;

export default {
  isConnected({ isConnected }) {
    return isConnected;
  },
  playerStatus({ player }) {
    const {
      name, score, state, playedCard,
    } = player;
    return {
      name,
      score,
      isTurn: state === 'IS_PLAYING',
      playedCard,
    };
  },

  playerCards({ orderedSuits, player }) {
    const sortedCards = [];
    const groupedCards = groupBy(player.cards, 'suit');
    orderedSuits.forEach((suit) => {
      if (groupedCards[suit]) {
        sortedCards.push(...groupedCards[suit].sort(sortCards));
      }
    });
    return sortedCards;
  },

  otherPlayers({ otherPlayers }) {
    return otherPlayers.map((p) => {
      const {
        name, score, state, playedCard,
      } = p;
      return {
        name,
        score,
        isTurn: state === 'IS_PLAYING',
        playedCard,
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
