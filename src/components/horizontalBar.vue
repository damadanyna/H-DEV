<template>
<div class=" bg-[#0caa7d] w-full sticky top-0 px-[5.9rem] py-[.55rem] z-50 items-center flex justify-between">
    <div class=" flex  ">
        <a :href="url" :class="i!=0?'ml-[3.7rem]':''" class="ml-3 text-white " v-for="item,i in menuList" :key="i" v-text="item.label"></a>
    </div>
    <div class="flex items-center text-white">
        <span class=" mr-8">Login</span>
        <button class=" text-3xl mr-6">
            <i class="fab fa-searchengin"></i>
        </button>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            menuList: [{
                    label: 'Home',
                    url:'#'
                },
                {
                    label: 'About',
                    url:'#'
                },
                {
                    label: 'Portfolio',
                    url:'#'
                },
                {
                    label: 'Services',
                    url:'#'
                },
                {
                    label: 'Contact us',
                    url:'#'
                },
            ]
        }
    }

}
</script>

<style>

</style>
