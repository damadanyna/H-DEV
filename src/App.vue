<template> 
<div class=" w-full h-full">
  <horizontal_bar class=" shadow-lg"></horizontal_bar>
  <div class=" flex flex-row h-full"> 
    <navBar></navBar>
    <page_ class=" flex justify-center items-center w-full"> </page_>
  </div>
</div> 
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import horizontal_bar from './components/horizontalBar.vue'
import navBar from './components/navBar.vue'
import page_ from '@/view/page_'

export default {
  name: 'App',
  components: {
    horizontal_bar,
    page_,
    navBar
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif; 
}
</style>
