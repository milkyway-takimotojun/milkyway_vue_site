<!-- components/BurgerMenu.vue -->
<template>
  
    <div class="container">
      <div>
        <img src="@/assets/img/milkyway_proguramingukyousitsu.jpg" />
      </div>
      <button @click="isOpen = !isOpen" :style="buttonStyle" class="button">
        <span></span>
        <span></span>
        <span></span>
      </button>
  
      <div v-if="isOpen" class="menu">
        <ul class="navbar-nav">
          <li v-for="link in navLinks" :key="link.name" class="nav-item">
            <router-link :to="link.path" class="nav-link" @click="closeMenu">
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>

  </template>
  
  <script setup>
  import { ref, computed} from 'vue'
  
  const isOpen = ref(false)
  const navLinks = [
        { name: 'ホーム', path: '/' },
        { name: '教室案内', path: '/about' },
        { name: 'カリキュラム', path: '/curriculum' },
        { name: '講師紹介', path: '/instructors' },
        { name: '生徒作品', path: '/works' },
        { name: 'お問い合わせ', path: '/contact' },
      ];
  name: 'HamburgerMenu'

  const closeMenu = () => {
    isOpen.value = false
  }

  const buttonStyle = computed(() => ({
  right: isOpen.value ? '200px' : '0'
}))

   
  </script>
  
  <style scoped>

div{
  background-color: #1285f2;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  padding: 5px;
  background-color: #1285f2;
  max-width: 1280px;
}

  button {
    /* Style the button to look like a hamburger icon */
    position: relative;
    width: 50px;
    height: 20px;
    background: transparent;
    text-align: left;
    transition: right 0qs ease-in-out;
    
  }
  
  button span {
    /* Style the spans to look like hamburger lines */
    position: absolute;
    width: 100%;
    height: 2px;
    background: #f9f9f9;
  }
  
  button span:nth-child(1) {
    top: 0;
  }
  
  button span:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
  }
  
  button span:nth-child(3) {
    bottom: 0;
  }
  
  .menu {
  /* Style the menu */
  position: absolute;
  width: 200px;
  height: 100vh;
  background: #fff;
  right: 0;
  top: 0;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 100; /* Add this line */
}

img .container{
  width: 30rem;
  text-align: center;
  display: flex; /* Flexboxを有効化 */
  justify-content: center; /* 水平方向の中央揃え */
  align-items: center; /* 垂直方向の中央揃え */
  height: 100vh; /* コンテナの高さをビューポートの高さに */

}

.container img {
  max-width: 100%; /* コンテナの幅に合わせて最大幅を設定 */
  height: auto; /* 高さは自動でアスペクト比を維持 */
} 

@media (max-width: 768px) {
  .container img {
    width: 50%; /* 画像の幅を50%に設定 */
    height: auto; /* 高さは自動でアスペクト比を維持 */
  }
}

  </style>
  