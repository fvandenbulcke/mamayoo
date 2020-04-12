import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:8090',
  'Content-Type': 'application/json',
});

export default {
  getTableList() {
    return httpClient.get('/games')
      .then((response) => response && response.data);
  },

  createTable() {
    return httpClient.post('/games')
      .then((response) => response && response.data && response.data.id);
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
