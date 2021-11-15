import { createApp } from "vue";
import App from "./App.vue";
import routers from "./routes/mainRoutes";
import "./assets/scss/main.scss";

const app = createApp(App);
app.use(routers);
app.mount("#app");
