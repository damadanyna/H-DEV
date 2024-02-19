<template>  
      <div class=" flex flex-col w-full h-full">
            <div class="flex flex-col">
                  <span>Login</span>
                  <input_  :option="options"></input_>
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
                options:{
                  label: "Nom d'utilisateur", 
                  id_:'nom_'
                }
            }
        }
}
</script>
      
<style> 
</style>
      