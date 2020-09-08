<template>
  <div class="home-root">
    <section>
      <MovieCard v-for="(movie, key) in movies" :key="key" :movie="movie" />
    </section>
  </div>
</template>

<script>
import MovieCard from "../../components/MovieCard.vue";
import { getMostPopularMovies } from "../../api-calls.js";

export default {
  name: "HomePage",
  components: {
    MovieCard,
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

section {
  width: 95%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  column-gap: 15px;
  row-gap: 15px;
}
</style>