import {
  createRouter,
  createWebHistory,
  //   createWebHashHistory,
} from "vue-router";

const routerHistory = createWebHistory();
import HomePage from "../pages/HomePage.vue";
import AuthPage from "@/pages/AuthPage.vue";
import ProfilePage from "@/pages/ProfilePage";

export const mainRoutes = [
  { name: "Home", path: "/", component: HomePage },
  { name: "Sign Up", path: "/signup", component: AuthPage },
  { name: "Sign In", path: "/signin", component: AuthPage },
  { name: "Profile", path: "/profile", component: ProfilePage },
];

const routers = createRouter({
  history: routerHistory,
  routes: mainRoutes,
});

export default routers;
