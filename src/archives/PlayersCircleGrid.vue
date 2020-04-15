<template>
    <v-container
      fill-height
      fluid
      class="grey lighten-5"
    >
      <v-overlay :value="false">
        <div class='circle-container'>
          <Player class='deg0' name="Florian"/>
          <Player class='deg45' name="Thomas"/>
          <Player class='deg135' name="Lucie"/>
          <Player class='deg180' name="Matthieu"/>
          <Player class='deg225' name="Eric"/>
          <Player class='deg315' name="Seb"/>
        </div>
      </v-overlay>
      <v-row
        no-gutters
        style="height: 150px;"
        class="rowstart"
      >
        <v-col
          class="d-flex justify-center"
        >
          <PlayerStatus/>
        </v-col>
      </v-row>

      <v-row
        no-gutters
        class="rowmiddle"
      >
        <v-col
          md="2"
          offset-md="2"
          class="d-flex justify-center"
        >
          <PlayerStatus/>
        </v-col>
        <v-col
          md="2"
          offset-md="4"
          class="d-flex justify-center"
        >
          <PlayerStatus/>
        </v-col>
      </v-row>
      <v-row
        no-gutters
        class="rowmiddle"
      >
        <v-col
          md="2"
          offset-md="1"
          class="d-flex justify-center"
        >
          <PlayerStatus/>
        </v-col>
        <v-col
          md="2"
          offset-md="6"
          class="d-flex justify-center"
        >
          <PlayerStatus/>
        </v-col>
      </v-row>
      <v-row
        no-gutters
        class="rowmiddle"
      >
        <v-col
          md="2"
          offset-md="2"
          class="d-flex justify-center"
        >
          <PlayerStatus/>
        </v-col>
        <v-col
          md="2"
          offset-md="4"
          class="d-flex justify-center"
        >
          <PlayerStatus/>
        </v-col>
      </v-row>

      <v-row
        align="end"
        no-gutters
        class="rowend mb-6"
        style="height: 150px;"
      >
        <v-col
          class="d-flex justify-center"
        >
          <PlayerCards
            class="pa-2"
          />
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import PlayerCards from '@/components/players/PlayerCards';
import PlayerStatus from '@/components/players/PlayerStatus';
import Player from '@/archives/Player';

export default {
  components: {
    PlayerCards,
    PlayerStatus,
    Player,
  },

  data: () => ({
    alignments: [
      'start',
      'center',
      'end',
    ],
  }),
};
</script>
<style scoped>
  .rowstart {
    margin-bottom: auto;
  }
  .rowend {
    margin-top: auto;
    margin-left: auto;
    margin-right: auto;
  }
  .rowmiddle {
    margin: auto;
  }
  .circle-container {
    position: relative;
    width: 60em;
    height: 60em;
      /*2.8em = 2em*1.4 (2em = half the width of a link with img, 1.4 = sqrt(2))*/
    border: dashed 1px;
    border-radius: 50%;
    margin: 1.75em auto 0;
  }
  .circle-container .v-card {
    display: block;
    position: absolute;
    top: 50%; left: 50%;
    width: 5em; height: 4em;
    margin: -2em;
  }
  .deg0 { transform: translate(30em); } /* 12em = half the width of the wrapper */
  .deg45 { transform: rotate(45deg) translate(30em) rotate(-45deg); }
  .deg135 { transform: rotate(135deg) translate(30em) rotate(-135deg); }
  .deg180 { transform: translate(-30em); }
  .deg225 { transform: rotate(225deg) translate(30em) rotate(-225deg); }
  .deg315 { transform: rotate(315deg) translate(30em) rotate(-315deg); }
</style>
