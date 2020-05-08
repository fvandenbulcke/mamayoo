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
            :requested-suit="requestedSuit"
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
    };
  },
};
</script>
<style scoped>
  .card-selector {
    border-radius: 20px;
    border: 2px aquamarine dashed;
  }
</style>
