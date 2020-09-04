import Vue from 'vue';
import Router from "vue-router";

import App from './App.vue';
import HomePage from "./components/HomePage.vue";
import SearchPage from "./components/SearchPage.vue";
import MoviePage from "./components/MoviePage.vue";
import FavoritesPage from "./components/FavoritesPage.vue";

Vue.config.productionTip = false;
Vue.use(Router);

const routes = [
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/search/:query",
    name: "search",
    component: SearchPage
  },
  {
    path: "/movie/:id",
    name: "movie",
    component: MoviePage
  },
  {
    path: "/favorites",
    name: "favorites",
    component: FavoritesPage
  }
];

const router = new Router({
  mode: "history",
  routes
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
