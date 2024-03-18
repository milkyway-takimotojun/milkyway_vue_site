<template>
  <div class="form-container">
    <h2 class="form-title">体験教室申し込み</h2>
    <form @submit.prevent="submitForm" class="contact-form">
      <!-- フォームのフィールド -->
      
      <div class="input-group">
        <label for="name">お子様のお名前</label>
        <input v-model="form.name" type="text" id="name" required placeholder="">
      </div>

      <div class="input-group">
        <label for="kana">フリガナ</label>
        <input v-model="form.kana" type="text" id="kana" required placeholder="">
      </div>

      

      <div class="input-group">
        <label for="gender">性別：</label>
        <select v-model="form.gender" id="gender" required>
          <option value="">選択してください</option>
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </div>

      <div class="input-group">
        <label for="address">ご住所</label>
        <input v-model="form.address" type="text" id="address" required placeholder="">
      </div>

      <div class="input-group">
        <label for="tel">電話番号</label>
        <input v-model="form.tel" type="text" id="tel" required placeholder="">
      </div>

      <div class="input-group">
        <label for="email">メールアドレス</label>
        <input v-model="form.email" type="email" id="email" required placeholder="">
      </div>

      <div class="input-group">
        <label for="message">お問い合わせ内容(任意)</label>
        <textarea v-model="form.message" id="message" placeholder=""></textarea>
      </div>

      <div class="submit-group">
        <button type="submit">送信</button>
      </div>
    </form>
  </div>
</template>
  
  <script lang="ts" setup>
  
  interface Form {
    name: string;
    kana: string;
    age: string;
    address: string;
    email: string;
    tel: string;
    message: string;
    gender: string
  }
  
  const form = reactive<Form>({
    name: '',
    kana: '',
    age: '',
    address: '',
    email: '',
    tel: '',
    message: '',
    gender: ''
  });

  const router = useRouter();
  
  const submitForm = async () => {
    try {
      const response = await fetch('/api/sendmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
  
      if (response.ok) {
        // 送信後にフォームをリセットする
        form.name = '';
        form.kana = '';
        form.age = '';
        form.address = '';
        form.email = '';
        form.tel = '';
        form.message = '';
        form.gender = '';
        // /completeに遷移する
        router.push('/complete');
      } else {
        // エラーのフィードバック
        alert('送信に失敗しました。');
      }
    } catch (error) {
      // 通信エラーのフィードバック
      alert('通信エラーが発生しました。');
    }
  };
  </script>

<style scoped>

div .input-group {
  background-color: #f5c1ed;
}

.input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
    margin-left: 0; /* 元のスタイルを上書きしてリセット */
    border-top-left-radius: var(--bs-border-radius); /* Bootstrap変数を使って元の値に戻すか、具体的な値を設定 */
    border-bottom-left-radius: var(--bs-border-radius); /* こちらも同様 */
}

.form-container {
  max-width: 600px;
  margin: 20px auto;
  padding: 2rem;
  background: #fff; /* コンテナの背景を白色に変更 */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-title {
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
  font-size: 1.5rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
}

.input-group {
  margin-bottom: 1rem;
}

.input-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #666;
  padding-top: 5px;
  padding-left: 5px;
}

.input-group input,
.input-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  background: #f9f9f9; /* 入力フィールドの背景を明るい灰色に変更 */
}

.input-group textarea {
  height: 120px;
  resize: vertical;
}

.submit-group {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  background-color: #fff;
}

.submit-group button {
  padding: 10px 20px;
  background-color: #0056b3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.submit-group button:hover {
  background-color: #00397a;
}

.radio-group {
  display: flex;
  align-items: center;
  gap: 1rem; /* ラジオボタンとラベルの間隔 */
}

.radio-group label {
  margin: 0; /* ラジオボタン専用のラベルのマージンをリセット */
}

/* カスタムプルダウンスタイル */
.input-group select {
  -webkit-appearance: none; /* Chrome, Safari, Edge用 */
  -moz-appearance: none; /* Firefox用 */
  appearance: none; /* 標準の外観を無効化 */
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M7%2010l5%205%205-5z%22%20fill%3D%22%23000%22%3E%3C/path%3E%3C/svg%3E'); /* 矢印アイコン */
  background-repeat: no-repeat; /* アイコンを繰り返さない */
  background-position: right 0.5rem center; /* アイコンの位置を調整 */
  background-size: 1.5rem; /* アイコンのサイズを調整 */
  padding-right: 2rem; /* テキストとアイコンの間に余白を設定 */
  padding-top: 5px;
}



/* Internet Explorer用のフォールバック */
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .input-group select {
    background-image: none; /* IEではカスタム矢印を表示しない */
  }
}

</style>