import { createRouter, createWebHistory } from "vue-router"; 
import page_ from '../view/page_.vue';
import chatting_ from '../view/chatting_.vue';

const routes = [
  {
    path: "/",
    name:'acueil',
    component: page_,
  }, 
  {
    path: "/chat",
    name:'chatting_',
    component: chatting_,
    
  }, 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
