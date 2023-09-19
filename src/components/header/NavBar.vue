<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="container-fluid">
    <nav class="navbar">
      <a class="navbar-brand" href="#">Navbar</a>
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
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
</style>
