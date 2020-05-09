
const updateCardAttributeFormat = (card) => {
  if (!card) { return null; }
  const {
    id, suit, value, playable, winning,
  } = card;
  return {
    id: id.toLowerCase(),
    suit: suit.toLowerCase(),
    value,
    playable,
    winning,
  };
};

const updateCardsAttributeFormat = (cards) => cards && cards.map(updateCardAttributeFormat);

export default {
  // default handler called for all methods
  SOCKET_ONMESSAGE(state, message) {
    const { gameInfo, playerCards } = message;
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
};
