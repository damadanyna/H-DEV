<template> 
    <div class=" bg-stone-100  w-full flex justify-between px-5 py-2 ">
      <div class=" font-bold" >Logo</div>
      <div class=" flex flex-row items-center">
        <input_ :option="options"></input_> 

        <div  v-for="item,i in list_menu" :key="i" class="mx-2">
            <span>{{ item }}</span>
        </div>
        <div class=" w-7 h-7 bg-stone-400 rounded-full"></div>
      </div>
    </div >
    
      </template>
      
      <script> 
      import input_ from './input_.vue'
      export default { 
        components:{
          input_
        },
        data(){
            return{
                list_menu:['Accueil','a propos','inscription','deconnexion'],
                options:{
                  label:'Recherche',
                  id_:'recheche_'
                },

            }
        }
      }
      </script>
      <style> 
      </style>
      