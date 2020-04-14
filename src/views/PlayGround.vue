<template>
  <v-container
    fill-height
    fluid
    class="grey lighten-5"
  >
    <v-row
      align="start"
      no-gutters
      class="rowend mb-auto"
      style="height: 150px;"
    >
      <v-col
        class="d-flex justify-center"
      >
        <OtherPlayer
          v-for="otherPlayer in otherPlayers"
          :key="otherPlayer.name"
          :player="otherPlayer"
        />
      </v-col>
    </v-row>

    <v-row
      align="center"
      no-gutters
      class="mb-auto"
    >
      <v-col
        class="d-flex justify-center"
      >
      <template v-if="gameStatus === 'WaitingPlayerState'">
        <StartGameButton
          :is-disable="false"
        />
      </template>
      <template v-else-if="gameStatus === 'WaitingCardDonationState'">
        <v-btn
          large color="primary"
          :disabled="!actionIsAvaillable"
          @click="giveSelectedCards"
        >
          sendCards
        </v-btn>
      </template>
      <template v-else-if="gameStatus === 'roll_dice'">
        <DiceRolling/>
        <Dice/>
      </template>
      </v-col>
    </v-row>

    <v-row
      align="end"
      no-gutters
      class="mt-auto mb-6"
      style="height: 150px;"
    >
      <v-col
        class="d-flex justify-center"
      >
        <OtherPlayer
          :player="player"
        />
        <PlayerCards
          class="pa-2"
          :game-cards="gameCards"
          :on-card-click="changeCardSelect"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import OtherPlayer from '@/components/players/OtherPlayer';
import PlayerCards from '@/components/players/PlayerCards';
import DiceRolling from '@/components/dices/DiceRolling';
import StartGameButton from '@/components/buttons/StartGameButton';
import Dice from '@/components/dices/Dice';

export default {
  name: 'PlayGround',
  components: {
    PlayerCards,
    OtherPlayer,
    DiceRolling,
    Dice,
    StartGameButton,
  },

  data() {
    return {
      selectedCardIds: [],
    };
  },

  methods: {
    ...mapActions(['giveCardsToNeighbour']),

    changeCardSelect(cardId) {
      const cardIdsWithoutSelected = this.selectedCardIds.filter((c) => c !== cardId);
      if (cardIdsWithoutSelected.length === this.selectedCardIds.length) {
        // ajout
        this.selectedCardIds.push(cardId);
      } else {
        // suppression
        this.selectedCardIds = cardIdsWithoutSelected;
      }
    },

    giveSelectedCards() {
      this.giveCardsToNeighbour(this.selectedCardIds)
        .then(() => { this.selectedCardIds = []; });
    },
  },

  computed: {
    ...mapGetters(['gameState', 'playerCards', 'otherPlayers', 'gameStatus', 'player']),

    actionIsAvaillable() {
      return this.selectedCardIds.length >= this.gameState.maxCardToSelect;
    },

    gameCards() {
      return this.playerCards.map((c) => {
        const isSelected = this.selectedCardIds.includes(c.id);
        const isSelectable = isSelected
          || this.selectedCardIds.length < this.gameState.maxCardToSelect;
        return {
          card: c,
          isSelected,
          isSelectable,
        };
      });
    },
  },
};
</script>
