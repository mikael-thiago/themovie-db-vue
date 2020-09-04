<template>
  <div class="sidebar">
    <div class="sidebar-header"></div>
    <div class="sidebar-body">
      <nav class="sidebar-nav"></nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style scoped>
.sidebar {
  position: absolute;
  left: 0;
  width: 30vw;
  height: 100vh;
  max-width: 300px;
  background-color: #333333;

  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
}
</style>