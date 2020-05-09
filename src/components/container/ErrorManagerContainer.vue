<template>
  <router-view/>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ErrorManagerContainer',

  computed: {
    ...mapGetters('error', ['message']),
  },

  watch: {
    message() {
      // this.$router.push({ name: 'home' });
    },
  },
};
</script>
