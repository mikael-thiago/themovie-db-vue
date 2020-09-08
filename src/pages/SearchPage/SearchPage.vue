<template>
  <div class="search-root">
    <section>
      <h1 class="section-title">{{"Resultados para "+query+" - Página "+page}}</h1>
      <div class="section-content">
        <MovieCard v-for="(movie, key) in searchResult.result" :key="key" :movie="movie" />
      </div>
    </section>
    <PagesLinksCarousel :query="query" :numberOfPages="searchResult.pages" />
  </div>
</template>

<script>
import { getSearchResult } from "../../api-calls.js";
import MovieCard from "../../components/MovieCard.vue";
import PagesLinksCarousel from "./PagesLinksCarousel.vue";

export default {
  name: "SearchPage",
  data() {
    return {
      query: this.$route.params.query,
      page: this.$route.params.page,
      searchResult: { results: [], pages: 0 },
    };
  },
  created() {
    getSearchResult(this.query, this.page).then((searchResponse) => {
      this.searchResult = {
        result: searchResponse.results,
        pages: searchResponse.total_pages,
      };
    });
  },
  watch: {
    $route: function () {
      this.query = this.$route.params.query;
      this.page = this.$route.params.page;

      getSearchResult(this.query, this.page).then((searchResponse) => {
        console.log(searchResponse.results);

        this.searchResult = {
          result: searchResponse.results,
          pages: searchResponse.total_pages,
        };
      });
    },
  },
  components: {
    MovieCard,
    PagesLinksCarousel,
  },
};
</script>

<style scoped>
.search-root {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  padding-top: 60px;
}

section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 95%;
  margin-bottom: 25px;
}

.section-title {
  color: white;
  font-size: 3rem;
  font-weight: bold;
  text-align: start;
  width: 100%;
  margin-bottom: 25px;
}

.section-content {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  column-gap: 15px;
  row-gap: 15px;
}
</style>