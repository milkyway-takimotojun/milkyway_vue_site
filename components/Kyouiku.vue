<template>
    <div class="importance-of-programming">
      <h1>プログラミング教育の重要性</h1>
      <section v-for="(item, index) in importanceItems" :key="index">
        <h2></h2>
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
      </section>
    </div>
  </template>
  
  <script setup>
  // こでプログラミング教育の重要性についての報を定義します。
  const importanceItems = [
    {
      title: 'デジタルリテラシーの向上',
      description: '現代社会はテクノロジーによってかされており、プログラミングはその根幹をなスキルです。...'
      // ここに詳細な説明を入れます。
    },
    {
      title: '論理的思考の育成',
      description: 'プログラミングは複雑な問題を解決する過程で、供たちに論理的思考を促します。...'
      // こに詳細な説明文を入れます。
    },
    //以下、他の項目...
  ];
  </script>
  
  <style scope>

  .importance-of-programming {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  .importance-of-programming h1 {
    text-align: center;
    margin-bottom: 30px;
  }
  
  .importance-of-programming h2 {
    margin-top: 20px;
    color: #4A90E2
  }
  
  .importance-of-programming p {
    line-height: 1.6;
  }
  </style>