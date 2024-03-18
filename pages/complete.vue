<template>
    <div class="completion-page">
      <h1>申し込み完了</h1>
      <p>体験教室への申し込みが正常に完了しました。</p>
      <p>体験教室の実施日時につきましては、申し込み情報確認後追ってご連絡させていただきます。</p>
      <router-link to="/" class="home-button">ホームに戻る</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CompletionPage',
    // コンポーネントのデータやメソッドをここに追加できます。
  };
  </script>
  
  <style scoped>
  .completion-page {
    text-align: center;
    padding-top: 50px;
    height: 100vh;
  }
  
  h1 {
    font-size: 2em;
    color: #333;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1em;
    color: #666;
    margin-bottom: 10px;
  }
  
  .home-button {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #5cb85c;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
  }
  
  .home-button:hover {
    background-color: #4cae4c;
  }
  </style>
  