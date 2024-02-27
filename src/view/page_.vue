<template>  
      <div class=" flex flex-col w-full h-full">
            <div class="flex flex-col">
                  <span>Login</span>
                  <input_  v-for="item, i in options" :key="i" :option="item" class="my-1"></input_> 
                  <span id="txt_not_">S'inscrire</span>
                  <bouton_ @click="i==0?doIt():''"  v-for="item, i in options_" :key="i"  :option="item" class=" my-1"> </bouton_>
            </div>
      </div> 
    
</template>
      
<script> 

import bouton_ from '@/components/bouton_'
import input_ from "../components/input_.vue";
export default { 
      components:{
            input_,
            bouton_
      },
        data(){
            return{ 
                options:[
                  {
                        label: "Nom d'utilisateur", 
                        id_:'nom_',
                        classIco:'fas fa-user'
                  },
                  {
                        label: "Mot de passe", 
                        id_:'mdp_',
                        type_:'password',
                        classIco:'fas fa-lock'
                  },
                  {
                        label: "Téléphone", 
                        id_:'nbr_',
                        type_:'number',
                        classIco:'fas fa-phone'
                  }
                ],
                options_:[
                  {
                        label: "Login", 
                        type_: null
                  },
                  {
                        label: "anuler", 
                        type_: "neutral"
                  },
                  {
                        label: "Supprimer", 
                        type_: "critical"
                  }
                ]
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
      