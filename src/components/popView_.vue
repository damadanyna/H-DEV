<template>
<div :class="this.$store.state.indeOfTheme==0?'bg_search_l':'bg_search_d'" class=" absolute top-0 left-0 w-full h-full duration-500 z-50 flex items-center justify-center">
    <div class=" flex flex-col ">
        <div class=" flex justify-end">
            <div @click="this.$store.state.hideView = true" class=" bg-stone-400 transform hover:scale-125 text-white rounded-xl px-[0.4rem] absolute -mt-3 -mr-3 hover:bg-red-500">
                <i class="fas fa-xmark"></i>
            </div>
        </div> 
        <img :src="setImg()" alt="" class="rounded-2xl h-[79vh] w-[80vw] object-cover">

    </div>

    <div class=" w-full flex justify-center left-0 absolute -mt-6 bottom-5">
        <div class=" bg-black px-2 py-2 border border-white rounded-t-lg">
            <span class=" text-white" v-html="this.$store.state.selectedItem.desc"> </span>
        </div>
    </div>
</div>
</template>

<script>
export default {
    components: {

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
        
        setImg(){
            console.log(this.$store.state.selectedItem,'itito');
            var img=this.$store.state.selectedItem.img;
                  return require('../assets/produits/' + img)
            }
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
