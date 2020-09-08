<template>
  <header class="topbar">
    <button class="sidebar-button" @click="toggleSidebar">
      <span class="fa fa-bars"></span>
    </button>
    <div class="search-input-container">
      <i class="search-input-icon"></i>
      <input
        type="text"
        placeholder="Busque aqui seus filmes"
        @keyup="changeSearchQuery"
        class="search-input"
      />
    </div>
  </header>
</template>

<script>
export default {
  name: "Topbar",
  methods: {
    changeSearchQuery: function (event) {
      this.$router.push(`/search/${event.target.value}/1`);
    },
    toggleSidebar: function () {
      const sdbar = document.getElementsByClassName("sidebar")[0];

      if (!sdbar.style.transform) {
        sdbar.style.transform = "translateX(0)";
      } else {
        sdbar.style.transform = "";
      }
    },
  },
};
</script>

<style scoped>
.topbar {
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 3;
  height: 60px;
  position: absolute;
  box-sizing: border-box;
  padding: 0 20px;
}

.search-input {
  border: none;
  outline: none;
  width: 100%;
}

.search-input-container {
  width: 250px;
  height: 60%;
  border-radius: 20px;
  border: none;
  outline: none;
  color: black;
  padding: 0 20px;
  margin: 0 30px;
  background-color: white;
  display: flex;
  align-items: center;
}

.search-input-icon {
  margin: 0 5px 0 0;
  font-size: 1.2em;
}

.sidebar-button {
  background-color: transparent;
  color: white;
  border: none;
  outline: none;
}
</style>