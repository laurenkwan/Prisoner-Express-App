<script>
import CarouselView from '../components/CarouselView.vue';
import popup from '../components/popup.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CurrentView',
  components: {
    CarouselView,
    popup
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
  <div class="overlay-wrapper">
    <p class = "title">Prisoner Express</p>
    <p class = "curr-title">Spring 2024 Programs and Newsletter</p>

    <CarouselView
      carouselName="Poetry"
      url = "/poetry"
      :documents="fixtures.newsletters.poetry"
      @emit-Fixture="openOverlayparent"
    />
    <CarouselView
      carouselName="Essays"
      url = "/essays"
      :documents="fixtures.newsletters.essays"
      @emit-Fixture="openOverlayparent"
    />
    <CarouselView
      carouselName="Journals"
      :documents="fixtures.newsletters.journals"
      url="/journals"
      @emit-Fixture="openOverlayparent"
    />
    <CarouselView
      carouselName="Artworks"
      url = "/artworks"
      :documents="fixtures.newsletters.artwork"
      @emit-Fixture="openOverlayparent"
    />
    <CarouselView
      carouselName="Education"
      url = "/education"
      :documents="fixtures.newsletters.education"
      @emit-Fixture="openOverlayparent"
    />


    <popup
    v-if="isOverlayOpen"
    @close-overlay="closeOverlay"
    :selectedFixture="selectedFixture" />
     <!-- Dark transparent overlay -->
     <div class="overlay" v-if="isOverlayOpen" @click="closeOverlay"></div>
  </div>
</template>


<style>
.title {
  font-size: 50px;
  text-align: center;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;
  padding-top: 30px;
  /* width:80%; */
}

.curr-title {
  font-size: 30px;
  text-align: center;
  padding-bottom: 20px;
  /* width:80%; */
}

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
