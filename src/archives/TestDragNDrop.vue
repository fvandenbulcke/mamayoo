<template>
  <v-container>
    <v-row class="mb-5">
      <v-col md="8">
        <h3>PASSER UNE CARTE DE LA MAIN A LA ZONE DE JEU</h3>
        <draggable
          class="row wrap fill-height align-center sortable-list"
        >
          <v-container>
            <v-row
              class="mb-2"
            >
              <v-col
                :class="{
                  'card-selector': dragging
                }"
                style="min-height: 91px;"
              >
                <v-container
                  v-if="dragging && !row1.length"
                  fill-height
                  class="d-flex align-center justify-center"
                >
                  PLACE YOU CARD HERE
                </v-container>
                <draggable
                  :list="row1"
                  :group="{ name: 'cardsrow' }"
                  class="d-flex justify-center"
                >
                  <MamayooCard
                    v-for="element in row1"
                    :key="element.id"
                    :card="element"
                    :isSelected="false"
                    :isDisable="false"
                    :onClick="() => {}"
                    :isWinning="false"
                  />
                </draggable>
              </v-col>
            </v-row>
            <v-row
              class="mb-2"
            >
              <v-col
                style="background: red; min-height: 91px;"
              >
                <draggable
                  :list="row2"
                  group="cardsrow"
                  class="d-flex justify-center"
                  @add="add"
                  @remove="remove"
                  @update="update"
                  @start="startDragging"
                  @end="endDragging"
                  @change="changeDragging"
                >
                  <MamayooCard
                    v-for="element in row2"
                    :key="element.id"
                    :card="element"
                    :isSelected="false"
                    :isDisable="false"
                    :onClick="() => {}"
                    :isWinning="false"
                  />
                </draggable>
              </v-col>
            </v-row>
          </v-container>
        </draggable>
      </v-col>
    </v-row>
    <h3>PASSER LES CARTES D'UNE LISTE A L'AUTRE</h3>
    <v-row class="mb-5">
      <v-col md="3">
        <draggable class="d-flex flex-wrap" :list="cards1" group="playCards" @change="log">
          <MamayooCard
            v-for="element in cards1"
            :key="element.id"
            :card="element"
            :isSelected="false"
            :isDisable="false"
            :onClick="() => {}"
            :isWinning="false"
          />
        </draggable>
      </v-col>

      <v-col md="3">
        <draggable class="d-flex flex-wrap" :list="cards2" group="playCards" @change="log">
          <MamayooCard
            v-for="element in cards2"
            :key="element.id"
            :card="element"
            :isSelected="false"
            :isDisable="false"
            :onClick="() => {}"
            :isWinning="false"
          />
        </draggable>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import draggable from 'vuedraggable';
import MamayooCard from '@/components/cards/MamayooCard';

export default {
  name: 'TestDragNDrop',
  display: 'TestDragNDrop',
  order: 1,
  components: {
    draggable,
    MamayooCard,
  },
  data() {
    return {
      dragging: false,
      row1: [
      ],
      row2: [
        { id: 1, suit: 'heart', value: '8' },
        { id: 2, suit: 'spade', value: '3' },
        { id: 3, suit: 'club', value: '5' },
        { id: 4, suit: 'diamond', value: '4' },
        { id: 5, suit: 'heart', value: '6' },
        { id: 6, suit: 'spade', value: '1' },
      ],
      cards1: [
        { id: 1, suit: 'mayoo', value: '8' },
        { id: 2, suit: 'spade', value: '3' },
        { id: 3, suit: 'club', value: '5' },
      ],
      cards2: [
        { id: 4, suit: 'diamond', value: '4' },
        { id: 5, suit: 'heart', value: '6' },
        { id: 6, suit: 'spade', value: '1' },
      ],
    };
  },
  methods: {
    add() {
      window.console.log('add()');
      window.console.log(this.row1);
    },
    remove() {
      window.console.log('remove()');
      window.console.log(this.row1);
    },
    update() {
      window.console.log('update()');
      window.console.log(this.row1);
    },
    startDragging() {
      this.dragging = true;
      window.console.log('startDragging()');
      window.console.log(this.row1);
    },
    endDragging() {
      this.dragging = false;
      window.console.log('endDragging()');
      window.console.log(this.row1);
    },
    changeDragging() {
      window.console.log('changeDragging()');
      window.console.log(this.row1);
    },

    checkMove(e) {
      window.console.log(`Future index: ${e.draggedContext.futureIndex}`);
    },

    log(evt) {
      window.console.log(evt);
    },
  },
};
</script>
<style scoped>
  .card-selector {
    border-radius: 20px;
    border: 2px aquamarine dashed;
  }
</style>
