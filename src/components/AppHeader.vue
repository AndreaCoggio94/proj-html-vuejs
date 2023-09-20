<script>
import NavBar from "./header/NavBar.vue";
import HeaderCard from "./header/HeaderCard.vue";

export default {
  data() {
    return {};
  },
  components: {
    NavBar,
    HeaderCard,
  },
  props: {
    specialties: Array,
  },
};
</script>

<template>
  <div class="jumbotron">
    <img src="/image/rev-slider-main-home-img-03.jpg" alt="" />
    <!-- Navbar -->
    <NavBar />
    <!-- Jumbotron -->
    <div class="container-big team d-flex">
      <div class="button">Arrow</div>
      <div class="info">
        <h1>Our Team<span class="dot">.</span></h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam neque
          deleniti accusantium laboriosam cum eaque. Nesciunt, illo unde! Velit,
          vel.
        </p>
        <div class="btn">READ MORE</div>
        <div class="btn">PURCHASE</div>
      </div>
      <div class="button">Arrow</div>
    </div>
  </div>
  <!-- Specialties -->
  <div class="specialties container-big">
    <div class="container-small">
      <div class="line-center">
        <h2>Our specialties<span class="dot">.</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
      </div>
      <div class="d-flex">
        <HeaderCard
          v-for="card in specialties"
          :title="card.title"
          :cont="card.cont"
          :svg="card.svg"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.jumbotron {
  position: relative;

  .team {
    position: absolute;
    left: 0;
    right: 0;
    top: 40%;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    .info {
      p {
        width: 45%;
      }
    }
  }
}
.specialties {
  position: relative;
  background-color: white;
  top: -8rem;
  margin: 0 auto;
  text-align: center;

  .container-small {
    margin: 0 auto;
    padding: 5rem 0;
    .d-flex {
      justify-content: space-between;
    }
  }
}
</style>
