<template>
  <div class="footer is-primary">
    <div class="container">
      <div class="columns">
        <div class="column is-6">
          <span>An example of web app made with Vue.js</span>
        </div>
        <div class="column is-6">
          <a class="icon">
            <i class="fa fa-facebook"></i>
          </a>
          <a class="icon">
            <i class="fa fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer {
  background: #383838;
  color: grey;

  .icon {
    color: #fff;
    margin-left: 20px;
  }
}
</style>


