<script setup lang="ts">
import SearchBar from './seach/index.vue'
import Table from './table/index.vue'


</script>
<template>
    <div class="flex w-full ">
        <div class="w-full">
            <div class="w-full border border-gray-300 flex flex-col items-center" style="background: #ebebeb;">
                <p class="mt-6">Search for materials information by chemistry, composition, or property.</p>
                <SearchBar />

            </div>
           <div class="w-full bg-white">
            <Table/>

           </div>


        </div>

    </div>


</template>
<style scoped>
</style>