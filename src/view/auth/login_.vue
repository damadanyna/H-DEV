<template>
<div class=" bg-transparent w-full h-full text-white flex flex-col items-center justify-center ">
    <div class="flex flex-col">
        <h1 class=" uppercase text-3xl font-bold ">Connexion</h1>
        <div class=" flex flex-col mt-12">
            <div class=" flex flex-col mt-2">
                <span>Votre nom</span>
                <div id="user_c" class=" border border-stone-400 rounded-lg py-1 px-3 ">
                    <i id="user_i" class="fas fa-user"></i>
                    <input v-model="data.user" @keydown.enter="seConnecter()" @focusin="setStyle('user_c','user_i',true)" @focusout="setStyle('user_c','user_i',false)" type="text" placeholder="Nom d'utilisateur" class="ml-1 bg-transparent border-t-stone-400  outline-none  ">
                </div>
            </div>
            <div class=" flex flex-col mt-2">
                <span>Votre Mot de passe</span>
                <div id="pwd_c" class=" border border-stone-400 rounded-lg py-1 px-3 ">
                    <i id="pwd_i" class="fas fa-lock-open"></i>
                    <input v-model="data.pwd" @keydown.enter="seConnecter()" @focusin="setStyle('pwd_c','pwd_i',true)" @focusout="setStyle('pwd_c','pwd_i',false)" type="password" placeholder="Mot de passe" class="ml-1 bg-transparent border-t-stone-400  outline-none  ">
                </div>
            </div>
            <div class="mt-10 flex flex-col">
                <span id="note" class=" text-green-500" v-text="'Renplissez les champs'"></span>
                <button @click="seConnecter()" :class="data.user =='' || data.pwd=='' ?' bg-stone-500':'bg-purple-700'" class="  py-2 rounded-full">
                    Se connecter
                </button>
            </div>
            <div class=" flex relative text-white w-full py-2 items-center justify-center">
                <span  class=" absolute h-[1px] w-full bg-white"></span>
                <span class=" bg-stone-950 z-10 px-3 font-bold uppercase">Ou</span>
            </div>
            <button @click="sinscrire()"  class=" text-purple-600 uppercase border border-purple-600 bg-transparent py-2 rounded-full">
                    S'inscrire
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
                pwd: ''
            }
        }
    },
    methods: {
        setStyle(item, ico, state) {
            var content = document.getElementById(item)
            var ico_ = document.getElementById(ico)
            if (state == true) {
                content.classList.add('border-purple-600')
                ico_.classList.add('text-purple-600')
            } else {
                content.classList.remove('border-purple-600')
                ico_.classList.remove('text-purple-600')
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
        sinscrire(){

        }
    }
}
</script>

<style l scoped>

</style>
