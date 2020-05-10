<template>
  <div class="d-flex flex-wrap">
    <mamayoo-card
      class="player-card"
      v-for="card in gameCards"
      :key="card.id"
      :card="card"
      :is-selected="card.isSelected"
      :is-disable="!card.isSelectable"
      :isWinning="false"
      :on-click="() => onCardClick(card.id)"
    />
  </div>
</template>

<script>
import MamayooCard from '@/components/cards/MamayooCard';

export default {
  name: 'PlayerCards',
  components: {
    MamayooCard,
  },

  props: {
    gameCards: {
      type: Array,
      required: true,
    },

    onCardClick: {
      type: Function,
      required: true,
    },
  },
};
</script>
<style scoped>
  .player-card >>> .mamayoo-card-content .mamayoo-content {
    height: 150px;
    width: 70px;
  }
  .player-card >>> .mamayoo-card-content .mamayoo-content-value {
    font-size: large;
  }
  .player-card >>> .mamayoo-card-content .mamayoo-content-suit {
    font-size: xx-large;
  }
</style>
