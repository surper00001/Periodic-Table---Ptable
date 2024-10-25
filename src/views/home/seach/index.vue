<script setup lang="ts">
import { ref, watch } from 'vue';
import Element from '../element/index.vue';
import useMoleculesStore from '../../../store/modules/molecules';
// const filterKeyword = ref('');
const filterKeyword = ref<string>('');
const hasInputValue = ref<boolean>(false);
const isHidden = ref<boolean>(true);
const moleculesStore = useMoleculesStore();
// const setFilterKeyword = (keyword: string) => {
//   moleculesStore.setFilterKeyword(keyword);
// };
const applyFilter = () => {
  console.log('Applying Filter:', filterKeyword.value); // 调试代码
  moleculesStore.setFilterKeyword(filterKeyword.value);
};

const clearInput = () => {
  filterKeyword.value = '';
};

// 监听 inputValue 的变化，更新 hasInputValue
watch(filterKeyword, (newValue) => {
  hasInputValue.value = newValue.trim() !== '';
});

const handleHidden = () => {
  isHidden.value = !isHidden.value;
};
</script>

<template>
  <div class="border border-gray-300 flex bg-white rounded-lg mt-4 mb-4" style="width: 960px; height: 50px;">
    <div class="flex items-center justify-center" style="background: #f5f5f5; width: 106px;">Materials</div>
    <div  class="flex-grow flex items-center .input-with-clear">
      <input    id="filterKeyword" v-model="filterKeyword"
        class="input-reset w-full h-full appearance-none" placeholder="e.g. H,C or H7C4 or mol-1862 or C(=O)=O"
        type="text">
      <span v-show="hasInputValue" class="clear-input relative text-blue-500" @click="clearInput"
        style="width: 30px; right: 24px;">X</span>
    </div>
    <div class="flex items-center justify-center h-full border-l" style="width: 48px;">
      <img src="../../../assets/帮助.svg" alt="">
    </div>
    <button class="input-reset flex items-center justify-center hover:border" style="width: 82px;"
      @click="handleHidden">
      <img src="../../../assets/element-table.svg" alt="">
    </button>
    <button @click="applyFilter" class="flex items-center justify-center"
      style="width: 82px; background: #75d4cc;">Search</button>
  </div>
  <transition name="fade">
    <div v-if="isHidden" class="flex justify-center mt-4 mb-6" style="width: 900px; height: 396px;">
      <div class="flex items-center justify-center bg-white border rounded-lg" style="width: 750px; height: 396px;">
        <Element v-model:inputValue="filterKeyword" />
      </div>
    </div>
  </transition>
</template>

<style scoped>
.input-reset {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  outline: none;
  background: transparent;
  padding: 0;
  margin: 0;
  font-size: 16px;
  color: #333;
}

.input-reset:hover {
  border: 1px solid rgb(163, 163, 163);
  outline: none;
}

.input-reset:focus {
  border: 1px solid blue;
  outline: none;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 2s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-100%);
}

.slide-enter-to,
.slide-leave {
  transform: translateY(0.1);
}
</style>