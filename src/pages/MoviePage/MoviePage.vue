<template>
  <div>
    <div class="movie-banner" :style="{backgroundImage: `url(${backImageUrl})`}"></div>
    <div class="movie-wrapper">
      <div class="movie-info-banner">
        <div class="movie-info">
          <div class="movie-title">{{movie.title}}</div>
          <div class="movie-tagline">{{movie.tagline}}</div>
          <div class="movie-details">
            <div
              class="movie-genres"
              v-if="movie.genres !== null"
            >{{"Gêneros:" + movie.genres.map((genre, index) => ((index === movie.genres.length - 1) ? " " + genre.name : " " + genre.name))}}</div>

            <div class="separator" v-if="movie.runtime">{{" • "}}</div>
            <div class="movie-duration" v-if="movie.runtime">{{durationTime}}</div>

            <div class="separator" v-if="movie.release_date">{{" • "}}</div>
            <div class="movie-release" v-if="movie.release_date !== null">
              {{
              movie.release_date.split("-").reverse().map((datePart, index) => (
              (index === movie.release_date.split("-").length - 1) ? datePart : datePart + "/"
              )).reduce((actualData, nextDataPart) => actualData + nextDataPart)
              }}
            </div>

            <div class="separator" v-if="movie.popularity">{{" • "}}</div>
            <div
              class="movie-popularity"
              v-if="movie.popularity"
            >{{"Popularidade: " + movie.popularity}}</div>
          </div>
          <div class="movie-details">
            <div
              class="movie-budget"
              v-if="movie.budget !== null"
            >{{"Orçamento: " + (mainProductionCountry.iso_3166_1 === "US" ? "U$ " : "R$ ") + movie.budget.toLocaleString("pt-BR")}}</div>

            <div class="separator" v-if="movie.revenue">{{" • "}}</div>
            <div
              class="movie-revenue"
              v-if="movie.revenue"
            >{{"Receita: " + (mainProductionCountry.iso_3166_1 === "US" ? "U$ " : "R$ ") + movie.revenue.toLocaleString("pt-BR")}}</div>
          </div>

          <div class="movie-details">
            <div
              class="movie-status"
            >{{"Status: " + (movie.status === "Planned" ? "Em planejamento" : "Lançado")}}</div>
          </div>
          <div class="movie-description" v-if="movie.overview">{{movie.overview}}</div>
          <div class="movie-rating">
            <div class="movie-rating-container">
              <span class="glyphicon glyphicon-star movie-rating-icon"></span>
              <div class="movie-rating-text">{{movie.vote_average + "/10"}}</div>
            </div>
            <div class="movie-rating-container">
              <div class="movie-rating-vote-count">{{"Votos: " + movie.vote_count}}</div>
            </div>
          </div>
        </div>
        <button class="favorite-button">
          <span />
        </button>
      </div>
      <div class="movie-info-body">
        <Carousel title="Elenco" v-if="movie.cast">
          <CastItem v-for="(cast_p, key) in movie.cast" :key="key" :cast="cast_p" />
        </Carousel>
        <Carousel title="Trailers" v-if="trailers.length > 0">
          <VideoItem v-for="(trailer, key) in trailers" :key="key" :video="trailer" />
        </Carousel>
        <Carousel title="Recomendados" v-if="recommendations.length > 0">
          <RecommendationItem
            v-for="(recommendation, key) in recommendations"
            :key="key"
            :recommendation="recommendation"
          />
        </Carousel>
        <Carousel title="Similares" v-if="similars.length > 0">
          <RecommendationItem
            v-for="(similar, key) in similars"
            :key="key"
            :recommendation="similar"
          />
        </Carousel>
        <div class="spacer" style="{ height: '50px', minHeight: '50px' }"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { getMovie } from "../../api-calls.js";
import { getImageBaseUrl } from "../../api-config.js";
import CastItem from "./components/CastItem.vue";
import Carousel from "../../components/Carousel.vue";
import VideoItem from "./components/VideoItem.vue";
import RecommendationItem from "./components/RecommendationItem.vue";

