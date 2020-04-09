<template>
    <v-container
      fill-height
      fluid
      class="grey lighten-5 justify-center"
    >
      <v-overlay :value="true">
        <div class='circle-container'>
          <Player class='deg0' name="Florian"/>
          <!-- <Player class='deg45' name="Thomas"/>
          <Player class='deg135' name="Lucie"/>
          <Player class='deg180' name="Matthieu"/>
          <Player class='deg225' name="Eric"/>
          <Player class='deg315' name="Seb"/> -->
        </div>
      </v-overlay>

      <v-row
        align="start"
        no-gutters
        style="height: 150px;"
        class="mb-auto"
      >
        <v-col
          class="d-flex justify-center"
        >
          <OtherPlayer/>
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
import PlayerCards from '@/components/PlayerCards';
import OtherPlayer from '@/components/OtherPlayer';
import Player from '@/components/Player';

export default {
  components: {
    PlayerCards,
    OtherPlayer,
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
<style lang="scss" scoped>
  .row {
    border: solid red 1px;
  }
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
    top: -80px;
    width: 40em;
    height: 40em;
    /*2.8em = 2em*1.4 (2em = half the width of a link with img, 1.4 = sqrt(2))*/
    border: dashed 1px;
    border-radius: 50%;
  }
  /* .circle-container .v-card {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5em; height: 4em;
    margin: -2em;
  } */
  .deg0 {
    display: block;
    position: absolute;
    left: 50%;
  }
  /* .deg0 { transform: translate(20em); } */
  .deg45 { transform: rotate(45deg) translate(20em) rotate(-45deg); }
  .deg135 { transform: rotate(135deg) translate(20em) rotate(-135deg); }
  .deg180 { transform: translate(-20em); }
  .deg225 { transform: rotate(225deg) translate(20em) rotate(-225deg); }
  .deg315 { transform: rotate(315deg) translate(20em) rotate(-315deg); }
</style>
