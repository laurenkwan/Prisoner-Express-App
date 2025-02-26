<script>
import VuePdfApp from "vue3-pdf-app";
// import this to use default icons for buttons
import "vue3-pdf-app/dist/icons/main.css";

export default {
    props: {
        selectedFixture: Object // Prop to receive fixture data
    },
    components: {
      VuePdfApp
    },
    data() {
        return {
            // documentUrl: "/pdf-files/poem.pdf",
            documentUrl: "",
            currentPage: 1,
            numPages: 0,
            currentIndex: 0,
            isSidebarVisible: false // Initially show the sidebar
        };
    },
    mounted() {
        if (this.selectedFixture) {
            this.documentUrl = this.selectedFixture.pdfurl; // Set documentUrl if selectedFixture is not null
        }
    },
    methods: {
        toggleSidebar() {
        this.isSidebarVisible = !this.isSidebarVisible; // Toggle the visibility state
        },
        closePopup() {
          this.$emit('close-overlay');
        }
    }
}
</script>

<template>
  <div class = "popup">
    <b-container fluid class="h-100">
      <!-- <b-row class="mt-3">
      </b-row> -->
      <b-col class="d-flex justify-content-end" id = "exit-button">
          <b-button sm = "4" md ="4" lg = "4" size = "lg" class ="mb-3" @click="closePopup" variant="dark">EXIT X</b-button>
      </b-col>
      <b-row class="h-100">
        <b-col offset = "1" lg="10" class="d-flex justify-content-center">
          <b-card v-show="isSidebarVisible" class="description-sidebar">
            <template #header>
              <b-button  @click="toggleSidebar" variant="outline-secondary"
              class = "justify-content-end">
                Close
              </b-button>
            </template>
            <b-card-title> {{ selectedFixture.title }}</b-card-title>
            <b-card-text> Author: {{ selectedFixture.author }}</b-card-text>
            <b-card-text> Date: {{ selectedFixture.date }}</b-card-text>
            <b-card-text> {{ selectedFixture.desc }}</b-card-text>
            <b-card-img :src="`${baseDir}images/${selectedFixture.img}`" style = "height: 300px;" bottom></b-card-img>
          </b-card>
          <b-col class="pdf-container">
            <vue-pdf-app :pdf="`${baseDir}pdf-files/${documentUrl}`"></vue-pdf-app>
            <b-button v-if="!isSidebarVisible" @click="toggleSidebar" size= "lg"class="see-details" variant ="success">
              See More for Details
            </b-button>
          </b-col>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>

.pdf-container {
  position: relative;
  width: 100%; /* Adjust width to accommodate sidebar */
  min-width: 700px; /* Adjust as needed */
  min-height: 680px; /* Adjust as needed */
}

.description-sidebar {
  min-width: 180px;
  max-width: 300px;
  width: 100%; /* Adjust width as needed */
  background-color: white;
}

.popup {
  position: fixed;
  margin-top: 0px;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  padding: 20px;
  min-width: 100%;
  overflow-y: hidden;
}

.see-details {
  position: absolute;
  top: 50px; /* Adjust as needed */
  left: 30px; /* Adjust as needed */
  z-index: 2;
}

.canvas-wrapper {
  height: 750px;
}
</style>
