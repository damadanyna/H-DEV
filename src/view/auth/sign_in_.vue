<template>
<div class="bg-black w-full h-full text-white flex flex-col items-center justify-center ">
    <div class="flex flex-col">
        <h1 class=" uppercase text-2xl font-bold ">Inscription</h1>
        <div class=" flex flex-col mt-12">
            <div class=" flex flex-col mt-2">
                <span>Votre nom</span>
                <div id="user_c" class=" border border-stone-400 rounded-lg py-1 px-3 ">
                    <i id="user_i" class="fas fa-user"></i>
                    <input v-model="data.user" @keydown.enter="seConnecter()" @focusin="setStyle('user_c','user_i',true)" @focusout="setStyle('user_c','user_i',false)" type="text" placeholder="Nom d'utilisateur" class="ml-1 bg-transparent border-t-stone-400  outline-none  ">
                </div>
            </div>
            <div class=" flex flex-col mt-2">
                <span>Date de naissance</span>
                <div id="user_c2" class=" border border-stone-400 rounded-lg py-1 px-3 ">
                    <i id="user_i2" class="fas fa-calendar-minus"></i>
                    <input v-model="data.born" @keydown.enter="seConnecter()" @focusin="setStyle('user_c2','user_i2',true)" @focusout="setStyle('user_c2','user_i2',false)" type="date" placeholder="Date de naissance" class="ml-1 bg-transparent border-t-stone-400  outline-none  ">
                </div>
            </div>
            <div class=" flex flex-col mt-2">
                <span>Votre Mot de passe</span>
                <div id="pwd_c" class=" border border-stone-400 rounded-lg py-1 px-3 ">
                    <i id="pwd_i" class="fas fa-lock-open"></i>
                    <input v-model="data.pwd" @keydown.enter="seConnecter()" @focusin="setStyle('pwd_c','pwd_i',true)" @focusout="setStyle('pwd_c','pwd_i',false)" type="password" placeholder="Mot de passe" class="ml-1 bg-transparent border-t-stone-400  outline-none  ">
                </div>
            </div>
            <div class=" flex flex-col mt-2">
                <span>Confirmer Mot de passe</span>
                <div id="pwd_c2" class=" border border-stone-400 rounded-lg py-1 px-3 ">
                    <i id="pwd_i2" class="fas fa-lock-open"></i>
                    <input v-model="data.pwd2" @keydown.enter="seConnecter()" @focusin="setStyle('pwd_c2','pwd_i2',true)" @focusout="setStyle('pwd_c2','pwd_i2',false)" type="password" placeholder="Confirmation du Mot de passe" class="ml-1 bg-transparent border-t-stone-400  outline-none  ">
                </div>
            </div>
            <div class="mt-10 flex flex-col">
                <span id="note" class=" text-red-500" v-text="'Renplissez les champs'"></span>
                <button @click="sInscrire()" :class="data.user =='' || data.born==''  || data.pwd==''  || data.pwd2=='' ?' bg-stone-500':'bg-red-700'" class="  py-2 rounded-full">
                    Inscrire
                </button>
            </div>
            <button @click="seConnecter()"  class=" mt-5 text-red-600 uppercase border border-red-600 bg-transparent py-2 rounded-full">
                   Se Connecter
                </button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            data: {
                user: '',
                born:'',
                pwd2:'',
                pwd: '',
            }
        }
    },
    methods: {
        setStyle(item, ico, state) {
            var content = document.getElementById(item)
            var ico_ = document.getElementById(ico)
            if (state == true) {
                content.classList.add('border-red-600')
                ico_.classList.add('text-red-600')
            } else {
                content.classList.remove('border-red-600')
                ico_.classList.remove('text-red-600')
            }
        },
        seConnecter() {
            if (this.data.user != '' || this.data.pwd != '') {
                this.$router.replace( {name:'acueil'})
            } else {
               var note= document.getElementById('note')
               note.innerText='Certaine champs sont vide';
               note.classList.add('text-red-500')
            }
        },
        
        sInscrire() {
            if (this.data.user !=='' && this.data.born!==''  && this.data.pwd!==''  && this.data.pwd2!=='') {
                this.$http.post("/api/signIn",{
                    user_name:this.data.user,
                    user_pass:this.data.pwd,
                    user_born:this.data.born
                });
                // this.$router.replace( {name:'acueil'})
                // signIn
            } else {
               var note= document.getElementById('note')
               note.innerText='Certaine champs sont vide';
               note.classList.add('text-red-500')
            }
        },
    }
}
</script>

<style l scoped>

</style>
