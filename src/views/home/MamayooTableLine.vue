<template>
  <v-card class="d-inline-block mx-auto">
    <v-container>
      <v-row align="center" justify="space-between">
        <v-col cols="auto">
          Table {{table.id}}
        </v-col>

        <v-col
          cols="auto"
          class="text-center pl-0"
        >
          <v-row
            justify="center"
          >
            <v-col>
              <v-btn
                large color="primary"
                @click="onClick"
              >
                Join Table
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>

export default {
  name: 'MamayooTableLine',

  props: {
    table: {
      type: Object,
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
</style>
