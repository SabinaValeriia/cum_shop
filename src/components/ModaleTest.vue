<template>
    <VueProductSpinner 
      :images="images" 
      :range="range"
    />
  </template>
  
  <script>
    import VueProductSpinner from 'vue-product-spinner'
  
    export default {
      data() {
        return {
          images: [
          require('../assets/images/bg-f.jpg'),
          require('../assets/images/bg-s.jpg'),
          require('../assets/images/bg.jpg'),
          ],
          range: {
            enable: true,
            class:  'custom-range'
          }
        }
      },
  
      components: {
        VueProductSpinner
      }
    }
  </script>
  