<template>
  <div class="home-root">
    <Section title="Filmes mais populares">
      <MovieCard v-for="(movie, key) in movies" :key="key" :movie="movie" />
    </Section>
  </div>
</template>

<script>
import MovieCard from "@/components/MovieCard.vue";
import Section from "@/components/Section.vue";

import { getMostPopularMovies } from "@/api-calls.js";

export default {
  name: "HomePage",
  components: {
    MovieCard,
    Section,
  },
  data() {
    return {
      movies: [],
    };
  },
  created() {
    getMostPopularMovies(1).then((movies) => {
      this.movies = movies;
    });
  },
};
</script>

<style scoped>
.home-root {
  box-sizing: border-box;
  padding: 65px 0px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: min-content;
}
</style>