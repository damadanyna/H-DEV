<template>
<div class=" bg-stone-950 flex px-2 items-center  -mt-1 z-50">
    <div class="flex items-center py-2 rounded-full px-2 text-white bg-stone-300">
        <button class="mx-2 text-purple-700">
            <i class="fas fa-face-smile"></i>
        </button>
        <input v-model="valueOf" @keydown.enter="sendMessage()" type="text" placeholder=" Message" class=" border-none outline-none text-black bg-transparent w-full ">
        <button class="mx-2  text-purple-700">
            <i class="fas fa-paperclip"></i>
        </button>
        <button class="mx-2  text-purple-700">
            <i class="fas fa-camera"></i>
        </button>
    </div>
    <div class="flex mx-3 bg-purple-700 text-white px-3 py-[.6rem] rounded-full">
        <i class="fas fa-microphone-lines text-2xl"></i>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            valueOf: null

        }
    },
    methods: {
        sendMessage() {
            this.$store.state.listOfMessage.push({
                id: '',
                text: this.valueOf,
                see: false,
                send: 2,
                hour: '19:04'
            }, );

            var container = document.getElementById('msgContent');
            setTimeout(() => {
                container.scrollTop = container.scrollHeight 
                this.valueOf = ''
            }, 300);
        }
    }
}
</script>
