import {
  createRouter,
  // createWebHistory,
  createWebHashHistory,
} from "vue-router";

// const routerHistory = createWebHistory();
const routerHistory = createWebHashHistory();
import HomePage from "@/pages/HomePage.vue";
import AuthPage from "@/pages/AuthPage.vue";
import ProfilePage from "@/pages/ProfilePage";
import DefaultPage from "@/pages/DefaultPage";

export const mainRoutes = [
  { name: "Home", path: "/", component: HomePage },
  { name: "Sign Up", path: "/signup", component: AuthPage },
  { name: "Sign In", path: "/signin", component: AuthPage },
  { name: "Profile", path: "/profile", component: ProfilePage },
  { path: "/:CatchAll(.*)", component: DefaultPage },
  // { path: "/:PathMatch(.*)*", component: <h2>Hello 404</h2> },
];

const routers = createRouter({
  history: routerHistory,
  routes: mainRoutes,
});

export default routers;
