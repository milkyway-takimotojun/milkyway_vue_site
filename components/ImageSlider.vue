<template>
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
      <div class="carousel-item" :class="{ active: index === 0 }"  v-for="(image, index) in images" :key="image.id" :data-bs-interval="image.interval">
        <img :src="image.src" class="d-block w-70" :alt="image.alt">
      </div>
    </div>
        <button class="carousel-control-prev btn btn-primary" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next btn btn-primary" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script setup>
    import image1 from '@/assets/img/slider/キーボード1.jpeg';
    import image2 from '@/assets/img/slider/男の子.jpeg';
    import image3 from '@/assets/img/slider/キーボード2.jpeg';
    

    const images = [
        {id:1, src: image1, alt: 'Image 1' ,interval:5000},
        { id: 2, src: image2, alt: 'Image 2', interval:5000},
        { id: 3, src: image3, alt: 'Image 3', interval:5000},
    ]
    

</script>


<style scoped>

div{
    background-color: #aecfed;
}

.carousel-item img {
    display: block; /* ブロック要素として設定 */
    margin-left: auto; /* 左のマージンを自動に設定 */
    margin-right: auto; /* 右のマージンを自動に設定 */
    margin-top: 10px;
    width: 70%; /* または任意のパーセンテージ */
    height: auto; /* 画像の高さを自動調整（アスペクト比を維持） */
}

</style>
