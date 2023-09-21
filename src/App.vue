<script>
import { store } from "./data/store";

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

// debug
import SvgTest from "./components/SvgTest.vue";

export default {
  data() {
    return {
      store,
      specialties: [
        {
          title: "Knowing",
          cont: "Lorem ipsum dolor sit amet, quis consect ",
          svg: "svg-0.svg",
        },
        {
          title: "Selling",
          cont: "Lorem ipsum dolor sit amet, quis consect ",
          svg: "svg-1.svg",
        },
        {
          title: "Learning",
          cont: "Lorem ipsum dolor sit amet, quis consect ",
          svg: "svg-2.svg",
        },
        {
          title: "Contact",
          cont: "Lorem ipsum dolor sit amet, quis consect ",
          svg: "svg-3.svg",
        },
      ],
    };
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    // SvgTest,
  },
};
</script>

<template>
  <AppHeader :specialties="specialties">
    <div class="sticky">
      <a href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          style="height: 32px"
          fill="#fff"
        >
          <path
            d="M4 15a1 1 0 001 1h19.586l-4.292 4.292a1 1 0 001.414 1.414l6-6a.99.99 0 00.292-.702V15c0-.13-.026-.26-.078-.382a.99.99 0 00-.216-.324l-6-6a1 1 0 00-1.414 1.414L24.586 14H5a1 1 0 00-1 1z"
          />
        </svg>
      </a>
    </div>
  </AppHeader>
  <AppMain />
  <AppFooter />

  <!-- <SvgTest /> -->
</template>

<style lang="scss">
.sticky {
  position: sticky;
  top: 90%;
  left: 95%;
  width: 50px;
  z-index: 4;
  a {
    padding: 2px;
    background-color: #fafafa;
    border-radius: 50px;
    display: inline-block;
    svg {
      transform: rotate(270deg);
      scale: 0.8;
      fill: #ff4612;
      display: block;
      margin: auto;
    }
  }
}
</style>
