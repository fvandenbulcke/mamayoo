<template>
  <v-card
    class="pa-0"
    outlined
    tile
  >
    <v-responsive :aspect-ratio="1">
      <v-btn
        class="button"
        :disabled="isDisabled"
        @click="onClick"
      >
        {{ label }}
      </v-btn>
    </v-responsive>
  </v-card>
</template>

<script>
export default {
  name: 'MayooActionButton',

  props: {
    label: {
      type: String,
      required: true,
    },
    isDisabled: {
      type: Boolean,
      required: true,
    },
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
