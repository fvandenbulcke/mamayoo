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
    <v-card-text>
      <BackCard
        :value="player.points"
      />
      <v-btn v-if="haveToPlay" text small loading>Normal</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
import BackCard from '@/components/cards/BackCard';

export default {
  name: 'OtherPlayer',
  components: {
    BackCard,
  },
  props: {
    player: {
      type: Object,
      required: true,
    },
  },
  computed: {
    haveToPlay() {
      return this.player.status === 'playing';
    },
  },
};
</script>
