<template>
  <div class="navbar-custom">
    <div class="container">
      <div class="columns">
        <div class="column is-4 has-text-centered">
          <span class="title">Vue.js for beginners</span>
        </div>
        <div class="column is-8 has-text-centered">
          <div class="links">
            <router-link to="/">Home</router-link>
            <router-link to="/contact">Contact</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/faq">FAQ</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.navbar-custom {
  background: #383838;
  color: grey;
  padding: 20px;

  span.title {
    font-weight: bold;
    color: grey;
    font-size: 25px;
  }

  .links a {
    margin-right: 40px;
    color: grey;
  }

  a.router-link-exact-active.router-link-active {
    text-decoration: underline;
  }
}
</style>

