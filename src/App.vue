<template>
  <div id="app">
    <Topbar />
    <Sidebar />
    <div @click="deactivateSidebar" style="height: 100%;">
      <router-view></router-view>
    </div>
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
  methods: {
    deactivateSidebar() {
      if (this.$store.state.sidebar) this.$store.commit("deactivateSidebar");
    },
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
  color: #aaaaaa;
  background-color: #010101;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-y: scroll;
  background-color: inherit;
  color: inherit;
}
</style>
