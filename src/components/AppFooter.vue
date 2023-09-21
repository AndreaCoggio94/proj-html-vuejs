<script>
import FooterForm from "./footer/FooterForm.vue";

export default {
  data() {
    return {
      logos: [
        {
          normal: "h4-clients-img-01",
          orange: "h4-clients-img-02",
          order: 5,
        },
        {
          normal: "h4-clients-img-03",
          orange: "h4-clients-img-04-1",
          order: 1,
        },
        {
          normal: "h4-clients-img-05",
          orange: "h4-clients-img-06-1",
          order: 2,
        },
        {
          normal: "h4-clients-img-07",
          orange: "h4-clients-img-08-1",
          order: 3,
        },
        {
          normal: "h4-clients-img-09",
          orange: "h4-clients-img-10-1",
          order: 4,
        },
      ],
    };
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
      <div class="col-6 contact">
        <div class="line">
          <h2>Contact us <span class="dot">.</span></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <FooterForm />
      </div>
      <div class="col-12">
        <div
          v-for="(logo, index) in logos"
          class="logo"
          :style="{ order: logo.order }"
        >
          <img
            class="active"
            :src="'/image/' + logo.normal + '.png'"
            :alt="logo.normal"
          />

          <img
            class="hidden"
            :src="'/image/' + logo.orange + '.png'"
            :alt="logo.orange"
          />
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
        <font-awesome-icon icon="fa-brands fa-linkedin-in" /><font-awesome-icon
          icon="fa-brands fa-facebook-f"
        /><font-awesome-icon class="icon" icon="fa-brands fa-twitter" />
      </div>
      <!-- Twitter -->
      <div class="footer-item col">
        <div class="footer-twitter">
          <h5 class="line">Twitter</h5>

          <div class="d-flex">
            <div class="twitter">
              <font-awesome-icon class="icon" icon="fa-brands fa-twitter" />
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
                perspiciatis, corrupti quae atque dolores soluta.
              </div>
            </div>
            <div class="twitter">
              <font-awesome-icon class="icon" icon="fa-brands fa-twitter" />
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
                perspiciatis, corrupti quae atque dolores soluta.
              </div>
            </div>
          </div>
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
            <li>
              <font-awesome-icon icon="fa-solid fa-location-dot" /> Lorem,
              ipsum.
            </li>
            <li>
              <font-awesome-icon icon="fa-solid fa-phone" /> Lorem, ipsum.
            </li>
            <li>
              <font-awesome-icon icon="fa-regular fa-envelope" /> Lorem, ipsum.
            </li>
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
      <p>
        Copyright Everlead<font-awesome-icon
          icon="fa-regular fa-copyright"
        />MikadoThemes
      </p>
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

    &.contact {
      .line {
        margin-bottom: 2rem;
      }
    }
  }

  .col-12 {
    display: flex;
    justify-content: space-between;
    padding: 4rem 0;
    img {
      width: 6rem;
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
      .footer-twitter {
        .d-flex {
          flex-direction: column;
          .twitter {
            display: flex;
            .icon {
              padding: 0.25rem;
              padding-right: 1rem;
            }
          }
        }

        // li {
        //   padding-left: 1rem;
        //   text-indent: -1rem;
        // }

        // li.twitter:before {

        //   // content: "\f099";
        //   font-family: "Font Awesome 6 brands";
        //   font-weight: 400;
        //   // padding-right: 5px;
        // }
      }
      .contact {
      }
    }
  }
  .copyright {
    background-color: #ff4612;
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
