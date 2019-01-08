<template>
  <div id="app">
    <div class="navbar-custom">
      <div class="container">
        <div class="columns">
          <div class="column is-4 has-text-centered">
            <span class="title">Vue.js for beginners</span>
          </div>
          <div class="column is-8 has-text-centered">
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

.footer {
  background: #383838;
  color: grey;

  .icon {
    color: #fff;
    margin-left: 20px;
  }
}
</style>
