<template>  
    <div class=" flex w-full h-full">
          <div class=" flex justify-center items-center w-[60%]">
             <i class="fas fa-synagogue  " style=" font-size:5rem; color: rgb(41, 43, 41)"></i>
          </div>

          <div class="  flex justify-start items-center w-[40%]  ">
            <div class="flex flex-col  py-10 px-7" style="  border-radius:10px ; box-shadow:30px 0px 40px rgba(34, 191, 94, 0.616)">
                <div class="flex items-center mb-4">
                    <i class="fas fa-user-ninja text-2xl text-stone-700"></i>
                    <h1 class="text-2xl ml-2"> Inscription </h1>                   
                </div>

                <input_Vue :option="options[0]" class=""></input_Vue>
                <input_Vue :option="options[1]" class="mt-4"></input_Vue>
                <bouton_Vue @click="saveIt()" :option="optionBtn[0]" class=" mt-7"></bouton_Vue>
                
                
            </div>
          </div>
      </div> 
    
    
    </template>
    
    <script>
    import input_Vue from '@/components/input_.vue'
    import bouton_Vue from '@/components/bouton_.vue'

    
    export default {
      
    
      data(){
        return{ 
            options:[
                {
                  label:"Nom d'utilisateur",
                  id_:'username_',
                  classIco:'fas fa-user',
                  model_: ''
                },
                {
                  label:"Mot de passe",
                  id_:'passowrd_',
                  type_:'password',
                  classIco:'fas fa-lock',
                  model_: ''
                },

                ],

                optionBtn:[
                {
                    label: "Sign in", 
                    type_: null
                }
                ]
             }
            
      },
    
      components: {
        input_Vue,
        bouton_Vue
      },

      methods:{
        saveIt(){
          if(this.options[0].model_ != '' && this.options[1].model_ != '')
          {
            window.localStorage.setItem('*_*', JSON.stringify(
              {
              isLg:true
            }))
            this.$store.state.logged= true
          }
           
        }
      }
           
      
    }
    </script>
    
    <style>
    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif; 
    }
    </style>
    