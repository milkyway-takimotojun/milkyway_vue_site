<template>
    <div class="programming-school">
      <header class="school-header">
        <h1>冒険の始まり - プログラミング教室</h1>
      </header>
      
      <section class="mission-statement">
        <h2>ミッション</h2>
        <p>テクノロジーで、あなたの夢と可能性をひろげよう！</p>
      </section>
      
      <section class="school-values">
        <h2>私たちの約束</h2>
        <ul>
          <li>想像力いっぱいの世界を作ろう！</li>
          <li>一緒に問題を解決して、賢くなろう！</li>
          <li>学び続ける力をつけて、未来も楽しく！</li>
          <li>友達と協力して、大きなことを成し遂げよう！</li>
          <li>テクノロジーの力で、どんな夢もかなえよう！</li>
        </ul>
      </section>

      <kyouiku />

      <section class="school-values">
        <h2 style="paddiing-top=20px">授業スケジュール</h2>
        <ScaduleTable />
      </section>

      <section class="school-values">
      <h2>教室情報</h2>
      <KyousituInfo />
      </section>
      
      <footer class="school-footer">
        <router-link to="/contact" class="btn btn-experience">無料体験教室はこちら</router-link>
      </footer>
    </div>
  </template>
  
  <style scoped>
  .programming-school {
    font-family: 'Arial', sans-serif;
    color: #333;
    background-color: #e6f7ff;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin-top: 10px;
  }
  
  .school-header h1 {
    color: #ff6f61;
    font-size: 2.4em;
    text-align: center;
    margin-bottom: 16px;
  }
  
  .mission-statement {
    background-color: #ffde03;
    padding: 15px;
    margin: 20px 0;
    border-radius: 8px;
    text-align: center;
  }
  
  .school-values h2 {
    color: #5c6bc0;
    font-size: 2em;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  
  .school-values ul {
    list-style: none;
    padding: 0;
  }
  
  .school-values li {
    background-color: #fff59d;
    margin-bottom: 8px;
    padding: 10px;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  footer.school-footer {
    text-align: center;
    margin-top: 20px;
  }
  
  .btn-join {
   background-color: #ff8a65;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font: 1.2em;
    transition: background-color 0.3s;
  }
  
  .btn-join:hover {
    background-color: #ff7043;
  }

  .btn-experience {
    background-color: #ffdd57; /* 明るいボタン色 */
    border: none;
    padding: 10px 20px;
    font-size: 1.2em;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s, transform 0.3s;
  }

  </style>