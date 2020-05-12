<template>
  <v-card
    class="pa-2"
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
      <v-img v-if="player.winTurn" src="@/assets/bomb.gif" aspect-ratio="1.7"/>
      <v-img v-else-if="player.hasPlayed7ofDiceSuit"
        src="@/assets/troll.gif" aspect-ratio="1.7"/>
      <mamayoo-card
        v-else-if="player.playedCard"
        class="ml-auto mr-auto player-status-playcard"
        :card="player.playedCard"
        :is-selected="false"
        :is-disable="false"
        :is-winning="player.winTurn"
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
<style scoped>
  .player-status-card-text {
    min-height: 68px;
  }

  .player-status-playcard >>> .mamayoo-card-content .mamayoo-content {
    font-size: medium;
  }
</style>
