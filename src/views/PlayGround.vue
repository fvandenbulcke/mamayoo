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
        <OtherPlayer/>
        <OtherPlayer/>
        <OtherPlayer/>
        <OtherPlayer/>
        <OtherPlayer/>
        <OtherPlayer/>
        <OtherPlayer/>
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
        <v-btn
          large color="primary"
          @click="roll"
        >
          ROLL
        </v-btn>
        <dice-roller ref="diceroller" :count="1" :whiteBackground="true"/>
        <Dice/>
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
        <PlayerCards
          class="pa-2"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { DiceRoller } from 'vue-dice-roller';
import OtherPlayer from '@/components/OtherPlayer';
import PlayerCards from '@/components/PlayerCards';
import Dice from '@/components/Dice';

export default {
  name: 'PlayGround',
  components: {
    PlayerCards,
    OtherPlayer,
    DiceRoller,
    Dice,
  },
  methods: {
    roll() {
      this.$refs.diceroller.roll();
    },
  },
};
</script>
