import { createRouter, createWebHistory } from "vue-router";

// ici je vais importer les pages utiliser pour le routage
import page_ from '../view/page_.vue'
import settings_ from '../view/settings_.vue'
import about_ from '../view/about_.vue'
import profil_ from '../view/profil_.vue'
const routes = [
  {
    path: "/",
    name:'acueil',
    component: page_,
  },
  {
    path: "/settings_",
    name:'settings',
    component: settings_,
  },
  {
    path: "/about_",
    name:'about',
    component: about_,
  },
  {
    path: "/profil_",
    name:'profil',
    component: profil_,
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
