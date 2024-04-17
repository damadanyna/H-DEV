<template>
<div  class= " lg:h-[100vh] py-1 px-4 sm:px-[1.9rem] items-center flex flex-row">
  <div class=" w-full md:w-1/2 flex flex-col">
    <div id="text_1" class=" flex flex-col mt-3">
        <h1 class=" text-2xl py-3 font-semibold">Expertise : </h1>
        <span class=" text-justify">Notre équipe est composée de professionnels hautement qualifiés, dotés d'une expérience approfondie et d'une connaissance approfondie de notre industrie. Que ce soit dans la conception de produits, la prestation de services ou la résolution de problèmes complexes, notre expertise nous permet d'offrir des solutions de haute qualité et de répondre efficacement aux besoins de nos clients.</span>
    </div>
    <div id="text_2" class=" flex flex-col mt-3">
        <h1 class=" text-2xl py-3 font-semibold">Flexibilité : </h1>
        <span class=" text-justify"> Nous comprenons que chaque client est unique et que les besoins de chacun peuvent évoluer rapidement. C'est pourquoi nous avons adopté une approche flexible qui nous permet de nous adapter rapidement aux exigences changeantes du marché et aux demandes spécifiques de nos clients. Que ce soit en personnalisant nos produits ou services, en ajustant nos processus ou en répondant à des demandes de dernière minute, notre flexibilité nous permet de répondre de manière agile et efficace aux besoins de nos clients.</span>
    </div>
    <div id="text_3" class=" flex flex-col mt-3">
        <h1 class=" text-2xl py-3 font-semibold">Adaptabilité : </h1>
        <span class=" text-justify">Etroitement liée à l'innovation au sein de notre entreprise. Nous encourageons la créativité et l'expérimentation, et nous sommes constamment à la recherche de nouvelles solutions pour répondre aux défis changeants de notre industrie. En repoussant les limites de l'innovation, nous sommes en mesure d'anticiper les besoins futurs et de nous adapter en conséquence.</span>
    </div>

  </div>
  

    <div class=" hidden md:flex w-1/2 justify-end">
        <img class=" w-auto h-[100%]" src="../assets/img/about-img.png" alt="">
    </div>
    <!-- <div class="px-[6.9rem] ">
        <div class=" text-3xl  font-semibold flex items-center">
            <div class="relative">
                <div class="absolute mt-4 h-[3px] w-[57px] bg-[#4edab2]"></div>
            </div>
            <span>Our Portfolio</span>
            <div class=" w-[.67rem] h-[.67rem] bg-[#fb1004] rounded-md ml-2"></div>
        </div>
    </div> -->
    <!-- <div class=" bg-white w-full h-full flex px-2 mr-5 mt-14">
        <div class=" flex flex-col h-full mx-2 w-full">
            <div class="relative">
                <img class=" h-[45vh] rounded-lg " :src="setImg('p-1.png')" alt="">
                <div class="absolute top-[50%] text-white font-semibold text-3xl  textnp-center w-[100%]" style="filter: drop-shadow(8px 3px 8px #000);">
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
    </div> -->
</div>
</template>

<script>

import { white } from '@tailwindcss/postcss7-compat/colors';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger); 
export default {
    methods: {

        setImg(img) {
            return require('../assets/img/' + img)
        }
    },
     mounted() { 
        gsap.to('#text_1', {  
            color:white,
            delay:1, 
            x:'40%', 
            // rotateY:'90deg', 
            scrollTrigger: {
                trigger: '#accueil',
                start: 'top 0%',
                end: 'bottom 40%',
                scrub: 0,
            },
        }); 
        gsap.to('#text_2', {  
            color:white,
            delay:1, 
            x:'40%', 
            // rotateY:'90deg', 
            scrollTrigger: {
                trigger: '#accueil',
                start: 'top -50%',
                end: 'bottom 0%',
                scrub: 0,
            },
        }); 
        gsap.to('#text_3', {  
            color:white,
            delay:.1, 
            x:'40%', 
            // rotateY:'90deg', 
            scrollTrigger: {
                trigger: '#accueil',
                start: 'top -120%',
                end: 'bottom 0%',
                scrub: 0,
            },
        }); 
    }

}
</script>

<style>

</style>
