<template>
<div class="max-h-[95vh]  overflow-y-auto  py-3 px-3  ">
    <button v-for="item,i in listOfCont" :key="i" class=" mb-3 w-full flex-row text-white flex items-center">
        <div class=" bg-stone-600 px-3 py-[.60rem] items-center rounded-full">
            <i :class="item.user_img==null?'fas fa-user':'item.user_img'" class=" text-4xl"></i>
        </div>
        <div class=" w-full py-2 flex flex-row justify-between ">
            <div class="">
                <span class=" ml-2" v-text="item.user_name"></span>
            </div>
            <div class=" justify-end flex flex-col">
                <div></div>
                <button v-if="item.exist==0" @click="addFriend(item)" class=" mt-6 text-xs px-6 text-white uppercase  bg-pink-950 py-1 rounded-full">
                    <i class="fas fa-user-plus text-sm"></i>
                    Ajouter
                </button>
                <button v-if="item.exist!=0" class=" mt-6 text-xs px-6 text-white uppercase  bg-stone-800 py-1 rounded-full">
                    <!-- <i class="fas fa-user-plus text-sm"></i> -->
                    En attent ...
                </button>
            </div>
        </div>
    </button>
</div>
</template>

<script>
import io from 'socket.io-client'
var socket = io('http://localhost:4044')

export default {
    data() {
        return {
            listOfCont: [],
            user_id: this.$store.state.user.user_id
        }
    },
    methods: {
        addFriend(item) {
            var admin_ = this.user_id;
            var data_dmd = {
                user_id: admin_,
                demand_user_id: item.user_id,
                demand_statut: 'wait',
            };
            var data_not = {
                user_id: item.user_id,
                notif_type: 'add',
                notif_content: 'friend',
                notif_vu: 'false',
            };

            this.$http.post("/api/add_friend", data_dmd).then(() => {
                // console.log('dmd: ', rep.data);

                // liste_to_
            });

            this.$http.post("/api/add_notification", data_not).then((rep) => {
                console.log('Notify:  ', rep.data);
            });

            socket.on('demande_to_' + admin_, () => {
                item.exist = 1;
                // console.log('Demande: ', data,i)

            })

        },
        async checkIfLooged() {
            const token = localStorage.getItem('token');
            console.log(token);
            if (token) {
                try {
                    const resp = await this.$http.get('/api/check', {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })
                    this.$store.state.user = resp.data
                    console.log('connecter', resp.data);
                    return true;
                } catch (error) {
                    console.log('erreur', error);
                    return false;
                }
            }
        }

    },
    mounted() {

        const init = this.checkIfLooged()
        if (init) {
            this.$http.post("/api/get_all_user", this.$store.state.user).then((rep) => {
                this.listOfCont = rep.data.data
            });
        } else {
            this.$router.replace({
                name: 'login'
            })
        }

    }
}
</script>
