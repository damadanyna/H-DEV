<template>  
      <div v-if="listData.length == 0" :class="this.$store.state.theme[this.$store.state.indeOfTheme].text" class=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full h-full">
            <div id="bloc_" v-for="item,i in 10" :key="i" class="m-3">
                 <div class=" h-48 rounded-md bg-stone-400"> </div>

                  <div class="mt-3 flex flex-col">
                        <span class=" bg-stone-400 h-5"> </span>
                       <div class="flex justify-between mt-2">
                        <span class=" bg-stone-400 rounded-lg px-2 text-white h-6 w-14"></span>
                        <span class=" bg-stone-400 h-4 w-12 text-end"> </span>
                       </div>
                  </div>
            </div>
      </div> 
      

      <div  v-if="listData.length !== 0" :class="this.$store.state.theme[this.$store.state.indeOfTheme].text" class=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full h-full">
            <div v-for="item,i in listData" :key="i" class=" m-3 px-3 py-2 transform hover:scale-110 duration-300">
                 <img :src="setImg(item.img)" class=" h-48 object-cover rounded-md" alt="">
                  <div class="mt-3 flex flex-col">
                        <span> {{item.desc}} </span>
                       <div class="flex justify-between">
                        <span class=" bg-green-500 rounded-lg px-2 text-white"> Voir +</span>
                        <span class=" text-end"> {{item.h_}} </span>
                       </div>
                  </div>
            </div>
      </div> 
    

    
</template>
      
<script> 
      import gsap from 'gsap';

export default { 
      components:{
           
      },
        data(){
            return{  
                 listData:[]
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
            
            },

            setImg(img){
                  return require('../assets/produits/' + img)
            }
        },
        mounted(){
            setTimeout(() => {
                  this. listData = this.$store.state.generalData
            }, 2000);

            gsap.to('#bloc_', {
                  opacity : .4,
                  duration: 0.8,
                  repeat: -1

            })
        }
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
      