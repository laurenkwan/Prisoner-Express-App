<script setup>
import ProgramCard from '../components/ProgramCard.vue';
</script>

<template>
    <b-container>
        <b-row>
            <p class = "title">Prisoner Express</p>
            <p class = "curr-title">2004-2023 Education Programs</p>
        </b-row>

        <b-row class="archivescards">
            <b-button class="archivescard" variant="outline-primary" v-for="(fixture, program_key) in programfixtures" :to="`/archives/programs/${program_key}`">
                <b-card class="archivescard-body">
                    <b-card-title>{{ fixture.programname }}</b-card-title>
                </b-card>
            </b-button>
        </b-row>

    </b-container>
</template>

<style>
.archivescards{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.archivescard{
    width: 250px !important;
    margin: 30px;
}
</style>
