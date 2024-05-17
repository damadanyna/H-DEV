<template>
<div class=" h-screen flex w-full h-full duration-1000">
    <router-view></router-view>
</div>
</template>

<script>
 export default { 
     data() {
         return {}
     },

     components: {},
     mounted() { 
        // this.$http.get('/hello').then((e)=>{
        //     console.log(e);
        // })
     },

 }
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
