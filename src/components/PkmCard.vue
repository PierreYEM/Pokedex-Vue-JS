<script setup>
import { useFunctions } from "../stores/functions"
import { ref } from "vue";
import Modale from './Modale.vue'
const { data } = defineProps({
    data: Object,
});
const pkmImgSn = data.sprites.front_shiny
const pkmImg = data.sprites.front_default
const pkmType = data.types[0].type.name
const showModal = ref(false);
const pkmData = ref(data);
const fullScreen = ref(false)
const firstAppearance = ref(true)
const cancelToggleModal = ref(false)
const toggleFullscreen = () => { fullScreen.value = !fullScreen.value; }
const toggleModal = () => {
    if (cancelToggleModal.value) {
        return;
    }

    cancelToggleModal.value = true;

    showModal.value = !showModal.value;
    isBright.value = false;
    requestAnimationFrame(() => {
        setTimeout(() => {
            isBright.value = true;
            cancelToggleModal.value = false;
        }, 500);
        if (firstAppearance.value) {
            setTimeout(() => {
                toggleFullscreen();
                firstAppearance.value = false;
            }, 1100);
        }


    });

};
const use = useFunctions()
const isShiny = ref(false);
const toggleShiny = () => isShiny.value = !isShiny.value;
const isBright = ref(false);
const missPkmImg = ref("src/assets/missing.png")
</script>

<template>
    <Modale :data="pkmData" :show="showModal" :toggle="toggleModal" :isBright="isBright" :isShiny="isShiny"
        :miss="missPkmImg" :fullScreen="fullScreen" :toggleFullscreen="toggleFullscreen"
        :firstAppearance="firstAppearance" />
    <div :class="{

        'flex flex-col h-[120px] sm:h-[200px] w-[120px] sm:w-[200px] rounded-xl border border-grey-200 hover:scale-110': true,
        'bg-[#000000] transition ease-in-out duration-500': isShiny,
        'bg-white transition ease-in-out duration-500 hover:shadow-lg hover:z-50': !isShiny,
    }">
        <!-- Partie haute de la carte -->
        <div class="flex h-1/5 justify-center sm:justify-between">
            <img src="../assets/etoiles.png" alt="shinyStars"
                class="hidden sm:flex ps-4 py-2 hover:animate-pulse hover:cursor-pointer" @click="toggleShiny">
            <div
                :class="['flex', 'font-bold', 'sm:text-xl', 'justify-end', 'sm:py-2', 'sm:pe-4', isShiny ? 'text-white' : 'text-black', 'transition-all', 'ease-in-out', 'duration-1000']">
                {{ use.formatNb(data.id) }}</div>
        </div>

        <!-- Image du pokémon -->
        <div class="flex justify-center items-center h-3/5">

            <img :src="(isShiny && pkmImgSn) ? pkmImgSn : (!pkmImg ? missPkmImg : pkmImg)" :alt="data.species.name" :class="{
                'hover:animate-move hover:cursor-zoom-in transition-all duration-1000 h-full': true,
                'max-h-[60px] max-w-[60px] sm:max-h-[100px] sm:max-w-[100px]': !pkmImg,
                'contrast-0': (isShiny && !pkmImgSn)
            }" @click="toggleModal">
        </div>

        <!-- Partie basse de la carte nom du pokémon -->
        <div
            :class="['h-1/5', 'rounded-b-xl', 'text-white', 'text-center', 'flex', 'items-center', 'justify-center', 'font-bold', 'text-sm', use.ColorTypeIndex(pkmType)]">
            {{
                use.getFrName(data.names) }}
        </div>
    </div>
</template>

<style scoped></style>