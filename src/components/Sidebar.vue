<template>
  <div :class="{'sidebar': true, 'deactivated': !$store.state.sidebar}">
    <div class="sidebar-header">
      <button class="sidebar-button" @click="deactivateSidebar">
        <i class="fa fa-bars"></i>
      </button>
    </div>
    <div class="sidebar-body">
      <nav class="sidebar-nav">
        <ul>
          <router-link
            to="/"
            tag="li"
            class="sidebar-item"
            active-class="sidebar-item-active"
            exact
          >
            <span class="sidebar-item-icon glyphicon glyphicon-home"></span>
          </router-link>
          <router-link
            to="/favorites"
            tag="li"
            class="sidebar-item"
            active-class="sidebar-item-active"
          >
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
    deactivateSidebar() {
      this.$store.commit("deactivateSidebar");
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
  max-width: 60px;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
  transition: 200ms ease all;
}

.sidebar:hover {
  background-color: rgba(0, 0, 0, 1);
}

.deactivated {
  transform: translateX(-100%);
}

.sidebar-header {
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-left: 20px;
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
  font-size: 20px;
  transition: 200ms ease all;
}

.sidebar-item-active {
  color: white;
  font-size: 25px;
}

.sidebar-item-icon {
  color: inherit;
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
  font-size: 25px;
  color: white;
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