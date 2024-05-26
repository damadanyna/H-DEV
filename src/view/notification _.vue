<template>
<div class="text-white h-full w-full flex flex-col bg-transparent">
    <div class="text-2xl  px-3 ">
        <span>Notification</span>
    </div>
    <div class="  px-3  text-xl mt-2 w-full justify-center flex ">
        <span class="bg-pink-950 w-full flex justify-center rounded-full">Tout marquer comme lu</span>
    </div>
    <div class=" mt-4 ">
        <div v-for="item,i in listOfNotification" :key="i" :class="item.notif_lu==true?' bg-transparent':' bg-stone-900'" class=" px-3 py-3 mt-2  flex flex-row">
            <div class=" bg-stone-600 px-3 py-[.60rem] items-center rounded-full">
                <i :class="item.user_img==null?'fas fa-user':'item.user_img'" class=" text-4xl"></i>
            </div>
            <div  class="flex flex-col">
                <div class=" px-2 font-light ">
                    <span v-if="item.notif_type=='friend'">Vous avez une demande d'ajout de la part de </span>
                    <span class=" text-pink-600 font-bold uppercase" v-text="item.user_name"></span>
                </div>
                <div v-if="item.demand_statut!='done'" class="relative w-full justify-end flex">
                    <div class=" flex absolute -mt-5 text-sm">
                        <button class=" py-1 bg-stone-500 rounded-xl px-3 mr-3">Supprimer</button>
                        <button @click="acceptIt(item)" class=" py-1 bg-pink-700 rounded-xl px-3">Accepter</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            listOfNotification: [],
        };
    },
    methods: {
        async getAllNotification() {
            await this.$http.get("/api/get_all_notification/" + this.$store.state.user.user_id)
                .then((result) => {
                    this.listOfNotification = result.data.notif;
                    console.log(result.data.notif);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
       async acceptIt(item) {
            item.notif_lu = true;
            item.demand_statut = 'done';
            await this.$http.put("/api/accept_friend/" + item.notif_id)
                .then((result) => {
                    // this.listOfNotification = result.data.notif;
                    console.log(result);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    mounted() {
        setTimeout(() => {
            this.getAllNotification()
        }, 500);
    }
};
</script>
