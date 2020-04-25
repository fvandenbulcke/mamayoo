<template>
  <v-data-table
    :headers="headers"
    :items="sortedByScorePlayers"
    hide-default-footer
    class="elevation-1, mam-results"
  >
    <template v-slot:item.isWinner="{ item }">
      <v-icon
        v-if="item.isWinner"
        x-large
      >
        $vuetify.icons.trophy
      </v-icon>
    </template>
    <template v-slot:footer>
      <div class="mt-5" align="end">
        <v-btn
          medium
          color="primary"
          @click="restart"
        >
          Restart game
        </v-btn>
        <v-btn
          medium
          color="primary"
          class="ml-3"
          @click="goBackToHomePage"
        >
          Go to home page
        </v-btn>
      </div>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'GameResult',

  props: {
    players: {
      type: Array,
      required: true,
    },
    restart: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        {
          text: 'Score', value: 'score', align: 'center', sortable: false,
        },
        {
          text: 'Winner', value: 'isWinner', align: 'center', sortable: false,
        },
      ],
    };
  },
  computed: {
    sortedByScorePlayers() {
      const initPlayers = this.players;
      const sortedByScorePlayers = initPlayers.sort((p1, p2) => p1.score - p2.score);
      sortedByScorePlayers[0].isWinner = true;
      return sortedByScorePlayers;
    },
  },

  methods: {
    goBackToHomePage() {
      this.$router.push({ name: 'home' });
    },
  },
};
</script>
<style scoped>
  .mam-results {
    min-width: 50%;
  }
</style>
