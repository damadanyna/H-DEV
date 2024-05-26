<template>
    <div v-if="listeMsg.length==0" class=" flex flex-col h-full w-full items-center justify-center">
        <i class="fas fa-message text-8xl text-stone-300"></i>
       <span class=" text-stone-500">Message vide</span>
    </div>
    <div id="msgContent" v-else class="max-h-[85vh]  overflow-y-auto px-1 py-3  ">
        <div v-for="item in listeMsg" :key="item.id">
            <div v-if="item.id=='me'" class=" w-full justify-start flex" v-html="setHtml(item)"></div>    
            <div v-else class=" w-full flex justify-end">
                <div class=" flex max-w-[90vw] bg-gray-600  text-white mt-2 break-all rounded-l-2xl rounded-b-2xl px-2 py-2">
                    <span v-text="item.text" class=" space-x-7"></span>
                    <div class=" relative w-14 mt-3 ml-1 justify-end flex flex-col">
                        <span class=" absolute text-sm text-stone-300" v-text="item.hour"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </template> 
    <script>
    export default {
        data() {
            return {
                listeMsg: []
            }
        },
        methods:{
            setHtml(item) {
                if (item.text.length<50) {
                    return `
                    <div class="  flex max-w-[90vw] bg-purple-950 mt-2 text-white  break-all rounded-r-2xl rounded-b-2xl px-2 py-2">
                        <span  class=" space-x-7">${item.text}</span>
                        <div class=" relative w-14 mt-3 ml-1 justify-end flex flex-col">
                            <span class=" abolute text-sm text-stone-300"> ${item.hour}</span>
                        </div>  
                    </div>`
                }else{
                    return `
                    <div class="  flex max-w-[90vw] bg-purple-950 pb-3 mt-2 text-white  break-all rounded-r-2xl rounded-b-2xl px-2 py-2">
                        <span class=" space-x-7">${item.text}</span>
                        <div class=" relative   justify-end flex flex-col">
                            <div class="mt-3 text-sm text-stone-300">
                                <span class=" abolute  -ml-10 -mt-2" >${item.hour}</span>
                            </div>
                        </div>  
                    </div>`
                }
            }
        }, 
        beforeMount(){
           this.listeMsg= this.$store.state.listOfMessage;
        }
    }
    </script>
    