<template>
  <v-card
    shaped
    tile
    :ripple="false"
    class="mamayoo-card"
    :class="{
      'card-selected': this.isSelected,
      'disable-events': this.isDisable,
      'not-playable': this.card.notPlayable,
      'is-winning': isWinning
    }"
    v-on:click.native="onClick"
  >
    <v-card-text class="pa-0" :class="cardContentClasses">
      <v-container
        fill-height
        fluid
        class="pt-0 pb-0 mamayoo-content"
      >
        <v-row no-gutters class="justify-start mamayoo-content-value">
          <span>{{ card.value }}</span>
        </v-row>
        <v-row no-gutters align="center" class="justify-center mamayoo-content-suit">
          <v-img v-if="card.suit === 'mayoo'"
            :class="{
              'opacity05': this.card.notPlayable,
            }"
            src="@/assets/mamayoo.svg"
            aspect-ratio="1"
          />
          <template v-else>{{ suitIcons[card.suit] }}</template>
        </v-row>
        <v-row no-gutters class="justify-end mamayoo-content-value">
          <span>{{ card.value }}</span>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  name: 'MamayooCard',

  props: {
    card: {
      type: Object,
      required: true,
    },
    isWinning: {
      type: Boolean,
      required: true,
    },
    isSelected: {
      type: Boolean,
      required: true,
    },
    isDisable: {
      type: Boolean,
      required: true,
    },
    onClick: {
      type: Function,
      required: false,
    },
  },

  data() {
    return {
      suitIcons: {
        heart: '♥',
        diamond: '♦',
        spade: '♠',
        club: '♣',
        mayoo: 'M',
      },
    };
  },

  computed: {
    cardContentClasses() {
      return {
        'mamayoo-card-content': true,
        'red--text': ['heart', 'diamond'].includes(this.card.suit),
        'black--text': ['spade', 'club'].includes(this.card.suit),
      };
    },
  },

};
</script>

<style lang="scss" scoped>
  .mamayoo-card{
    background-color: white;
    border-radius: 10px;
    user-select: none;
    cursor: pointer;
  }
  .mamayoo-card:hover{
    transform: translateY(-20px);
  }
  .card-selected {
    transform: translateY(-20px);
  }
  .not-playable{
    background: #dedede;
  }
  .disable-events {
    pointer-events: none
  }
  .is-winning {
    animation: blinker .8s linear infinite;
    border: 2px red solid;
  }
  @keyframes blinker {
    50% { border-color: white; }
  }
  .opacity05 {
    opacity: 0.5;
  }
</style>
