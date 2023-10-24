<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import PkmCard from './PkmCard.vue'
import Loader from './Loader.vue';
const api = 'https://pokeapi.co/api/v2/pokemon/';
const api2 = 'https://pokeapi.co/api/v2/pokemon-species/';
const itemsPerPage = 25;

const finalData = ref({});
const currentPage = ref(1);
const isLoading = ref(false);

const loadPokemonData = async (startIndex, endIndex) => {
    const promises = [];

    for (let i = startIndex; i <= endIndex; i++) {
        promises.push(fetch(api + i + '/'));
        promises.push(fetch(api2 + i + '/'));
    }

    const responses = await Promise.all(promises);

    for (let i = startIndex; i <= endIndex; i++) {
        /* shift range dans l'ordre d'appel d'API */
        const pokemonResponse = await responses.shift().json();
        const speciesResponse = await responses.shift().json();


        /* Fusion des données */
        finalData.value[pokemonResponse.id] = {
            ...pokemonResponse,
            ...speciesResponse,
        };
    }
};

const loadMoreData = async () => {

    /* gère l'affichage du loader */
    if (isLoading.value) return;

    isLoading.value = true;

    // Vérifiez si vous avez déjà chargé tous les Pokémon
    if (Object.keys(finalData.value).length >= 1017) {
        isLoading.value = false;
        return;
    }

    const startIndex = (currentPage.value - 1) * itemsPerPage + 1;
    const endIndex = startIndex + itemsPerPage;

    try {
        await loadPokemonData(startIndex, endIndex);
        currentPage.value++;
    } catch (error) {
        console.error('Erreur lors du chargement des données des Pokémon', error);
    } finally {
        isLoading.value = false;
        console.log(finalData);
    }
};

const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const contentHeight = document.documentElement.scrollHeight;

    if (scrollY + windowHeight >= contentHeight - 300) {
        loadMoreData();
    }
};

onMounted(() => {
    loadMoreData();
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});

const pkmListData = computed(() => {
    return Object.values(finalData.value);
});
</script>

<template>
    <div class="flex flex-col">
        <div>
            <ul class="flex flex-wrap gap-4 justify-center">

                <li v-for="pokemon in pkmListData" :key="pokemon.id">
                    <PkmCard :data="pokemon" />
                </li>


            </ul>
        </div>
        <div v-if="isLoading" class="relative flex justify-center py-6 ">
            <Loader />
        </div>
    </div>
</template>

<style scoped></style>