<template>
    <div>
      <button @click="toggleMenu" class="hamburger" v-if="isMobile">☰</button>
      <ul v-show="!isMobile || menuOpen" class="navbar-nav horizontal">
        <router-link to="/" class="logo">
          <img src="@/assets/img/logo.jpg" />
        </router-link>
        <li class="nav-item xl" v-for="link in navLinks" :key="link.name">
          <router-link class="nav-link clay-card" :to="link.path">{{ link.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  

<script>
import  { defineComponent } from 'vue';
export default defineComponent({
    name: 'Header',
    
    data(){
        return {
            navLinks:[
            { name: 'ホーム', path: '/' },
            { name: '教室案内', path: '/about' },
            { name: 'カリキュラム', path: '/curriculum' },
            { name: '講師紹介', path: '/instructors' },
            { name: '生徒作品', path: '/works' },
            { name: 'お問い合わせ', path: '/contact' },
            ]
        }
    }
    
})
</script>


<style scoped>
/* ここにスタイリングを追加します。scoped属性を使用して、このスタイルがこのコンポーネントにのみ適用されるようにしています。 */


.menu-item {
  list-style: none;
  display: inline-block;
  padding: 10px;
}

.nav-item {
    margin: 0 10px; /* アイテム間のマージンを設定 */
    margin-right: 0;
    display: inline-block;
}

.nav-link {
    text-decoration: none; /* リンクの下線を消去 */
    color: #e8eeeb; /* リンクの色を指定 */
}

.nav-link:hover {
    color: #555; /* ホバー時のリンクの色を指定 */
}


.horizontal {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #0e84f3;
    padding: 40px;
}


.milkyway-logo{
    width: 150px;
    width: 150px;
}


/* クレイモーフィズムのスタイルをここに追加することもできます。 */
.clay-card {
  background-color: #00a0e8; /* カードの背景色 */
  border-radius: 20px; /* 角の丸み */
  box-shadow: 
    10px 10px 20px #C1C1C1, /* 影の色とサイズ */
    -10px -10px 20px #aecfed; /* 光の色とサイズ */
  width: 15em;
  text-align: center;
  font-weight: bold;
  padding: 11px 70px;
}

.clay-card:hover {
  box-shadow: 
    15px 15px 30px #BEBEBE, 
    -15px -15px 30px #FFFFFF;
}

.logo img {
  width: 150px; /* ロゴ画像の幅を固定 */
  height: auto; /* 高さは自動調整でアスペクト比を維持 */
}

@media (max-width: 768px) {
  .horizontal {
    flex-direction: column; /* 縦方向にスタック */
    padding: 20px; /* モバイルビュー用のパディング */
  }

  .nav-item {
    margin: 5px 0; /* アイテム間のマージンを調整 */
    display: block; /* 各アイテムをブロック要素に */
  }

  .nav-link {
    display: block; /* リンクをブロック要素にしてタップしやすく */
    margin: 5px 0; /* アイテム間のマージンを調整 */
    padding: 10px; /* タップしやすいようにパディングを追加 */
  }

  .clay-card {
    width: auto; /* カードの幅を自動に設定 */
    padding: 11px; /* カードのパディングを調整 */
    margin: 10px 0; /* カード間のマージンを追加 */
  }

  .milkyway-logo {
    width: 150px; /* ロゴのサイズを小さく */
    height: auto; /* 高さを自動で調整 */
    margin-bottom: 20px; /* ロゴの下のマージンを追加 */
  }
}
</style>
