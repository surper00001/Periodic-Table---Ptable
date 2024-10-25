<script setup lang="ts">

// import { useRoute } from 'vue-router'
import { ref } from 'vue';

// 定义当前的样式类
const currentClass = ref('default-style');

// 处理鼠标移入事件
const handleMouseEnter = () => {
  currentClass.value = 'hover-style';
};

// 处理鼠标移出事件
const handleMouseLeave = () => {
  currentClass.value = 'default-style';
};
const handleClick = () => {
  currentClass.value = 'default-style';
};


</script>
<template>
  <div class="menu fixed  flex flex-col  min-h-full  overflow-hidden" style="top: 0;"
    :class="currentClass" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" @click="handleClick">
    <div style="height: 56px; background: #202536; box-sizing: border-box"></div>
    <router-link class="w-full " :to="{ path: '/' }">
      <div class="flex   flex-nowrap hover:bg-white  w-full" :class="currentClass">
        <img class="ml-2" src="../../assets/搜索.svg" alt="" />
        <span class="flex-grow ml-8 p-1">Materials Project</span>
      </div>

    </router-link>
    <router-link class="w-full " :to="{ path: '/detail' }">
      <div class="flex  flex-nowrap hover:bg-white  w-full overflow-hidden">
        <img class="ml-2 " src="../../assets/toolkit.svg" alt="" />
        <span class="flex-grow ml-8 p-1">Crystal Toolkit</span>
      </div>

    </router-link>
    <router-link class="w-full " :to="{ path: '/test' }">
      <div class="flex  flex-nowrap hover:bg-white  w-full overflow-hidden">
        <img class="ml-2 " src="../../assets/toolkit.svg" alt="" />
        <span class="flex-grow ml-8 p-1">Crystal Toolkit</span>
      </div>

    </router-link>
  </div>
</template>
<style scoped>
.menu {
  width: 50px ; 
  background: #323d61;
  /* position: absolute; */
  /* /* left: 0; */
  top: 56px; 
 
}
/* styles.css */
.default-style {
  width: 50px;
  background-color:#323d61 ; 
}

.hover-style {
  width: 250px;
  /* background: #fff; */
  background-color:#323d61 ;
}
</style>