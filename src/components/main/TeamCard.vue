<script>
export default {
  data() {
    return {};
  },
  props: {
    name: String,
    role: String,
    image: String,
    activeIndex: Number,
    desc: String,
    index: Number,
  },
};
</script>

<template>
  <div :class="activeIndex == index ? 'active' : 'hidden'">
    <img :src="'/image/' + image + '.jpg'" :alt="image" />
    <div class="card">
      <h3 class="card-name">{{ name }}</h3>
      <address class="line">{{ role }}</address>
      <p>
        {{ desc }}
      </p>
      <font-awesome-icon icon="fa-brands fa-linkedin-in" /><font-awesome-icon
        icon="fa-brands fa-facebook-f"
      /><font-awesome-icon class="icon" icon="fa-brands fa-twitter" />
    </div>
    <div class="button prev" @click="$emit('prev')">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        style="height: 32px"
        fill="#1e1c1c"
      >
        <path
          d="M4 15a1 1 0 001 1h19.586l-4.292 4.292a1 1 0 001.414 1.414l6-6a.99.99 0 00.292-.702V15c0-.13-.026-.26-.078-.382a.99.99 0 00-.216-.324l-6-6a1 1 0 00-1.414 1.414L24.586 14H5a1 1 0 00-1 1z"
        />
      </svg>
    </div>
    <div class="button next" @click="$emit('next')">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        style="height: 32px"
        fill="#1e1c1c"
      >
        <path
          d="M4 15a1 1 0 001 1h19.586l-4.292 4.292a1 1 0 001.414 1.414l6-6a.99.99 0 00.292-.702V15c0-.13-.026-.26-.078-.382a.99.99 0 00-.216-.324l-6-6a1 1 0 00-1.414 1.414L24.586 14H5a1 1 0 00-1 1z"
        />
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  width: 600px;
}
.card {
  position: absolute;
  top: 90px;
  left: 500px;
  padding: 2rem;
  border-radius: 0;
  border: none;
  box-shadow: 0.25rem 0.25rem 1rem rgba(0, 0, 0, 0.071);
}

.button {
  background-color: #ff4612;
  display: inline-block;
  position: absolute;
  &.prev {
    bottom: 0;
    left: 0;
  }
  &.next {
    bottom: 0;
    left: 40px;
  }
}
</style>
