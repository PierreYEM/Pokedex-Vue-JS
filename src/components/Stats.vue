<script setup>
import { ref } from 'vue';
import Types from './Types.vue'
const { data } = defineProps({
    data: Object
})
const description = data.flavor_text_entries;
const isfoldDedData = ref(false);
const getFrDescription = (flavorTextEntries) => {
    for (const entry of flavorTextEntries) {
        if (entry.language.name === 'fr') {
            return entry.flavor_text;
        }
    }
    return 'Pas de description disponible';
};
const fold = () => { isfoldDedData.value = !isfoldDedData.value }

</script>

<template>
    <Transition>
        <div class="bg-white h-full w-full rounded-xl flex flex-col overflow-hidden">
            <div class="h-[10%] flex items-center justify-center gap-6">
                <Types :data="data" />
            </div>
            <div class="font-bold text-lg h-[10%] flex items-center justify-center" @click="fold">
                <p :class="{
                    'h-[80%] hover:cursor-pointer transition-all duration-500 ease-in-out': true,
                    'text-green-600': !isfoldDedData,
                }">Caractéristiques</p>
            </div>
            <div :class="{
                'flex flex-col transition-all duration-1000 ease-in-out': true,
                'h-[70%]': !isfoldDedData,
                ' h-[0%]': isfoldDedData,
            }">
                <div class="h-1/2 bg-blue-300 flex flex-col transition-all duration-1000 ease-in-out overflow-hidden">
                    stats
                </div>
                <div class="h-1/2 bg-blue-200 flex flex-col transition-all duration-1000 ease-in-out overflow-hidden">
                    {{ getFrDescription(description) }}
                </div>
            </div>

            <div class="font-bold text-lg flex items-center justify-center" @click="fold">
                <p :class="{
                    'h-[80%] hover:cursor-pointer transition-all duration-500 ease-in-out': true,
                    'text-green-600': isfoldDedData,
                }">Statistiques de base</p>
            </div>
            <div :class="{
                'flex flex-col transition-all duration-1000 ease-in-out overflow-hidden': true,
                'h-[70%]': isfoldDedData,
                ' h-[0%]': !isfoldDedData,
            }">
                <div :class="{
                    'bg-green-300 h-[100%] transition-all duration-1000': true,
                }"></div>
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