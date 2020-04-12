export default {
  /**
   * Get the customer points
   * @public
   * @version 20.5.2
   * @param {Number} customerNumber The customer number
   * @returns {Object} The customer points
   */
  createTable() {
    console.log('create table');
    return Promise.resolve({ createdTable: 'azerty12345' });
  },
  joinTable(tableId) {
    console.log(`Join table ${tableId}`);
    return Promise.resolve({ status: 'toStart' });
  },
  giveCardsToNeighbour(cards) {
    console.log('Cards to send:');
    console.log(cards);
    return Promise.resolve({
      turnNumber: 1,
      status: 'roll_dice',
      maxCardToSelect: 2,
      player0: { points: 0, status: 'played' },
      player1: { points: 10, status: 'played' },
      player2: { points: 20, status: 'played' },
      player3: { points: 30, status: 'playing' },
      player4: { points: 40, status: 'toPlay' },
      player5: { points: 50, status: 'toPlay' },
      player6: { points: 60, status: 'toPlay' },
      player7: { points: 70, status: 'toPlay' },
    });
  },
};
