<script setup>
import { ref } from 'vue';
import ArchivesNewsletterCard from '../components/ArchivesNewsletterCard.vue';
const years = ref([
    { year: '2023' },
    { year: '2022' },
    { year: '2021' },
    { year: '2020' },
    { year: '2019' },
    { year: '2018' },
    { year: '2017' },
    { year: '2016' },
    { year: '2015' }
])

const parentMessage = ref('Parent')
const items = ref([{ message: 'Foo' }, { message: 'Bar' }])

</script>

<template>
    <p class = "title">Prisoner Express</p>
    <p class = "curr-title">Archived Newsletters</p>
    <b-container class="archive-news">
        <b-row v-for="year in years" class="cards">
            <b-row>
                <p class="archives-year">{{ year.year }} Newsletter Issues</p>
            </b-row>
            <b-row>
                <b-col>
                    <ArchivesNewsletterCard header="Spring Edition" picture="logo"/>
                </b-col>
                <b-col>
                    <ArchivesNewsletterCard header="Fall Edition" picture="logo"/>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <ArchivesNewsletterCard header="Summer Edition" picture="logo"/>
                </b-col>
                <b-col>
                    <ArchivesNewsletterCard header="Winter Edition" picture="logo"/>
                </b-col>
            </b-row>
        </b-row>
    </b-container>
</template>

<style scoped>
.cards{
    display: flex;
}
.title {
  font-size: 50px;
}

.curr-title {
  font-size: 30px;
}

.cards{
    margin-bottom: 80px;
}

.archives-year{
    font-weight: 700 !important;
    font-size: large;
}

.archive-news{
    margin-left: 40px;
}
</style>
