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
  <!-- contact us section -->
  <div class="container">
    <div class="contact-us">
      <div class="col-6">
        <img src="/image/h1-contact-rev-01.png" alt="" />
      </div>
      <div class="col-6">
        <h2>Contact us <span class="dot">.</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <FooterForm />
      </div>
      <div class="col-12">
        <p>svg icons</p>
      </div>
    </div>
  </div>
  <!-- footer -->
  <footer>
    <div class="container">
      <div class="footer-item">Lorem ipsum dolor sit amet.</div>
      <div class="footer-item">Lorem ipsum dolor sit amet.</div>
      <div class="footer-item">Lorem ipsum dolor sit amet.</div>
      <div class="footer-item">Lorem ipsum dolor sit amet.</div>
    </div>
    <div class="copyright">
      <p>Copyright Everlead@MikadoThemes</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.contact-us {
  display: flex;
  flex-wrap: wrap;

  img {
    width: 100%;
    padding: 0.5rem;
  }
}

footer {
  background-color: black;
  color: white;
  .container {
    display: flex;
    justify-content: space-between;
    .footer-item {
      height: 100px;
    }
  }
  .copyright {
    background-color: orange;
    text-align: center;
  }
}
</style>
