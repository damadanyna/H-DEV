<template>
<div class=" h-full flex-col   relative flex justify-center object-cover bg-center " v-bind:style="`background-image:url(${setImg('hero-bg.png')})`">
    <div id="title_head" class="flex md:absolute md:top-0 w-full justify-between items-center px-3 md:px-7 md:py-5">
        <div class="flex items-center z-[1050]">
            <img class=" w-8 lg:w-[2.80rem]" src="../assets/img/logo.png" alt="">
            <span class=" text-sky-700 font-bold text-xl md:text-[1.35rem] ml-2">HIDEV</span>
        </div>
        <div class="">
            <span>Call:</span>
            <span>+261 34 86 110 96</span>
        </div>
    </div>
    <div class="flex md:flex-row items-center  ">
        <div id="btn_" class="z-[1000] px-2 md:px-0 flex flex-row-reverse md:flex-col absolute w-full justify-between md:justify-normal  md:w-auto -mt-52 md:ml-7 md:mt-[6rem]">
            <button @click="nextSlide()"  style="box-shadow: 0px 0px 10px black;" class=" bg-[#0CAA7D]  flex justify-center  w-12 py-3 ml-5 rounded-md items-center">
                <i class="fas fa-chevron-right text-xl "></i>
            </button>
            <button @click="prevSlide" style="box-shadow: 0px 0px 10px black;" class=" bg-[#0CAA7D] w-12 flex justify-center py-3 md:mt-3 rounded-md items-center">
                <i class="fas fa-chevron-left text-xl "></i>
            </button>
        </div>
        <div id="img_container" class="  overflow-x-auto overflow-y-hidden flex"> 
            <div v-for="image,i in images" :key="i" :id="'img_'+i">
                <div class="flex flex-row w-[100vw]  sm:mt-12 justify-center items-center ">
                    <div id="head_title" class="flex flex-col-reverse sm:flex-row px-3 md:px-0 md:w-[90vw] w-full  justify-end items-center ">
                        <div class=" md:w-[30vw] lg:w-[14vw] flex flex-col ">
                            <span class=" text-4xl sm:6xl lg:text-6xl font-semibold  ">Make Design</span>
                            <span class=" text-md mt-6">There are many variations of passages of Lorem Ipsumavailable, but the majority</span>
                            <button class=" mt-6 bg-[#fb1004] text-white py-2">Read More</button>
                        </div>
                        <div class="z-10 " id="img_head">
                            <img class=" lg:h-[100vh] h-1/4  w-auto" :src="setImg(image)" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

export default {

    data() {
        return {
            images: [
                'hero.png',
                'hero.png',
                'hero.png',
                'hero.png',
            ],
            autoplayTimer: null,
            indexImg:0
        };
    },
    methods: {

        nextSlide() {
            this.indexImg>=this.images.length-1?this.indexImg=0:this.indexImg++ 
            this.setSlidePos()
 

        },
        setSlidePos(){
            const elt= document.getElementById('img_'+this.indexImg)
            const container= document.getElementById('img_container')
            container.scrollTo(
                {
                    left:elt.offsetLeft,
                    behavior:'smooth'
                }
            ) 
        },
        prevSlide() {
            this.indexImg!=0?this.indexImg--:this.indexImg=this.images.length-1
            this.setSlidePos()
          
        },
        startAutoplay() {
            setInterval(() => {
                this.nextSlide()
            }, 5000);
        },
        setImg(img) {
            return require('../assets/img/' + img)
        },
        
    },

    mounted() {
this.startAutoplay()
        gsap.to('#img_head', {
            opacity: 0,
            delay: 1,
            ease: 'bounce',
            // rotateY:'90deg',
            scale: '110',
            scrollTrigger: {
                trigger: '#header_page',
                start: 'top 0%',
                end: 'bottom 0%',
                scrub: 0,
            },
        });
        gsap.to('#head_title', {
            x: -400,
            ease: 'circ.inOut',
            scrollTrigger: {
                trigger: '#header_page',
                start: 'top 0%',
                end: 'bottom 0%',
                scrub: 0,
            },
        });
        gsap.to('#btn_', {
            opacity: 0,
            ease: 'circ.inOut',
            scrollTrigger: {
                trigger: '#header_page',
                start: 'top 0%',
                end: 'bottom 80%',
                scrub: 0,
            },
        });
        gsap.to('#title_head', {
            y: -200,
            delay: 1,
            scrollTrigger: {
                trigger: '#header_page',
                start: 'top 0%',
                end: 'bottom 80%',
                scrub: 0,
            },
        });
    },
    beforeUnmount() {
        clearInterval(this.autoplayTimer);
    },
}
</script>

<style>

</style>
