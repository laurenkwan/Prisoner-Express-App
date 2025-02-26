<script setup>
const props = defineProps({
  header: String
})

// export default {
//   props: ['programfixture'],
//   methods: {
//     openOverlay() {
//       this.$emit('open-overlay', this.programfixture);
//     }
//   }
// }
</script>

<template>
    <b-button class="ancard-buttons">
        <b-card class="ancard">
            <template #header>
                <h6 class="mb-0">{{ header }}</h6>
            </template>
            <b-card-img :src="`${baseDir}images/logo.png`" alt="Imagenot" bottom></b-card-img>
        </b-card>
    </b-button>
    <!-- <b-button class="ancard-buttons" @click="openOverlay">
        <b-container>
        <b-card class="ancard">
        <b-card-title>{{ programfixtures[$route.params.program_key].previousofferings.name }}</b-card-title>
        <b-card-text>
          Author: {{ programfixtures.author }}
          Date: {{ programfixtures.date }}
        </b-card-text>
        </b-card>
        </b-container>
    </b-button> -->
</template>

<style>
.ancard-buttons{
    width:400px !important;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffefd6 !important;
    padding:0 !important;
    margin-bottom: 20px !important;
}

.ancard{
    width: 100% !important;
}
</style>
