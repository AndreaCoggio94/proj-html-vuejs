<script>
export default {
  data() {
    return {};
  },
  props: {
    svg: String,
    title: String,
    cont: String,
  },
};
</script>

<template>
  <div class="header-card">
    <img :src="'/svg/' + svg" alt="" />
    <h4>{{ title }}</h4>
    <p>{{ cont }}</p>
  </div>
</template>

<style lang="scss" scoped>
.header-card {
  text-align: center;

  img {
    width: 8rem;
  }
  p {
    width: 6rem;
  }
}
</style>
