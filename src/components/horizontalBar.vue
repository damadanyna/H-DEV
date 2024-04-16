<template>
<div class=" bg-[#0caa7d] w-full sticky top-0 md:px-[5.9rem] py-[.55rem] z-50 items-center flex justify-between">
    <div class=" flex  ">
        <span @click="scrollToElt(item.url  )" :class="i!=0?'md:ml-[3.7rem]':''" class="ml-3 text-white " v-for="item,i in menuList" :key="i" v-text="item.label"></span>
   
    </div>
    <!-- <div class="flex items-center text-white">
        <span class=" mr-8">Login</span>
        <button class=" text-3xl mr-6">
            <i class="fab fa-searchengin"></i>
        </button>
    </div> -->
</div>
</template>

<script>
export default {
    data() {
        return {
            menuList: [
                {
                    label: 'Accueil',
                    url:'accueil'
                },
                {
                    label: 'Services',
                    url:'service'
                },
                {
                    label: 'Contact',
                    url:'contact'
                },
                // {
                //     label: 'Portfolio',
                //     url:'#'
                // },
                // {
                //     label: 'Services',
                //     url:'#'
                // },
            ]
        }
    },
    methods:{
        scrollToElt(i){ 
            console.log(i);
            const el= document.getElementById(i) 
            const top= el.offsetTop; 
            document.getElementById('container').scrollTo(
                {
                    top:top,
                    behavior:'smooth'
                }
            )  
        }
    }

}
</script>

<style>

</style>
