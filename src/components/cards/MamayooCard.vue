<template>
  <v-card
    outlined
    tile
    :ripple="false"
    class="mamayoo-card"
    :class="{
      'card-selected': this.isSelected,
    }"
    @click="select"
  >
    <v-card-text class="pa-0" :class="cardContentClasses">
      <v-container
        fill-height
        fluid
        class="pt-0 pb-0 mamayoo-content"
      >
        <v-row no-gutters class="justify-start">
          <span>{{ suitIcons[card.suit] }}</span>
        </v-row>
        <v-row no-gutters class="justify-center">
          <span>{{ card.value }}</span>
        </v-row>
        <v-row no-gutters class="justify-end">
          <span>{{ suitIcons[card.suit] }}</span>
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
        HEART: '♥',
        DIAMOND: '♦',
        SPADE: '♠',
        CLUB: '♣',
        MAYOO: 'M',
      },
    };
  },

  computed: {
    cardContentClasses() {
      return {
        'red--text': ['heart', 'diamond'].includes(this.card.suit.toLowerCase()),
        'black--text': ['spade', 'club'].includes(this.card.suit.toLowerCase()),
      };
    },
  },

  methods: {
    select() {
      if (!this.isDisable) {
        this.onClick();
      }
    },
  },

};
</script>

<style lang="scss" scoped>
  .mamayoo-card{
    background-color: transparent;
    border-radius: 10px;
  }
  .card-selected {
    border-color: blue !important;
  }
</style>
