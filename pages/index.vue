<template>
    <div>
      <ImageSlider />
      <section class="main-visual">
        <h1>プログラミングで未来を切り開こう</h1>
        <p>小中学生向けプログラミング教室。楽しく学んで、将来の夢を叶えよう！</p>
        <!-- <button type="button" class="btn btn-experience">無料体験教室はこちら</button>
         -->
         <router-link to="/contact" class="btn btn-experience">無料体験教室はこちら</router-link>
      </section>
    </div>
  </template>
  
  <style scoped>

  .main-visual {
    text-align: center;
    background: #acebde; /* 優しい背景色 */
    padding: 40px 20px;
    border-radius: 20px;
    margin: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    
  }
  
  .main-visual h1 {
    color: #ff8a65; /* カラフルな見出し色 */
    font-size: 2.5em;
    margin-bottom: 0.5em;
  }
  
  .main-visual p {
    color: #555; /* 読みやすい文字色 */
    font-size: 1.5em;
    margin-bottom: 1em;
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
  
  .btn-experience:hover {
    background-color: #ffca28; /* ホバー時に色を変える */
    transform: scale(1.05); /* 少し大きくする */
  }

  @media (max-width: 1024px) {
  .main-visual {
    /* スマートフォンビュー用の追加スタイル */
    min-height: 100vh; /* コンテンツの最小高さをビューポートの高さに設定 */
    display: flex; /* Flexboxレイアウトを使用 */
    flex-direction: column; /* 子要素を縦に並べる */
    justify-content: center; /* 縦方向の中央揃え */
    padding: 20px; /* 余白の調整 */
  }
}
  </style>