<template>
  <div class="content-frame curricuram1 img-container">
      <img src="@/assets/img/しっかり習得コース_タイトル.jpg" class="curricuram1" alt="しっかり習得コース_タイトル"/>
      <img src="@/assets/img/しっかり習得コース_説明.jpg" class="curricuram1" alt="しっかり習得コース_説明.jpg"/>
      <img src="@/assets/img/しっかり習得コース_図.jpg" class="curricuram1" alt="しっかり習得コース_タイトル"/>
  </div>
  <div class="content-frame curricuram2">
    <div class="img-container horizontal">
      <img src="@/assets/img/ハイレベルコース_タイトル.jpg" alt="ハイレベルコース_タイトル"/>
      <img src="@/assets/img/アセット 7@2x-100.jpg" alt="ハイレベルコース_説明"/>
    </div>
    <img src="@/assets/img/アセット 8@2x-100.jpg" alt="ハイレベルコース_図" class="wide-image"/>
  </div>
</template>

<style scoped>

div {
background-color: white;  
}

img {
padding: 5px;
}
.content-frame .curricuram1{
display: flex;
flex-direction: column;
align-items: flex-start; /* 画像を左に配置 */
margin-bottom: 20px; /* 各コンテンツフレームの下の余白 */
margin-top: 20px;
}

.curricuram1 .image-container img{
max-width: 100%; /* 画像の最大幅を親要素の50%に設定 */
height: auto; /* 画像のアスペクト比を保持 */
margin-bottom: 10px; /* 画像間の余白 */
}

.content-frame.curricuram2 .horizontal {
  display: flex; /* 横並びにするためにflexを指定 */
  align-items: flex-start; /* 画像を左に配置 */
}

.content-frame.curricuram2 .horizontal img {
  max-width: 100%; /* 横並びの画像はそれぞれ最大幅50%に */
}

.content-frame.curricuram2 .wide-image {
  max-width: 100%; /* 3番目の画像は幅いっぱいに */
  margin-top: 10px; /* 上の画像との余白 */
}

@media (max-width: 1000px) {
  .content-frame.curricuram2 .horizontal {
    flex-direction: column; /* アイテムを縦並びにする */
  }

  .content-frame.curricuram2 .horizontal img {
    max-width: 100%; /* 画像の幅を100%に設定 */
    flex-basis: auto; /* 画像の基本の幅を自動に戻す */
  }
}
</style>

