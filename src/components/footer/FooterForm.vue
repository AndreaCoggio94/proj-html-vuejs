<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <form>
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
    <button class="btn btn-success" type="submit">Send</button>
  </form>
</template>

<style lang="scss" scoped></style>
