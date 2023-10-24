<script setup>
import { useFunctions } from "../stores/functions"
const use = useFunctions()
const { data } = defineProps({
    data: Object
})
const pkmType = data.types[0].type.name
const pkmType2 = data.types[1]?.type?.name || null

</script>

<template>
    <div v-if="pkmType != null" :class="['h-[50%]', 'w-12', 'rounded-full', 'flex', 'text-white', 'justify-center', 'items-center','text-xs',
        use.ColorTypeIndex(pkmType)
    ]">
        <p>{{ use.toFrTypeIndex(pkmType) }}</p>
    </div>

    <div v-if="pkmType2 != null" :class="['h-[50%]', 'w-12', 'rounded-full', 'text-white', 'flex', 'justify-center', 'items-center','text-xs',
        use.ColorTypeIndex(pkmType2)
    ]">
        <p>{{ use.toFrTypeIndex(pkmType2) }}</p>
    </div>
</template>

<style scoped></style>