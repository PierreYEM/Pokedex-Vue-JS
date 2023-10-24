<script setup>
import { useFunctions } from "../stores/functions"
import { ref } from "vue";
import Stats from './Stats.vue'
import CloseButton from './CloseButton.vue'

const use = useFunctions()
const { data, show, toggle, isBright, isShiny, miss, toggleFullscreen, fullScreen, firstAppearance } = defineProps({
    data: Object,
    show: Boolean,
    toggle: Function,
    isBright: Boolean,
    isShiny: Boolean,
    miss: String,
    toggleFullscreen: Function,
    fullScreen: Boolean,
    firstAppearance: Boolean,
});
const pkmImg = data.sprites.other['official-artwork'].front_default
const pkmImgSn = data.sprites.other['official-artwork'].front_shiny
const pkmType = data.types[0].type.name

const getFrName = (nameEntries) => {
    for (const entry of nameEntries) {
        if (entry.language.name === 'fr') {
            return entry.name;
        }
    }
    return 'Pas de nom Fr disponible';
};
</script>

<template>
    <Transition>
        <div :class="['fixed', 'w-full', 'h-full', 'top-0', 'left-0', 'z-50', 'hover:cursor-zoom-out', use.ColorTypeIndex(pkmType, show)
        ]" v-if="show" @click="toggle">
            <!-- Modale -->
            <div class="fixed flex flex-col items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  h-full sm:h-[90%] md:w-10/12 lg:w-5/12 w-full bg-[#666666] z-50 rounded-xl shadow-2xl hover:cursor-auto overflow-hidden"
                @click.stop>
                <!-- Partie haute de la modale -->
                <div class="relative h-[40%] flex flex-col justify-center items-center w-full">
                    <!-- Fond pokéball -->
                    <svg class="absolute h-[85%] max-w-fit right-4 " src="../assets/bgpokeball.svg" alt="pokeball" viewBox="0 0 90 91"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M90 44C90 32.3305 85.2589 21.1389 76.8198 12.8873C68.3807 4.6357 56.9347 8.81025e-07 45 0C33.0653 -8.81025e-07 21.6193 4.6357 13.1802 12.8873C4.74106 21.1389 1.8021e-06 32.3305 0 44L28.172 44C28.172 39.6361 29.9449 35.451 33.1008 32.3652C36.2567 29.2795 40.5369 27.546 45 27.546C49.4631 27.546 53.7433 29.2795 56.8992 32.3652C60.0551 35.451 61.828 39.6361 61.828 44H90Z"
                            fill="grey" />
                        <path
                            d="M-3.91393e-06 48.5C-4.89933e-06 59.7717 4.74105 70.5817 13.1802 78.552C21.6193 86.5223 33.0653 91 45 91C56.9347 91 68.3807 86.5223 76.8198 78.552C85.2589 70.5817 90 59.7717 90 48.5L61.4728 48.5C61.4728 52.6261 59.7373 56.5833 56.648 59.5009C53.5588 62.4185 49.3689 64.0577 45 64.0577C40.6311 64.0577 36.4412 62.4185 33.352 59.5009C30.2627 56.5833 28.5272 52.6261 28.5272 48.5L-3.91393e-06 48.5Z"
                            fill="grey" />
                        <circle cx="45" cy="46" r="10" fill="grey" />

                    </svg>

                    <div class="z-10 h-[25%] grid grid-cols-12  grid-rows-1 w-full py-2">

                        <div class="ps-2 sm:ps-4 col-span-3 flex justify-items-start items-center">
                            <CloseButton @click="toggle" class="hover:cursor-pointer"/>
                        </div>

                        <p class="col-span-6 text-xl sm:text-lg lg:text-3xl text-white font-bold">{{ getFrName(data.names)
                        }}
                        </p>
                        <p class="col-span-3 text-xl sm:text-xl lg:text-3xl text-white ">{{ use.formatNb(data.id) }}
                        </p>
                    </div>
                    <!-- Image du pokémon -->
                    <div class="h-[75%]">
                        <img :class="{
                            'hover:cursor-zoom-in transition-all duration-700 brightness-0 ease-in-out h-[100%] max-w-max ': true,
                            'brightness-100 ': !firstAppearance,
                            'brightness-100': (isBright && (pkmImgSn || pkmImg) && firstAppearance),
                            'contrast-0': (isShiny && !pkmImgSn),
                            'py-4': !pkmImg,
                            'h-[228%] transition-all duration-500 ease-in-out hover:cursor-zoom-out': !fullScreen,
                        }" :src="(isShiny && pkmImgSn) ? pkmImgSn : (!pkmImg ? miss : pkmImg)" alt="pokémonImage"
                            @click="toggleFullscreen">
                    </div>
                </div>


                <!-- Partie stats de la modale -->
                <Transition>
                    <div v-if="fullScreen == true" class=" rounded-xl w-[98%] h-[60%] pb-1">
                        <Stats :data="data" />
                    </div>
                </Transition>
            </div>


        </div>

    </Transition>
</template>

<style scoped>
.v-enter-active {
    transition: opacity 0.5s ease
}

.v-leave-active {
    transition: opacity 0.3s ease
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>