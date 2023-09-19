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
</style>
