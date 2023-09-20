<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="news-card">
    <img class="" src="/image/h1-blog-img-04.jpg" alt="Card image cap" />
    <div class="card-body">
      <span> icon May 5, 2019</span><span>icon Amanda Doe</span>
      <h5 class="card-title">Card title</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
        <!-- text.substring(0, 8) + "..."; -->
      </p>
      <a href="#" class="btn">READ MORE</a>
    </div>
    <div class="tag">icon Business, Leading</div>
  </div>
</template>

<style lang="scss" scoped>
.news-card {
  width: 18rem;

  padding: 3rem 0 0;
  position: relative;

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
