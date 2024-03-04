<template>
  <div id="app-container">
    <div class="teachers-introduction">
      <h1>教師紹介</h1>
      <div class="teacher-card" v-for="(teacher, index) in teachers" :key="index">
        <img :src="teacher.photo" :alt="`写真：${teacher.name}`" class="teacher-photo"/>
        <h2>{{ teacher.name }}</h2>
        <p>{{ teacher.bio }} <br>{{ teacher.bio2 }}</p>
      </div>
    </div>
  </div>
  </template>
  
  <script setup>
  import image1 from '@/assets/img/teachers/takimotojun.png'

  const teachers = [
    {
      name: 'たきもと じゅん',
      photo: image1,
      bio: '現役プログラマ。',
      bio2: '子どもたちに楽しく学べる環境を提供します。'
    },
    {
      name: '補助（女性）',
      photo: '',
      bio: '現役CGデザイナー。',
      bio2: '生徒一人ひとりの個性を大切に指導します。'
    },
    // 他の教師の情報を加...
  ];
  </script>
  
  <style scoped>

#app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* ビューポートの最小の高さ */
}

.teachers-introduction {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  flex: 1; /* メインコンテンツがスペースをいっぱいに伸ばされる */
}
  .teachers-introduction {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  height: 100vh;
}

.teacher-card {
  margin-bottom: 30px;
  padding: 20px;
  border: none;
  border-radius: 10px;
  background-color: #e6f7ff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 20px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.teacher-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.teacher-photo {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid #fff;
}

h1 {
  color: #ff8a65;
  margin-bottom: 40px;
}

h2 {
  font-size: 1.8em;
  color: #5c6bc0;
  margin: 0;
}

p {
  font-size: 1em;
  color: #666;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 1024px) {
  .teacher-card {
    flex-direction: column;
    text-align: center;
  }

  .teacher-photo {
    margin-bottom: 20px;
  }
}
  </style>