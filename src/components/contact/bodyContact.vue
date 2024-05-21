<template>
<div class="max-h-[95vh]  overflow-y-auto  py-3 px-3  ">
    <button @click="seeMessage()" v-for="item,i in listOfCont" :key="i" class=" mb-3 w-full flex-row text-white flex items-center">
        <div class=" bg-stone-600 px-2 py-[.35rem] items-center rounded-full">
            <i :class="item.user_img==null?'fas fa-user':'item.user_img'" class=" text-4xl"></i>
        </div>
        <div class=" w-full py-2 flex flex-row justify-between ">
            <div class="">
                <span class=" ml-2" v-text="item.user_name"></span>
            </div>
            <div class=" justify-end flex flex-col">
                <div></div>
                <button @click="sinscrire()" class=" mt-6 text-xs px-6 text-white uppercase  bg-red-800 bg-transparent py-1 rounded-full">
                   <i class="fas fa-user-plus text-sm"></i>
                    Ajouter
                </button>
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
        this.$http.get("/api/get_all_user").then((rep) => {
            // console.log(rep.data.data);
            this.listOfCont = rep.data.data
        });

    }
}
</script>
