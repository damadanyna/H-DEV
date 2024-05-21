<template>
  <div class=" bg-stone-950 flex w-full h-full duration-1000" @click="setSocket()">
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
      this.$http.get("/api/check");
    },
  },
  mounted() {
    // this.$http.get('/hello').then((e)=>{
    //     console.log(e);
    // })
  },
};
</script>

<style>
 
</style>
