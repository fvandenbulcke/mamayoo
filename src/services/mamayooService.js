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
    return Promise.resolve({ status: 'toStart' });
  },
};
