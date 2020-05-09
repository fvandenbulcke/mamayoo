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
    player() {
      return this.$route.query.player;
    },
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
    ...mapActions('game', ['joinTable']),
  },

  created() {
    const options = {
      store,
      format: 'json',
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 3000,
      passToStoreHandler(eventName, event) {
        if (!eventName.startsWith('SOCKET_')) { return; }
        const method = 'commit';
        let target = eventName.toUpperCase();
        let msg = event;
        if (event.data) {
          msg = JSON.parse(event.data);
          target = `${msg.namespace}/${eventName.toUpperCase()}`;
        }
        this.store[method](target, msg);
      },
    };
    Vue.use(VueNativeSock, `ws://${window.mamayooConfig.MAMAYOO_BACK_URL}/ws/${this.player}`, options);
  },

};
</script>
