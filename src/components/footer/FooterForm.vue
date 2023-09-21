<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <form action="#">
    <div class="form-row d-flex">
      <div class="col-6">
        <input type="text" class="form-control" placeholder="First name" />
      </div>
      <div class="col-6">
        <input type="text" class="form-control" placeholder="Last name" />
      </div>
    </div>
    <div class="form-group">
      <textarea
        placeholder="Write a message.."
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
      ></textarea>
    </div>
    <div class="btn-orange" type="submit">
      <div class="text">SEND</div>
      <div class="vertical-line"></div>
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
  </form>
</template>

<style lang="scss" scoped>
.form-control {
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
</style>
