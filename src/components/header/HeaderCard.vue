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
  <div>
    <img :src="'/svg/' + svg" alt="" />
    <h4>{{ title }}</h4>
    <p>{{ cont }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
