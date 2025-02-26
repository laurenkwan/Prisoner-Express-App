<script>
export default {
  props: ['fixture'],
  methods: {
    openOverlay() {
      this.$emit('open-overlay', this.fixture);
    }
  }
}
</script>


<template>
  <b-button class="card" @click="openOverlay">
    <b-container>
      <b-card :img-src="`${baseDir}images/${fixture.img}`" img-top style="
          max-width: 20rem;
          border: 1px solid black;" border-variant="warning" :aria-hidden="show ? 'true' : null">
        <b-card-title>{{ fixture.title }}</b-card-title>
        <b-card-text>
          Author: {{ fixture.author }}
          Date: {{ fixture.date }}
        </b-card-text>
      </b-card>
    </b-container>
  </b-button>

</template>

