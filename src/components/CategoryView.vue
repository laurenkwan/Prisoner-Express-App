<script>
import { defineComponent } from 'vue'
import CategoryCard from './CategoryCard.vue'
import popup from './popup.vue'

export default defineComponent({
  name: 'CategoryView',
  components: {
    CategoryCard,
    popup
  },
  data: () => ({
    return: {
      showOverlay: false,
      selectedItem: null
    }
  }),
  props: {
    category_type: String,
    documents: Array,
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
      <b-row>
          <p class= "title"> Prisoner Express </p>
      </b-row>
      <b-row>
          <p class= "curr-title"> Spring 2024 {{ category_type }} Submissions</p>
      </b-row>
      <div class = "category-cards">
          <div class="category-card" v-for="(fixture, index) in documents" :key="index">
              <div>
                <CategoryCard
                :fixture="fixture"
                :baseDir="baseDir"
                @open-overlay="emitFixture(fixture)" />
              </div>
            </div>
        </div>
</template>

<style>
.category-cards{
  padding-left: 40px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.category-card{
  width: 300px;
  margin: 10px;
}

.category-card .card-body{
  height:180px;
}
</style>
