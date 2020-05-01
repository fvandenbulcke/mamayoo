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
          <Dice
            :mamayooDice="mamayooDice"
          />
          <MayooActionButton
            label="play card"
            :is-disabled="!actionIsAvaillable"
            :on-click="playSelectedCard"
          />
        </template>
        <template v-else-if="gameStatus === 'GameOverState'">
          <game-result
            :players="players"
            :restart="startGame"
          />
        </template>
      </v-col>
    </v-row>

    <v-row
      align="end"
      class="mt-auto mb-6 justify-center"
    >
      <PlayerStatus
        v-if="localPlayer"
        :player="localPlayer"
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
import MayooActionButton from '@/components/buttons/MayooActionButton';
import Dice from '@/components/dices/Dice';
import GameResult from './GameResult';

export default {
  name: 'PlayGround',
  components: {
    PlayerCards,
    PlayerStatus,
    Dice,
    MayooActionButton,
    GameResult,
  },

  data() {
    return {
      selectedCardIds: [],
      gameStatusInt: 'GameOverState',
      playersInt: [
        { name: 'florian', order: 0, score: 223 },
        { name: 'azerty', order: 1, score: 0 },
        { name: 'poulet', order: 2, score: 67 },
      ],
    };
  },

  methods: {
    ...mapActions(['startGame', 'giveCardsToNeighbour', 'playCard']),

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

    playSelectedCard() {
      this.playCard(this.selectedCardIds[0])
        .then(() => { this.selectedCardIds = []; });
    },
  },

  computed: {
    ...mapGetters(['players', 'localPlayer', 'playerCards', 'otherPlayers', 'gameStatus', 'maxCardToSelect', 'mamayooDice']),

    actionIsAvaillable() {
      return this.selectedCardIds.length === this.maxCardToSelect;
    },

    gameCards() {
      if (!this.playerCards) { return []; }
      return this.playerCards.map((c) => {
        const isSelected = this.selectedCardIds.includes(c.id);
        const isSelectable = this.localPlayer.isTurn && c.playable
          && (isSelected || this.selectedCardIds.length < this.maxCardToSelect);
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
