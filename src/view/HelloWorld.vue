<template>
  <div class="hello">
    <h1 class=" bg-red-500">{{ msg }}</h1>
    <span class=" text-red-500">je taime</span>
   
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
