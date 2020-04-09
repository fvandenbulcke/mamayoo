<template>
  <v-card
    class="pa-2"
    outlined
    tile
  >
    <v-card-title>
      Other Player
    </v-card-title>
    <v-card-subtitle>
      Select cards to give
    </v-card-subtitle>
    <v-card-text>
      <div class="d-inline-flex">
        <BackCard
          v-for="i in 5"
          :key="i"
          :value="i"
        />
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import BackCard from '@/components/BackCard';

export default {
  name: 'OtherPlayer',
  components: {
    BackCard,
  },
};
</script>
