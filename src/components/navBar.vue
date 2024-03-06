3<template>
<div id="nav_bar_c" class="   w-[20rem] border-r duration-500 flex-col border-stone-200 text-black mt-2">
    <div class="flex w-full justify-end ">

        <div v-if=" this.$store.state.indeOfTheme !== 0 " class="flex flex-col cursor-pointer" @click="setNaveBar()">
            <span :class="hideText==false?' rotate-45 mt-2 ml-2':' '" class="  w-7 h-1 rounded-lg bg-stone-200 mt-1"></span>
            <span :class="hideText==false?' opacity-0':''" class="w-7 h-1 rounded-lg bg-stone-200 mt-1"></span>
            <span :class="hideText==false?'-rotate-45 -mt-3 ml-2 ':' mt-1'" class="w-7 h-1 rounded-lg bg-stone-200 "></span>
        </div>

        <div v-else class="flex flex-col cursor-pointer " @click="setNaveBar()">
            <span :class="hideText==false?' rotate-45 mt-2 ml-2':' '" class="  w-7 h-1 rounded-lg bg-stone-800 mt-1"></span>
            <span :class="hideText==false?' opacity-0':''" class="w-7 h-1 rounded-lg bg-stone-800 mt-1"></span>
            <span :class="hideText==false?'-rotate-45 -mt-3 ml-2 ':' mt-1'" class="w-7 h-1 rounded-lg bg-stone-800 "></span>
        </div>
    </div>
    <div v-for="items, i in listeMenu" :class=" this.$store.state.indeOfTheme !== 1?'text-stone-800 ':' text-stone-300'" :key="i" class=" mt-6 px-5 flex items-center">
        <router-link   :to="items.url" class="  px-3 py-1 w-full">
            <i :class="items.icon"></i>
            <span v-if="hideText==false" v-text="items.label" class=" ml-2"></span>
        </router-link>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            hideText: false,
            listeMenu: [{
                    label: 'accueil',
                    icon: 'fas fa-house',
                    url: '/'
                },
                {
                    label: 'Profil',
                    icon: 'fas fa-user',
                    url: '/profil_'
                },
                {
                    label: 'Settings',
                    icon: 'fas fa-gears',
                    url: '/settings_'
                },
                {
                    label: 'About',
                    icon: 'fas fa-question',
                    url: '/about_'
                }
            ]
        }
    },
    methods: {
        setNaveBar() {
            var nav = document.getElementById('nav_bar_c')
            if (this.hideText == false) {
                this.hideText = true;
                nav.style.width = '5.5rem';
            } else {
                setTimeout(() => {
                    this.hideText = false;
                }, 200);
                nav.style.width = '20rem';
            }

        }, 
    }
}
</script>

<style> 
  </style>
