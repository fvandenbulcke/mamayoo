<template>
  <v-card
    class="pa-2"
    :class="{
      'win-turn-player': player.winTheTurn
    }"
    min-width="170"
    outlined
    tile
  >
    <v-card-title class="pt-0 pb-2">
      {{ player.name }}
    </v-card-title>
    <v-card-text class="pb-0 d-inline-flex justify-center player-status-card-text">
      <BackCard
        class="ml-auto mr-auto"
        :value="player.score"
      />
      <mamayoo-card
        class="ml-auto mr-auto player-status-playcard"
        :card="this.player.playedCard"
        :is-selected="false"
        :is-disable="false"
      />
    </v-card-text>
    <v-card-actions v-if="this.player.isTurn">
      <v-progress-linear
        color="deep-purple accent-4"
        indeterminate
        height="20"
      ></v-progress-linear>
    </v-card-actions>
  </v-card>
</template>

<script>
import BackCard from '@/components/cards/BackCard';
import MamayooCard from '@/components/cards/MamayooCard';

export default {
  name: 'PlayerStatus',
  components: {
    BackCard,
    MamayooCard,
  },
  props: {
    player: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss">
  .player-status-card-text {
    min-height: 68px;
  }

  .win-turn-player {
    background-color: #F6C8CD;
  }

  .player-status-playcard .mamayoo-card-content {
    font-size: large;
  }
</style>
