<template>  
      <div class=" w-full h-full ">
            <listeOfElement ></listeOfElement> 
      </div> 
    
</template>
      
<script> 

import listeOfElement from '@/components/listeOfElement'
export default { 
      components:{
            listeOfElement
      },
        data(){
            return{  
            }
        },

        methods:{
            doIt(){
                   
            }
        },
}
</script>
      
<style>
.animeIt{
      animation: secouer .4s forwards;
}
@keyframes secouer {
      0%{
            margin-left: -30px;
      }
      20%{
            margin-left: 30px;
      }
      40%{
            margin-left: -20px;
      }
      60%{
            margin-left: 20px;
      }
      80%{
            margin-left: -5px;
      }
      100%{ 
            margin-left: unset;
      }
}

</style>
      