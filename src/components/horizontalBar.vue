<template> 
    <div class=" bg-stone-100  w-full flex justify-between px-5 py-2 ">
      <div class="" @click="showNote()">
        <i class="fas fa-eye"></i>
        Oay
      </div>
      <div class=" flex flex-row items-center">
        <input_ @keydown="findIt()" :option="options"></input_> 

        <div  v-for="item,i in list_menu" :key="i" class="mx-2">
            <span>{{ item }}</span>
        </div>
        <div class=" w-7 h-7 bg-stone-400 rounded-full" @click="logOut()"></div>
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
                  id_:'recheche_',
                  classIco:'fas fa-filter',
                  model_: ''
                }, 

            }
        },

        methods:{
          logOut(){
            window.localStorage.setItem('*_*', JSON.stringify({isLg:false}))
            this.$store.state.logged=false
          },

          showNote(){
            this.$store.commit('showNotif');
            this.$store.state.optNote = {
                    type: 3, //1 vert, 2 bleu, 3 rouge
                    label:" je te l'ai déjà donné"
                }
          },

          findIt(){
            
            this.$store.state.listOfSearch=[]
            var tab = this.$store.state.generalData;
            this.$store.state.searchValue=this.options.model_

            for (let i = 0; i < tab.length; i++) {
              const element = tab[i];
              
              if (element.desc.includes(this.options.model_)==true) {
                  this.$store.state.listOfSearch.push(element)
                  // console.log( this.$store.state.listOfSearch); 
              }
            }

            
            console.log( this.$store.state.listOfSearch); 
            
          }
        }
      }
      </script>
      <style> 
      </style>
      