<script>
import NavBar from "./NavBar.vue";

export default {
  data() {
    return {};
  },
  components: {
    NavBar,
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
        <div class="element">
          <svg></svg>
          <h4>Lorem</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
        </div>
        <div class="element">
          <svg></svg>
          <h4>Lorem</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
        </div>
        <div class="element">
          <svg></svg>
          <h4>Lorem</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
        </div>
        <div class="element">
          <svg></svg>
          <h4>Lorem</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.jumbotron {
}
</style>
