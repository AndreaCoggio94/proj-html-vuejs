<script>
import TeamCard from "./main/TeamCard.vue";
import NewsCard from "./main/NewsCard.vue";
import TestimonialCard from "./main/TestimonialCard.vue";

export default {
  data() {
    return {
      events: [
        {
          date: "07",
          day: "Jan, 2022",
          completeDate: "Jan, 7 2022",
          what: "Melbourne Coaching",
          hour: "9:00 am - 5:00 pm",
          location: "Cambridge, MA 02138, USA",
        },
        {
          date: "11",
          day: "Jan, 2022",
          completeDate: "Jan, 11 2022",
          what: "Melbourne Coaching",
          hour: "9:00 am - 5:00 pm",
          location: "Cambridge, MA 02138, USA",
        },
        {
          date: "21",
          day: "Jan, 2022",
          completeDate: "Jan, 21 2022",
          what: "Melbourne Coaching",
          hour: "9:00 am - 5:00 pm",
          location: "Cambridge, MA 02138, USA",
        },
      ],
      teamCard: [
        {
          name: "Jason Bickford",
          role: "Founder and Executive Director",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus nisi voluptatum quo fuga fugit nulla nesciunt, iste eos tempore impedit voluptates debitis modi atque facere, corrupti earum, iusto laborum? A.",
          image: "h1-img-01",
        },
        {
          name: "Arwin Helper",
          role: "Co-Founder and communication expert",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus nisi voluptatum quo fuga fugit nulla nesciunt, iste eos tempore impedit voluptates debitis modi atque facere, corrupti earum, iusto laborum? A.",
          image: "h1-img-02",
        },
        {
          name: "Lorem Ipsum",
          role: "Founder and lorem ipsum master",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus nisi voluptatum quo fuga fugit nulla nesciunt, iste eos tempore impedit voluptates debitis modi atque facere, corrupti earum, iusto laborum? A.",
          image: "h1-img-03",
        },
      ],
      teamCardActiveIndex: 0,
      newsActiveIndex: 0,
      news: [
        {
          image: "h1-blog-img-04.jpg",
          title: "Team Building",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, laudantium voluptate enim mollitia pariatur ipsam.",
          date: "May 5, 2019",
          person: "Amanda Doe",
        },
        {
          image: "h1-blog-img-01.jpg",
          title: "New Business Day",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, laudantium voluptate enim mollitia pariatur ipsam.",
          date: "May 5, 2019",
          person: "Amanda Doe",
        },
        {
          image: "h1-blog-img-03.jpg",
          title: "Next Investment",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, laudantium voluptate enim mollitia pariatur ipsam.",
          date: "May 5, 2019",
          person: "Amanda Doe",
        },
        {
          image: "h1-blog-img-02.jpg",
          title: "Lorem Ipsum",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, laudantium voluptate enim mollitia pariatur ipsam.",
          date: "May 5, 2019",
          person: "Amanda Doe",
        },
      ],
      testimonialsActiveIndex: 0,
      testimonials: [
        {
          name: "Cynthia Clark",
          desc: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cupiditate magni veritatis nisi quae aliquid quaerat, perspiciatis, quos perferendis, quisquam earum enim harum quis provident expedita iure optio soluta quo!"',
          img: "h3-img-04.png",
        },
        {
          name: "Cynthia Clark",
          desc: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cupiditate magni veritatis nisi quae aliquid quaerat, perspiciatis, quos perferendis, quisquam earum enim harum quis provident expedita iure optio soluta quo!"',
          img: "h3-img-07.png",
        },
        {
          name: "Cynthia Clark",
          desc: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cupiditate magni veritatis nisi quae aliquid quaerat, perspiciatis, quos perferendis, quisquam earum enim harum quis provident expedita iure optio soluta quo!"',
          img: "h3-img-08.png",
        },
      ],

      creativeInfo: [
        {
          name: "Mentorship",
          percentage: 78,
        },
        {
          name: "Education",
          percentage: 95,
        },
        {
          name: "Learning",
          percentage: 65,
        },
        {
          name: "Motivation",
          percentage: 83,
        },
      ],
    };
  },
  computed: {
    newsDisplayedCards() {
      const startIndex = this.newsActiveIndex;
      return [
        this.news[startIndex],
        this.news[(startIndex + 1) % this.news.length],
        this.news[(startIndex + 2) % this.news.length],
      ];
    },
  },

  components: {
    TeamCard,
    NewsCard,
    TestimonialCard,
  },
  methods: {
    // team card
    teamCardPrev() {
      if (this.teamCardActiveIndex < 1) {
        this.teamCardActiveIndex = this.teamCard.length - 1;
      } else {
        this.teamCardActiveIndex--;
      }
    },
    teamCardNext() {
      if (this.teamCardActiveIndex == this.teamCard.length - 1) {
        this.teamCardActiveIndex = 0;
      } else {
        this.teamCardActiveIndex++;
      }
    },
    // news card
    newsCardPrev() {
      if (this.newsActiveIndex === 0) {
        this.newsActiveIndex = this.news.length - 1;
      } else {
        this.newsActiveIndex--;
      }
    },
    newsCardNext() {
      if (this.newsActiveIndex === this.news.length - 1) {
        this.newsActiveIndex = 0;
      } else {
        this.newsActiveIndex++;
      }
    },
    // testimonials
    testimonialsPrev() {
      if (this.testimonialsActiveIndex < 1) {
        this.testimonialsActiveIndex = this.testimonials.length - 1;
      } else {
        this.testimonialsActiveIndex--;
      }
    },

    testimonialsNext() {
      if (this.testimonialsActiveIndex == this.testimonials.length - 1) {
        this.testimonialsActiveIndex = 0;
      } else {
        this.testimonialsActiveIndex++;
      }
    },
  },
};
</script>

