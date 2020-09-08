<template>
  <section class="carousel">
    <div class="carousel-span">
      <div class="carousel-title">{{title}}</div>
    </div>
    <button
      class="carousel-controller"
      @click="() => { this.$refs['content'].scrollLeft -= scrollWidth }"
      :style="{ position: 'absolute', left: '0', zIndex: 2, display: (isOverflowed ? '' : 'none')}"
    >
      <span class="glyphicon glyphicon-chevron-left"></span>
    </button>

    <div class="carousel-content" ref="content">
      <slot />
    </div>

    <button
      class="carousel-controller"
      @click="() => { this.$refs['content'].scrollLeft += scrollWidth }"
      :style="{ position: 'absolute', right: '0', zIndex: 2, display: (isOverflowed ? '' : 'none') }"
    >
      <span class="glyphicon glyphicon-chevron-right"></span>
    </button>
  </section>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      scrollWidth: 0,
      isOverflowed: false,
    };
  },
  props: {
    title: {
      type: String,
    },
  },
  mounted() {
    const item = this.$refs["content"].children.item(0);

    if (item) {
      const computedStyle = getComputedStyle(item);
      const itemSize =
        parseInt(computedStyle.width) +
        parseInt(computedStyle.marginLeft) +
        parseInt(computedStyle.marginRight);

      this.scrollWidth =
        itemSize * parseInt(this.$refs["content"].clientWidth / itemSize);
    }

    this.isOverflowed =
      this.$refs["content"].scrollWidth > this.$refs["content"].clientWidth;
  },
};
</script>

<style scoped>
.carousel {
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 0;
  position: relative;
  color: white;
}

.carousel-span {
  display: flex;
  justify-content: space-between;
}

.carousel-title {
  font-size: 1.3em;
  font-weight: bold;
  margin: 10px 0;
}

.carousel-content {
  margin: 10px 0;
  width: 100%;
  height: min-content;
  min-height: 2.5em;
  position: relative;
  display: flex;
  flex-basis: auto;
  overflow-x: hidden;
  overflow-y: hidden;
  scroll-behavior: smooth;
}

.carousel-controller {
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 2.5em;
  transition: 0.2s;
  opacity: 0.7;
}

.carousel-controller:hover {
  font-size: 2.7em;
  opacity: 1;
  color: white;
}
</style>