<template>
<div class="max-h-[95vh]  overflow-y-auto  py-3 px-3  ">
    <button @click="seeMessage()" v-for="item,i in listOfCont" :key="i" class=" text-white flex items-center">
        <div class=" py-2 flex items-center">
            <div class=" bg-stone-600 px-2 py-[.35rem] items-center rounded-full">
                <i :class="item.avatar" class=" text-xl"></i>
            </div>
            <span class=" ml-2" v-text="item.name"></span>
        </div>
    </button>
</div>
</template>

<script>
export default {
    data() {
        return {
            listOfCont: [{
                    avatar: 'fas fa-user-large',
                    name: 'My Name'
                },
                {
                    avatar: 'fas fa-user-large',
                    name: 'My Name'
                },
                {
                    avatar: 'fas fa-user-large',
                    name: 'My Name'
                },
                {
                    avatar: 'fas fa-user-large',
                    name: 'My Name'
                },
                {
                    avatar: 'fas fa-user-large',
                    name: 'My Name'
                },
                {
                    avatar: 'fas fa-user-large',
                    name: 'My Name'
                },
                {
                    avatar: 'fas fa-user-large',
                    name: 'My Name'
                },
                {
                    avatar: 'fas fa-user-large',
                    name: 'My Name'
                },
                {
                    avatar: 'fas fa-user-large',
                    name: 'My Name'
                },
                {
                    avatar: 'fas fa-user-large',
                    name: 'My Name'
                },
                {
                    avatar: 'fas fa-user-large',
                    name: 'My Name'
                },
                {
                    avatar: 'fas fa-user-large',
                    name: 'My Name'
                },
                {
                    avatar: 'fas fa-user-large',
                    name: 'My Name'
                },
                {
                    avatar: 'fas fa-user-large',
                    name: 'My Name'
                },
            ]
        }
    },
    methods: {
        seeMessage(){
            this.$router.push({
                name:'chatting_'
            })
        }
    }
}
</script>
