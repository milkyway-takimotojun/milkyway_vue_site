<template>
    <div class="curriculum-item">
      <img :src="image" :alt="title" class="curriculum-image">
      <div class="curriculum-content">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
//   import { defineComponent, PropType } from 'vue';
  
  export default defineComponent({
    name: 'CurriculumItem',
    props: {
      title: {
        type: String as PropType<string>,
        required: true
      },
      description: {
        type: String as PropType<string>,
        required: true
      },
      image: {
        type: String as PropType<string>,
        required: false
      }
    }
  });
  </script>
  
  <style scoped>
  .curriculum-item {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }
  
  .curriculum-image {
    width: 150px;
    height: 150px;
    margin-right: 1rem;
  }
  
  .curriculum-content {
    /* スタイルをここに追加 */
  }
  </style>
  