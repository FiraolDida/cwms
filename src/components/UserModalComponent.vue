<template>
    <div v-show="modalActive">
        <div class="fixed inset-0 z-50 flex justify-center items-center">
            <div class="flex flex-col max-w-5xl rounded-lg shadow-lg bg-white">
                <slot></slot>
            </div>
        </div>
        <div class="opacity-25 fixed inset-0 z-40 bg-black">

        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    modalActive: Boolean
})
</script>

<style>

</style>