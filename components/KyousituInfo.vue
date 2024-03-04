<template>
    <div>
        <div class="table-responsive">
            <table class="table">
                <tbody>
                <tr>
                    <th scope="row">教室名</th>
                    <td>ミルキーウェイ プログラミング教室</td>
                </tr>
                <tr>
                    <th scope="row">電話番号</th>
                    <td>090-9216-2992</td>
                </tr>
                <tr>
                    <th scope="row">メールアドレス</th>
                    <td>milkyway.taki@gmail.com</td>
                </tr>
                <tr>
                    <th scope="row">住所</th>
                    <td>〒362-0811 埼玉県 北足立郡伊奈町西小針5-19 INA wing6  102</td>
                </tr>
                </tbody>
            </table>
            <div class="map-container">
               <iframe class="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3227.101729123435!2d139.5885957890379!3d36.01780914046601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018cf20c428c0fb%3A0xd3776d34712aa76f!2z44CSMzYyLTA4MTEg5Z-8546J55yM5YyX6Laz56uL6YOh5LyK5aWI55S66KW_5bCP6Yed77yV5LiB55uu77yR77yZ!5e0!3m2!1sja!2sjp!4v1704705765750!5m2!1sja!2sjp"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
</template>

<style scoped>

.table-responsive {
  margin-bottom: 15px;
}

.table {
  width: 100%;
  margin-bottom: 0; /* 表の下のマージンを削除または小さくして隙間を減らす */
  color: #212529;
}

th {
  text-align: left;
}

.map-container {
  position: relative;
  overflow: hidden;
  padding-top: 56.25%; /* 16:9アスペクト比 */
  /* ここではmargin-bottomを削除しています。 */
}

.embed-responsive-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none; /* iframeの枠線を消す */
}

</style>