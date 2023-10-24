<script setup>

    import { onMounted, onUpdated, ref } from 'vue';
    import { countryService } from '../services/countryService'
    import MiddleDivitionArticle from './../components/shared/MiddleDivitionArticle.vue'

    let country = ref('')

    let countryData = ref({})

    const getCountries = countryService

</script>

<template>
<!--     <MiddleDivitionArticle :ubications="ubication"></MiddleDivitionArticle> -->
</template>

<style scoped></style>