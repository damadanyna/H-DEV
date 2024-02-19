<template> 
    <div id="c_input_" class=" flex px-2 py-2 rounded-md   bg-white items-center justify-start border border-stone-400">  
      <span @click="doIt()" :id="this.option.id"  class="duration-500 px-1 rounded-full absolute text-sm text-stone-300" v-text="this.option.label"></span>
      <input id="self_input" v-model="values" @focusout="out_()" @focusin="in_()" type="text" class=" outline-none text-sm">
    </div> 
</template> 
    <script>  
      export default { 
        props:{
          option:{}
        },
        // rehefa hapiasa variable locale
        data(){
          return{
            values:null,
          }
        },
        // rehefa te hapiasa fonction
        // atao ato aby ny fonction abiaby
        methods:{
          in_(){
            var pl= document.getElementById(this.option.id);
             var cI= document.getElementById('c_input_'); 
              pl.style.marginTop='-40px';
              pl.style.color=' rgb(34,197,94)';
              pl.style.background='white';
              pl.style.font='900';
              pl.style.fontSize='10px'; 

              cI.style.border='solid 2px rgb(34,197,94)';   
          },
          out_(){
            if (this.values=='' || null) {
              var pl= document.getElementById(this.option.id);
              var cI= document.getElementById('c_input_');  
              pl.style.marginTop='inherit';
              pl.style.color='rgb(214,211,209)';
              pl.style.background='transparent';
              pl.style.font='inherit';
              pl.style.fontSize='.875rem'; 

              cI.style.border=' solid 1px rgb(168,162,158)';  
            }
          },
          doIt(){
            var sI= document.getElementById('self_input') 
            sI.focus();
          }
          
        },
        mounted(){
          console.log(this.option);
        }
      }
    </script>
      
      <style> 
      </style>
      