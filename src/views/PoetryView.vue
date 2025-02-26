<script>
import CategoryView from '../components/CategoryView.vue';
import popup from '../components/popup.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PoetryView',
  components: {
    CategoryView,
    popup
  },
  data() {
    return {
      isOverlayOpen: false,
      selectedFixture: null
    };
  },
  created() {
  console.log("isOverlayOpen initially:", this.isOverlayOpen);
  },
  watch: {
  isOverlayOpen(newValue) {
    console.log('isOverlayOpen changed to:', newValue);
  }
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
  <div class="overlay-wrapper">
    <CategoryView
      category_type="Poetry"
      :documents="fixtures.newsletters.poetry"
      @emit-Fixture="openOverlayparent"
    />
    <popup
    v-if="isOverlayOpen"
    @close-overlay="closeOverlay"
    @update-selected-fixture="updateSelectedFixture"
    :selectedFixture="selectedFixture" />
     <!-- Dark transparent overlay -->
     <div class="overlay" v-if="isOverlayOpen" @click="closeOverlay"></div>
  </div>
</template>


<style>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
</style>
