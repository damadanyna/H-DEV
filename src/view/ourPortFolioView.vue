<template>
<div class="h-full mt-52 ">
    <div class="px-[6.9rem] ">
        <div class=" text-3xl  font-semibold flex items-center">
            <div class="relative">
                <div class="absolute mt-4 h-[3px] w-[57px] bg-[#4edab2]"></div>
            </div>
            <span>Our Portfolio</span>
            <div class=" w-[.67rem] h-[.67rem] bg-[#fb1004] rounded-md ml-2"></div>
        </div>
    </div>
    <div class=" bg-white w-full h-full flex px-2 mr-5 mt-14">
        <div class=" flex flex-col h-full mx-2 w-full">
            <div class="relative">
                <img class=" h-[45vh] rounded-lg " :src="setImg('p-1.png')" alt="">
                <div class="absolute top-[50%] text-white font-semibold text-3xl  text-center w-[100%]" style="filter: drop-shadow(8px 3px 8px #000);">
                    Logo Design
                </div>
            </div>
            <div class="relative">
                <img class=" h-[45vh] rounded-lg mt-4" :src="setImg('p-2.png')" alt="">
                <div class="absolute top-[50%] text-white font-semibold text-3xl  text-center w-[100%]" style="filter: drop-shadow(8px 3px 8px #000);">
                    Coding
                </div>
            </div>
        </div>
        <div class=" flex flex-col h-full w-full mx-5">
            <div class="relative">
                <img class=" h-[93vh] rounded-lg " :src="setImg('p-3.png')" alt="">
                <div class="absolute top-[50%] text-white font-semibold text-3xl  text-center w-[100%]" style="filter: drop-shadow(8px 3px 8px #000);">
                    Bike Design
                </div>
            </div>
        </div>
        <div class=" flex flex-col h-full mx-2 w-full">
            <div class="relative">
                <img class=" h-[45vh] rounded-lg " :src="setImg('p-4.png')" alt="">
                <div class="absolute top-[50%] text-white font-semibold text-3xl  text-center w-[100%]" style="filter: drop-shadow(8px 3px 8px #000);">
                    Flower Design
                </div>
            </div>
            <div class="relative">
                <img class=" h-[45vh] rounded-lg mt-4" :src="setImg('p-5.png')" alt="">
                <div class="absolute top-[50%] text-white font-semibold text-3xl  text-center w-[100%]" style="filter: drop-shadow(8px 3px 8px #000);">
                    Website Design
                </div>
            </div>
        </div>
        <div class=" flex flex-col h-full w-full ml-5 mr-2">
            <div class="relative">
                <img class=" h-[93vh] rounded-lg " :src="setImg('p-6.jpg')" alt="">
                <div class="absolute top-[50%] text-white font-semibold text-3xl  text-center w-[100%]" style="filter: drop-shadow(8px 3px 8px #000);">
                    More Design
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
