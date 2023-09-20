<script>
import FooterForm from "./footer/FooterForm.vue";

export default {
  data() {
    return {};
  },
  components: {
    FooterForm,
  },
  methods: {
    questa(event) {
      console.log(event);
    },
  },
};
</script>

<template>
  <!-- contact us section -->
  <div class="container">
    <div class="contact-us">
      <div class="col-6 world">
        <img src="/image/h1-contact-rev-01.png" alt="" />

        <img class="new-york" src="/image/h1-contact-rev-02.png" alt="" />
        <img class="helsinki" src="/image/h1-contact-rev-02.png" alt="" />
        <img class="sydney" src="/image/h1-contact-rev-02.png" alt="" />
        <div class="info">
          <h6>New York Coaching</h6>
          <p>READ MORE</p>
        </div>
      </div>
      <div class="col-6">
        <div class="line">
          <h2>Contact us <span class="dot">.</span></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <FooterForm />
      </div>
      <div class="col-12">
        <!-- <span v-for="(n, index) in 10">
          <img
            :src="n % 2 ? '/image/h4-clients-img-0' + n + '.png' : ''"
            @click="questa"
            alt=""
          />
        </span> -->
        <!-- <img v-for="n in 10" src="" alt="" /> -->
        <div class="logo">
          <img class="active" src="/image/h4-clients-img-03.png" alt="logo" />

          <img class="hidden" src="/image/h4-clients-img-04-1.png" alt="logo" />
        </div>
        <div class="logo">
          <img class="active" src="/image/h4-clients-img-05.png" alt="logo" />
          <img class="hidden" src="/image/h4-clients-img-06-1.png" alt="logo" />
        </div>
        <div class="logo">
          <img class="active" src="/image/h4-clients-img-07.png" alt="logo" />
          <img class="hidden" src="/image/h4-clients-img-08-1.png" alt="logo" />
        </div>
        <div class="logo">
          <img class="active" src="/image/h4-clients-img-09.png" alt="logo" />
          <img class="hidden" src="/image/h4-clients-img-10-1.png" alt="logo" />
        </div>
        <div class="logo">
          <img class="active" src="/image/h4-clients-img-01.png" alt="logo" />
          <img class="hidden" src="/image/h4-clients-img-02.png" alt="logo" />
        </div>
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

  .logo {
    .hidden {
      display: none;
    }

    &:hover {
      .active {
        display: none;
      }
      .hidden {
        display: block;
      }
    }
  }
  .col-6 {
    &.world {
      position: relative;

      .info {
        background-color: white;
        position: absolute;
        top: 150px;
        left: 150px;
        padding: 0.25rem 1rem;
        box-shadow: 0.25rem 0.25rem 1rem rgba(0, 0, 0, 0.218);
      }

      img {
        width: 100%;
        padding: 2rem;

        &.new-york,
        &.sydney,
        &.helsinki {
          width: 5rem;
        }

        &.new-york {
          position: absolute;
          top: 90px;
          left: 120px;
        }
        &.sydney {
          position: absolute;
          top: 195px;
          left: 400px;
        }
        &.helsinki {
          position: absolute;
          top: 60px;
          left: 250px;
        }
      }
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .container {
    padding: 4rem 0;
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
  .copyright {
    background-color: orange;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    p {
      margin: 0;
    }
  }
}
</style>
