<template>
<div :class="this.$store.state.indeOfTheme==0?'bg_search_l':'bg_search_d'" class=" absolute top-0 left-0 w-full h-full duration-500 z-50 flex items-start justify-center">
    <div :class="this.$store.state.indeOfTheme==0?' bg-white border px-5 border-green-500 pt-3':' bg-dark border px-5 border-green-500 pt-3'" class=" mt-20 flex flex-col rounded-lg">

        <div class="w-full flex justify-end">
            <div @click="hidePopup()" class=" absolute -mt-[1.7rem] -mr-7 hover:scale-125 transform cursor-pointer hover:bg-red-500 flex text-white py-1 px-[.4rem] justify-center items-center bg-stone-500 rounded-full">
                <i class="fas fa-xmark text-xl"></i>
            </div>
        </div>
        <div class="  pb-3">
            <input_Vue @keyup="findIt()" :option="options"></input_Vue>
        </div>
        <div class=" mb-3 overflow-y-auto max-h-[40vh] overflow-x-hidden" id="container_search">
            <div v-if="listData.length !== 0 && this.$store.state.listOfSearch.length!=0  && this.$store.state.searchValue!=''" :class="this.$store.state.theme[this.$store.state.indeOfTheme].text" class="  flex flex-col w-full ">
                <div v-for="item,i in  this.$store.state.listOfSearch" :key="i" class="  border-b border-green-700 m-3 px-3 items-center flex flex-row py-2 transform hover:scale-110 duration-300 justify-between">
                    <div class="flex flex-row">
                        <img :src="setImg(item.img)" class=" h-8 object-cover rounded-md" alt="">
                        <div class=" ml-4" v-html="item.desc"> </div>
                    </div>
                    <div class="flex flex-col-reverse">
                        <span class=" bg-green-500 rounded-lg px-2 text-white"> Voir +</span>
                        <span class=" text-end text-xs"> {{item.h_}} </span>
                    </div>
                </div>
            </div>
            <div class=" items-center   flex flex-col w-full " v-else-if="listData.length !== 0 && this.$store.state.listOfSearch.length==0  && this.$store.state.searchValue!=''" :class="this.$store.state.theme[this.$store.state.indeOfTheme].text">
                <i class="fas fa-box-archive text-4xl "></i>
                <span class=" text-sm">Auccune correspendance</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import input_Vue from './input_.vue';
export default {
    components: {
        input_Vue
    },
    data() {
        return {
            options: {
                label: 'Rechercher des produits',
                id_: 'gt_reche_',
                classIco: 'fas fa-filter',
                model_: '',
                width: '400px',
                size: '21px'
            },
            listData: []

        }
    },
    methods: {

        setImg(img) {
            return require('../assets/produits/' + img)
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
        hidePopup() {
            this.$store.state.hidePopup = true
        }
    },
    mounted() {
        setTimeout(() => {
            this.listData = this.$store.state.generalData
        }, 2000);
    },
    updated() {
        // var c__ = document.getElementById('container_search')
        // var k = 0;
        // if (this.listData.length != 0) {
        //     setInterval(() => {
        //         k++
        //         c__.style.maxHeight = k + 'vh'
        //     }, 1);
        // } else {
        //     k = 0
        //     c__.style.maxHeight = '0vh'
        // }
    }
}
</script>

<style scoped>
.bg_search_l {
    background: rgba(0, 0, 0, 0.616);
    backdrop-filter: blur(3px);
}

.bg_search_d {
    background: rgba(248, 248, 248, 0.171);
    backdrop-filter: blur(3px);
}
</style>
