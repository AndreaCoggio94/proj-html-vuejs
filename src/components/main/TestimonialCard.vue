<script>
export default {
  data() {
    return {};
  },
  props: {
    name: String,
    desc: String,
    img: String,
    activeIndex: Number,
    index: Number,
  },
};
</script>

<template>
  <div
    class="carousel-card"
    :class="activeIndex === index ? 'active' : 'hidden'"
  >
    <img :src="'/image/' + img" :alt="img" />
    <h4>{{ name }}</h4>
    <p>
      {{ desc }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.carousel-card {
  text-align: center;
  color: white;
  img {
    width: 6rem;
  }
  &.hidden {
    display: none;
  }
  p {
    width: 40%;
    margin: auto;
  }
}
</style>
