<template>
  <div>
    <v-btn
      large color="primary"
      @click="roll"
    >
      ROLL
    </v-btn>
    <dice-roller ref="diceroller" :count="1" :whiteBackground="true"/>
  </div>
</template>

<script>
import { DiceRoller } from 'vue-dice-roller';

export default {
  name: 'DiceRolling',
  components: {
    DiceRoller,
  },
  methods: {
    roll() {
      this.$refs.diceroller.roll();
    },
  },
};
</script>
