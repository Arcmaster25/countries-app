<script setup>
const props = defineProps(['countryData'])

import { ref, computed, onUpdated } from 'vue'
import MiddleDivitionArticle from './MiddleDivitionArticle.vue'
import Title from './Title.vue';
import CapitalContinent from './CapitalContinent.vue';

let country = ref({})
let maps = ref({
    googleMaps: null,
    openStreetMaps: null
})
let title = ref('')
let cords = ref({
    lat: null,
    lon: null
})
let capitalContinent = ref({
    capital: '',
    capitalInfo: {
        lat: 0,
        lon: 0
    },
    continents: {
    },
    flag: {
        img: null,
        alt: ''
    }
})

let haveData = computed(() => {
    return Object.keys(props.countryData).length > 0 ? true : false
})

onUpdated(() => {
    verifyPath()

    maps.value.googleMaps = country.value.maps.googleMaps
    maps.value.openStreetMaps = country.value.maps.openStreetMaps

    cords.value.lat = country.value.latlng[0]
    cords.value.lon = country.value.latlng[1]

    capitalContinent.value.capital = country.value.capital[0]
    capitalContinent.value.capitalInfo.lat = country.value.capitalInfo.latlng[0]
    capitalContinent.value.capitalInfo.lon = country.value.capitalInfo.latlng[1]
    capitalContinent.value.continents = country.value.continents
    capitalContinent.value.flag.img = country.value.flags.png
    capitalContinent.value.flag.alt = country.value.flags.alt

    title.value = country.value.name.official
})

function verifyPath() {
    let path = window.location.pathname

    if (path == '/china') {
        country.value = Object.assign({}, props.countryData[2])
    } else {
        country.value = Object.assign({}, props.countryData[0])
    }
}

</script>

<template>
    <div v-if="haveData == true">
        <Title :title="title"></Title>
        <MiddleDivitionArticle :maps="maps" :cords="cords"></MiddleDivitionArticle>
        <CapitalContinent :capital="capitalContinent.capital" :capital-info="capitalContinent.capitalInfo" :continents="capitalContinent.continents" :flag="capitalContinent.flag"></CapitalContinent>
    </div>
    <div v-else>
        <p class="default">No hay datos para mostrar</p>
    </div>
</template>

<style scoped>

.default{
    color: darkgray;
    text-shadow: 1px 0px 4px darkgrey;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    margin-top: 20px;
}
</style>