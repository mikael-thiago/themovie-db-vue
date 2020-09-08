<template>
  <div id="app">
    <Topbar />
    <Sidebar />
    <router-view></router-view>
  </div>
</template>

<script>
import Topbar from "./components/Topbar.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "App",
  components: {
    Topbar,
    Sidebar,
  },
};
</script>

<style>
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  font-size: 12px;
  overflow: hidden;
  background-color: #111111;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-y: scroll;
  background-color: inherit;
}
</style>
