<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <button class="sidebar-button" @click="toggleSidebar">
        <span class="fa fa-bars"></span>
      </button>
    </div>
    <div class="sidebar-body">
      <nav class="sidebar-nav">
        <ul>
          <router-link to="/" tag="li" class="sidebar-item">
            <span class="sidebar-item-icon glyphicon glyphicon-home"></span>
          </router-link>
          <router-link to="/favorites" tag="li" class="sidebar-item">
            <span class="sidebar-item-icon glyphicon glyphicon-heart"></span>
          </router-link>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  methods: {
    toggleSidebar: function () {
      const sdbar = document.getElementsByClassName("sidebar")[0];

      if (!sdbar.style.transform) {
        sdbar.style.transform = "translateX(0)";
      } else {
        sdbar.style.transform = "";
      }

      this.activated = !this.activated;
    },
  },
};
</script>

<style scoped>
.sidebar {
  position: absolute;
  left: 0;
  width: 10vw;
  height: 100vh;
  max-width: 75px;
  background-color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
  transform: translateX(-100%);
  transition: 200ms ease all;
}

.sidebar-header {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sidebar-body {
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  cursor: pointer;
}

.sidebar-item {
  width: 98%;
  height: 50px;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 0 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sidebar-item-icon {
  font-size: 20px;
  color: white;
}

.sidebar-item a {
  width: 100%;
  height: 100%;
  min-width: 100%;
  min-height: 100%;
  color: white;
  text-decoration: none;
}

.sidebar-item:hover {
  background-color: #666666;
}
</style>

<style >
.sidebar-button {
  background-color: transparent;
  color: white;
  border: none;
  outline: none;
  font-size: 20px;
}
</style>