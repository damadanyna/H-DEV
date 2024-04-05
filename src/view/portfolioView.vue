<template>
<div class="h-full">
    <div id="profolioConent" class="flex flex-col px-[6.9rem] w-full">
        <div class=" text-3xl  font-semibold flex items-center">
            <div class="relative">
                <div class="absolute mt-4 h-[3px] w-[57px] bg-[#4edab2]"></div>
            </div>
            <span>What we do</span>
            <div class=" w-[.67rem] h-[.67rem] bg-[#fb1004] rounded-md ml-2"></div>
        </div>
        <div class="flex mt-7 text-white">
            <div class="flex flex-col w-[16rem] bg-[#fb1004] py-7 rounded-2xl items-center px-3">
                <img class=" w-16" src="../assets/img/idea.png" alt="">
                <span class=" mt-2">Original Ideas</span>
                <span class=" text-center mt-2">It is a long established fact that a reader will be distracted by the readable content</span>
            </div>
            <div class="flex flex-col w-[16rem] bg-[#0caa7d] ml-7 py-7 rounded-2xl items-center px-3">
                <img class=" w-16" src="../assets/img/controller.png" alt="">
                <span class=" mt-2">Great apps</span>
                <span class=" text-center mt-2">It is a long established fact that a reader will be distracted by the readable content</span>
            </div>
            <div class="flex flex-col w-[16rem] bg-[#fb1004] ml-7  py-7 rounded-2xl items-center px-3">
                <img class=" w-16" src="../assets/img/monitor.png" alt="">
                <span class=" mt-2">High Resolution</span>
                <span class=" text-center mt-2">It is a long established fact that a reader will be distracted by the readable content</span>
            </div>
            <div class="flex flex-col w-[16rem] bg-[#0caa7d] ml-7 py-7 rounded-2xl items-center px-3">
                <img class=" w-16" src="../assets/img/rocket-ship.png" alt="">
                <span class=" mt-2">Fast Loading</span>
                <span class=" text-center mt-2">It is a long established fact that a reader will be distracted by the readable content</span>
            </div>

        </div>
    </div>

    <div class=" mt-24 px-[6rem] h-[80vh] bg-top " v-bind:style="`background-image:url(${setImg('skill-bg.jpg')})`">
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
    </div>
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
        }
    },
    mounted() {
        gsap.to('.skill-container', {
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: '#c_home',
                start: 'top top',
                end: 'bottom',
                scrub: .5,
                onComplete: () => {
                    // timeline.play();
                },
            },
        });

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
