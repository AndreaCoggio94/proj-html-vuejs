<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="container-big">
    <nav class="navbar">
      <a class="navbar-brand" href="#">Navbar</a>
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">Homes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pages</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Blogs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Shops</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Events</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Elements</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">search</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">burgermenu</a>
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
    .navbar-nav {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 60%;
      .nav-item {
      }
    }
  }
}
</style>
