<template> 
    <div :id="'c_' + this.option.id_" class=" flex px-2 py-2 rounded-md   bg-white items-center justify-start border border-stone-400">  
      <span @click="doIt()" :id="this.option.id_"  class= " ml-6 duration-500 px-1 rounded-full absolute text-sm text-stone-300" v-text="this.option.label"></span>
      <i :id="'id_'+this.option.id_" :class="this.option.classIco" class=" duration-300  text-stone-400"></i>
      <input :id="'in_' + this.option.id_" v-model="values" @focusout="out_()" @focusin="in_()" :type="!this.option.type_?'text':this.option.type_" class=" pl-1 outline-none text-sm">
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
            var pl= document.getElementById(this.option.id_);
             var cI= document.getElementById('c_' + this.option.id_); 
              var ic= document.getElementById('id_' + this.option.id_);
              ic.style.color=' rgb(34,197,94)'
              pl.style.marginTop='-40px';
              pl.style.color=' rgb(34,197,94)';
              pl.style.background='white';
              pl.style.font='900';
              pl.style.fontSize='10px'; 

              cI.style.border='solid 2px rgb(34,197,94)';   
          },
          out_(){
            if (this.values=='' || this.values==null) {
              var pl= document.getElementById(this.option.id_);
              var cI= document.getElementById('c_' + this.option.id_);  
              var ic= document.getElementById('id_' + this.option.id_);
              ic.style.color='rgb(168,162,158)'
              pl.style.marginTop='inherit';
              pl.style.color='rgb(214,211,209)';
              pl.style.background='transparent';
              pl.style.font='inherit';
              pl.style.fontSize='.875rem'; 

              cI.style.border=' solid 1px rgb(168,162,158)';  
            }
          },
          doIt(){
            var sI= document.getElementById('in_' + this.option.id_) 
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
      