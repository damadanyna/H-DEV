<template>
<div class="h-full w-full flex flex-row">
    <div class="w-[50vw] h-full bg-[#0caa7d] flex flex-row  ">
        <div class="w-[18vw]"></div>
        <div class="flex flex-col">
            <h1 class=" text-white font-bold text-3xl mt-10 mb-5">Contact Us</h1>
            <input class=" rounded-full py-3 px-5 placeholder-black mt-6 border border-stone-400 w-[28vw] outline-none" type="text" placeholder="Name" />
            <input class=" rounded-full py-3 px-5 placeholder-black mt-6 border border-stone-400 w-[28vw] outline-none" type="text" placeholder="Email" />
            <input class=" rounded-full py-3 px-5 placeholder-black mt-6 border border-stone-400 w-[28vw] outline-none" type="text" placeholder="Phone Number" />
            <textarea cols="10" class=" h-[19vh] px-5 rounded-3xl py-3 placeholder-black mt-6 border border-stone-400 w-[28vw] outline-none" type="text" placeholder="Message" />
            <div class=" flex mt-6">
              <button class=" rounded-full px-14 mt-6 bg-[#fb1004] text-white py-4 uppercase">send</button>
            </div>  
          </div>
    </div>
    <div class="w-[50vw] h-full">
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
