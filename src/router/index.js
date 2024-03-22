import { createRouter, createWebHistory } from "vue-router";
 
import accueil from '../view/accueilView.vue' 
const routes = [
  {
    path: "/",
    name:'acueil',
    component: accueil,
  }, 
  {
    path: "/:pathMatch(.*)*",
    component: accueil,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
