<template>
<div class=" flex justify-between text-white w-full items-end py-2  pr-3 bg-stone-950">
    <div>
    </div>
    <div class="flex items-centre ">
        <button class=" bg-stone-800 px-2  mr-3 items-center flex rounded-full py-[.57rem]">
            <i class="fas fas fa-user-group "></i>
        </button>
        <button class=" bg-stone-800 px-[.57rem] mr-3 items-center flex rounded-full py-[.35rem]">
            <i class="fas fa-message "></i>
        </button>

        <button @click="logOut()" class=" bg-stone-800 px-2  mr-3 items-center flex rounded-full py-[.57rem]">
            <i class="fas fa-power-off "></i>
        </button>
                <i class="fas fa-ellipsis-vertical text-xl"></i>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        backTo() {
            this.$router.replace({
                path: '/'
            })
        },
        logOut() {
            this.$http.get("/api/logout").then(() => {
                window.location.reload()
            })
        } 
    }
}
</script>
