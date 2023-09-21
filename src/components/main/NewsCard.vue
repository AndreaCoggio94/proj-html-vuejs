<script>
export default {
  data() {
    return {};
  },
  props: {
    image: String,
    title: String,
    desc: String,
    date: String,
    person: String,
    index: Number,
    activeIndex: Array,
  },
};
</script>

<template>
  <div
    class="news-card"
    :class="activeIndex.includes(index) ? 'active' : 'hidden'"
  >
    <img class="" :src="'/image/' + image" :alt="image" />
    <div class="card-body">
      <span> <font-awesome-icon icon="fa-regular fa-clock" /> {{ date }}</span
      ><span><font-awesome-icon icon="fa-regular fa-user" /> {{ person }}</span>
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">
        {{ desc }}
      </p>
      <a href="#" class="btn">READ MORE</a>
    </div>
    <div class="tag">
      <font-awesome-icon icon="fa-solid fa-tag" /> Business, Leading
    </div>
  </div>
</template>

<style lang="scss" scoped>
.news-card {
  width: 18rem;

  padding: 3rem 0 0;
  position: relative;
  &.hidden {
    display: none;
  }
  img {
    margin-bottom: 1rem;
  }

  .btn {
    padding: 0;
  }
  .tag {
    padding: 0.25rem 1rem;
    color: white;
    position: absolute;
    background-color: #ff4612;
    font-size: 0.6rem;
    right: 10px;
    top: 230px;
  }
}
</style>
