<template>
    <div class="row">
        <!-- <b-navbar toggleable="lg" type="dark" variant="light"> -->
        <ul id="" class="navbar-nav horizontal" >
            <router-link to="/" >
                <!-- <img src="../assets/ミルキーウェイ.jpg" alt="ミルキーウェイ" class="milkyway-logo"/> -->
            </router-link>

            <li class="nav-item xl" v-for="link in navLinks" :key="link.name">
                <router-link class="nav-link clay-card" :to="link.path" >{{ link.name }}</router-link>
            </li>
        </ul>
        <!-- </b-navbar> -->
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
    background-color: #aecfed;
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
</style>
