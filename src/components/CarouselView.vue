<script>
import { defineComponent, ref } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import CategoryCard from './CategoryCard.vue'
import popup from './popup.vue'

export default defineComponent({
  name: 'CarouselView',
  components: {
    Carousel,
    Slide,
    Navigation,
    CategoryCard,
    popup
  },

  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    breakpoints: {
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      1024: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
    },
    return: {
      showOverlay: false,
      selectedItem: null
    }
  }),
  props: {
    carouselName: String,
    documents: Array,
    url: String,
    baseDir: String,
  },

  methods: {
  emitFixture(fixture) {
    this.$emit('emit-Fixture', fixture);
  },
  closeOverlay() {
    this.showOverlay = false;
    this.selectedFixture = null;
  }
}
})
</script>

<template>
  <div class="carousel-container">
    <div class="carousel-name-container">
      <button class = "button-title" @click="$router.push(url)">
        <h1 class="carousel-name">{{ carouselName }}</h1>
      </button>
      <button class = "arrow" @click="$router.push(url)">See More</button>
    </div>
    <Carousel v-bind="settings" :breakpoints="breakpoints">
      <!-- Render a Slide for each fixture item -->
      <Slide v-for="(fixture, index) in documents" :key="index" class="carousel-slides">
        <CategoryCard
        :fixture="fixture"
        :baseDir="baseDir"
        @open-overlay="emitFixture(fixture)" />
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<style>
.card-img-top{
  height:200px;
}

.card-body{
  margin-top:30px;
  height:260px;
}

.carousel__track{
  margin-bottom: 0;
}

.button-title {
  flex-grow: 10;
  text-align: left;
  background-color: #2A3D45;
}

.arrow {
  flex-grow: 1;
}
.carousel-container {
  border: 1px solid black;
  margin-top: 20px;
  margin-left: 50px;
  margin-right: 50px;
  /* width: 75%; */
}

.carousel-name-container {
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
}

.carousel__next {
  background-color: gray;
}

.carousel__prev {
  background-color: gray;
}

.carousel-name {
  color: white;
}

.arrow {
  background-color: #368564;
  /* background-color: #FFEFD6; */
  font-size: 18px;
  color: white;
}

.carousel-slides{
  height: 100% !important;
}

.card-img-top{
  height:200px;
}

.card-body{
  margin-top:30px;
  height: 200px;
}

.carouseltrack{
  margin-bottom: 0px;
}
</style>
