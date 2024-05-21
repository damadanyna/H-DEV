<template>
<div class=" flex justify-between text-white w-full items-end py-2  pr-3 bg-purple-900">
    <div></div>
    <div class="flex items-centre ">
        <button class=" bg-stone-800 px-2  mr-3 items-center flex rounded-full py-[.57rem]">
            <i class="fas fas fa-user-group "></i>
        </button>
        <button class=" bg-stone-800 px-[.57rem] mr-5 items-center flex rounded-full py-[.35rem]">
            <i class="fas fa-message "></i>
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
        }
    }
}
</script>
