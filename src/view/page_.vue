<template>
    <div class=" h-full w-full flex flex-col bg-black">
        <headerChatVue></headerChatVue>
        <bodyContact></bodyContact>
    </div>
</template>

<script>
import headerChatVue from '@/components/contact/headerChat.vue';
import bodyContact from '@/components/contact/bodyContact.vue';
export default{
    components:{
        headerChatVue,
        bodyContact
    },
    data(){
        return{

        }
    }
}
</script>