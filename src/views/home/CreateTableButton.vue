<template>
  <v-form
    ref="form"
  >
    <v-card
      class="pa-0"
      outlined
      tile
    >
      <v-responsive :aspect-ratio="1">
        <v-btn
          class="button"
          @click="onClick"
        >
          CREATE
        </v-btn>
      </v-responsive>
    </v-card>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CreateTableButton',

  methods: {
    ...mapActions(['createTable']),
    onClick() {
      this.createTable()
        .then(() => this.$router.push({ name: 'playersCircleGrid' }));
    },
  },

};
</script>
<style scoped>
  .button {
    width: 200px !important;
    height: 100% !important;
  }
</style>
