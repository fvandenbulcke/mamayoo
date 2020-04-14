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
          @click="startGame"
        >
          START GAME
        </v-btn>
      </v-responsive>
    </v-card>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'StartGameButton',

  props: {
    isDisable: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    ...mapActions(['startGame']),
  },
};
</script>
<style scoped>
  .button {
    width: 200px !important;
    height: 100% !important;
  }
</style>
