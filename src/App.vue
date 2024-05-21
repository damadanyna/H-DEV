<template>
  <div class=" bg-stone-950 flex   w-full h-full duration-1000" @click="setSocket()">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},
  methods: {
    setSocket() {
    },
  },
  mounted() {
      // this.$http.get("/api/check");
    this.$http.get('/api/check').then((e)=>{ 
        console.log(e)
      if(e.data.status!==true){
        console.log(e)
        this.$router.replace({name:'login'})
      }else{
        this.$router.replace({name:'accueil'})
      }
    })
  },
};
</script>

<style>
 
</style>
