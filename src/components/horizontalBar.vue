<template>
<div :class="this.$store.state.theme[this.$store.state.indeOfTheme].bg_h_nav +' '+this.$store.state.theme[this.$store.state.indeOfTheme].text" class="  w-full flex justify-between px-5 py-2  ">
    <div class="" @click="showNote()">
        <i class="fas fa-eye"></i>
        Oay
    </div>
    <div class=" flex flex-row items-center">
        <div @click="this.$store.state.hidePopup=false" class=" hover:scale-125 transform cursor-pointer">
            <i class=" text-lg mr-4  fab fa-searchengin"></i>
        </div>
        <div>
           
        </div>
        <div title=" thème" :class="this.$store.state.indeOfTheme !== 0?' rotate-180':'rotate-0 '" class=" right-3 absolute px-4 text-lg w-9 ml-2 flex justify-center items-center   rounded-2xl" @click="setTheme() ">
            <div class=" h-6 w-6 rounded-xl  z-20 text-sm   items-center flex ">
                <i :class="this.$store.state.indeOfTheme !== 0?' text-[.60rem] text-stone-200 ':' text-xl  text-black'" class=" -ml-1 fas fa-moon mx-1"></i>
                <i :class="this.$store.state.indeOfTheme == 0?' text-[.60rem] ':' text-xl'" class=" ml-2  fas fa-sun text-yellow-400"></i>
            </div>
        </div>
        <div class="  bg-stone-400 rounded-full" @click="afficheSetting()">
            <i class="fas fa-user px-1"></i>
        </div>
        <div class=" mx-6"></div>
    </div>
</div>
</template>

<script>
 export default {
     components: {},
     data() {
         return {
             options: {
                 label: 'Recherche',
                 id_: 'recheche_',
                 classIco: 'fas fa-filter',
                 model_: ''
             },

         }
     },

     methods: {

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
             this.$store.state.indeOfTheme == 0 ? this.$store.state.indeOfTheme = 1 : this.$store.state.indeOfTheme = 0

         },

         afficheSetting(){
            this.$store.state.hidePopupUser = false
         }
     }
 }
</script>

<style> 
      </style>
