<template>
  <table>
    <tr v-for="(period, periodIndex) in periodicTable" :key="periodIndex">
      <td v-for="(element, elementIndex) in period" :key="elementIndex"
        :class="{ 'merged': isMerged(periodIndex, elementIndex), 'clicked': isClicked(element as any) }"
        :colspan="getColspan(periodIndex, elementIndex)" :rowspan="getRowspan(periodIndex, elementIndex)"
        @mouseenter="handleMouseEnter(element as any)" @mouseleave="handleMouseLeave"
        @click="handleClick(element as any)">
        <div v-if="element" class="element rounded hover:scale-105 transition-transform duration-300 ease-in-out"
          :style="{ backgroundColor: element.color }">
          <div class="symbol text-sm">{{ element.symbol }}</div>
        </div>
        <div v-if="isMerged(periodIndex, elementIndex)" class="flex justify-center items-center">
          <div class="border rounded-full flex" style="height: 34px;">
            <button class="rounded-tl-full rounded-bl-full text-xs h-full " style="width: 128px;"
              @click="toggleButtonColor('button1')" :class="{ 'bg-blue-500': selectedButton === 'button1' }">At Least
              Element</button>
            <button class="text-xs  rounded-br-full rounded-tr-full h-full" style="width: 96px; height: 34px;"
              @click="toggleButtonColor('button2')"
              :class="{ 'bg-blue-500': selectedButton === 'button2' }">Formula</button>
          </div>
        </div>
        <div class="flex flex-col justify-between rounded" v-if="isMerged1(periodIndex, elementIndex)"
          :style="{ backgroundColor: hoveredElement?.color }" style="width: 74px;height: 74px;">
          <p class="text-xs">{{ hoveredElement?.name }}</p>
          <div class="h-3/5 flex flex-col justify-between items-center">
            <div>{{ hoveredElement?.symbol }}</div>
            <div class="text-xs">{{ hoveredElement?.number }}</div>
          </div>
        </div>
        <div v-if="isMerged2(periodIndex, elementIndex)">
          <div class="flex flex-wrap" :class="{ 'hidden': !showDiv }" style="width: 225px;">
            <div @click="handleClick(element as any)"
              class="border rounded flex justify-center items-center hover:bg-gray-200"
              v-for="(item, index) in allItems" :key="index" style="width: 36px;height: 36px;">
              {{ item }}
            </div>
          </div>
          <div class="text-sm border " :class="{ 'hidden': showDiv }" style="width: 222px;height: 74px;">Select
            elements to search for molecules with
            <b>at least</b> these elements
          </div>
        </div>
        <div class="flex justify-center items-center text-lg border hover:bg-gray-200 " :class="{ 'hidden': !showDiv }"
          v-if="isMerged3(periodIndex, elementIndex)" style="width: 74px;height: 74px;">
          *
        </div>
      </td>
    </tr>
  </table>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import periodicTableData from '../../../assets/json/periodicTable.json';

interface Element {
  name: string;
  number: number;
  symbol: string;
  color: string;
}

const emit = defineEmits(['update:inputValue']);
const periodicTable = ref(periodicTableData);
const hoveredElement = ref<Element | null>(null);
const inputValue = ref<string>('');
const clickCount = ref<number>(0);
const selectedElements = ref<Set<string>>(new Set());
const selectedButton = ref<string | null>('button1');
const allItems = ref([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '(', ')']);
const showDiv = ref(false); // 初始时div是隐藏的

const isMerged = (periodIndex: number, elementIndex: number) => periodIndex === 0 && elementIndex === 1;
const isMerged1 = (periodIndex: number, elementIndex: number) => periodIndex === 1 && elementIndex === 2;
const isMerged2 = (periodIndex: number, elementIndex: number) => periodIndex === 1 && elementIndex === 4;
const isMerged3 = (periodIndex: number, elementIndex: number) => periodIndex === 1 && elementIndex === 3;

const getColspan = (periodIndex: number, elementIndex: number) => {
  if (isMerged(periodIndex, elementIndex)) return 16;
  if (isMerged1(periodIndex, elementIndex)) return 2;
  if (isMerged2(periodIndex, elementIndex)) return 6;
  if (isMerged3(periodIndex, elementIndex)) return 2;
  return 1;
};

const getRowspan = (periodIndex: number, elementIndex: number) => {
  if (isMerged(periodIndex, elementIndex)) return 1;
  if (isMerged1(periodIndex, elementIndex)) return 2;
  if (isMerged2(periodIndex, elementIndex)) return 2;
  if (isMerged3(periodIndex, elementIndex)) return 2;
  return 1;
};

const handleMouseEnter = (element: Element) => hoveredElement.value = element;
const handleMouseLeave = () => hoveredElement.value = null;

const isClicked = (element: Element | null) => {
  if (!element) return false;
  return selectedElements.value.has(element.symbol);
};

const handleClick = (element: Element) => {
  const symbolIndex = inputValue.value.indexOf(element.symbol);

  if (element && clickCount.value < 5) {
    if (symbolIndex === -1) {
      inputValue.value += element.symbol + ', ';
      clickCount.value += 1;
      selectedElements.value.add(element.symbol);
    } else {
      inputValue.value = inputValue.value.replace(element.symbol + ', ', '');
      clickCount.value -= 1;
      selectedElements.value.delete(element.symbol);
    }
  } else if (symbolIndex !== -1) {
    inputValue.value = inputValue.value.replace(element.symbol + ', ', '');
    clickCount.value -= 1;
    selectedElements.value.delete(element.symbol);
  }


  clickCount.value = Math.max(clickCount.value, 0);
  emit('update:inputValue', inputValue.value);
};

const toggleButtonColor = (button: string) => {
  selectedButton.value = selectedButton.value === button ? null : button;

  if (selectedButton.value === 'button1') {
    showDiv.value = false;
  }
  if (selectedButton.value === 'button2') {
    showDiv.value = true;
  }


};
</script>

<style scoped>
.element {
  width: 38px;
  height: 38px;
  border: 1px solid #fff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.clicked {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border: 2px solid gray;
}

/* .button {
  background-color: blue;
} */

.bg-blue-500 {
  background-color: #3960e3;
  color: #fff;
}
</style>