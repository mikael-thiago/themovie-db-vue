<template>
  <div class="video-item">
    <iframe
      :title="video.name"
      width="100%"
      height="100%"
      :src="src"
      frameborder="0"
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "VideoItem",
  props: {
    video: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
  },
  computed: {
    src: function () {
      return "https://www.youtube.com/embed/" + this.video.key;
    },
  },
};
</script>

<style>
.video-item {
  width: 400px;
  min-width: 400px;
  height: 225px;
  margin: 0 10px;
}

@media screen and (max-width: 800px) {
  .video-item {
    width: 300px;
    min-width: 300px;
    height: 169px;
  }
}

@media screen and (max-width: 450px) {
  .video-item {
    width: 200px;
    min-width: 200px;
    height: 113px;
  }
}
</style>