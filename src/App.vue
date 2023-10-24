<script setup>
import PkmList from './components/PkmList.vue'
import Footer from './components/layout/Footer.vue'
import Header from './components/layout/Header.vue'
import CloseButton from './components/CloseButton.vue'
</script>

<template>
    <div class="flex flex-col">
        <Header class=" w-full" />
        <PkmList />
        <Footer />
        <!-- <CloseButton /> -->
    </div>
</template>

<style scoped></style>
