import { createStore } from "vuex";

export default createStore({
    state:{ //variable global
        logged:false,
        optNote:{
            type: 1, //1 vert, 2 bleu, 3 rouge
            label: null, 
        },
        
        generalData:[
            {
                  desc:'Voirture',
                  h_:'16:24', 
                  img: '1.jpg'
            },
            {
                  desc:'Maison',
                  h_:'16:24', 
                  img: '2.jpg'
            },
            {
                  desc:'Arbre',
                  h_:'16:24', 
                  img: '3.jpg'
            },
            {
                  desc:'Truc',
                  h_:'16:24', 
                  img: '4.jpg'
            },
            {
                  desc:'Miantra',
                  h_:'16:24', 
                  img: '5.jpg'
            },
            {
                  desc:'Oridnatera',
                  h_:'16:24', 
                  img: '6.jpg'
            },
            {
                  desc:'Mananasy',
                  h_:'16:24', 
                  img: '7.jpg'
            },
            {
                  desc:'Paiso',
                  h_:'16:24', 
                  img: '8.jpg'
            },
            {
                  desc:'Bibilava',
                  h_:'16:24', 
                  img: '9.jpg'
            },
            {
                  desc:'tongotra',
                  h_:'16:24', 
                  img: '10.jpg'
            },
            {
                  desc:'Foritra',
                  h_:'16:24', 
                  img: '11.jpg'
            },
      ],

      listOfSearch:[],
      searchValue:''
    },
    
    mutations:{ //fonction global
        showNotif(){ 
            var note = document.getElementById('note_')
            note.style.right = '15px'
            
            setTimeout(() => {
                note.style.right = '-33rem'
            }, 2500);
            
        }
    }
    
})