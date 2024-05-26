<template>
    <div class=" h-full w-full flex flex-col bg-transparent"> 
        <bodyContact></bodyContact>
    </div>
</template>

<script> 
import bodyContact from '@/components/contact/bodyContact.vue';
export default{
    components:{ 
        bodyContact
    },
    data(){
        return{

        }
    }
}
</script>