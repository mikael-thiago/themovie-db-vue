<template>
  <div class="favorites-root">
    <section>
      <FavoriteMovieCard
        v-for="(movie, key) in movies"
        :key="key"
        :movie="movie"
        @unfavoritedMovie="handleUnfavoriteMovie"
      />
    </section>
  </div>
</template>

<script>
import { getFavoritedMovies } from "../../api-calls.js";
import FavoriteMovieCard from "./FavoriteMovieCard.vue";

export default {
  name: "FavoritesPage",
  data() {
    return {
      movies: [],
    };
  },
  components: {
    FavoriteMovieCard,
  },
  created() {
    getFavoritedMovies().then((movies) => {
      this.movies = movies;
    });
  },
  methods: {
    handleUnfavoriteMovie() {
      getFavoritedMovies().then((movies) => {
        this.movies = movies;
      });
    },
  },
};
</script>

<style scoped>
.favorites-root {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 60px;
}

section {
  width: 95%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  column-gap: 15px;
  row-gap: 15px;
}
</style>