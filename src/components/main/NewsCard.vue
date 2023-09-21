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
    activeIndex: Number,
  },
};
</script>

<!-- :class="activeIndex.includes(index) ? 'active' : 'hidden'" -->
<template>
  <div class="news-card">
    <img class="" :src="'/image/' + image" :alt="image" />
    <div class="card-body">
      <span>
        <font-awesome-icon class="icon" icon="fa-regular fa-clock" />

        <p>{{ date }}</p> </span
      ><span
        ><font-awesome-icon class="icon" icon="fa-regular fa-user" />
        <p>
          {{ person }}
        </p>
      </span>
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
  z-index: 2;
  padding: 3rem 0 0;
  position: relative;
  .card-body {
    .icon {
      margin-right: 0.25rem;
    }
    p {
      display: inline-block;
      margin-right: 0.25rem;
    }
  }
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
