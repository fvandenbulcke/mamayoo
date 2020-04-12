<template>
  <div>
    <div class="dice">
      <ol
      class="die-list"
      :class="{
        'odd-roll': oddRoll,
        'even-roll': evenRoll,
      }"
      :data-roll="roll" id="die-1"
      >
        <li class="die-item" data-side="1" >
          <span class="die-face red--text">♦</span>
        </li>
        <li class="die-item" data-side="2">
          <span class="die-face red--text">♥</span>
        </li>
        <li class="die-item" data-side="3">
          <span class="die-face">♣</span>
        </li>
        <li class="die-item" data-side="4">
          <span class="die-face">♠</span>
        </li>
        <li class="die-item" data-side="5">
          <span class="die-face red--text">♦</span>
        </li>
        <li class="die-item" data-side="6">
          <span class="die-face">♣</span>
        </li>
      </ol>
    </div>
    <v-btn
      large color="primary"
      @click="rollDice"
    >
      ROLL THE DICE
    </v-btn>
  </div>
</template>

<script>

export default {
  name: 'Dice',
  props: {
    value: {
      type: Number,
      required: false,
      default: 0,
    },
  },

  data() {
    return {
      sides: 6,
      dataRoll: 1,
      roll: 1,
      oddRoll: false,
      evenRoll: true,
    };
  },

  methods: {
    rollDice() {
      this.oddRoll = !this.oddRoll;
      this.evenRoll = !this.evenRoll;
      this.roll = this.getRandomNumber(1, 4);
    },

    toggleClasses(die) {
      die.classList.toggle('odd-roll');
      die.classList.toggle('even-roll');
    },

    getRandomNumber(min, max) {
      const min2 = Math.ceil(min);
      const max2 = Math.floor(max);
      return Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
    },
  },
};
</script>

<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }
  html {
    font-family: system-ui, sans-serif;
  }
  main {
    background: linear-gradient(#454545, #676767, #454545);
    display: grid;
    grid-template-columns: 1fr;
    height: 100vh;
    width: 100%;
  }
  body {
    overflow: hidden;
  }
  .dice {
    align-items: center;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
    grid-template-rows: auto;
    justify-items: center;
    padding: 2rem;
    perspective: 600px;
  }
  .die-list {
    height: 6rem;
    list-style-type: none;
    position: relative;
    transform-style: preserve-3d;
    width: 6rem;
  }
  .even-roll {
    transition: transform 1.5s ease-out;
  }
  .odd-roll {
    transition: transform 1.25s ease-out;
  }
  .die-item {
    background-color: #fefefe;
    box-shadow: inset -0.35rem 0.35rem 0.75rem rgba(0, 0, 0, 0.3),
      inset 0.5rem -0.25rem 0.5rem rgba(0, 0, 0, 0.15);
    display: grid;
    grid-template-areas: "one";
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    height: 100%;
    position: absolute;
    width: 100%;
  }
  .die-face {
    justify-self: center;
    font-size: 4em;
  }
  .even-roll[data-roll="1"] {
    transform: rotateX(360deg) rotateY(720deg) rotateZ(360deg);
  }
  .even-roll[data-roll="2"] {
    transform: rotateX(450deg) rotateY(720deg) rotateZ(360deg);
  }
  .even-roll[data-roll="3"] {
    transform: rotateX(360deg) rotateY(630deg) rotateZ(360deg);
  }
  .even-roll[data-roll="4"] {
    transform: rotateX(360deg) rotateY(810deg) rotateZ(360deg);
  }
  .even-roll[data-roll="5"] {
    transform: rotateX(270deg) rotateY(720deg) rotateZ(360deg);
  }
  .even-roll[data-roll="6"] {
    transform: rotateX(360deg) rotateY(900deg) rotateZ(360deg);
  }
  .odd-roll[data-roll="1"] {
    transform: rotateX(-360deg) rotateY(-720deg) rotateZ(-360deg);
  }
  .odd-roll[data-roll="2"] {
    transform: rotateX(-270deg) rotateY(-720deg) rotateZ(-360deg);
  }
  .odd-roll[data-roll="3"] {
    transform: rotateX(-360deg) rotateY(-810deg) rotateZ(-360deg);
  }
  .odd-roll[data-roll="4"] {
    transform: rotateX(-360deg) rotateY(-630deg) rotateZ(-360deg);
  }
  .odd-roll[data-roll="5"] {
    transform: rotateX(-450deg) rotateY(-720deg) rotateZ(-360deg);
  }
  .odd-roll[data-roll="6"] {
    transform: rotateX(-360deg) rotateY(-900deg) rotateZ(-360deg);
  }
  [data-side="1"] {
    transform: rotate3d(0, 0, 0, 90deg) translateZ(3rem);
  }
  [data-side="2"] {
    transform: rotate3d(-1, 0, 0, 90deg) translateZ(3rem);
  }
  [data-side="3"] {
    transform: rotate3d(0, 1, 0, 90deg) translateZ(3rem);
  }
  [data-side="4"] {
    transform: rotate3d(0, -1, 0, 90deg) translateZ(3rem);
  }
  [data-side="5"] {
    transform: rotate3d(1, 0, 0, 90deg) translateZ(3rem);
  }
  [data-side="6"] {
    transform: rotate3d(1, 0, 0, 180deg) translateZ(3rem);
  }

  button {
    align-self: center;
    background-color: #efefef;
    border: none;
    color: #333;
    font-size: 1.25rem;
    font-weight: 700;
    justify-self: center;
    padding: 0.5rem 1rem;
  }
  button:hover {
    cursor: pointer;
  }

  @media (min-width: 900px) {
    .dice {
      perspective: 1300px;
    }
  }
</style>
