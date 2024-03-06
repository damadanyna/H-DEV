<template> 
<!-- succes -->
    <div id="note_" v-if="this.$store.state.optNote.type == 1"  class=" absolute border-r  top-16 -right-[33rem]  duration-500 border-stone-200 bg-green-100 text-green-500 rounded-sm   px-4 py-2 z-40"> 
        <div class="flex flex-row items-center">
            <i class="fas fa-check mr-1"></i> 
            <div class="text-xs font-bold" v-text="'Succès'"></div>
        </div>
        <span class="" v-text="this.$store.state.optNote.label"> </span>
    </div>
<!-- notification -->
    <div id="note_" v-if="this.$store.state.optNote.type == 2"  class=" absolute border-r  top-16 -right-[33rem]  duration-500 border-stone-200 bg-blue-100 text-blue-500 rounded-sm   px-4 py-2 z-40"> 
        <div class="flex flex-row items-center">
            <i class="fas fa-info mr-1"></i> 
            <div class="text-xs font-bold" v-text="'Notification'"></div>
        </div>
        <span class="" v-text="this.$store.state.optNote.label"> </span>
    </div>
<!-- erreur -->
    <div id="note_" v-if="this.$store.state.optNote.type == 3"  class=" absolute border-r  top-16 -right-[33rem]  duration-500 border-stone-200 bg-red-100 text-red-500  rounded-sm   px-4 py-2 z-40"> 
        <div class="flex flex-row items-center">
            <i class="fas fa-circle-xmark mr-1"></i> 
            <div class="text-xs font-bold" v-text="'Erreur'"></div>
        </div>
        <span class="" v-text="this.$store.state.optNote.label"> </span>
    </div>
    
</template> 
      
      <script> 
      export default { 
      }
      </script>
      
      <style> 
      </style>
      