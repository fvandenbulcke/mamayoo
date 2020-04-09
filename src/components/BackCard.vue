<template>
  <v-container
    class="lighten-5 pa-0 mam-container"
  >
    <v-row
      no-gutters
      style="height: 50px;"
    >
      <v-col align-self="center"
        class="d-flex justify-center">
        <span class="d-inline-flex mam-card">{{ value }}</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'BackCard',
  props: {
    value: {
      type: Number,
      required: false,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
  .mam-container {
    border: solid grey 1px;
    width: 32px;
    border-radius: 20px;
    background: grey;
  }
  .mam-card {
    color: white;
  }
</style>
