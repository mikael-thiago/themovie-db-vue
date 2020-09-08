<template>
  <div class="search-root">
    <Section :title="`Resultados para ${query} - Página ${page}`">
      <MovieCard v-for="(movie, key) in searchResult.result" :key="key" :movie="movie" />
    </Section>

    <PagesLinksCarousel
      v-if="searchResult.pages > 1"
      :query="query"
      :numberOfPages="searchResult.pages"
    />
  </div>
</template>

<script>
import { getSearchResult } from "../../api-calls.js";

import Section from "@/components/Section.vue";
import MovieCard from "@/components/MovieCard.vue";
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
    Section,
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
</style>