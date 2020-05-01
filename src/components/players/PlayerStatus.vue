<template>
  <v-card
    class="pa-2"
    outlined
    tile
  >
    <v-card-title>
      {{ player.name }}
    </v-card-title>
    <v-card-subtitle>
      Select cards to give
    </v-card-subtitle>
    <v-card-text class="pb-0 d-inline-flex justify-center mamayoo-card-text">
      <BackCard
        class="ml-auto mr-auto"
        :value="player.score"
      />
      <template v-if="this.player.isTurn">
        <v-btn  text small loading>Normal</v-btn>
      </template>
      <template v-if="this.player.playedCard">
        <mamayoo-card
          class="ml-auto mr-auto"
          :card="this.player.playedCard"
          :is-selected="false"
          :is-disable="false"
        />
      </template>
    </v-card-text>
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
  .mamayoo-card-text {
    min-height: 68px;
  }
</style>
