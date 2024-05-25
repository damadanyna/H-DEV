import { createStore } from "vuex";
export default createStore({
  state: {
    listOfContact:[ 
    ],
    user:{user_id:null},

    listOfMessage: [
      {
        id: 'me',
        text: 'Bonjour',
        see: false,
        send: 2,
        hour: '19:04'
      },
      {
        id: '',
        text: 'Bonjour ...',
        see: false,
        send: 2,
        hour: '19:04'
      },

      {
        id: 'me',
        text: 'sdifojsdoijfosdjfoijsdfoijsspdfjoze hjfaojoziej ohzehihzeihizheiufh osidjf sdjfaiuhs dfiuhfaiuhsidfu hsdfiuh iahdiojfdsoijfsjdfoijsdojifosidjfoijsdofijsdoijfoisjdfoijsdofjsdoijfoidsjfojsdf',
        see: false,
        send: 2,
        hour: '19:04'
      },
      {
        id: '',
        text: 'Inona no dikan reo ry bain fa tss zavatra asoko mints',
        see: false,
        send: 2,
        hour: '19:04'
      },

      {
        id: 'me',
        text: 'aaa teste io leka liak tyu ',
        see: false,
        send: 2,
        hour: '19:04'
      },
      {
        id: '',
        text: 'Teste inona zany reo ra ny hevtran la ',
        see: false,
        send: 2,
        hour: '19:04'
      },
    ],
    //variable global
    logged: false,
  },

  mutations: {
  },
});
