<template>
  <div>
    <Nav v-if="isMobile" />
    <Header v-else />
    <Nuxt />
    <!-- <Menu /> -->
    <slot />
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// 状態のリアクティブな参照を作成
const windowWidth = ref(0);
const isMobile = ref(false);

// ウィンドウのサイズが変わるたびにwindowWidthを更新し、isMobileの状態を設定する関数
const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
  isMobile.value = windowWidth.value <= 1280;
};

// onMountedフックで初期値を設定し、リサイズイベントを登録
onMounted(() => {
  updateWindowWidth(); // 初期値を設定し、isMobileを更新
  window.addEventListener('resize', updateWindowWidth);
});

// onUnmountedフックでリサイズイベントを解除
onUnmounted(() => {
  window.removeEventListener('resize', updateWindowWidth);
});
</script>

<style scoped>


</style>
