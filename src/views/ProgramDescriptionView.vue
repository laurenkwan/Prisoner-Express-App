<script>

import CustomizedProgramDescription from '../components/CustomizedProgramDescription.vue';
import ArchiveProgramCard from '../components/ArchiveProgramCard.vue';
import popup from '../components/popup.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProgramDescriptionView',
  components: {
    CustomizedProgramDescription,
    ArchiveProgramCard,
    popup
  },
  props: {
    baseDir: String,
  },
  data() {
    return {
      isOverlayOpen: false,
      selectedFixture: null
    };
  },
  methods: {
    openOverlayparent(fixture) {
      // Set the selected fixture and open the overlay
      this.selectedFixture = fixture;
      this.isOverlayOpen = true;
      console.log(this.isOverlayOpen);
      console.log("I'm fixturing", fixture);
      console.log("selected", this.selectedFixture);
    },
    closeOverlay() {
      // Clear the selected fixture and close the overlay
      this.selectedFixture = null;
      this.isOverlayOpen = false;
    }
  }
});
</script>

<template>

<CustomizedProgramDescription @emit-Fixture="openOverlayparent"/>

<b-container>
    <!-- <b-row alignH="center">
        <b-button class="card" v-for="(fixture) in programfixtures[this.$route.params.program_key].previousofferings" @click="openOverlay">
            <b-card variant="outline-primary">
                <b-card-text>
                    Author: {{ fixture.author }}
                    Date: {{ fixture.date }}
                </b-card-text>
            </b-card>
        </b-button>
    </b-row> -->
    <!-- <b-row alignH="center" v-for="(fixture, index) in programfixtures[this.$route.params.program_key].previousofferings" :key="index">
        <b-col class = "mb-4">
            <ArchiveProgramCard :fixture="fixture" :baseDir="baseDir" @open-overlay="emitFixture(fixture)" />
        </b-col>
    </b-row> -->
    <popup
    v-if="isOverlayOpen"
    @close-overlay="closeOverlay"
    :selectedFixture="selectedFixture" />
     <!-- Dark transparent overlay -->
     <div class="overlay" v-if="isOverlayOpen" @click="closeOverlay"></div>
</b-container>

</template>

<style>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.597);
  z-index: 999;
}
</style>
