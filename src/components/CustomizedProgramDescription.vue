<script>
import { defineComponent } from 'vue'
import ArchiveProgramCard from './ArchiveProgramCard.vue'
import popup from './popup.vue'

export default defineComponent({
  name: 'CustomizedProgramDescription',
  components: {
    popup,
    ArchiveProgramCard
  },
  data: () => ({
    return: {
      showOverlay: false,
      selectedItem: null
    }
  }),
  props: {
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

<b-container class="program-desc">
    <b-row>
        <b-col cols="10"> <h1> Prisoner Express </h1> </b-col>
        <b-col cols="2"> <b-button variant="danger" to="/archives/programs"> Go Back </b-button> </b-col>
    </b-row>
    <b-row> <h2> Education Program: {{ programfixtures[$route.params.program_key].programname }} </h2> </b-row>
   <b-row>
        <b-col>  <img src="/public/images/program-placeholder.png" alt="program-placeholder" width="600" height="300"> </b-col>
        <b-col>
            <h3> Description: </h3>
            <p> {{ programfixtures[$route.params.program_key].programdesc }} </p>
            <h3> Program Offerings: </h3>
            <p> {{ programfixtures[$route.params.program_key].offerings }} </p>
        </b-col>
    </b-row>
    <b-row id="program-title"> <h2> Previous Program Offerings </h2> </b-row>
    <div class="program-offerings">

    <b-row class="program-offering" alignH="center" v-for="(fixture, index) in programfixtures[this.$route.params.program_key].previousofferings" :key="index">
        <b-col class = "mb-4">
            <ArchiveProgramCard :fixture="fixture" :baseDir="baseDir" @open-overlay="emitFixture(fixture)" />
        </b-col>
    </b-row>
  </div>
</b-container>

</template>

<style>
.program-desc{
  margin-top: 20px;
  margin-left: 40px !important;
}

#program-title{
  margin-top:30px;
}

.program-offerings{
  margin-top:10px;
  display: flex;
  flex-wrap: wrap;
}

.program-offering .card-body{
  height: 100px;
}
</style>
