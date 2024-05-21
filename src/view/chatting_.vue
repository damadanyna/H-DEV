<template>
    <div class=" w-full h-screen flex flex-col bg-transparent">
        <headerChatVue></headerChatVue>
        <bodyChatVue></bodyChatVue>
        <footerCahtVue class=" absolute bottom-0" ></footerCahtVue>
    </div>
</template>
<script>
import headerChatVue from '@/components/chat/headerChat.vue'  
import bodyChatVue from '@/components/chat/bodyChat.vue' 
import footerCahtVue from '@/components/chat/footerCaht.vue'
export default{
    components:{
        headerChatVue,
        bodyChatVue,
        footerCahtVue
    },
    data(){
        return {

        }
    }
}
</script>