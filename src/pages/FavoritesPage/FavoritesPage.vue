<template>
  <div class="favorites-root">
    <Section>
      <FavoriteMovieCard
        v-for="(movie, key) in movies"
        :key="key"
        :movie="movie"
        @unfavoritedMovie="handleUnfavoriteMovie"
      />
    </Section>
  </div>
</template>

<script>
import { getFavoritedMovies } from "@/api-calls.js";

import Section from "@/components/Section.vue";
import FavoriteMovieCard from "./components/FavoriteMovieCard.vue";

export default {
  name: "FavoritesPage",
  data() {
    return {
      movies: [],
    };
  },
  components: {
    FavoriteMovieCard,
    Section,
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
</style>