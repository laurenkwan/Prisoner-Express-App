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
<b-container>
    <!-- <b-button class="card" @click="openOverlay">
        <b-card>
          <b-card-title>{{ programfixtures[this.$route.params.program_key].previousofferings.name }}</b-card-title>
          <b-card-text>
            Author: {{ programfixtures[this.$route.params.program_key].previousofferings.author }}
            Date: {{ programfixtures[this.$route.params.program_key].previousofferings.date }}
          </b-card-text>
        </b-card>
    </b-button> -->
        <b-button class="card" @click="openOverlay">
            <b-card variant="outline-primary" :img-src="`${baseDir}images/${fixture.img}`" img-top style="
          max-width: 20rem;
          border: 1px solid black;" border-variant="warning" :aria-hidden="show ? 'true' : null"  >
                <!-- <ProgramCard/> -->
                <!-- <b-card-title>{{ fixture.title }}</b-card-title> -->
                <b-card-text>
                    Author: {{ fixture.author }}
                    Date: {{ fixture.date }}
                </b-card-text>
            </b-card>
        </b-button>
</b-container>

  </template>
