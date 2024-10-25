<script setup lang="ts">
import Tabbar from './table/index.vue'
import Menu from './memu/index.vue'
import Main from './main/index.vue'
import Footer from './footer/index.vue'



</script>
<template>
    <div class="bg-#202536 ">
        <Tabbar/>
        <div class="flex min-h-screen w-full ">
           <Menu/>
         
           <Main/>



        </div>
        <Footer/>
    </div>


</template>
<style scoped></style>