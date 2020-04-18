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
        <PlayerStatus
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
          <MayooActionButton
            label="START GAME"
            :is-disabled="false"
            :on-click="startGame"
          />
        </template>
        <template v-else-if="gameStatus === 'WaitingCardDonationState'">
          <MayooActionButton
            label="send cards"
            :is-disabled="!actionIsAvaillable"
            :on-click="giveSelectedCards"
          />
        </template>
        <template v-else-if="gameStatus === 'PlayingState'">
          <DiceRolling/>
          <Dice/>
        </template>
      </v-col>
    </v-row>

    <v-row
      align="end"
      class="mt-auto mb-6 justify-center"
    >
      <PlayerStatus
        :player="player"
      />
      <PlayerCards
        class="pa-2"
        :game-cards="gameCards"
        :on-card-click="changeCardSelect"
      />
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import PlayerStatus from '@/components/players/PlayerStatus';
import PlayerCards from '@/components/players/PlayerCards';
import DiceRolling from '@/components/dices/DiceRolling';
import MayooActionButton from '@/components/buttons/MayooActionButton';
import Dice from '@/components/dices/Dice';

export default {
  name: 'PlayGround',
  components: {
    PlayerCards,
    PlayerStatus,
    DiceRolling,
    Dice,
    MayooActionButton,
  },

  data() {
    return {
      selectedCardIds: [],
    };
  },

  methods: {
    ...mapActions(['startGame', 'giveCardsToNeighbour']),

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
          ...c,
          isSelected,
          isSelectable,
        };
      });
    },
  },
};
</script>
