<template>
  <div id="app">
    <div class="navbar-custom">
      <div class="container">
        <div class="columns">
          <div class="column is-4">
            <span class="title">Vue.js for beginners</span>
          </div>
          <div class="column is-8 text-center">
            <div class="links">
              <router-link to="/">Home</router-link>
              <router-link to="/features">Features</router-link>
              <router-link to="/about">About</router-link>
              <router-link to="/faq">FAQ</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass";
@import url("https://fonts.googleapis.com/css?family=Montserrat");

body {
  font-family: "Montserrat";
}

.text-center {
  text-align: center !important;
}

.navbar-custom {
  background: #383838;
  color: #fff;
  padding: 20px;

  span.title {
    font-weight: bold;
    color: #fff;
    font-size: 25px;
  }

  .links a {
    margin-right: 40px;
    color: #fff;
  }

  a.router-link-exact-active.router-link-active {
    text-decoration: underline;
  }
}
</style>
