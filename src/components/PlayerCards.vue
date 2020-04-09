<template>
  <div class="playerCards">
     <v-btn
      large color="primary"
      :disabled="moreCardsAreExpected"
      @click="giveSelectedCards"
    >
      Send Cards
    </v-btn>
    <div class="d-flex d-inline-flex justify-center">
      <mamayoo-card
        v-for="card in sortedCards"
        :key="card.id"
        :id="card.id"
        :value="card.value"
        :suit="card.suit"
        :select="saveSelectedCard"
        :un-select="removeSelectedCard"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import groupBy from 'lodash/groupBy';
import MamayooCard from '@/components/MamayooCard';

export default {
  name: 'PlayerCards',
  components: {
    MamayooCard,
  },

  data() {
    return {
      suits: ['heart', 'diamond', 'spade', 'club'],
      values: ['A', 'R', 'D', 'V', '10', '9', '8', '7'],
      maxCardToSelect: 2,
      selectedCardIds: [],
    };
  },

  computed: {
    ...mapGetters(['playerCards']),
    sortedCards() {
      const sortedCards = [];
      const groupedCards = groupBy(this.playerCards, 'suit');
      sortedCards.push(...groupedCards.payoo.sort(this.sortCards));
      sortedCards.push(...groupedCards.heart.sort(this.sortCards));
      sortedCards.push(...groupedCards.diamond.sort(this.sortCards));
      sortedCards.push(...groupedCards.spade.sort(this.sortCards));
      sortedCards.push(...groupedCards.club.sort(this.sortCards));
      return sortedCards.map((c) => {
        const newCard = c;
        newCard.id = `${c.suit}${c.value}`;
        return newCard;
      });
    },

    moreCardsAreExpected() {
      return this.selectedCardIds.length < this.maxCardToSelect;
    },
  },

  methods: {
    ...mapActions(['giveCardsToNeighbour']),
    sortCards(cardOne, cardTwo) {
      return cardOne.value - cardTwo.value;
    },
    saveSelectedCard(cardId) {
      let cardSelectHaveBeenSaved = false;
      if (this.selectedCardIds.length < this.maxCardToSelect) {
        cardSelectHaveBeenSaved = true;
        this.selectedCardIds.push(cardId);
      }
      return Promise.resolve(cardSelectHaveBeenSaved);
    },
    removeSelectedCard(cardId) {
      this.selectedCardIds = this.selectedCardIds.filter((c) => c !== cardId);
      return Promise.resolve(true);
    },
    giveSelectedCards() {
      const cardsToGive = this.playerCards.filter((c) => this.selectedCardIds.includes(c.id));
      this.giveCardsToNeighbour(cardsToGive)
        .then(() => { this.selectedCardIds = []; });
    },
  },

};
</script>
