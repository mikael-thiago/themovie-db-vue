<template>
  <section>
    <h1>{{title}}</h1>
    <div class="section-content">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: "Section",
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 90%;
  margin-bottom: 25px;
}

section > h1 {
  color: white;
  font-size: 3rem;
  font-weight: bold;
  text-align: start;
  width: 100%;
  margin-bottom: 25px;
}

/*.section-content {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 15px;
  row-gap: 15px;
}*/

.section-content {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>