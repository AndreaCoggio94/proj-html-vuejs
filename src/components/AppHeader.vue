<script>
import NavBar from "./header/NavBar.vue";
import HeaderCard from "./header/HeaderCard.vue";

export default {
  data() {
    return {
      jumbotron: [
        {
          img: "/image/rev-slider-main-home-img-03.jpg",
        },

        {
          img: "/image/rev-slider-main-home-img-02.png",
        },
      ],
      jumbotronActiveIndex: 0,
    };
  },
  components: {
    NavBar,
    HeaderCard,
  },
  props: {
    specialties: Array,
  },
  methods: {
    prev() {
      if (this.jumbotronActiveIndex < 1) {
        this.jumbotronActiveIndex = 1;
      } else {
        this.jumbotronActiveIndex--;
      }
    },
    next() {
      if (this.jumbotronActiveIndex > 0) {
        this.jumbotronActiveIndex = 0;
      } else {
        this.jumbotronActiveIndex++;
      }
    },
  },
};
</script>

<template>
  <div class="jumbotron">
    <img
      v-for="(slide, index) in jumbotron"
      :class="jumbotronActiveIndex == index ? 'active' : 'hidden'"
      :src="slide.img"
      alt=""
    />
    <!-- Navbar -->
    <NavBar />
    <!-- Jumbotron -->
    <div class="container-big team d-flex">
      <div class="button prev" @click="prev">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          style="height: 32px"
          fill="#1e1c1c"
        >
          <path
            d="M4 15a1 1 0 001 1h19.586l-4.292 4.292a1 1 0 001.414 1.414l6-6a.99.99 0 00.292-.702V15c0-.13-.026-.26-.078-.382a.99.99 0 00-.216-.324l-6-6a1 1 0 00-1.414 1.414L24.586 14H5a1 1 0 00-1 1z"
          />
        </svg>
      </div>
      <div class="info">
        <h1>Our Team<span class="dot">.</span></h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam neque
          deleniti accusantium laboriosam cum eaque. Nesciunt, illo unde! Velit,
          vel.
        </p>
        <div class="btn">READ MORE</div>
        <div class="btn">PURCHASE</div>
      </div>
      <div class="button next" @click="next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          style="height: 32px"
          fill="#1e1c1c"
        >
          <path
            d="M4 15a1 1 0 001 1h19.586l-4.292 4.292a1 1 0 001.414 1.414l6-6a.99.99 0 00.292-.702V15c0-.13-.026-.26-.078-.382a.99.99 0 00-.216-.324l-6-6a1 1 0 00-1.414 1.414L24.586 14H5a1 1 0 00-1 1z"
          />
        </svg>
      </div>
    </div>
  </div>
  <!-- Specialties -->
  <slot></slot>
  <div class="specialties container-big">
    <div class="container-small">
      <div class="line-center">
        <h2>Our specialties<span class="dot">.</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
      </div>
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
  position: relative;
  .active {
    display: block;
  }
  .hidden {
    display: none;
  }
  .team {
    position: absolute;
    left: 0;
    right: 0;
    top: 40%;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    .info {
      p {
        width: 45%;
      }
    }
  }
}
.specialties {
  position: relative;
  background-color: white;
  top: -8rem;
  margin: 0 auto;
  text-align: center;

  .container-small {
    margin: 0 auto;
    padding: 5rem 0;
    .d-flex {
      justify-content: space-between;
    }
  }
}
</style>
