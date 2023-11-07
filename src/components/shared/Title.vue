<script setup>
defineProps(['title'])
</script>
<template>
    <h1>{{ title }}</h1>
</template>
<style scoped>
h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
}
</style>