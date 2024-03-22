<template>
<div class=" flex w-full h-full"> 
    <accueilView></accueilView>
</div>
</template>

<script>
 import accueilView from './view/accueilView.vue';
  export default {
      name: 'App',

      data() {
          return {}
      },

      components: {
        accueilView
      },
      mounted() {

      },
      updated() {}

  }
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
