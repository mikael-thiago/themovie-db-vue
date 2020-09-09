<template>
  <div class="cast-item">
    <div class="cast-photo">
      <img :src="imageUrl" alt />
    </div>

    <div class="cast-text">
      <div class="cast-name">{{cast.name}}</div>
      <div class="cast-character">{{cast.character}}</div>
    </div>
  </div>
</template>

<script>
import { getImageBaseUrl } from "../../../api-config.js";

export default {
  name: "CastItem",
  props: {
    cast: {
      type: Object,
      required: true,
    },
  },
  computed: {
    imageUrl() {
      if (this.cast.profile_path)
        return getImageBaseUrl() + "/w185" + this.cast.profile_path;

      return "";
    },
  },
};
</script>

<style scoped>
.cast-item {
  height: min-content;
  width: 100px;
  margin: 0 10px;
}

.cast-photo {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: #555555;
}

.cast-photo img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.cast-text {
  text-align: center;
  font-size: 1.2rem;
}

.cast-name {
  font-weight: bold;
}

.cast-character {
  color: #cccccc;
}

@media screen and (max-width: 800px) {
  .cast-item {
    width: 85px;
  }

  .cast-photo {
    width: 85px;
    height: 85px;
  }
}

@media screen and (max-width: 450px) {
  .cast-item {
    width: 70px;
  }

  .cast-photo {
    width: 70px;
    height: 70px;
  }
}
</style>