<template>
  <div class="w-full flex justify-center">
    <div class="w-4/5  flex">
      <!-- Sidebar Section -->
      <div class=" min-h-screen mt-4" style="width: 340px;">
        <div :class="['sticky', { 'fixed-top': isSticky }]" style="width: 300px;">
          <div class="flex">
            <img src="https://materialsproject-build.s3.amazonaws.com/images/structures/mp-1183063.png" alt=""
              class="w-24 h-24">
            <div class="ml-4 flex flex-col justify-center">
              <p class="text-3xl">Ac₂CdGe</p>
              <p class="mt-2 text-gray-500">mp-1183063</p>
            </div>
          </div>
          <div class="mt-8">
            <p class="text-gray-400 text-xs">TABLE OF CONTENTS</p>
            <ul class="space-y-2 mt-4" style=" color:#3960e3;">
              <li v-for="section in sections" :key="section.id" @click="scrollToSection(section.id)"
                :class="{ 'active': activeSection === section.id }" class="hover:bg-gray-50 py-2 rounded text-sm">
                <a class="cursor-pointer   px-2 py-1 rounded focus:text-white">
                  {{ section.title }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Content Section -->
      <div class=" w-3/5 ml-4">
        <div class="w-full ">
          <div v-for="section in sections" :id="section.id" :key="section.id">
            <h1 class="my-4 text-2xl hidden">{{ section.title }}</h1>
            <!-- Section content here -->
            <div v-if="section.id === 'section1'">
              <div class="flex mt-4">
                <div class="border rounded-lg bg-white " style="width: 530px;height: 530px;">
                  <canvas data-engine="three.js r139" class="w-full h-full"></canvas>
                </div>
                <div class="flex w-2/5 flex-col ml-8 border rounded-lg">
                  <div class="w-full bg-white border rounded-lg " style="height: 370px;width: 360px;">
                    <div class="flex justify-between px-4 py-2">
                      <table class=" border-collapse  ">
                        <tbody>
                          <tr v-for="(item, index) in data" :key="index" class="border-b border-gray-300 mx-4">
                            <td class="py-2 px-4 font-semibold text-sm">{{ item.label }}</td>
                            <td class="py-2 px-4 text-sm text-blue-500 hover:text-gray-900">{{ item.value }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                  </div>
                  <div class="w-full bg-white border rounded-lg mt-4 " style="height: 180px;width: 360px;">
                    <div class="flex flex-col px-4 py-2 mt-4">
                      <div class="inline-block " style=" width: max-content;">
                        <h5 class="border-b-2 border-dotted border-gray-400 text-sm text-gray-500">Description
                          (Auto-generated)</h5>
                      </div>

                      <div class="overflow-y-auto h-24 mt-2">
                        <p class="text-sm">
                          Ac₂CdGe is Heusler structured and crystallizes in the cubic Fm̅3m space group. Ac is bonded in
                          a body-centered cubic geometry to four equivalent Cd and four equivalent Ge atoms. All Ac-Cd
                          bond lengths are 3.44 Å. All Ac-Ge bond lengths are 3.44 Å. Cd is bonded in a body-centered
                          cubic geometry to eight equivalent Ac atoms. Ge is bonded in a body-centered cubic geometry to
                          eight equivalent Ac atoms.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="w-full">
                    <button class="flex items-center rounded-lg text-white text-xs py-2 px-4 my-4 "
                      style="background:#00bdad ;"><span class="mr-2"><svg t="1726104449836" class="icon"
                          viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8544"
                          width="20" height="24">
                          <path
                            d="M142.222222 967.111111a56.888889 56.888889 0 0 1-56.888889-56.888889V113.777778a56.888889 56.888889 0 0 1 56.888889-56.888889h369.777778v270.222222a56.888889 56.888889 0 0 0 56.888889 56.888889h270.222222v133.560889a85.048889 85.048889 0 0 0-45.112889-12.871111 84.736 84.736 0 0 0-60.344889 25.002666 85.688889 85.688889 0 0 0-17.166222 96.099556H540.444444a85.432889 85.432889 0 0 0-85.333333 85.333333 85.432889 85.432889 0 0 0 85.333333 85.333334h165.888a84.906667 84.906667 0 0 0 17.991112 94.264889 84.849778 84.849778 0 0 0 60.344888 24.988444A85.432889 85.432889 0 0 0 839.111111 896v14.222222a56.888889 56.888889 0 0 1-56.888889 56.888889H142.222222z m631.68-116.622222a28.444444 28.444444 0 0 1 0-40.220445l70.684445-70.698666H540.444444a28.444444 28.444444 0 1 1 0-56.888889h301.112889l-67.640889-67.655111a28.444444 28.444444 0 0 1 40.220445-40.220445l110.634667 110.620445c0.938667 0.938667 1.806222 1.934222 2.602666 3.000889a28.444444 28.444444 0 0 1 3.626667 42.282666 28.615111 28.615111 0 0 1-6.172445 9.216l-110.634666 110.620445a28.330667 28.330667 0 0 1-20.110222 8.334222 28.344889 28.344889 0 0 1-20.181334-8.391111zM782.222222 327.111111H568.888889V113.777778h35.555555l177.578667 175.047111a0.568889 0.568889 0 0 0 0.170667 0.085333V327.111111H782.222222z"
                            fill="#ffffff" p-id="8545"></path>
                        </svg></span>Explorer Materials Details</button>
                  </div>
                </div>
              </div>
            </div>
            <div v-else-if="section.id === 'section2'">
              <div class="flex">
                <div class="bg-white rounded-lg " style="width: 480px; height: 400px;">
                  <div class="inline-block px-4 py-4" style=" width: max-content;">
                    <h5 class="border-b-2 border-dotted border-gray-400 text-sm text-gray-500">Lattice (Conventional)
                    </h5>
                  </div>
                  <div class="flex justify-between px-4 py-2">
                    <table class=" border-collapse  ">
                      <tbody>
                        <tr v-for="(item, index) in Latticedata" :key="index" class="border-b border-gray-300 mx-4 ">
                          <td class="py-2 px-8 font-semibold text-sm" style="width: 200px;">{{ item.Latticekey }}</td>
                          <td class="py-2 px-8 text-sm " style="width: 200px;">{{ item.Latticevalue }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="flex items-center text-sm text-gray-500 px-4 py-2">
                    <div>Lattice is given in its</div>

                    <div class="relative">
                      <button @click="isOpen = !isOpen"
                        class="text-gray-800  px-4 py-1 border rounded mx-2 focus:border-blue-500"
                        style="width: 120px; height: 34px;">
                        {{ selected || ' conventional' }}
                      </button>
                      <div v-if="isOpen" class="absolute bg-white ml-2 shadow mt-1">
                        <ul class="py-1">
                          <li class="px-4 py-1 hover:bg-blue-100" v-for="item in dropdownItems"
                            @click="selectItem(item)" :key="item">
                            {{ item }}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>crystallographic setting.</div>

                  </div>
                </div>
                <div class="bg-white rounded-lg ml-4 " style="width: 480px; height: 400px;">
                  <div class="mt-8">
                    <table class="border-collapse w-full">
                      <thead>
                        <tr class="text-sm ">
                          <th class="py-2 px-4">Wyckoff</th>
                          <th class="py-2 px-4">Element</th>
                          <th class="py-2 px-4">x</th>
                          <th class="py-2 px-4">y</th>
                          <th class="py-2 px-4">z</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, index) in Atomicdata" :key="index" class="border-b border-gray-300 text-sm ">
                          <td class="py-2 px-4 text-center">{{ item.Wyckoff }}</td>
                          <td class="py-2 px-4 text-center">{{ item.Element }}</td>
                          <td class="py-2 px-4 text-center">{{ item.x }}</td>
                          <td class="py-2 px-4 text-center">{{ item.y }}</td>
                          <td class="py-2 px-4 text-center">{{ item.z }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="flex mt-4">
                <div class="bg-white rounded-lg " style="width: 480px; height: 360px;">
                  <div class="inline-block px-4 py-4" style=" width: max-content;">
                    <h5 class="border-b-2 border-dotted border-gray-400 text-sm text-gray-500">Symmetry
                    </h5>
                  </div>
                  <div class="flex justify-between px-4 py-2">
                    <table class=" border-collapse  ">
                      <tbody>
                        <tr v-for="(item, index) in Symmetrydata" :key="index" class="border-b border-gray-300 mx-4 ">
                          <td class="py-2 px-8 font-semibold text-sm" style="width: 200px;">{{ item.key }}</td>
                          <td class="py-2 px-8 text-sm " style="width: 200px;">{{ item.value }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="bg-white rounded-lg ml-4 " style="width: 480px; height: 360px;">
                  <div class="flex justify-between mt-4 px-4 py-2">
                    <table class=" border-collapse  ">
                      <tbody>
                        <tr v-for="(item, index) in Symmetrydata1" :key="index" class="border-b border-gray-300 mx-4 ">
                          <td class="py-2 px-8 font-semibold text-sm" style="width: 200px;">{{ item.key }}</td>
                          <td class="py-2 px-8 text-sm " style="width: 200px;">{{ item.value }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div v-else-if="section.id === 'section3'">
              <!-- Placeholder content for other sections -->
              <p class="text-3xl font-bold mb-4">Properties</p>
              <Properties />
            </div>
            <div v-else-if="section.id === 'section4'">
              <!-- Placeholder content for other sections -->
              <p class="text-3xl font-bold mb-4">Contributed Data</p>
              <ContributedData />
            </div>
            <div v-else-if="section.id === 'section5'">
              <!-- Placeholder content for other sections -->
              <p class="text-3xl font-bold mb-4">Literature References</p>
              <p>No references found for this material.</p>
            </div>
            <div v-else-if="section.id === 'section6'">
              <!-- Placeholder content for other sections -->
              <p class="text-3xl font-bold mb-4">External Links</p>
              <p>No external links known.</p>
            </div>
            <div v-else-if="section.id === 'section7'">
              <!-- Placeholder content for other sections -->
              <p class="text-3xl font-bold mb-4">More</p>
              <div class="flex">
                <div class="bg-white text-lg font-bold rounded-lg border flex items-center justify-center"
                  style="width: 308px; height: 62px;">How to Download</div>
                <div class="bg-white text-lg font-bold  rounded-lg border flex items-center justify-center mx-4"
                  style="width: 308px; height: 62px;">How to Cite</div>
                <div class="bg-white text-lg font-bold  rounded-lg border flex items-center justify-center"
                  style="width: 308px; height: 62px;">Calculations</div>
              </div>
            </div>
            <div v-else="section.id === 'section8'">
              <!-- Placeholder content for other sections -->
              <p class="text-3xl font-bold mb-4">Related Materials</p>
            </div>
            <hr class="my-8">

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, onMounted, onUnmounted } from 'vue';
import Properties from './properties/index.vue'
import ContributedData from './contributeddata/index.vue'

interface Section {
  id: string;
  title: string;
}
const isOpen = ref(false);
const selected = ref(''); // 用于存储选中的菜单项
// 选中一个菜单项并更新按钮文本
const selectItem = (item: string) => {
  selected.value = item;
  isOpen.value = false; // 选中后关闭下拉菜单
};

const dropdownItems = ref(['conventional', 'primitive']); // 示例菜单项
const sections = ref<Section[]>([
  { id: 'section1', title: "Summary" },
  { id: 'section2', title: "Crystal Structure" },
  { id: 'section3', title: "Properties" },
  { id: 'section4', title: "Contributed Data" },
  { id: 'section5', title: "Literature References" },
  { id: 'section6', title: "External Links" },
  { id: 'section7', title: "More" },
  { id: 'section8', title: "Related Materials" },
]);
const data = [
  { label: 'Energy Above Hull', value: '0.000 eV/atom' },
  { label: 'Space Group', value: 'Fm3̅m' },
  { label: 'Band Gap', value: '0.00 eV' },
  { label: 'Predicted Formation Energy', value: '-0.465 eV/atom' },
  { label: 'Magnetic Ordering', value: 'Non-magnetic' },
  { label: 'Total Magnetization', value: '0.00 µB/f.u.' },
  { label: 'Experimentally Observed', value: 'No' }


];
const Latticedata = [
  { Latticekey: 'a', Latticevalue: '7.95 Å' },
  { Latticekey: 'b', Latticevalue: '7.95 Å' },
  { Latticekey: 'c', Latticevalue: '7.95 Å' },
  { Latticekey: 'α', Latticevalue: '90.00 º' },
  { Latticekey: 'β', Latticevalue: '90.00 º' },
  { Latticekey: 'ɣ', Latticevalue: '90.00 º' },
  { Latticekey: 'Volume', Latticevalue: '502.36 Å³' }

]
const Atomicdata = [
  { Wyckoff: '4a', Element: 'Ge', x: '0', y: '0', z: '0' },
  { Wyckoff: '4b', Element: 'Cd', x: '1/2', y: '0', z: '0' },
  { Wyckoff: '8c', Element: 'Ac', x: '1/4', y: '3/4', z: '3/4' }
]
 const Symmetrydata= [
        { key: 'Crystal System', value: 'Cubic' },
        { key: 'Lattice System', value: 'Cubic' },
        { key: 'Hall Number', value: '-F 4 2 3' },
        { key: 'International Number', value: '225' },
        { key: 'Symbol', value: 'Fm3̅m' },
        { key: 'Point Group', value: 'm3̅m' },
      ]
      const Symmetrydata1= [
        { key: 'Number of Atoms', value: '16' },
        { key: 'Density', value: '8.45 g·cm⁻³' },
        { key: 'Dimensionality', value: '3D' },
        { key: 'Possible Oxidation', value: 'Unknown' },
        { key: 'States', value: '' },
        
      ]

const activeSection = ref<string>('');

provide('sections', sections);
provide('activeSection', activeSection);

const isSticky = ref(false);
const originalOffsetTop = ref(0);

const handleScroll = () => {
  sections.value.forEach(section => {
    const element = document.getElementById(section.id);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 0) {
        activeSection.value = section.id;
      }
    }
  });

  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const stickyElement = document.querySelector('.sticky') as HTMLElement;
  if (stickyElement) {
    if (!originalOffsetTop.value) {
      originalOffsetTop.value = stickyElement.offsetTop;
    }
    isSticky.value = scrollTop >= originalOffsetTop.value;
  }
};

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    activeSection.value = id;

  } else {
    console.warn(`Section with id ${id} not found`);
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // 初始化 activeSection
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.sticky {
  position: relative;
  /* background-color: white; */
}

.fixed-top {
  position: fixed;
  top: 0;
  /* background-color: white; */
}

.active {
  color: #fff;
  background-color: #3960e3;

}
</style>