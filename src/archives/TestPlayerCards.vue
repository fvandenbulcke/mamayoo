<template>
  <v-container
    fill-height
    fluid
    class="grey lighten-5"
  >
    <v-row
      align="start"
      no-gutters
      class="rowend mb-auto"
      style="height: 150px;"
    >
      <v-col
        class="d-flex justify-center"
      >
        <PlayerStatus
          v-for="localPlayer in localPlayers"
          :key="localPlayer.name"
          :player="localPlayer"
          :requested-suit="requestedSuit"
        />
      </v-col>
    </v-row>

    <v-row
      align="end"
      class="mt-auto mb-6 justify-center"
    >
      <PlayerStatus
        :player="localPlayers[0]"
      />
      <PlayerCards
        class="pa-2"
        :game-cards="row2"
        :on-card-click="() => {}"
      />
    </v-row>
  </v-container>
</template>

<script>
import PlayerStatus from '@/components/players/PlayerStatus';
import PlayerCards from '@/components/players/PlayerCards';

export default {
  name: 'TestPlayerCards',
  components: {
    PlayerStatus,
    PlayerCards,
  },
  data() {
    return {
      requestedSuit: 'diamond',
      localPlayers: [{
        name: 'Thomas',
        score: 10,
        isTurn: true,
        winTurn: false,
      }, {
        name: 'Julien',
        score: 10,
        isTurn: false,
        winTurn: false,
        playedCard: {
          suit: 'diamond',
          value: 10,
        },
      }, {
        name: 'florian',
        score: 10,
        isTurn: false,
        winTurn: false,
        hasPlayed7ofRequestedSuit: true,
        playedCard: {
          suit: 'diamond',
          value: 7,
        },
      }, {
        name: 'Lucie',
        score: 10,
        isTurn: false,
        winTurn: true,
        playedCard: {
          suit: 'mayoo',
          value: 10,
        },
      }],
      row2: [
        {
          id: 1, suit: 'mayoo', value: '8', isSelected: false,
        },
        {
          id: 2, suit: 'spade', value: '3', isSelected: false,
        },
        {
          id: 3, suit: 'club', value: '5', isSelected: false,
        },
        {
          id: 4, suit: 'diamond', value: '4', isSelected: false,
        },
        {
          id: 5, suit: 'mayoo', value: '6', isSelected: false,
        },
        {
          id: 6, suit: 'spade', value: '1', isSelected: false,
        },
        {
          id: 8, suit: 'heart', value: '8', isSelected: false,
        },
        {
          id: 9, suit: 'spade', value: '3', isSelected: false,
        },
        {
          id: 10, suit: 'club', value: '5', isSelected: false,
        },
        {
          id: 11, suit: 'diamond', value: '4', isSelected: false,
        },
        {
          id: 12, suit: 'heart', value: '6', isSelected: false,
        },
        {
          id: 13, suit: 'spade', value: '1', isSelected: false,
        },
      ],
      cards1: [
        { id: 1, suit: 'mayoo', value: '8' },
        { id: 2, suit: 'spade', value: '3' },
        { id: 3, suit: 'club', value: '5' },
      ],
      cards2: [
        { id: 4, suit: 'diamond', value: '4' },
        { id: 5, suit: 'heart', value: '6' },
        { id: 6, suit: 'spade', value: '1' },
      ],
    };
  },
  methods: {
    add() {
      window.console.log('add()');
      window.console.log(this.row1);
    },
    remove() {
      window.console.log('remove()');
      window.console.log(this.row1);
    },
    update() {
      window.console.log('update()');
      window.console.log(this.row1);
    },
    startDragging() {
      this.dragging = true;
      window.console.log('startDragging()');
      window.console.log(this.row1);
    },
    endDragging() {
      this.dragging = false;
      window.console.log('endDragging()');
      window.console.log(this.row1);
    },
    changeDragging() {
      window.console.log('changeDragging()');
      window.console.log(this.row1);
    },

    checkMove(e) {
      window.console.log(`Future index: ${e.draggedContext.futureIndex}`);
    },

    log(evt) {
      window.console.log(evt);
    },
  },
};
</script>
<style scoped>
  .card-selector {
    border-radius: 20px;
    border: 2px aquamarine dashed;
  }
</style>
