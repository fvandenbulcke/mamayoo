<template>
  <v-card
    style="border: solid red 1px;"
  >
    {{ name }}
  </v-card>
</template>

<script>
export default {
  name: 'Player',

  props: {
    name: {
      type: String,
      required: true,
    },
  },

};
</script>
