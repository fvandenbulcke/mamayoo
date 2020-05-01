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
    <v-card-title class="pt-0 pb-2 justify-center">
      <v-chip
        class="ma-2"
        color="primary"
        outlined
        pill
      >
        <v-icon left>mdi-account-outline</v-icon>
        {{ player.name }}
      </v-chip>
    </v-card-title>
    <v-card-text class="pb-0 d-inline-flex justify-center player-status-card-text">
      <BackCard
        class="ml-auto mr-auto"
        :value="player.score"
      />
      <mamayoo-card
        v-if="this.player.playedCard"
        class="ml-auto mr-auto player-status-playcard"
        :card="this.player.playedCard"
        :is-selected="false"
        :is-disable="false"
      />
    </v-card-text>
    <v-card-actions v-if="this.player.isTurn">
      <v-progress-linear
        color="primary accent-4"
        indeterminate
        height="10"
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
<style lang="scss" scoped>
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
