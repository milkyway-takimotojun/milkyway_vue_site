<template>
    <section class="curriculum">
      <Contents />
    </section>
  </template>
  
  <script lang="ts">
  import CurriculumItem from '../components/CurriculumItem.vue';
  import Contents from '../components/curricuram/contents.vue';
  
  export default defineComponent({
    name: 'Curriculum',
    components: {
      CurriculumItem,
      Contents,
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
    height: 100vh;
  }
  
  .curriculum-list {
    /* スタイルをここに追加 */
  }
  </style>