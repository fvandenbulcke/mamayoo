<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-row justify="center" class="mb-10">
          <v-img max-width="300px" src="@/assets/mamayoo.png"></v-img>
        </v-row>
        <v-row
          align="end"
          justify="center"
        >
          <v-col
            md="2"
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
          align="center"
          justify="center"
          style="height: 300px;"
        >
          <v-col
            md="2"
            offset-md="1"
            class="d-flex justify-center"
          >
            <MayooActionButton
              label="Create table"
              :is-disabled="!pseudo"
              :on-click="createNewTable"
            />
          </v-col>
          <v-col
            v-if="tables"
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
import MayooActionButton from '@/components/buttons/MayooActionButton';
import MamayooTableLine from './MamayooTableLine';


export default {
  name: 'Home',

  components: {
    MamayooTableLine,
    MayooActionButton,
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
      this.$router.push({ name: 'playground', query: { table, player: this.pseudo } });
    },
  },

  created() {
    mamayooService.getTableList()
      .then((response) => {
        if (response && response.length > 0) {
          this.tables = response;
        }
      });
  },

};
</script>
