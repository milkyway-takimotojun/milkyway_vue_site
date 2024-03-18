<template>
    <div>
      <pricing-component :enrollment-fee="5000" :monthly-fee="10000"></pricing-component>
    </div>
  </template>
  
  <script>
  import PricingComponent from './PricingComponent.vue';
  
  export default {
    components: {
      PricingComponent
    }
  }
  </script>
  