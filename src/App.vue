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
  <AppHeader :specialties="store.specialties" />
  <AppMain />
  <AppFooter />

  <!-- <SvgTest /> -->
</template>

<style lang="scss"></style>
