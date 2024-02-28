<template>  
<div class=" flex w-full h-full">
  <notify_ id="note_"  class=""></notify_>
  <div v-if="this.$store.state.logged == true" class=" w-full h-full">
    <div></div>
    <horizontal_bar class=" shadow-lg"></horizontal_bar>
    <div class=" flex flex-row h-full"> 
      <navBar></navBar>
      <page_ class=" flex justify-center items-center w-full"> </page_>
    </div>
  </div> 

  <login_Vue class="w-full " v-else></login_Vue>
</div>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import horizontal_bar from './components/horizontalBar.vue' 
import navBar from './components/navBar.vue'
import page_ from '@/view/page_'
import login_Vue from './view/auth/login_.vue'
import notify_ from '@/components/notify_'


export default {
  name: 'App',

  data(){
    return{ 
    }
  },

  components: {
    horizontal_bar,
    page_,
    navBar, 
    login_Vue,
    notify_
  },
        mounted(){ 
            document.getElementById('c_load').style.display='none'
        },
    beforeMount(){
      var data=JSON.parse(window.localStorage.getItem('*_*'));
      console.log(data.isLg);
      this.$store.state.logged=data.isLg;
    }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif; 
}
</style>
