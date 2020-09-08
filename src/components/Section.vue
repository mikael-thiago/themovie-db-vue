<template>
  <section>
    <div class="section-title">{{title}}</div>
    <slot />
  </section>
</template>

<script>
export default {
  name: "Section",
};
</script>

<style scoped>
section {
  width: 95%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  column-gap: 15px;
  row-gap: 15px;
}
</style>