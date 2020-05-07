<template>
  <v-container
    fill-height
    fluid
  >
    <v-row align="center" justify="center">
      <MamayooCard
        v-for="card in cards"
        :key="card.id"
        class="test-cards-zone absoluteCardLeft"
        :class="`position${card.id}_${cards.length}j`"
        :card="card"
        :isSelected="false"
        :isDisable="false"
        :isWinning="false"
        :onClick="() => {}"
      />
      <MamayooCard
        v-for="card in cards"
        :key="card.id"
        class="test-cards-zone absoluteCard"
        :class="`position2${card.id}`"
        :card="card"
        :isSelected="false"
        :isDisable="false"
        :isWinning="false"
        :onClick="() => {}"
      />
    </v-row>
  </v-container>
</template>

<script>
import MamayooCard from '@/components/cards/MamayooCard';

export default {
  components: {
    MamayooCard,
  },
  data: () => ({
    cards: [
      { id: 1, suit: 'spade', value: '1' },
      { id: 2, suit: 'spade', value: '2' },
      { id: 3, suit: 'spade', value: '3' },
      { id: 4, suit: 'spade', value: '4' },
      { id: 5, suit: 'spade', value: '5' },
      { id: 6, suit: 'spade', value: '6' },
      { id: 7, suit: 'spade', value: '7' },
      { id: 8, suit: 'spade', value: '8' },
    ],
  }),
};
</script>
<style>
  .test-cards-zone .mamayoo-card-content{
    border: red 1px dashed;
    height: 150px;
    width: 75px;
    font-size: large;
  }
</style>
<style scoped>
b {
  font-family: sans-serif;
}

div {
  border: 1px dashed;
  text-align: center;
}

.absoluteCardLeft {
  position: absolute;
  left: 300px;
}

/* Positions pour 8 joueurs */
.position1_8j {
  transform: translate(0,90px);
}
.position2_8j {
  transform: translate(-70px,70px);
}
.position3_8j {
  transform: translate(-140px, 0);
}
.position4_8j {
  transform: translate(-70px, -70px);
}
.position5_8j {
  transform: translate(0,-90px);
}
.position6_8j {
  transform: translate(70px,-70px);
}
.position7_8j {
  transform: translate(140px, 0);
}
.position8_8j {
  transform: translate(70px, 70px);
}

/* Positions pour 7 joueurs */
.position1_7j {
  transform: translate(0,90px);
}
.position2_7j {
  transform: translate(-70px,70px);
}
.position3_7j {
  transform: translate(-140px, 0);
}
.position4_7j {
  transform: translate(-70px, -70px);
}
.position5_7j {
  transform: translate(0,-90px);
}
.position6_7j {
  transform: translate(70px,-70px);
}
.position7_7j {
  transform: translate(70px, 70px);
}

/* Positions pour 6 joueurs */
.position1_6j {
  transform: translate(0,90px);
}
.position2_6j {
  transform: translate(-70px,70px);
}
.position3_6j {
  transform: translate(-70px, -70px);
}
.position4_6j {
  transform: translate(0,-90px);
}
.position5_6j {
  transform: translate(70px,-70px);
}
.position6_6j {
  transform: translate(70px, 70px);
}

/* Positions pour 5 joueurs */
.position1_5j {
  transform: translate(0,90px);
}
.position2_5j {
  transform: translate(-70px,70px);
}
.position3_5j {
  transform: translate(-70px, -70px);
}
.position4_5j {
  transform: translate(0,-90px);
}
.position5_5j {
  transform: translate(70px,0px);
}

/* Positions pour 4 joueurs */
.position1_4j {
  transform: translate(0,90px);
}
.position2_4j {
  transform: translate(-70px,0px);
}
.position3_4j {
  transform: translate(0,-90px);
}
.position4_4j {
  transform: translate(70px,0px);
}

/* Positions pour 3 joueurs */
.position1_3j {
  transform: translate(0,70px);
}
.position2_3j {
  transform: translate(-70px,-70px);
}
.position3_3j {
  transform: translate(70px,-70px);
}

.absoluteCard {
  position: absolute;
  right: 500px;
}
.position21 {
  transform: rotate(90deg) translate(0,-140px);
}
.position22 {
  transform: translate(100px, -40px) rotate(50deg);
}
.position23 {
  transform: translate(60px, -50px) rotate(-20deg);
}
.position24 {
  transform: translate(40px, 0px) rotate(30deg);
}
.position25 {
  transform: translate(10px, -10px) rotate(-50deg);
}
.position26 {
  transform: translate(80px, 30px) rotate(60deg);
}
.position27 {
  transform: translate(50px, 30px) rotate(-80deg);
}
.position28 {
  transform: translate(10px, 50px) rotate(0deg);
}

</style>
