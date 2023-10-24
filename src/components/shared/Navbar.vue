<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar">
    <ul>
      <li>
        <RouterLink :to="{ name: 'russia' }">Rusia</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'china' }">China</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'qatar' }">Qatar</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'bielorrusia' }">Bielorrusia</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'turquia' }">Turquía</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'reinoUnido' }">Reino Unido</RouterLink>
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