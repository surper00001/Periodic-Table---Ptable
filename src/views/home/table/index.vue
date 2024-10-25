<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
// import { useMoleculesStore} from '../../../store/modules/molecules';
import { useMoleculesStore} from '../../../store/modules/molecules'

const moleculesStore = useMoleculesStore();

const itemsPerPageOptions = [5, 10, 20, 50];

const setCurrentPage = (page: number) => {
  moleculesStore.setCurrentPage(page);
};

const setItemsPerPage = (items: number) => {
  moleculesStore.setItemsPerPage(items);
};

console.log('Paginated Data:', moleculesStore.paginatedData); // 调试代码

// 分页器功能
const pageRange = computed(() => {
  const totalPages = moleculesStore.totalPages;
  const currentPage = moleculesStore.currentPage;
  const range = 2; // 显示当前页码前后的页码数量
  let start = currentPage - range;
  let end = currentPage + range;

  if (start < 1) {
    start = 1;
    end = Math.min(totalPages, start + range * 2);
  }

  if (end > totalPages) {
    end = totalPages;
    start = Math.max(1, end - range * 2);
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
});

const keys = computed(() => {
  if (moleculesStore.moleculesData.length > 0) {
    return Object.keys(moleculesStore.moleculesData[0]);
  }
  return [];
});

const options = ref(keys.value.map(key => ({ label: key, value: key })));

const selectedOptions = ref<string[]>([]);

const toggleSelectAll = () => {
  if (selectedOptions.value.length === options.value.length) {
    selectedOptions.value = [];
  } else {
    selectedOptions.value = options.value.map(option => option.value);
  }
};

const toggleOption = (value: string) => {
  const index = selectedOptions.value.indexOf(value);
  if (index === -1) {
    selectedOptions.value.push(value);
  } else {
    selectedOptions.value.splice(index, 1);
  }
};

const isOpen1 = ref(false);
const isOpen2 = ref(false);
const isOpen3 = ref(false);


const toggleDropdown1 = () => {
  isOpen1.value = !isOpen1.value;
 isOpen2.value = false;
};

const toggleDropdown2 = () => {
  isOpen2.value = !isOpen2.value;
  isOpen1.value = false;
};

const toggleDropdown3 = () => {
  isOpen3.value = !isOpen3.value;
};
// 默认全选
onMounted(() => {
  selectedOptions.value = options.value.map(option => option.value);
});
const isPaginatedDataEmpty = computed(() => moleculesStore.paginatedData.length === 0);


</script>

<template>
  <div class="flex h-full">
    <div class="flex w-1/5 justify-center">
      <div class="rounded-lg mt-4" style="width: 376px; height: 200px;">
        <div class="flex justify-between items-center rounded-tl-lg rounded-tr-lg w-full bg-gray-200"
          style="height: 70px;">
          <p class="ml-4 text-lg font-bold">Filters</p>
          <button class="bg-white rounded px-2 py-1 mr-4">resert</button>
        </div>
        <button @click="toggleDropdown1" type="button"
          class="inline-flex items-center w-full border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-indigo-200"
          id="menu-button" aria-expanded="true" aria-haspopup="true" style="height: 66px;">
          <!-- 下拉三角形图标 -->
          <svg v-if="!isOpen1" t="1725933498979" class="icon" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="2541" width="14" height="14">
            <path d="M93.37191 57.154573 930.62809 540.635608 93.37191 1024Z" fill="#2c2c2c" p-id="2542"></path>
          </svg>
          <svg v-else t="1725933574675" class="icon" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="2799" width="14" height="14">
            <path
              d="M535.466667 812.8l450.133333-563.2c14.933333-19.2 2.133333-49.066667-23.466667-49.066667H61.866667c-25.6 0-38.4 29.866667-23.466667 49.066667l450.133333 563.2c12.8 14.933333 34.133333 14.933333 46.933334 0z"
              fill="#2c2c2c" p-id="2800"></path>
          </svg>
          <span class="text-lg ml-4">Composition</span>
        </button>
        <div v-if="isOpen1"
          class="origin-top-right  w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
          <div class="py-1" role="none">
            <!-- 下拉菜单项 -->
            <p>Molecule ID</p>
            <div></div>
            <p>Formula</p>
            <div></div>
            <p>Include Elements</p>
            <div></div>
            <p>Number of Elements</p>
            <div></div>
            <p>SMILES</p>
            <div></div>
          </div>
        </div>
        <button @click="toggleDropdown2" type="button"
          class="inline-flex items-center w-full border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-indigo-200"
          id="menu-button" aria-expanded="true" aria-haspopup="true" style="height: 66px;">
          <!-- 下拉三角形图标 -->
          <svg v-if="!isOpen2" t="1725933498979" class="icon" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="2541" width="14" height="14">
            <path d="M93.37191 57.154573 930.62809 540.635608 93.37191 1024Z" fill="#2c2c2c" p-id="2542"></path>
          </svg>
          <svg v-else t="1725933574675" class="icon" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="2799" width="14" height="14">
            <path
              d="M535.466667 812.8l450.133333-563.2c14.933333-19.2 2.133333-49.066667-23.466667-49.066667H61.866667c-25.6 0-38.4 29.866667-23.466667 49.066667l450.133333 563.2c12.8 14.933333 34.133333 14.933333 46.933334 0z"
              fill="#2c2c2c" p-id="2800"></path>
          </svg>
          <span class="text-lg ml-4">Basic Properties</span>
        </button>
        <div v-if="isOpen2"
          class="origin-top-right  w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
          <div class="py-1" role="none">
            <!-- 下拉菜单项 -->
            <p>Electron Affinity (eV)</p>
            <div></div>
            <p>Ionization Energy (eV)</p>
            <div></div>
            <p>ICharge (+e)</p>
            <div></div>
            <p>Point Group</p>
            <div></div>
           
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-grow flex-col">
      <div class="w-full flex items-center">
        <div class="flex w-full h-full mx-4 justify-between items-center mt-4 bg-white border rounded-lg">
          <div v-if="!isPaginatedDataEmpty" class="m-2 ml-4 ">
            <p class="text-md">All <span class="font-bold">24,989 molecules</span></p>
            <p class="text-xs">Showing 1-15</p>
          </div>
          <div v-else m-2 ml-4>
            <p class="text-md ml-4"><span class="font-bold">0 molecules </span>match your search</p>
            <p class="text-xs ml-4">Showing 1-15</p>
            <div class="my-2  ml-4 h-8 w-42 border rounded-full">
              <p class="text-xs text-center"><span class="text-lg mr-2">x</span>includes Elemet:{{ }}</p>
            </div>

          </div>
          <div class="flex flex-col mr-24 border rounded-lg border hover:border-blue-500 cursor-pointer">
            <div class="w-28 h-2 flex items-center justify-center" @click="toggleDropdown3">
              <span class="mt-6 text-sm">Columns</span>
              <i class="mt-6 ml-2">
                <svg t="1725939160538" class="icon" viewBox="0 0 1664 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="2543" width="12" height="12">
                  <path
                    d="M1495.04 100.224l66.304 64.896a52.864 52.864 0 0 1 0 75.52L862.976 923.904a52.864 52.864 0 0 1-73.984 0L102.656 252.544a52.864 52.864 0 0 1 0-75.648L168.96 112a52.864 52.864 0 0 1 73.856 0L825.984 682.24 1421.056 100.224a52.864 52.864 0 0 1 73.856 0z"
                    fill="#515151" p-id="2544"></path>
                </svg>
              </i>
            </div>
            <div class="relative mt-6" id="dropdown">
              <div v-if="isOpen3" class="absolute mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg">
                <ul class="py-1">
                  <li @click="toggleSelectAll"
                    class="px-2 py-1 cursor-pointer hover:bg-gray-100 flex items-center text-xs">
                    <span class="mr-2 w-4 h-4 border border-gray-300 rounded flex items-center justify-center"
                      :class="{ 'bg-blue-500 border-blue-500': selectedOptions.length === options.length }">
                      <span v-if="selectedOptions.length === options.length" class="text-white text-xs">√</span>
                    </span>
                    {{ selectedOptions.length === options.length ? 'Unselect All' : 'Select All' }}
                  </li>
                  <li v-for="option in options" :key="option.value" @click="toggleOption(option.value)"
                    class="px-2 py-1 text-xs cursor-pointer hover:bg-gray-100 flex items-center">
                    <span class="mr-2 w-4 h-4 border border-gray-300 rounded flex items-center justify-center"
                      :class="{ 'bg-blue-500 border-blue-500': selectedOptions.includes(option.value) }">
                      <span v-if="selectedOptions.includes(option.value)" class="text-white text-xs">√</span>
                    </span>
                    {{ option.label }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 右边table -->
      <div class="p-4">
        <table class="min-w-full border">
          <thead class="bg-gray-200">
            <tr>
              <th v-if="selectedOptions.includes('Molecule ID')" class="p-4 text-xs">Molecule ID</th>
              <th v-if="selectedOptions.includes('Formula')" class="p-4 text-xs">Formula</th>
              <th v-if="selectedOptions.includes('SMILES')" class="p-4 text-xs">SMILES</th>
              <th v-if="selectedOptions.includes('Point Group')" class="p-4 text-xs">Point Group</th>
              <th v-if="selectedOptions.includes('Electron Affinity (eV)')" class="p-4 text-xs">Electron Affinity (eV)
              </th>
              <th v-if="selectedOptions.includes('Ionization Energy (eV)')" class="p-4 text-xs">Ionization Energy (eV)
              </th>
              <th v-if="selectedOptions.includes('Charge (+e)')" class="p-4 text-xs">Charge (+e)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="molecule in moleculesStore.paginatedData" :key="molecule['Molecule ID']"
              class="hover:bg-gray-100 border-b">
              <td v-if="selectedOptions.includes('Molecule ID')" class="p-4 text-xs text-center text-blue-500">{{
                molecule['Molecule ID'] }}</td>
              <td v-if="selectedOptions.includes('Formula')" class="p-4 text-xs text-center">{{ molecule.Formula }}</td>
              <td v-if="selectedOptions.includes('SMILES')" class="p-4 text-xs text-center">{{ molecule.SMILES }}</td>
              <td v-if="selectedOptions.includes('Point Group')" class="p-4 text-xs text-center">{{ molecule['PointGroup'] }}</td>
              <td v-if="selectedOptions.includes('Electron Affinity (eV)')" class="p-4 text-xs text-center">{{
                molecule['Electron Affinity (eV)'] }}</td>
              <td v-if="selectedOptions.includes('Ionization Energy (eV)')" class="p-4 text-xs text-center">{{
                molecule['Ionization Energy (eV)'] }}</td>
              <td v-if="selectedOptions.includes('Charge (+e)')" class="p-4 text-xs text-center">{{ molecule['Charge(+e)'] }}</td>
            </tr>
          </tbody>
        </table>
        <!-- 分页器 -->
        <div class="mt-4 flex justify-between items-center">
          <div class="mb-4">
            <label for="itemsPerPage" class="mr-2 text-sm">Jump to</label>
            <select id="itemsPerPage" v-model="moleculesStore.itemsPerPage"
              @change="setItemsPerPage(moleculesStore.itemsPerPage)" class="border hover:border-blue-500 text-sm">
              <option v-for="option in itemsPerPageOptions" :key="option" :value="option">
                {{ option }}
              </option>
            </select>
          </div>
          <div class="flex space-x-2">
            <button @click="setCurrentPage(moleculesStore.currentPage - 1)" :disabled="moleculesStore.currentPage === 1"
              class="border hover:border-blue-500 text-sm px-2 py-1 rounded">
              Previous
            </button>
            <div class="flex space-x-2">
              <button v-for="page in pageRange" :key="page" @click="setCurrentPage(page)" class="text-sm"
                :class="['px-3 py-1 rounded', { 'bg-blue-500 text-white': page === moleculesStore.currentPage }]">
                {{ page }}
              </button>
            </div>
            <button @click="setCurrentPage(moleculesStore.currentPage + 1)"
              :disabled="moleculesStore.currentPage === moleculesStore.totalPages"
              class="border text-sm hover:border-blue-500 px-2 py-1 rounded">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.relative {
  position: relative;
}

.absolute {
  position: absolute;
  top: 100%;
  left: 0;
}
</style>

<style scoped>
.relative {
  position: relative;
}

.absolute {
  position: absolute;
  top: 100%;
  left: 0;
}
</style>