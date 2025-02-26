<template>
    <b-container>
        <b-card class="apcards">
            <b-card-title> {{ programfixtures[this.$route.params.program_key].programname }} </b-card-title>
        </b-card>
    </b-container>
</template>

<style>
.apbtns{
    background-color: #ffefd6 !important;
    border-width: 0 !important;
    padding:0 !important;
    width: 100% !important;
    margin-bottom: 10px !important;
}

.apcards{
    width: 100% !important;
    height: 200px !important;
}
</style>
