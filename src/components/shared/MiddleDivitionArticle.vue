<script setup>
    defineProps(['maps', 'cords'])
</script>

<template>
    <article class="article">
        <section class="article-left">
            <h2 class="subtitle">Ubicación</h2>
            <ul class="list">
                <li>
                    <a :href="maps.googleMaps" target="_blank">Google Maps</a>
                </li>
                <li>
                    <a :href="maps.openStreetMaps" target="_blank">Open Street Maps</a>
                </li>
            </ul>
        </section>
        <section class="article-right">
            <h2 class="subtitle">Latitud y Longitud</h2>
            <ul class="list">
                <li>
                    <span>Latitud</span>
                    {{ cords.lat }}
                </li>
                <li>
                    <span>Longitud</span>
                    {{ cords.lon }}
                </li>
            </ul>
        </section>
    </article>
</template>

<style scoped>
.article{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    background: #f2eeee;
}

.list{
    list-style: none;
    padding: 20px 15px;
    margin: 13px;
}

.subtitle{
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    text-align: center;
}
</style>