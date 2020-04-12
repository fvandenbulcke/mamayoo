<template>
  <v-container
    class="lighten-5 pa-0 mam-container"
    :class="classObject"
    @click="select"
  >
    <v-row
      no-gutters
      style="height: 150px;"
    >
      <v-col align-self="start" class="pl-2">
        <span class="d-inline-flex mam-card">{{ suitIcons[card.suit] }}</span>
        <!-- <v-icon>home</v-icon> -->
      </v-col>
      <v-col align-self="center">
        <span class="d-inline-flex mam-card">{{ card.value }}</span>
      </v-col>
      <v-col align-self="end" class="pr-2">
        <span class="d-inline-flex mam-card">{{ suitIcons[card.suit] }}</span>
      </v-col>
    </v-row>
  </v-container>
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
      required: true,
    },
  },

  data() {
    return {
      suitIcons: {
        heart: '♥',
        diamond: '♦',
        spade: '♠',
        club: '♣',
        payoo: 'P',
      },
    };
  },

  computed: {
    classObject() {
      return {
        'card-font-red': ['heart', 'diamond'].includes(this.card.suit),
        'card-font-black': ['spade', 'club'].includes(this.card.suit),
        'card-selected': this.isSelected,
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
  .mam-container {
    border: solid grey 1px;
    width: 96px;
    border-radius: 20px;
    background: white;
  }

  .card-selected {
    border-color: blue;
  }

  .mam-container:hover {
    cursor: pointer;
  }

  .mam-card {
    background-color: transparent;
    border: none !important;
    font-size: xx-large !important;
  }

  .card-font-red {
    color: red;
  }
  .card-font-black {
    color: black;
  }
</style>