export default {
  name: "MoviePage",
  components: {
    Carousel,
    CastItem,
    VideoItem,
    RecommendationItem,
  },
  data() {
    return {
      id: this.$route.params.id,
      backImageUrl: "",
      movie: {
        budget: null,
        revenue: null,
        genres: null,
        release_date: null,
        cast: null,
      },
      mainProductionCountry: "",
    };
  },
  computed: {
    durationTime() {
      let hours = parseInt(this.movie.runtime / 60),
        minutes = this.movie.runtime % 60;

      let timeObj = {
        hours: hours,
        minutes: minutes < 10 ? "0" + minutes : minutes,
      };

      return (
        (timeObj.hours > 0 ? timeObj.hours + "h" : "") + timeObj.minutes + "min"
      );
    },
    trailers() {
      return this.movie.videos
        ? this.movie.videos.filter((video) => video.type === "Trailer")
        : [];
    },
    recommendations() {
      return this.movie.recommendations ? this.movie.recommendations : [];
    },
    similars() {
      return this.movie.similar ? this.movie.similar.results : [];
    },
  },
  created() {
    getMovie(this.id).then((movie) => {
      this.movie = movie;

      if (movie.backdrop_path) {
        this.backImageUrl =
          getImageBaseUrl() + "original" + movie.backdrop_path;
      } else if (movie.poster_path) {
        this.backImageUrl = getImageBaseUrl() + "original" + movie.poster_path;
      } else {
        this.backImageUrl = "";
      }
    });
  },
  watch: {
    movie: function (newMovie) {
      this.mainProductionCountry = newMovie.production_countries[0] || "";
    },
    $route: function () {
      this.id = this.$route.params.id;

      getMovie(this.id).then((movie) => {
        this.movie = movie;
        console.log(this.movie);
        if (movie.backdrop_path) {
          this.backImageUrl =
            getImageBaseUrl() + "original" + movie.backdrop_path;
        } else if (movie.poster_path) {
          this.backImageUrl =
            getImageBaseUrl() + "original" + movie.poster_path;
        } else {
          this.backImageUrl = "";
        }
      });
    },
  },
};
</script>

<style scoped>
.movie-banner {
  height: 600px;
  width: 100%;
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  z-index: 0;
  filter: brightness(0.6);
  background-color: #555555;
  top: 0px;
}

.movie-wrapper {
  height: 100%;
  width: 100%;
  position: absolute;
  overflow-y: scroll;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0px;
  scroll-behavior: smooth;
}

.movie-info-banner {
  height: 600px;
  min-height: 600px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 2px 2px 3px black;
}

.movie-info {
  box-sizing: border-box;
  width: 95%;
}

.movie-title {
  font-size: 6em;
  text-align: left;
  font-weight: bold;
  overflow: visible;
  white-space: wrap;
}

.movie-tagline {
  font-size: 1.1em;
}

.movie-details {
  font-size: 1.1em;
  margin: 10px 0;
  display: flex;
  align-items: center;
}

.movie-description {
  font-size: 1.1em;
  margin: 10px 0;
}

.movie-rating {
  height: 50px;
  width: 100px;
  background-color: #282828;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.1em;
  box-shadow: 2px 2px 3px black;
  margin-top: 20px;
}

.movie-rating-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.movie-rating-icon {
  color: yellow;
  font-size: 1.5em;
  margin: 0 3px;
}

.movie-rating-vote-count {
  font-size: 0.65em;
  color: #dddddd;
}

.separator {
  white-space: pre-wrap;
}

.favorite-button {
  border: none;
  outline: none;
  background-color: transparent;
  position: absolute;
  bottom: 30px;
  right: 80px;
  font-size: 3em;
}

.favorited {
  color: #d20202;
}

.movie-info-body {
  box-sizing: border-box;
  padding: 25px 10px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #080808;
  clear: initial;
}

@media screen and (max-width: 450px) {
  .movie-banner {
    height: 500px;
    min-height: 500px;
    width: 100%;
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
    z-index: 0;
    filter: brightness(0.6);
  }

  .movie-info-banner {
    height: 500px;
    min-height: 500px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
  }
}
</style>