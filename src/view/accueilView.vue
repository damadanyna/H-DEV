<template>
<div class=" w-full h-full relative flex justify-center object-cover bg-center " v-bind:style="`background-image:url(${setImg('hero-bg.png')})`">
    <div class="flex absolute w-full justify-between items-center px-7 py-5">
        <div class="flex items-center">
            <img class=" w-[2.80rem]" src="../assets/img/logo.png" alt="">
            <span class=" text-sky-700 font-bold text-[1.35rem] ml-2">BRAINWAVE</span>
        </div>
        <div class="">
            <span>Call:</span>
            <span>+0123456789</span>
        </div>
    </div>
    <div class="flex flex-row items-center ">
        <div class=" flex flex-col absolute ml-7 mt-[6rem]">
            <button class=" bg-[#0CAA7D]  flex justify-center  w-12 py-3 ml-5 rounded-md items-center flex">
                <i class="fas fa-chevron-right text-xl "></i>
            </button>
            <button class=" bg-[#0CAA7D] w-12 flex justify-center py-3 mt-3 rounded-md items-center">
                <i class="fas fa-chevron-left text-xl "></i>
            </button>
        </div>
        <div class="flex flex-row w-[100vw] mt-12 justify-center items-center ">
            <div class="flex flex-row w-[90vw]  justify-end items-center ">
                <div class="w-[14vw] flex flex-col ">
                    <span class=" text-6xl font-semibold  ">Make Design</span>
                    <span class=" text-md mt-6">There are many variations of passages of Lorem Ipsumavailable, but the majority</span>
                    <button class=" mt-6 bg-[#fb1004] text-white py-2">Read More</button>
                </div>
                <div class="">
                    <img class=" h-[100vh]" src="../assets/img/hero.png" alt="">
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    methods: {

        setImg(img) {
            return require('../assets/img/' + img)
        }
    }

}
</script>

<style>

</style>
