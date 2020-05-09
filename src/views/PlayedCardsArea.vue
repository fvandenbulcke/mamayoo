<template>
  <v-row align="center" justify="center" class="ma-0">
    <MamayooCard
      v-for="pc in playedCards"
      :key="pc.card.id"
      class="test-cards-zone absoluteCardLeft"
      :class="`position${pc.position}_${players.length}j`"
      :card="pc.card"
      :isSelected="false"
      :isDisable="false"
      :isWinning="false"
      :onClick="() => {}"
    />
  </v-row>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import MamayooCard from '@/components/cards/MamayooCard';

const { mapGetters } = createNamespacedHelpers('game');

export default {
  name: 'PlayedCardsArea',

  components: {
    MamayooCard,
  },

  computed: {
    ...mapGetters(['players', 'playedCards']),
  },
};
</script>
<style>
  .test-cards-zone .mamayoo-card-content{
    height: 150px;
    width: 75px;
    font-size: large;
  }
</style>
<style scoped>

.absoluteCardLeft {
  position: absolute;
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
</style>
