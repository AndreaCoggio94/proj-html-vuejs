<script>
import TeamCard from "./main/TeamCard.vue";

export default {
  data() {
    return {};
  },
  components: {
    TeamCard,
  },
};
</script>

<template>
  <!-- Team Members -->
  <div class="container">
    <TeamCard />
  </div>
  <!-- Jumbotron -->
  <div class="jumbotron">
    <img src="/image/h1-img-09.jpg" alt="" />
    <div class="container">
      <div class="event-list">
        <div class="event-top"><h3>Upcoming Events</h3></div>
        <div class="event-item">
          <div class="date">
            <h4>07</h4>
            <p>Jan, 2022</p>
          </div>
          <div class="event-info">
            <h4>Melbourne Coaching</h4>
            <span>icon</span> date <span>icon</span> place
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
            <span>icon</span> date <span>icon</span> place
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
    <div class="container d-flex">
      <div class="col-6">
        <h4>Creative Leader<span class="dot">.</span></h4>
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
</template>

<style lang="scss" scoped>
.jumbotron {
  position: relative;
  img {
    width: 100%;
  }
  .event-list {
    background-color: white;
    position: absolute;
    z-index: 3;
    top: 20%;
    left: 10%;
    h3 {
      font-size: 1.25rem;
    }
    .event-item {
      display: flex;
      font-size: 0.8rem;

      h4 {
        font-size: 1rem;
      }
    }
  }
}

.creative {
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
        .over-bar {
          position: absolute;
          border-bottom: 4px solid orange;
        }
      }
    }
  }
}
</style>
