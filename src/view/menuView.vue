<template>
<div class="flex flex-col mb-40 ">
    <div class=" w-full pt-20 pb-5 flex justify-center ">
        <div class=" flex flex-row sm:w-1/2   justify-between "> 
            <div class="flex flex-col ">
                <h1 class=" text-2xl font-bold text-white">Location</h1>
                <div v-for="item,i in location_list" :key="i" class=" mt-5 text-white flex items-center">
                    <i :class="item.icon" class=" text-2xl mr-2"></i>
                    <div class="" v-text="item.label"></div>
                </div>
            </div>
            <div class="flex flex-col ">
                <h1 class=" text-2xl font-bold text-white">Social Link</h1>
                <div class="flex flex-row">
                    <div v-for="item,i in social_list" :key="i" class=" mt-4 text-white flex items-center">
                        <i :class="item.icon" class=" text-4xl mr-2"></i> 
                    </div>
                </div>
            </div> 
        </div>
    </div>
    <div class="flex flex-col justify-center mt-7 items-center">
        <div class="h-[1px] bg-white w-[60vw]"></div>
        <div class=" text-white py-5">© 2024 All Rights Reserved. By hidev Design</div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            menu_list: [{
                    label: 'Accueil'
                },
                // {
                //     label: 'About'
                // },
                // {
                //     label: 'Portfolio'
                // },
                {
                    label: 'services'
                },
                {
                    label: 'Contact'
                }
            ],
            location_list: [{
                    icon: 'fas fa-location-dot',
                    label: 'Tj 60b Tanjoandriana'
                },
                {
                    icon: 'fas fa-location-dot',
                    label: 'Antananarivo'
                },
                {
                    label: '( +261 34 86 110 96 )',
                    icon: 'fas fa-phone-volume'
                },
                {
                    label: 'contact@hidev.mg',
                    icon: 'fas fa-envelope'
                }
            ],
            social_list: [{
                    label: 'Facebook',
                    icon: 'fab fa-facebook-square'
                },
                {
                    label: 'twiter',
                    icon: 'fab fa-twitter-square'
                },
                {
                    label: 'Instagram',
                    icon: 'fab fa-instagram-square'
                },
                {
                    label: 'LinkedIn',
                    icon: 'fab fa-linkedin'
                }
            ],
        }
    }

}
</script>

<style>

</style>
