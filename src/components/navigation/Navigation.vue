<template>
  <nav class="navigation">
    <ul class="navigationList">
      <li class="navigationItem" v-for="route in mainRoutes" :key="route.path">
        <router-link class="navigationLink" :to="route.path">{{
          route.name
        }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mainRoutes } from "../../routes/mainRoutes";

export default {
  name: "Navigation",
  components: {},
  data() {
    return {
      mainRoutes: mainRoutes,
    };
  },
};
</script>
