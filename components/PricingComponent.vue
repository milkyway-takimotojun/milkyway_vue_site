<template>
 <div class="fee-component">
  <div class="fee-header">
    <h2>料金表</h2>
  </div>
  <div class="fee-item">
    <span class="item-name">入会金</span>
    <span class="item-price">¥8,000(税込)</span>
  </div>
  <div class="fee-item">
    <span class="item-name">月謝</span>
    <span class="item-price">¥6,500(税込)</span>
  </div>
</div>

</template>
<style scoped>

.fee-component {
  border: 2px solid #E0E0E0;
  border-radius: 8px;
  padding: 16px;
  max-width: 300px;
  margin: 20px auto;
  background-color: #FAFAFA;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.fee-header {
  text-align: center;
  margin-bottom: 24px;
}

.fee-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding: 8px;
  border-radius: 4px;
  background-color: #FFFFFF;
}

.item-name {
  font-weight: 600;
  color: #333333;
}

.item-price {
  font-size: 1.2em;
  font-weight: 600;
  color: #E8554E;
}
</style>
