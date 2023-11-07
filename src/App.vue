<script setup>
import { ref } from 'vue'
import Navbar from './components/shared/Navbar.vue';
import Layout from './components/shared/Layout.vue'

let country = ref({})

function catchData(data) {
    country.value = data
  console.log(country.value)
}
</script>

<template>
  <Navbar @send-data="catchData"></Navbar>
  <Layout :country-data="country"></Layout>
</template>

<style scoped>
</style>
