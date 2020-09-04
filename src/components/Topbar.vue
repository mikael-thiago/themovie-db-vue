<template>
  <header class="topbar">
    <button class="sidebar-button">
      <i></i>
    </button>
    <div class="input-container">
      <i></i>
      <input type="text" placeholder="Busque aqui seus filmes" class="search-input" />
    </div>
  </header>
</template>

<script>
export default {
  name: "Topbar",
};
</script>

<style scoped>
.topbar {
  position: absolute;
  height: 75px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  background-color: transparent;
  box-sizing: border-box;
}

.input-container {
  display: flex;
  height: 80%;
  background-color: white;
  border-radius: 16px;
}

.search-input {
  color: black;
  border: none;
  outline: none;
}
</style>