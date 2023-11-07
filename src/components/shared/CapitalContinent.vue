<script setup>
defineProps(['capital', 'capitalInfo', 'continents', 'flag'])
</script>
<template>
    <article class="article">
        <section class="section">
            <h2>Capital</h2>
            <div class="capital">
                <h3>{{ capital }}</h3>
                <div>
                    <h4>Coordenadas</h4>
                    <ul class="list">
                        <li>
                            Latitud
                            <span>{{ capitalInfo.lat }}</span>
                        </li>
                        <li>
                            Longitud
                            <span>{{ capitalInfo.lon }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="section">
            <h2>Continentes</h2>
            <div>
                <ul class="list">
                    <li v-for="continent in continents">
                        {{ continent }}
                    </li>
                </ul>
            </div>
        </section>
        <section class="section">
            <h2>Bandera</h2>
            <figure>
                <img :src="flag.img" :alt="flag.alt">
            </figure>
        </section>
    </article>
</template>
<style scoped>
.article{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    margin-top: 40px;
}

.section{
    padding: 20px;
    margin: 8px;
    border: 1px solid #cfcfcf;
    border-radius: 8px;
}
.section:nth-child(3) {
    margin-bottom: 0;
    padding: 20px;
}
.section:nth-child(3) figure {
    margin: 0px 20px;
}
.section:nth-child(3) figure img {
    border: 1px solid black;
}

.list{
    list-style: none;
    padding: 20px 15px;
    margin: 13px;
}

.capital{
    display: flex;
    justify-content: space-evenly;
}
.capital h3{
    align-self: center;
}
.capital div h4{
    margin: 10px 0px 0px 0px;
}

@media (min-width: 1020px) {
    .article{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    margin-top: 40px;
}
}

</style>