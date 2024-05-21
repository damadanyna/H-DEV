import { createRouter, createWebHistory } from "vue-router"; 
import page_ from '../view/page_.vue';
import chatting_ from '../view/chatting_.vue';
import login_ from '../view/auth/login_.vue'
import sign_in_ from '../view/auth/sign_in_.vue'

const routes = [
  {
    path: "/",
    name:'accueil',
    component: page_,
  }, 
  {
    path: "/chat",
    name:'chatting_',
    component: chatting_,
    
  }, 
  {
    path: "/login",
    name:'login',
    component: login_,
    
  }, 
  {
    path: "/inscription",
    name:'sign_in_',
    component: sign_in_,
  }, 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
