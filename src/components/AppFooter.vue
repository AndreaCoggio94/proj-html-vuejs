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
        <div class="line">
          <h2>Contact us <span class="dot">.</span></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <FooterForm />
      </div>
      <div class="col-12">
        <img src="/image/h4-clients-img-03.png" alt="logo" />
        <img src="/image/h4-clients-img-05.png" alt="logo" />
        <img src="/image/h4-clients-img-07.png" alt="logo" />
        <img src="/image/h4-clients-img-09.png" alt="logo" />
        <img src="/image/h4-clients-img-01.png" alt="logo" />
      </div>
    </div>
  </div>
  <!-- footer -->
  <footer>
    <div class="container">
      <!-- About -->
      <div class="footer-item col">
        <h5 class="line">About</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam minus
          neque cum necessitatibus in harum quo beatae aliquid earum. Voluptatem
          nulla suscipit sint maiores placeat optio, animi adipisci praesentium
          delectus.
        </p>
        <span>icons</span>
      </div>
      <!-- Twitter -->
      <div class="footer-item col">
        <div class="twitter">
          <h5 class="line">Twitter</h5>
          <ul>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
              perspiciatis, corrupti quae atque dolores soluta.
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
              perspiciatis, corrupti quae atque dolores soluta.
            </li>
          </ul>
        </div>
      </div>
      <!-- important links -->
      <div class="footer-item col">
        <h5 class="line">Important links</h5>
        <ul>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
        </ul>
      </div>
      <!-- Contact me -->
      <div class="footer-item col">
        <div class="contact">
          <h5 class="line">Contact me</h5>
          <ul>
            <li>icon Lorem, ipsum.</li>
            <li>icon Lorem, ipsum.</li>
            <li>icon Lorem, ipsum.</li>
          </ul>
          <form action="#">
            <div class="form-row d-flex">
              <input type="text" class="form-control" placeholder="Your name" />
              <button class="btn btn-success" type="submit">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
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
  padding-top: 4rem;
  .col-6 {
    img {
      width: 100%;
      padding: 2rem;
    }
  }

  .col-12 {
    display: flex;
    justify-content: space-between;
    padding: 4rem 0;
    img {
      width: 8rem;
    }
  }
}

footer {
  background-color: black;
  color: white;
  .container {
    display: flex;
    justify-content: space-between;
    .footer-item {
      .twitter {
        li {
          padding-left: 1rem;
          text-indent: -1rem;
        }

        li:before {
          content: "X";
          padding-right: 5px;
        }
      }
      .contact {
      }
    }
  }
}
.copyright {
  background-color: orange;
  text-align: center;
}
</style>
