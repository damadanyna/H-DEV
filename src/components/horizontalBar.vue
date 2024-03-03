<template>
 <div class=" bg-stone-100  w-full flex justify-between px-5 py-2  ">
     <div class="" @click="showNote()">
         <i class="fas fa-eye"></i>
         Oay
     </div>
     <div class=" flex flex-row items-center">
         <input_ @keyup="findIt()" :option="options"></input_>

         <div v-for="item,i in list_menu" :key="i" class="mx-2">
             <i :class="item"></i>
         </div>
         <div class="  bg-stone-400 rounded-full" @click="logOut()">
             <i class="fas fa-user px-1"></i>
         </div>
         <div class=" px-4" @click="setTheme() ">
             <i class="fas fa-moon"></i>
         </div>
     </div>
 </div>
</template>

      
<script>
 import input_ from './input_.vue'
 export default {
     components: {
         input_
     },
     data() {
         return {
             list_menu: ['fas fa-house', 'fas fa-question'],
             options: {
                 label: 'Recherche',
                 id_: 'recheche_',
                 classIco: 'fas fa-filter',
                 model_: ''
             },

         }
     },

     methods: {
         logOut() {
             window.localStorage.setItem('*_*', JSON.stringify({
                 isLg: false
             }))
             this.$store.state.logged = false
         },

         showNote() {
             this.$store.commit('showNotif');
             this.$store.state.optNote = {
                 type: 3, //1 vert, 2 bleu, 3 rouge
                 label: " je te l'ai déjà donné"
             }
         },

         findIt() {

             this.$store.state.listOfSearch = []
             var tab = this.$store.state.generalData;
             this.$store.state.searchValue = this.options.model_

             for (let i = 0; i < tab.length; i++) {
                 const element = tab[i];

                 var input = element.desc.toLowerCase()
                 var rechercher = this.options.model_.toLowerCase()
                 if (input.includes(rechercher) == true) {
                     var k = input.replace(rechercher, `<span class=" border-[1px] border-yellow-400 rounded-md px-[1px  ] bg-yellow-200 text-black">${this.options.model_.toLowerCase()}</span>`)
                     var obj = {
                         desc: k,
                         h_: element.h_,
                         img: element.img
                     }
                     this.$store.state.listOfSearch.push(obj)
                 }
             }
             if (this.options.model_ == '') {
                 this.$store.state.listOfSearch = []
             }

         },

         setTheme() {
            //  this.$store.state.indeOfTheme = 0
             console.log(this.$store.state.indeOfTheme);
         }
     }
 }
</script>
      
<style> 
      </style>
