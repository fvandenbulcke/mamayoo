<template>
  <v-container
    class="lighten-5 pa-0 mam-container"
    :class="classObject"
    @click="changeCardSelect"
  >
    <v-row
      no-gutters
      style="height: 150px;"
    >
      <v-col align-self="start" class="pl-2">
        <span class="d-inline-flex mam-card">{{ suitIcons[suit] }}</span>
        <!-- <v-icon>home</v-icon> -->
      </v-col>
      <v-col align-self="center">
        <span class="d-inline-flex mam-card">{{ value }}</span>
      </v-col>
      <v-col align-self="end" class="pr-2">
        <span class="d-inline-flex mam-card">{{ suitIcons[suit] }}</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'MamayooCard',

  props: {
    id: {
      type: String,
      required: true,
    },
    suit: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    select: {
      type: Function,
      required: true,
    },
    unSelect: {
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
      isSelected: false,
    };
  },

  computed: {
    classObject() {
      return {
        'card-font-red': ['heart', 'diamond'].includes(this.suit),
        'card-font-black': ['spade', 'club'].includes(this.suit),
        'card-selected': this.isSelected,
      };
    },
  },

  methods: {
    changeCardSelect() {
      if (!this.isSelected) {
        this.select(this.id)
          .then((cardSelectHaveBeenSaved) => { this.isSelected = cardSelectHaveBeenSaved; });
      }
      if (this.isSelected) {
        this.unSelect(this.id)
          .then((cardSelectHaveBeenRemoved) => { this.isSelected = !cardSelectHaveBeenRemoved; });
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
