<template>
    <section class="curriculum">
      <h2>カリキュラム</h2>
      <div class="curriculum-list">
        <CurriculumItem
          v-for="(curriculum, index) in curriculums"
          :key="index"
          :title="curriculum.title"
          :description="curriculum.description"
          :image="curriculum.image"
        />
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import CurriculumItem from '../components/CurriculumItem.vue';
  
  export default defineComponent({
    name: 'Curriculum',
    components: {
      CurriculumItem
    },
    data() {
      return {
        curriculums: [
          {
            title: '初級コース',
            description: 'プログラミングの基礎を学びます。ゲーム作成からスタートして、楽しみながら基本を身に付けていきましょう。',
            image: 'path-to-beginner-course-image.jpg'
          },
          {
            title: '中級コース',
            description: '基本的なプログラミングスキルに加え、アプリケーションの開発に必要な知識を深めます。',
            image: 'path-to-intermediate-course-image.jpg'
          },
          // その他のコース情報を追加...
        ]
      };
    }
  });
  </script>
  
  <style scoped>
  .curriculum {
    /* スタイルをここに追加 */
  }
  
  .curriculum-list {
    /* スタイルをここに追加 */
  }
  </style>