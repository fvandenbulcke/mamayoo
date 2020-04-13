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
export default {
  name: 'CreateTableButton',

  props: {
    onClick: {
      type: Function,
      required: true,
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
