<template>
  <router-view/>
</template>

<script>
import Vue from 'vue';
import VueNativeSock from 'vue-native-websocket';
import store from '@/store';

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'PlayConnectionContainer',

  computed: {
    ...mapGetters(['isConnected', 'playerName']),
    table() {
      return this.$route.query.table;
    },
  },

  watch: {
    isConnected(newValue) {
      if (newValue) {
        this.joinTable(this.table);
      }
    },
  },

  methods: {
    ...mapActions(['joinTable']),
  },

  created() {
    const options = {
      reconnection: true,
      store,
    };
    Vue.use(VueNativeSock, `ws://${window.mamayooConfig.MAMAYOO_BACK_URL}/ws/${this.playerName}`, options);
  },

};
</script>
