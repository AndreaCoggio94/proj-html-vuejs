<script>
export default {
  data() {
    return {
      pages: [
        { page: "Homes" },
        { page: "Pages" },
        { page: "Blogs" },
        { page: "Shops" },
        { page: "Events" },
        { page: "Elements" },
      ],
      activeIndex: 0,
    };
  },
};
</script>

<template>
  <div class="container-big">
    <nav class="navbar">
      <a class="navbar-brand" href="#">
        <img src="/image/logo-img-01.png" alt="" />
      </a>
      <ul class="navbar-nav">
        <li
          v-for="(card, index) in pages"
          class="nav-item"
          :class="index == activeIndex ? 'active' : ''"
        >
          <a class="nav-link" href="#"> {{ card.page }} </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#"
            ><font-awesome-icon icon="fa-solid fa-magnifying-glass"
          /></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"
            ><font-awesome-icon icon="fa-solid fa-bars"
          /></a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.container-big {
  position: absolute;
  margin: 0 auto;
  top: 0;
  left: 0;
  right: 0;
  nav {
    .navbar-brand {
      img {
        width: 8rem;
      }
    }
    .navbar-nav {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 60%;
      .nav-item {
        display: flex;
        align-items: center;
        a {
          display: flex;
          align-items: center;
        }
        &.active {
          a {
            color: #ff4612;
            &::before {
              content: url(/svg/svg-6-orange.svg);
              scale: 0.8 0.5;
              margin-top: 5px;
            }
          }
        }
      }
    }
  }
}
</style>
