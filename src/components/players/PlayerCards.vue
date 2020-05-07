<template>
  <div class="d-flex flex-wrap">
    <mamayoo-card
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
  .v-card >>> .v-card__text .mamayoo-content{
    height: 150px;
    width: 70px;
    font-size: x-large;
  }
</style>
