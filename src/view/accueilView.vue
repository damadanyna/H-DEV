<template>
<div class=" h-full flex-col   relative flex justify-center object-cover bg-center " v-bind:style="`background-image:url(${setImg('hero-bg.png')})`">
    <div class="flex md:absolute md:top-0 w-full justify-between items-center px-3 md:px-7 md:py-5">
        <div class="flex items-center">
            <img class=" w-8 lg:w-[2.80rem]" src="../assets/img/logo.png" alt="">
            <span class=" text-sky-700 font-bold text-xl md:text-[1.35rem] ml-2">HIDEV</span>
        </div>
        <div class="">
            <span>Call:</span>
            <span>+261 34 86 110 96</span>
        </div>
    </div>
    <div class="flex md:flex-row items-center ">
        <div class=" px-2 md:px-0 flex flex-row-reverse md:flex-col absolute w-full justify-between md:justify-normal  md:w-auto -mt-52 md:ml-7 md:mt-[6rem]">
            <button style="box-shadow: 0px 0px 10px black;" class=" bg-[#0CAA7D]  flex justify-center  w-12 py-3 ml-5 rounded-md items-center">
                <i class="fas fa-chevron-right text-xl "></i>
            </button>
            <button style="box-shadow: 0px 0px 10px black;" class=" bg-[#0CAA7D] w-12 flex justify-center py-3 md:mt-3 rounded-md items-center">
                <i class="fas fa-chevron-left text-xl "></i>
            </button>
        </div>
        <div class="flex flex-row md:w-[100vw]  sm:mt-12 justify-center items-center ">
            <div class="flex flex-col-reverse sm:flex-row px-3 md:px-0 md:w-[90vw] w-full  justify-end items-center ">
                <div class=" md:w-[30vw] lg:w-[14vw] flex flex-col ">
                    <span class=" text-4xl sm:6xl lg:text-6xl font-semibold  ">Make Design</span>
                    <span class=" text-md mt-6">There are many variations of passages of Lorem Ipsumavailable, but the majority</span>
                    <button class=" mt-6 bg-[#fb1004] text-white py-2">Read More</button>
                </div>
                <div class="">
                    <img class=" lg:h-[100vh] h-1/4  w-auto" src="../assets/img/hero.png" alt="">
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
