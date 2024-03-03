import { createRouter, createWebHistory } from "vue-router";

// ici je vais importer les pages utiliser pour le routage
import page_ from '../view/page_.vue'
import settings_ from '../view/settings_.vue'
const routes = [
  {
    path: "/",
    name:'acueil',
    component: page_,
  },
  {
    path: "/:pathMatch(.*)*",
    component: page_,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
