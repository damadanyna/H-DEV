<template>
<div class="sm:h-full w-full flex flex-col-reverse md:flex-row sm:pt-11">
    <div class="md:w-[50vw] h-full bg-[#0caa7d] flex flex-row pb-7 ">
        <div class=" md:w-[18vw]"></div>
        <div class="flex w-full flex-col px-3 md:px-3">
            <h1 class=" text-white font-bold text-3xl mt-3 md:mt-10 md:mb-5">Contact Us</h1>
            <input class=" rounded-full py-3 px-5 placeholder-black mt-6 border border-stone-400 md:w-[28vw] outline-none" type="text" placeholder="Name" />
            <input class=" rounded-full py-3 px-5 placeholder-black mt-6 border border-stone-400 md:w-[28vw] outline-none" type="text" placeholder="Email" />
            <input class=" rounded-full py-3 px-5 placeholder-black mt-6 border border-stone-400 md:w-[28vw] outline-none" type="text" placeholder="Phone Number" />
            <textarea cols="10" class=" h-[19vh] px-5 rounded-3xl py-3 placeholder-black mt-6 border border-stone-400 md:w-[28vw] outline-none" type="text" placeholder="Message" />
            <div class=" flex sm:mt-6">
              <button class=" rounded-full px-14 mt-6 bg-[#fb1004] text-white py-4 uppercase">send</button>
            </div>  
          </div>
    </div>
    <div class="md:w-[50vw] h-full">
        <img class=" w-full h-full" src="../assets/img/contact.jpg" alt="">
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
