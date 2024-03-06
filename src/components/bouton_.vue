<template> 
    <button v-if="this.option.type_==null" class=" duration-200 rounded-md py-1 text-white bg-green-500 outline-none transform focus:scale-110"  v-text="this.option.label" ></button>
    <button v-else-if="this.option.type_=='neutral'" class=" duration-200 rounded-md py-1 outline-none transform focus:scale-110 text-stone-500 border border-stone-400"  v-text="this.option.label" ></button>
    <button v-else-if="this.option.type_=='critical'"  class=" duration-200 rounded-md py-1 text-white bg-red-500 outline-none transform focus:scale-110"  v-text="this.option.label" ></button>
</template> 
    <script>  
      export default { 
        props:{
          option:{}
        },
        // rehefa hapiasa variable locale
        data(){
          return{
            values:null,
          }
        }, 
        methods:{
      
          
        },
        mounted(){ 
          console.log(this.option)
        }
      }
    </script>
      
      <style> 
      </style>
      