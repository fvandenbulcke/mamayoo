<template>
  <v-card
    outlined
    tile
    class="mamayoo-card"
    color="primary"
  >
    <v-card-text class="pa-0 fill-height mamayoo-card-text">
      <v-container
        fill-height
        fluid
        class="pa-0"
      >
        <v-row no-gutters
          class="justify-center"
        >
          <span>{{ value }}</span>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
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
  .mamayoo-card {
    width: 32px;
    border-radius: 20px;
  }

  .mamayoo-card-text{
    color: white!important;
  }
</style>
