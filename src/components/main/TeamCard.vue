<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <img src="/image/h1-img-01.jpg" alt="" />
  <div class="card">
    <h3 class="card-name">name</h3>
    <address class="line">role</address>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus nisi
      voluptatum quo fuga fugit nulla nesciunt, iste eos tempore impedit
      voluptates debitis modi atque facere, corrupti earum, iusto laborum? A.
    </p>
    <span> instagram facebook twitter </span>
  </div>
  <div class="button prev">arrow</div>
  <div class="button next">arrow</div>
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
  background-color: orange;
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
