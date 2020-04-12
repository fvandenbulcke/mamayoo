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
            <CreateTableButton/>
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
            :on-click="() => selectTable(table.id)"
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
    ...mapActions(['joinTable']),
    selectTable(tableId) {
      this.joinTable(tableId)
        .then(() => this.$router.push({ name: 'playground' }));
    },
  },

  created() {
    mamayooService.getTableList()
      .then((response) => { this.tables = response; });
  },

};
</script>
