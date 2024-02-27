<template>  
      <div class=" flex flex-col w-full h-full">
      liste
      </div> 
    
</template>
      
<script> 

export default { 
      components:{
           
      },
        data(){
            return{  
            }
        },

        methods:{
            doIt(){
                  var txt= document.getElementById('txt_not_');
                  txt.classList.add('animeIt');
                  txt.textContent='Mot de passe incorrect'
                  txt.style.color='rgb(255,12,12)'

                  setTimeout(() => { 
                        txt.classList.remove('animeIt');
                  }, 500);
            
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
      