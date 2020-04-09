<template>
  <v-form
    ref="form"
    v-model="valid"
    style="width: 200px !important;"
  >
    <v-text-field
      placeholder="Enter the table Id"
      v-model="table"
      :rules="rules"
    >
    </v-text-field>
    <v-card
      class="pa-0"
      outlined
      tile
    >
      <v-responsive :aspect-ratio="1">
        <v-btn
          class="button"
          :disabled="!valid"
          @click="onClick"
        >
          JOIN TABLE
        </v-btn>
      </v-responsive>
    </v-card>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'JoinTableButton',

  data() {
    return {
      table: null,
      valid: false,
      rules: [
        (value) => !!value || 'Required.',
      ],
    };
  },

  methods: {
    ...mapActions(['joinTable']),
    onClick() {
      this.joinTable(this.table)
        .then(() => this.$router.push({ name: 'playersCircleGrid' }));
    },
  },

};
</script>
<style scoped>
.button {
  height: 100% !important;
  width: 100% !important;
}
</style>
