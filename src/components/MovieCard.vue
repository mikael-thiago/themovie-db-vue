<template>
  <div class="movie-card" @mouseenter="handleHover" @mouseleave="handleUnhover">
    <div
      ref="content"
      class="movie-content"
      :style="{backgroundImage: `url(${posterUrl})`}"
      @click="redirectToMoviePage"
    ></div>

    <div
      ref="favorite-button"
      :class="{'favorite-movie-button': true,'favorite': !isFavorite, 'unfavorite': isFavorite}"
      @click="() => {isFavorite? unfavorite(): favorite()}"
    >
      <span
        :class="{'favorite-movie-icon': true, 'fa fa-minus': isFavorite, 'fa fa-heart': !isFavorite}"
      ></span>
    </div>
  </div>
</template>

<script>
import { getImageBaseUrl } from "../api-config.js";
import { isFavorite, favoriteMovie, unfavoriteMovie } from "../api-calls.js";

export default {
  name: "MovieCard",
  data() {
    return {
      isFavorite: isFavorite(this.movie.id),
    };
  },
  computed: {
    posterUrl() {
      if (this.movie.poster_path)
        return getImageBaseUrl() + "w500/" + this.movie.poster_path;

      return "";
    },
  },
  props: {
    movie: {},
  },
  methods: {
    redirectToMoviePage() {
      this.$router.push(`/movie/${this.movie.id}`);
    },
    handleHover() {
      this.$refs["favorite-button"].style.display = "flex";
      this.$refs["content"].style.filter = "brightness(.7)";
    },
    handleUnhover() {
      this.$refs["favorite-button"].style.display = "";
      this.$refs["content"].style.filter = "";
    },
    favorite() {
      favoriteMovie(this.movie.id);
      this.isFavorite = true;
    },
    unfavorite() {
      unfavoriteMovie(this.movie.id);
      this.isFavorite = false;
    },
  },
};
</script>

<style>
.movie-card {
  width: 220px;
  height: 320px;
  cursor: pointer;
  position: relative;
  margin: 6px;
}

.movie-content {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  object-fit: cover;
  transition: 200ms ease all;
  background-color: #333333;
  border-radius: 3px;
}

.favorite-movie-button {
  box-shadow: 2px 2px 3px black;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: none;
  outline: none;
  position: absolute;
  right: 10px;
  bottom: 25px;
  display: none;
  justify-content: center;
  align-items: center;
  transition: 0.1s;
  font-size: 1.5em;
  color: white;
  z-index: 2;
  padding: 0;
}

.favorite {
  background-color: #1db954;
}

.unfavorite {
  background-color: #cc0000;
}

.favorite-movie-button:hover {
  width: 55px;
  height: 55px;
  right: 7.5px;
  bottom: 22.5px;
  font-size: 1.8em;
}
</style>