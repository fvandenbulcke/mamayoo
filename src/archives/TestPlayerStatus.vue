<template>
  <v-container>
    <v-row class="mb-5">
      <v-col md="12">
        <h3>LES DIFFERENTS STATUTS D'UN JOUEUR</h3>
        <div class="d-flex flex-wrap">
          <PlayerStatus
            v-for="localPlayer in localPlayers"
            :key="localPlayer.name"
            :player="localPlayer"
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import PlayerStatus from '@/components/players/PlayerStatus';

export default {
  name: 'TestPlayerStatus',
  display: 'TestPlayerStatus',
  order: 1,
  components: {
    PlayerStatus,
  },
  data() {
    return {
      localPlayers: [{
        name: 'florian',
        score: 10,
        isTurn: false,
        winTurn: false,
        playedCard: {
          suit: 'diamond',
          value: 7,
        },
      }, {
        name: 'Thomas',
        score: 10,
        isTurn: true,
        winTurn: false,
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
