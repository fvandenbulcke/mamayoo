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
    ...mapGetters(['isConnected', 'playerStatus']),
    table() {
      return this.$route.query.table;
    },
  },

  watch: {
    isConnected(newValue) {
      if (newValue) {
        // this.joinTable(this.table);
        this.$socket.send(JSON.stringify({
          value: this.table,
          action: 'GAME_JOIN',
        }));
      }
    },
  },

  methods: {
    ...mapActions(['joinTable']),
  },

  created() {
    Vue.use(VueNativeSock, `ws://localhost:8090/ws/${this.playerStatus.name}`, { store });
    // this.joinTable(this.table);
  },

};
</script>
