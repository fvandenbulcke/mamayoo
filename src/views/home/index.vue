<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-row
          align="end"
          justify="center"
          style="height: 500px;"
        >
          <v-col
            md="2"
            offset-md="1"
            class="d-flex justify-center"
          >
            <CreateTableButton
              :on-click="createNewTable"
            />
          </v-col>
        </v-row>
        <v-row
          justify="center"
          class="d-flex"
        >
          <mamayoo-table-line
            v-for="table in tables"
            :key="table.id"
            :table="table"
            :on-click="selectTable"
          />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';

import mamayooService from '@/services/mamayooService';
import CreateTableButton from './CreateTableButton';
import MamayooTableLine from './MamayooTableLine';


export default {
  name: 'Home',

  components: {
    CreateTableButton,
    MamayooTableLine,
  },

  data() {
    return {
      tables: null,
    };
  },

  methods: {
    ...mapActions(['createTable', 'savePlayer']),
    createNewTable() {
      mamayooService.createTable()
        .then((table) => this.goToPlayView(table));
    },

    selectTable({ table, pseudo }) {
      this.savePlayer(pseudo)
        .then(() => this.goToPlayView(table));
    },

    goToPlayView(table) {
      this.$router.push({ name: 'playground', query: { table } });
    },
  },

  created() {
    mamayooService.getTableList()
      .then((response) => { this.tables = response; });
  },

};
</script>
