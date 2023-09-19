<script>
import FooterForm from "./footer/FooterForm.vue";

export default {
  data() {
    return {};
  },
  components: {
    FooterForm,
  },
};
</script>

<template>
  <div class="container-fluid">
    <div class="contact-us">
      <div class="col-6">
        <img src="/image/h1-contact-rev-01.png" alt="" />
      </div>
      <div class="col-6">
        <FooterForm />
      </div>
      <div class="col-12">
        <p>svg icons</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-us {
  display: flex;
  flex-wrap: wrap;
}
</style>
