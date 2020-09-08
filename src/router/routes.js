import HomePage from "@/pages/HomePage/HomePage.vue";
import SearchPage from "@/pages/SearchPage/SearchPage.vue";
import MoviePage from "@/pages/MoviePage/MoviePage.vue";
import FavoritesPage from "@/pages/FavoritesPage/FavoritesPage.vue";

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

export default routes;