<template>
  <div class="search-pages-links">
    <button class="search-pages-links-controller" @click="scrollLeft">
      <span class="glyphicon glyphicon-chevron-left"></span>
    </button>
    <div class="search-pages-links-wrapper" ref="page-links">
      <router-link
        v-for="pageNumber in pagesNumbersArray"
        :key="pageNumber"
        :to="`/search/${query}/${pageNumber}`"
      >{{pageNumber}}</router-link>
    </div>
    <button class="search-pages-links-controller" @click="scrollRight">
      <span class="glyphicon glyphicon-chevron-right"></span>
    </button>
  </div>
</template>

<script>
export default {
  name: "PagesLinksCarousel",
  props: {
    query: String,
    numberOfPages: Number,
  },
  methods: {
    scrollLeft: function () {
      this.$refs["page-links"].scrollLeft -= 200;
    },
    scrollRight: function () {
      this.$refs["page-links"].scrollLeft += 200;
    },
  },
  computed: {
    pagesNumbersArray: function () {
      let arr = [];

      for (var i = 1; i <= this.numberOfPages; i++) arr.push(i);

      return arr;
    },
  },
};
</script>

<style scoped>
.search-pages-links {
  height: 50px;
  width: 95%;
  margin: 0 2.5%;

  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
}

.search-pages-links-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  scroll-behavior: smooth;
  overflow: hidden;
  width: min-content;
  max-width: 60%;
}

.search-pages-links a {
  font-size: 1em;
  flex-shrink: 0;
  flex-grow: 0;
  color: white;
  font-weight: bold;
  text-decoration: none;
  height: 50%;
  width: 30px;
  text-align: center;
  margin: 0 5px;
  align-self: center;
}

.search-pages-links-controller {
  border: none;
  outline: none;
  font-size: 1.2em;
  color: white;
  background-color: transparent;
}
</style>