<template>
    <div>
      <h1>Materials Data</h1>
      <ul>
        <li v-for="material in materials" :key="material.material_id">
          {{ material.formula_pretty }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
export default {
    data() {
      return {
        materials: []
      };
    },
    async created() {
      try {
        const response = await axios.get('http://localhost:5000/api/materials');
        this.materials = response.data.materials;
      } catch (error) {
        console.error('Error fetching materials data:', error);
      }
    }
  };
</script>