<template>
  <!-- Team Members -->
  <div class="team-members">
    <img class="float-circle" src="/svg/svg-4.svg" alt="" />
    <div class="container-small">
      <TeamCard
        v-for="(card, index) in teamCard"
        :image="card.image"
        :role="card.role"
        :desc="card.desc.substring(0, 200) + '...'"
        :name="card.name"
        :key="index"
        :index="index"
        :activeIndex="teamCardActiveIndex"
        @prev="teamCardPrev"
        @next="teamCardNext"
      ></TeamCard>
    </div>
  </div>
  <!-- Jumbotron events -->
  <div class="jumbotron">
    <img src="/image/h1-img-09.jpg" alt="" />
    <div class="">
      <div class="event-list">
        <div class="event-top">
          <h3>Upcoming Events</h3>
        </div>
        <div v-for="(card, index) in events" class="event-item">
          <div class="date">
            <h4>{{ card.date }}</h4>
            <p>{{ card.day }}</p>
          </div>
          <div class="event-info">
            <h4>{{ card.what }}</h4>
            <p>
              <font-awesome-icon icon="fa-regular fa-clock" />{{
                card.completeDate
              }}
            </p>
            <p>
              <font-awesome-icon icon="fa-solid fa-location-dot" />
              {{ card.location }}
            </p>
            <div class="button">READ MORE</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Creative -->
  <div class="creative">
    <div class="container-small d-flex">
      <div class="col-6">
        <h4 class="line">Creative Leader<span class="dot">.</span></h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          facere, architecto reprehenderit at eius deleniti vitae accusantium
          soluta illum eos voluptas in optio et sit vero explicabo molestias,
          cupiditate laborum!
        </p>
        <div class="button">READ MORE</div>
      </div>
      <div class="col-6">
        <ul>
          <li v-for="(item, index) in creativeInfo">
            <h5 class="col">{{ item.name }}</h5>
            <h5 class="col number">{{ item.percentage }}%</h5>
            <div class="bar col-12">
              <div
                class="over-bar"
                :style="{ width: item.percentage + '%' }"
              ></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- Latest news -->
  <div class="news">
    <div class="container">
      <img class="float-circle" src="/svg/svg-4.svg" alt="" />
      <div class="news-title">
        <h2>Latest news<span class="dot">.</span></h2>
        <p class="line-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div class="news-carousel">
        <div class="button prev" @click="newsCardPrev">
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
        <div class="carousel">
          <NewsCard
            v-for="(card, index) in newsDisplayedCards"
            :image="card.image"
            :title="card.title"
            :desc="card.desc.substring(0, 50) + '...'"
            :date="card.date"
            :person="card.person"
            :key="index"
            :index="index"
            :activeIndex="newsActiveIndex"
          />
        </div>
        <div class="button next" @click="newsCardNext">
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
  </div>
  <!-- Testimonials -->
  <div class="testimonials">
    <div class="background">
      <h1>Testimonials.</h1>
      <div class="testimonials-carousel">
        <div class="button prev" @click="testimonialsPrev">
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
        </div>

        <TestimonialCard
          v-for="(card, index) in testimonials"
          :index="index"
          :name="card.name"
          :desc="card.desc"
          :img="card.img"
          :activeIndex="testimonialsActiveIndex"
        >
          <div class="amount-counter">
            <p>01</p>
            <div class="show">
              <div
                :class="0 == index ? 'active' : 'hidden'"
                class="col-4"
              ></div>
              <div
                :class="1 == index ? 'active' : 'hidden'"
                class="col-4"
              ></div>
              <div
                :class="2 == index ? 'active' : 'hidden'"
                class="col-4"
              ></div>
            </div>
            <p>03</p>
          </div>
        </TestimonialCard>
        <div class="button next" @click="testimonialsNext">
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
        </div>
      </div>
    </div>
  </div>
  <!-- Video Jumbotron -->
  <div class="video-jumbotron">
    <img src="/image/h1-img-04.jpg" alt="" />
    <div class="play"><font-awesome-icon icon="fa-solid fa-play" /></div>
    <div class="shop">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        style="height: 16px"
        fill="#ee2852"
      >
        <circle cx="9" cy="21" r="2" />
        <circle cx="20" cy="21" r="2" />
        <path
          d="M23.8 5.4c-.2-.3-.5-.4-.8-.4H6.8L6 .8C5.9.3 5.5 0 5 0H1C.4 0 0 .4 0 1s.4 1 1 1h3.2L5 6.2v.1l1.7 8.3C7 16 8.2 17 9.6 17H19.4c1.5 0 2.7-1 3-2.4L24 6.2c0-.3 0-.6-.2-.8z"
        />
      </svg>
    </div>
    <div class="circle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 87 87"
        style="height: 26px"
        fill="#fff"
      >
        <path
          d="M55.4 81.5c6.1-11.1 5.2-16.1-4.3-24.3 6.1-3.5 9.5-8.5 9.1-15.7-.5-8.2-7.7-14.7-16.3-14.6-8.5.1-15.6 6.7-15.9 15-.3 8.5 5.9 15.8 14.3 16.6 1.4.1 2.8.2 4.2.5 5.9 1.2 10.2 6.7 9.8 12.6-.4 6.4-5.5 11.4-11.8 11.7-19.6.9-38.6-14.8-41.3-34C-.1 26.9 14.4 6.8 36.4 2.8c22.3-4 43.4 10 48.1 32 4.3 20-8.6 41.2-28.4 46.7h-.7z"
        />
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.team-members {
  margin: 2rem 0 8rem;
  position: relative;
  .float-circle {
    width: 300px;
    position: absolute;
    z-index: 1;
    top: -40px;
    right: 60px;
  }
  .container-small {
    position: relative;
  }
}

