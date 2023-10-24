<script setup>

    import { onMounted, onUpdated, ref } from 'vue';
    import { countryService } from '../services/countryService'
    import { useCountryStore } from '../stores/countryStore'
    import MiddleDivitionArticle from './../components/shared/MiddleDivitionArticle.vue'

    let countryName = ref('')

    let countryData = ref({})

    const store = useCountryStore()

    const getCountries = countryService

    onMounted(() => {
        countryName.value = window.location.pathname
        const data = getCountries.getByName(countryName.value, {})
        console.log(data)
        store.countryData.value = data
    })

    onUpdated(() => {
        country.value = window.location.pathname
        countryData.value = { mark: 5 }
    })

</script>

<template>
<!--     <MiddleDivitionArticle :ubications="ubication"></MiddleDivitionArticle> -->
</template>

<style scoped></style>../stores/countryStore