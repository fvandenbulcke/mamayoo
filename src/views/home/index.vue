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
          <v-col
            md="2"
            offset-md="1"
            class="d-flex justify-center"
          >
            <JoinTableButton/>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CreateTableButton from './CreateTableButton';
import JoinTableButton from './JoinTableButton';

export default {
  name: 'Home',

  components: {
    CreateTableButton,
    JoinTableButton,
  },

  data() {
    return {
    };
  },

  methods: {
    onClick() {
      console.log('onClick');
    },
  },

};
</script>
<style scoped>
.button {
  width: 200px !important;
  height: 100% !important;
}

/* .ikyButtonContent {
  width: 100%;
  padding: 5%;
  display: table-column;
  white-space: normal;
} */
</style>