.jumbotron {
  position: relative;
  img {
    width: 100%;
  }

  .event-list {
    position: absolute;
    top: 120px;
    left: 210px;
    z-index: 3;
    background-color: #fafafa;

    display: inline-block;

    h3 {
      font-size: 1.25rem;
    }

    .event-top {
      padding: 1rem 1rem 1.25rem 1.5rem;
      box-shadow: 0 0.1rem rgba(0, 0, 0, 0.077);
    }
    .event-item {
      padding: 1rem 1rem 1.25rem 1.5rem;
      display: flex;
      font-size: 0.8rem;
      box-shadow: 0 0.1rem rgba(0, 0, 0, 0.077);

      h4 {
        font-size: 1rem;
      }

      .date {
        background-color: #ff4612;
        color: white;
        display: inline-block;
        height: 50px;
        font-size: 0.6rem;
        padding: 0.2rem;
        margin-right: 1.5rem;
        h4 {
          text-align: center;
        }
      }
    }
  }
}

.creative {
  padding: 6rem 0;
  background-color: #ffffff;
  .col-6 {
    p {
      padding-right: 1rem;
      padding-bottom: 0.25rem;
    }
  }
  ul {
    padding-top: 1.25rem;
    li {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 0.25rem 0 1rem 0;

      .number {
        text-align: end;
      }
      .bar {
        border-bottom: 4px solid gray;
        position: relative;
        border-radius: 50px;
        .over-bar {
          position: absolute;
          border-bottom: 4px solid #ff4612;
          border-radius: 50px;
        }
      }
    }
  }
}

.news {
  text-align: center;
  padding: 6rem 0;
  position: relative;

  .float-circle {
    width: 350px;
    position: absolute;
    z-index: 1;

    top: -60px;
    left: 60px;
  }

  .news-carousel {
    text-align: start;
    align-items: center;
    display: flex;
    justify-content: space-between;

    .button {
      color: #1e1c1c;
      fill: currentColor;
      &.prev {
        transform: rotate(180deg);
      }
    }
    .carousel {
      flex-grow: 1;
      display: flex;
      justify-content: space-around;
    }
  }
}

.testimonials {
  .background {
    color: black;
    background-color: rgb(45, 42, 42);
    position: relative;
    padding-bottom: 20rem;

    h1 {
      font-size: 10rem;
      text-align: center;
    }
    .testimonials-carousel {
      position: absolute;
      left: 0;
      right: 0;
      z-index: 3;
      top: 0;
      bottom: 0;
      text-align: start;
      align-items: center;
      display: flex;
      justify-content: space-between;
      color: white;
      .button {
        height: 100%;
        display: flex;
        align-items: center;
        &.prev {
          transform: rotate(180deg);
        }
      }
      .amount-counter {
        display: flex;
        justify-content: space-between;
        width: 20%;
        padding-top: 2rem;
        margin: auto;
        align-items: center;
        .show {
          background-color: black;
          height: 2px;
          width: 60%;
          display: flex;
          // position: relative;
          .active {
            // position: ;
            background-color: grey;
            height: 2px;
          }
          .hidden {
            display: block;
            background-color: black;
            height: 2px;
          }
        }
      }
    }
  }
}

.video-jumbotron {
  position: relative;
  img {
    width: 100%;
  }
  .play {
    z-index: 3;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 2rem;
    cursor: pointer;
  }
  .shop {
    z-index: 3;
    position: absolute;
    background-color: white;
    width: 30px;
    aspect-ratio: 1;
    top: 30px;
    right: 0;
    cursor: pointer;
    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .circle {
    z-index: 3;
    position: absolute;
    background-color: #ef2853;
    width: 30px;
    aspect-ratio: 1;
    top: -10px;
    right: 0;
    cursor: pointer;
    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
