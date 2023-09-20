<script>
import TeamCard from "./main/TeamCard.vue";
import NewsCard from "./main/NewsCard.vue";

export default {
  data() {
    return {};
  },
  components: {
    TeamCard,
    NewsCard,
  },
};
</script>

<template>
  <!-- Team Members -->
  <div class="team-members">
    <div class="container-small">
      <TeamCard></TeamCard>
    </div>
  </div>
  <!-- Jumbotron -->
  <div class="jumbotron">
    <img src="/image/h1-img-09.jpg" alt="" />
    <div class="">
      <div class="event-list">
        <div class="event-top">
          <h3>Upcoming Events</h3>
        </div>
        <div class="event-item">
          <div class="date">
            <h4>07</h4>
            <p>Jan, 2022</p>
          </div>
          <div class="event-info">
            <h4>Melbourne Coaching</h4>
            <p><span>icon</span> date</p>
            <p><span>icon</span> place</p>
            <div>READ MORE</div>
          </div>
        </div>
        <div class="event-item">
          <div class="date">
            <h4>07</h4>
            <p>Jan, 2022</p>
          </div>
          <div class="event-info">
            <h4>Melbourne Coaching</h4>
            <p><span>icon</span> date</p>
            <p><span>icon</span> place</p>
            <div>READ MORE</div>
          </div>
        </div>
        <div class="event-item">
          <div class="date">
            <h4>07</h4>
            <p>Jan, 2022</p>
          </div>
          <div class="event-info">
            <h4>Melbourne Coaching</h4>
            <p><span>icon</span> date</p>
            <p><span>icon</span> place</p>
            <div>READ MORE</div>
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
        <div>READ MORE</div>
      </div>
      <div class="col-6">
        <ul>
          <li>
            <h5 class="col">Mentorship</h5>
            <h5 class="col number">78%</h5>
            <div class="bar col-12">
              <div class="over-bar" style="width: 78%"></div>
            </div>
          </li>
          <li>
            <h5 class="col">Education</h5>
            <h5 class="col number">95%</h5>
            <div class="bar col-12">
              <div class="over-bar" style="width: 95%"></div>
            </div>
          </li>
          <li>
            <h5 class="col">Learning</h5>
            <h5 class="col number">65%</h5>
            <div class="bar col-12">
              <div class="over-bar" style="width: 65%"></div>
            </div>
          </li>
          <li>
            <h5 class="col">Motivation</h5>
            <h5 class="col number">83%</h5>
            <div class="bar col-12">
              <div class="over-bar" style="width: 83%"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- Latest news -->
  <div class="news">
    <div class="container">
      <div class="news-title">
        <h2>Latest news<span class="dot">.</span></h2>
        <p class="line-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div class="news-carousel">
        <div class="button">arrow</div>
        <div class="carousel">
          <NewsCard />
          <!-- <div class="card">
            <img class="card-img-top" src="..." alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="..." alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="..." alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div> -->
          <!-- </div> -->
        </div>
        <div class="button">arrow</div>
      </div>
    </div>
  </div>
  <!-- Testimonials -->
  <div class="testimonials">
    <div class="background">
      <h1>Testimonials.</h1>
    </div>
    <div class="testimonials-carousel">
      <div class="button">arrow</div>
      <div class="carousel">
        <img src="h3-img-04.png" alt="" />
        <h4>Cynthia Clark</h4>
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          cupiditate magni veritatis nisi quae aliquid quaerat, perspiciatis,
          quos perferendis, quisquam earum enim harum quis provident expedita
          iure optio soluta quo!"
        </p>
      </div>
      <div class="button">arrow</div>
    </div>
  </div>
  <!-- Video Jumbotron -->
  <div class="video-jumbotron">
    <img src="/image/h1-img-04.jpg" alt="" />
    <div class="play">play</div>
  </div>
</template>

<style lang="scss" scoped>
.team-members {
  margin: 2rem 0 8rem;
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
    background-color: white;

    display: inline-block;
    h3 {
      font-size: 1.25rem;
    }

    .event-top {
      padding: 1rem 1rem 1.25rem 1.5rem;
    }
    .event-item {
      padding: 1rem 1rem 1.25rem 1.5rem;
      display: flex;
      font-size: 0.8rem;

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
  background-color: #ffffff33;
  ul {
    li {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      // width: 100%;
      // background-color: red;
      .number {
        text-align: end;
      }
      .bar {
        border-bottom: 4px solid gray;
        position: relative;
        border-radius: 50px;
        .over-bar {
          position: absolute;
          border-bottom: 4px solid orange;
          border-radius: 50px;
        }
      }
    }
  }
}

.news {
  text-align: center;
  padding: 6rem 0;
  .news-carousel {
    text-align: start;
    align-items: center;
    display: flex;
    justify-content: space-between;
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
    h1 {
      font-size: 10rem;
      text-align: center;
    }
  }
  .testimonials-carousel {
    text-align: start;
    align-items: center;
    display: flex;
    justify-content: space-between;
    .carousel {
      // flex-grow: 1;
      // display: flex;
      // justify-content: space-around;
      .card {
        width: 18rem;
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
    position: absolute;
    z-index: 3;
    top: 50%;
    left: 50%;
    color: white;
  }
}
</style>
