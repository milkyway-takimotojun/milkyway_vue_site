<template>
  <div class="form-container">
    <form @submit.prevent="submitForm" class="contact-form">
      <!-- フォームのフィールド -->
      <div class="input-group">
        <label for="email">メールアドレス</label>
        <input v-model="form.email" type="email" id="email" required placeholder="メールアドレス">
      </div>

      <div class="input-group">
        <label for="subject">件名</label>
        <input v-model="form.subject" type="text" id="subject" required placeholder="件名">
      </div>

      <div class="input-group">
        <label for="message">メッセージ</label>
        <textarea v-model="form.message" id="message" required placeholder="メッセージ"></textarea>
      </div>

      <div class="submit-group">
        <button type="submit">送信</button>
      </div>
    </form>
  </div>
</template>
  
  <script lang="ts" setup>
//   import { reactive } from 'vue';
  
  interface Form {
    email: string;
    subject: string;
    message: string;
  }
  
  const form = reactive<Form>({
    email: '',
    subject: '',
    message: ''
  });
  
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
        // 送信成功のフィードバック
        alert('送信が完了しました。');
        form.email = '';
        form.subject = '';
        form.message = '';
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
.form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
}

.input-group input,
.input-group textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white; /* ここで背景色を白に設定 */
}

.input-group textarea {
  height: 150px;
  resize: vertical;
}

.submit-group {
  display: flex;
  justify-content: flex-end;
}

.submit-group button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-group button:hover {
  background-color: #0056b3;
}
</style>
  