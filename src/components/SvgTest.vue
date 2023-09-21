<script>
export default {
  data() {
    return {};
  },
};
</script>
<!-- 
    svg-6 arrow
    svg-5 white circle
    svg-9 arrow that goes up
 -->

<template>
  <div class="test">
    <img src="/svg/svg-9.svg" alt="" />
  </div>
</template>

<style lang="scss" scoped>
.test {
  background-color: black;
}
</style>

<template>
  <div class="slider">
    <div class="slider-container" ref="sliderContainer">
      <div
        class="slider-wrapper"
        :style="{ transform: `translateX(${sliderPosition}px)` }"
      >
        <!-- Your card components go here -->
        <div v-for="(card, index) in cards" :key="index" class="card">
          <!-- Card content -->
        </div>
      </div>
    </div>
    <button @click="prevSlide">Previous</button>
    <button @click="nextSlide">Next</button>
  </div>
</template>
