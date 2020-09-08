<template>
  <div class="movie-card" @mouseenter="handleHover" @mouseleave="handleUnhover">
    <div
      ref="content"
      class="movie-content"
      :style="{backgroundImage: `url(${posterUrl})`}"
      @click="redirectToMoviePage"
    ></div>
    <button ref="unfavorite-button" class="unfavorite-button" @click="unfavorite">
      <i class="fa fa-times"></i>
    </button>
  </div>
</template>

<script>
import { getImageBaseUrl } from "../../api-config.js";
import { unfavoriteMovie } from "../../api-calls.js";

export default {
  name: "FavoriteMovieCard",
  props: {
    movie: {},
  },
  computed: {
    posterUrl() {
      if (this.movie.poster_path)
        return getImageBaseUrl() + "w500/" + this.movie.poster_path;

      return "";
    },
  },
  methods: {
    redirectToMoviePage() {
      this.$router.push(`/movie/${this.movie.id}`);
    },
    handleHover() {
      this.$refs["unfavorite-button"].style.display = "flex";
      this.$refs["content"].style.filter = "brightness(.7)";
    },
    handleUnhover() {
      this.$refs["unfavorite-button"].style.display = "";
      this.$refs["content"].style.filter = "";
    },
    unfavorite() {
      unfavoriteMovie(this.movie.id);
      this.$emit("unfavoritedMovie");
    },
  },
};
</script>

<style scoped>
.unfavorite-button {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border: none;
  outline: none;
  position: absolute;
  right: 5px;
  top: 5px;
  display: none;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  color: white;
  z-index: 2;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  transition: 100ms ease all;
}

.unfavorite-button:hover {
  font-size: 2em;
}
</style>