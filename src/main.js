import Vue from 'vue';
import Router from "vue-router";

import App from './App.vue';
import HomePage from "./pages/HomePage/HomePage.vue";
import SearchPage from "./pages/SearchPage/SearchPage.vue";
import MoviePage from "./pages/MoviePage/MoviePage.vue";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage.vue";

Vue.config.productionTip = false;

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/search/:query/:page",
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
