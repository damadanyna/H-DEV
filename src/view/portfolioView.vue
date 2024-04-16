<template>
<div class="   py-9 px-3 flex flex-col">
    <div id="profolioConent" class="flex flex-col lg:px-[1.9rem] w-full">
        <div class=" text-3xl  font-semibold flex items-center">
            <div class="relative">
                <div class="absolute mt-4 h-[3px] w-[57px] bg-[#4edab2]"></div>
            </div>
            <span>What we do</span>
            <div class=" lg:w-[.67rem] lg:h-[.67rem] bg-[#fb1004] rounded-md ml-2"></div>
        </div>
        <div class="grid lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-2 grid-cols-1  mt-7 text-white  ">
            <div id="cart_1" class="flex flex-col  bg-[#fb1004]  py-7 mx-2 my-2 rounded-2xl items-center px-3">
                <img class=" w-16" src="../assets/img/idea.png" alt="">
                <span class=" mt-2 font-bold">DÉVELOPPEMENT</span>
                <span class=" text-center mt-2">Un back-end solide et un front-end puissant : nos ingénieurs logiciels relèvent le défi de A à Z. Partagez avec audace vos projets les plus délicats en toute confiance et voyez-les se concrétiser.</span>
            </div>
            <div id="cart_2" class="flex flex-col  bg-[#0caa7d]  py-7 mx-2 my-2 rounded-2xl items-center px-3">
                <!-- <img class=" w-16" src="../assets/img/controller.png" alt=""> -->
                <i class="fas fa-brain text-5xl"></i>
                <span class=" mt-2 font-bold">MAÎTRISE DE L'IA</span>
                <span class=" text-center mt-2">Travaillez avec nos experts en IA éprouvés pour trouver des solutions rapides et efficaces pour votre entreprise, augmentant ainsi la productivité et modélisant avec succès même les problèmes les plus complexes. Et voilà, un pas de plus vers votre rêve : atteindre le statut de milliardaire et au-delà.</span>
            </div>
            <div id="cart_3" class="flex flex-col  bg-[#fb1004]   py-7 mx-2 my-2 rounded-2xl items-center px-3">
                <img class=" w-16" src="../assets/img/monitor.png" alt="">
                <span class=" mt-2 font-bold">CONCEPTION UI/UX</span>
                <span class=" text-center mt-2">Avec notre équipe UI/UX, fini les sites web obsolètes ! Non seulement nous vous gardons en avance sur les tendances, mais nous donnons également un coup de pouce à votre entreprise, en augmentant les prospects et bien plus encore. Essayez-le et regardez la magie opérer !</span>
            </div>
            <div id="cart_4" class="flex flex-col  bg-[#0caa7d]  py-7 mx-2 my-2 rounded-2xl items-center px-3">
                <img class=" w-16" src="../assets/img/rocket-ship.png" alt="">
                <span class=" mt-2 font-bold">SYNERGIE DEVOPS</span>
                <span class=" text-center mt-2">DevOps vous rend lent et fou ? Nos experts DevOps vous soutiennent en automatisant les processus, en maximisant la vitesse, la sécurité et la collaboration, pour de meilleures performances informatiques. Fini les grincheux, votre âge d’or est arrivé !</span>
            </div>

        </div>
    </div>
    <div class=" flex flex-col lg:px-[1.9rem] mt-8">
        <h1 class=" text-3xl lg:text-3xl py-3 font-semibold">Votre entreprise à l'épreuve du temps? </h1>
        <p class=" text-justify">Dans un monde où la technologie évolue à une vitesse fulgurante, rester à la traîne peut être fatal. Nous sommes là pour vous, en tant qu'ESN, pour vous assurer que votre entreprise reste à l'avant-garde, prête à relever les défis de demain. Nous vous offrons non seulement des solutions numériques de pointe, mais aussi une vision claire de l'avenir numérique, vous aidant à maintenir une avance significative sur vos concurrents.</p>
    </div>

    <!-- <div class=" mt-24 px-[6rem] h-[80vh] bg-top " v-bind:style="`background-image:url(${setImg('skill-bg.jpg')})`">
        <div class="flex justify-end text-white py-9">
            <div class=" text-[33px]  font-semibold flex items-center">
                <div class="relative">
                    <div class="absolute mt-4 h-[3px] w-[57px] bg-[#ffffff]"></div>
                </div>
                <span>Our Skills</span>
                <div class=" w-[.67rem] h-[.67rem] bg-[#ffffff] rounded-md ml-2"></div>
            </div>
        </div>
        <div class="flex items-center h-[50vh]  ">
            <div class="skill-container flex flex-row w-full justify-between px-28 ">
                <div class="flex flex-col items-center">
                    <div class="skill -rotate-90">
                        <div class="outer">
                            <div class="inner">
                                <div class="number rotate-90 text-2xl" data-num="85">
                                </div>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stop-color="#e91e63" />
                                    <stop offset="100%" stop-color="#673ab7" />
                                </linearGradient>
                            </defs>
                            <circle cx="80" cy="80" r="65" />
                        </svg>
                    </div>
                    <span class=" text-white font-semibold text-lg">Adobe Photoshop</span>
                </div>

                <div class="flex flex-col items-center">
                    <div class="skill -rotate-90">
                        <div class="outer">
                            <div class="inner">
                                <div class="number text-2xl rotate-90" data-num="55">
                                </div>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stop-color="#e91e63" />
                                    <stop offset="100%" stop-color="#673ab7" />
                                </linearGradient>
                            </defs>
                            <circle cx="80" cy="80" r="65" />
                        </svg>
                    </div>
                    <span class=" text-white font-semibold text-lg">Adobe Ilustrator</span>
                </div>

                <div class="flex flex-col items-center">
                    <div class="skill -rotate-90">
                        <div class="outer">
                            <div class="inner">
                                <div class="number text-2xl rotate-90" data-num="65">
                                </div>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stop-color="#e91e63" />
                                    <stop offset="100%" stop-color="#673ab7" />
                                </linearGradient>
                            </defs>
                            <circle cx="80" cy="80" r="65" />
                        </svg>
                    </div>
                    <span class=" text-white font-semibold text-lg">After Effects</span>
                </div>

                <div class="flex flex-col items-center">
                    <div class="skill -rotate-90">
                        <div class="outer">
                            <div class="inner">
                                <div class="number text-2xl rotate-90" data-num="85">
                                </div>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stop-color="#e91e63" />
                                    <stop offset="100%" stop-color="#673ab7" />
                                </linearGradient>
                            </defs>
                            <circle cx="80" cy="80" r="65" />
                        </svg>
                    </div>
                    <span class=" text-white font-semibold text-lg">Adobe XD</span>
                </div>
            </div>
        </div>
    </div> -->
</div>
</template>

<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

export default {
    methods: {

        setImg(img) {
            return require('../assets/img/' + img)
        },
        setAnimation() {

        }
    },
    mounted() { 

        const numbers = document.querySelectorAll('.number');
        const svgEl = document.querySelectorAll('svg circle');
        const counters = Array(numbers.length);
        const intervals = Array(counters.length);
        counters.fill(0);

        numbers.forEach((number, index) => {
            intervals[index] = setInterval(() => {
                if (counters[index] === parseInt(number.dataset.num)) {
                    clearInterval(counters[index]);
                } else {
                    counters[index] += 1;
                    number.innerHTML = counters[index] + "%";
                    // svgEl[index].style.transform='rotat'
                    svgEl[index].style.strokeDashoffset = Math.floor(472 - 440 * parseFloat(number.dataset.num / 100));
                }
            }, 20);
        });
    }
}
</script>

<style>

</style>
