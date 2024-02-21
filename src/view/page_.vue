<template>  
      <div class=" flex flex-col w-full h-full">
            <div class="flex flex-col">
                  <span>Login</span>
                  <input_ v-for="item, i in options" :key="i" :option="item" class="my-1"></input_> 
            </div>
      </div> 
    
</template>
      
<script> 

import input_ from "../components/input_.vue";
export default { 
      components:{
            input_
      },
        data(){
            return{ 
                options:[
                  {
                        label: "Nom d'utilisateur", 
                        id_:'nom_'
                  },
                  {
                        label: "Mot de passe", 
                        id_:'mdp_',
                        type_:'password'
                  },
                  {
                        label: "Nombre", 
                        id_:'nbr_',
                        type_:'number'
                  }
                ]
            }
        }
}
</script>
      
<style> 
</style>
      