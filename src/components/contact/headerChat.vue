<template>
<div class=" flex justify-between text-white w-full items-center py-2  pr-3 bg-purple-900">
    <div></div>
    <!-- <div class="flex items-center" @click="backTo()">
        <button class=" rounded-full text-2xl px-2 py-1">
            <i class="fas fa-angle-left"></i>
        </button>
        <div class="flex items-center"> 
            <button class="rounded-full bg-stone-500 px-2 py-1">
                <i class=" fas fa-user"></i>
            </button>
            <span class=" ml-2 text-sm">Dama Dany</span>
        </div>
    </div> -->
    <div class="flex items-centre">
        <i class="fas fa-ellipsis-vertical text-xl"></i>
        <!-- <button class=" mr-5 text-xl">
            <i class="fas fa-video"></i>
        </button>
        <button class=" mr-5 text-xl">
            <i class="fas fa-phone"></i>
        </button>
        <button class="">
            <i class=" text-xl fas fa-magnifying-glass"></i>
        </button> -->
    </div>
</div>
</template>

<script>
export default {
    data() {
        return { 
        }
    },
    methods:{
        backTo(){
            this.$router.replace({ path:'/'})
        }
    }
}
</script>
