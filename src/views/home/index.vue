<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-img src="static/mamayoo.png"></v-img>
        </v-row>
        <v-row
          align="end"
          justify="center"
          style="height: 300px;"
        >
          <v-col
            md="2"
            offset-md="1"
            class="d-flex justify-center"
          >
            <v-text-field
              placeholder="Enter your pseudo"
              v-model="pseudo"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row
          justify="center"
          style="min-height: 250px;"
        >
          <v-col
            md="2"
            offset-md="1"
            class="d-flex justify-center"
          >
            <CreateTableButton
              :on-click="createNewTable"
              :is-disabled="!pseudo"
            />
          </v-col>
          <v-col
            md="4"
            offset-md="1"
            class="d-flex justify-center"
          >
            <v-layout wrap>
              <v-col
                md="6"
                class="d-flex"
                v-for="table in tables"
                :key="table.id">
                <mamayoo-table-line
                  :table="table"
                  :on-click="selectTable"
                  :is-disabled="!pseudo"
                />
              </v-col>
            </v-layout>
          </v-col>
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
      pseudo: null,
    };
  },

  methods: {
    ...mapActions(['createTable', 'savePlayer']),
    createNewTable() {
      this.savePlayer(this.pseudo)
        .then(() => mamayooService.createTable())
        .then((table) => this.goToPlayView(table));
    },

    selectTable({ table }) {
      this.savePlayer(this.pseudo)
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
