import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LoggerHome from "../views/LoggerHome.vue";
import PokemonByType from "../views/PokemonByType.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/loggerHome",
    name: "LoggerHome",
    component: LoggerHome,
  },
  {
    path: "/pokemonByType/:type",
    name: "PokemonByType",
    component: PokemonByType,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
