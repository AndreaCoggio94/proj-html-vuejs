<script>
import NavBar from "./NavBar.vue";
import HeaderCard from "./HeaderCard.vue";

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
    <!-- Navbar -->
    <NavBar />
    <!-- Jumbotron -->
    <div class="container-fluid d-flex">
      <div class="button"></div>
      <div class="team">
        <h1>Our Team <span class="dot">.</span></h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam neque
          deleniti accusantium laboriosam cum eaque. Nesciunt, illo unde! Velit,
          vel.
        </p>
        <div class="btn">READ MORE</div>
        <div class="btn">PURCHASE</div>
      </div>
      <div class="button"></div>
    </div>
  </div>
  <!-- Specialties -->
  <div class="container-fluid">
    <div class="specialties">
      <h2>Our specialties <span class="dot">.</span></h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
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
  height: 500px;
  background-color: aquamarine;
}
</style>
