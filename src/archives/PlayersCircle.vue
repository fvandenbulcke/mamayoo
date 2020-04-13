<template>
  <div class='circle-container'>
    <Player class='deg0' name="Florian"/>
    <Player class='deg45' name="Thomas"/>
    <Player class='deg135' name="Lucie"/>
    <Player class='deg180' name="Matthieu"/>
    <Player class='deg225' name="Eric"/>
    <Player class='deg315' name="Seb"/>
  </div>
</template>

<script>
import Player from '@/archives/Player';

export default {
  name: 'PlayersCircle',
  components: {
    Player,
  },
};
</script>

<style scoped>
/* source : https://css-tricks.com/snippets/sass/placing-items-circle/ */
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
