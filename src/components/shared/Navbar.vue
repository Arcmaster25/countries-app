<script setup>

const emit = defineEmits(['send-data'])

import { RouterLink, RouterView } from 'vue-router'
import { countryService } from '../../services/countryService'

const service = countryService

function getCountry(name) {
  let countryData = service.getByName(name)

  countryData.then(data => {
    emit('send-data', data)
  }) 
  
}

/* store.$subscribe(
    (mutation, state) => {
        if (mutation.type == 'patch object') {
            console.log(mutation.payload)
        }

        countryData.value = Object.assign({}, state.countryData[0])
    }
) */

</script>

<template>
  <nav class="navbar">
    <ul>
      <li>
        <RouterLink @click="getCountry('russia')" :to="{ name: 'russia' }">Rusia</RouterLink>
      </li>
      <li>
        <RouterLink @click="getCountry('china')" :to="{ name: 'china' }">China</RouterLink>
      </li>
      <li>
        <RouterLink @click="getCountry('qatar')" :to="{ name: 'qatar' }">Qatar</RouterLink>
      </li>
      <li>
        <RouterLink @click="getCountry('belarus')" :to="{ name: 'bielorrusia' }">Bielorrusia</RouterLink>
      </li>
      <li>
        <RouterLink @click="getCountry('turkey')" :to="{ name: 'turquia' }">Turquía</RouterLink>
      </li>
      <li>
        <RouterLink @click="getCountry('united kingdom')" :to="{ name: 'reinoUnido' }">Reino Unido</RouterLink>
      </li>
    </ul>
  </nav>
  <RouterView />
</template>

<style scoped>

    .navbar {
        padding: 5px;
        box-shadow: 1px 3px 15px lightgray;
    }
    .navbar ul {
        list-style: none;
        display: flex;
        padding: 0;
        justify-content: space-evenly;
    }
    .navbar ul li a[href] {
        text-decoration: none;
        color: black;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
    }

</style>