<template>
<div class="max-h-[95vh]  overflow-y-auto  py-3 px-3  ">
    <button @click="seeMessage()" v-for="item,i in listOfCont" :key="i" class=" mb-3 w-full flex-row text-white flex items-center">
        <div class=" bg-stone-600 px-3 py-[.60rem] items-center rounded-full">
            <i :class="item.user_img==null?'fas fa-user':'item.user_img'" class=" text-4xl"></i>
        </div>
        <div class=" w-full py-2 flex flex-row justify-between ">
            <div class="">
                <span class=" ml-2" v-text="item.user_name"></span>
            </div>
            <div class=" justify-end flex flex-col">
                <div></div>
                <div @click="sinscrire()" class=" mt-6 text-xs px-6 text-white py-1 rounded-full">
                   <span>10min</span>
                </div>
            </div>
        </div>
    </button>
</div>
</template>

<script>
export default {
    data() {
        return {
            listOfCont: []
        }
    },
    methods: {
        seeMessage() {
            this.$router.push({
                name: 'chatting_'
            })
        }
    },
    mounted() {
        // this.$http.post("/api/get_all_user",this.$store.state.user).then((rep) => { 
        //     this.listOfCont = rep.data.data
        // }); 
    }
}
</script>
