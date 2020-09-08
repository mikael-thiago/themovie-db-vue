<template>
  <div
    :style="{cursor: 'pointer'}"
    @mouseenter="brightOnHover"
    @mouseleave="unbrightOnHover"
    class="recommendation-item"
    @click="redirectToMovie"
  >
    <div
      class="recommendation-item-background"
      ref="background"
      :style="{ backgroundImage: `url(${imageUrl})` }"
    ></div>
    <div class="recommendation-item-text">
      <div class="recommendation-item-text-wrapper">
        <div class="recommendation-item-title">{{recommendation.title}}</div>
        <div class="recommendation-item-year-rating">
          <div class="recommendation-item-year">{{year}}</div>
          <div class="recommendation-item-rating">
            <span class="glyphicon glyphicon-star recomendation-movie-rating-icon"></span>
            {{recommendation.vote_average + "/10"}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getImageBaseUrl } from "../../../api-config.js";

export default {
  name: "RecomendationItem",
  props: {
    recommendation: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
  },
  computed: {
    imageUrl: function () {
      return getImageBaseUrl() + "w780" + this.recommendation.backdrop_path;
    },
    year: function () {
      return this.recommendation.release_date
        ? this.recommendation.release_date.split("-")[0]
        : "";
    },
  },
  methods: {
    redirectToMovie: function () {
      document.getElementsByClassName("movie-wrapper")[0].scrollTo(0, 0);
      this.$router.push(`/movie/${this.recommendation.id}`);
    },
    brightOnHover: function () {
      this.$refs["background"].style.filter = "brightness(0.7)";
    },
    unbrightOnHover: function () {
      this.$refs["background"].style.filter = "";
    },
  },
};
</script>

<style scoped>
.recommendation-item {
  width: 400px;
  min-width: 400px;
  height: 225px;
  margin: 0 10px;
  border: none;
  outline: none;
  display: flex;
  position: relative;
  z-index: 1;
}

.recommendation-item-background {
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-color: #555555;
  transition: 0.5s;
}

.recommendation-item-text {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 20px;
  text-shadow: 2px 2px 3px black;
}

.recomendation-movie-rating-icon {
  color: yellow;
  font-size: 1em;
  margin: 0 5px;
}

.recommendation-item-text-wrapper {
  width: 90%;
}

.recommendation-item-title {
  font-size: 1.5em;
  font-weight: 600;
  color: white;
}

.recommendation-item-year-rating {
  display: flex;
  font-weight: 500;
  color: #dddddd;
}

.recommendation-item-year-rating > * {
  margin-right: 10px;
}

@media screen and (max-width: 800px) {
  .recommendation-item {
    width: 300px;
    min-width: 300px;
    height: 169;
  }
}

@media screen and (max-width: 450px) {
  .recommendation-item {
    width: 200px;
    min-width: 200px;
    height: 113px;
  }
}
</style>