<template>
  <div class="playerCards">
    <div class="d-flex d-inline-flex justify-center">
      <mamayoo-card
        v-for="card in gameCards"
        :key="card.card.id"
        :card="card.card"
        :is-selected="card.isSelected"
        :is-disable="!card.isSelectable"
        :on-click="() => onCardClick(card.card.id)"
      />
    </div>
  </div>
</template>

<script>
import MamayooCard from '@/components/MamayooCard';

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
