<template>
  <div class="home">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ heading }}</h1>
          <div class="column is-8 is-paddingless">
            <h2 class="subtitle is-4">{{ subtitle }}</h2>
          </div>
          <a class="button is-large" id="learn">Learn more</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-1 has-text-centered">
            <i class="fa fa-cog"></i>
          </div>
          <div class="column is-4 has-text-centered">
            <h1 class="title">Lorem ipsum</h1>
          </div>
          <div class="column is-7 has-text-left" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatibus, quaerat ut culpa quidem illo ab eaque praesentium, placeat perferendis ea aliquid explicabo nemo, aspernatur sit laborum hic nesciunt laudantium.
          </div>
        </div>
      </div>

      <div class="columns cards">
        <div class="column" v-for="(index) in cards" :key="index">
          <div class="card">
            <div class="card-content">
              <p class="title">“There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”</p>
              <p class="subtitle">Jeff Atwood</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      heading: "Learn Vue.js",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eaque itaque magnam quaerat vero tenetur quidem ipsum suscipit a. Similique explicabo architecto ipsum quod laudantium ratione consequatur distinctio officia impedit?",
      cards: 3
    };
  }
};
</script>

<style lang="scss" scoped>
.home {
  .hero {
    background: #e8e8e8;

    h2.subtitle.is-4 {
      font-size: 18px;
      margin-bottom: 25px;
    }
  }

  .section {
    i.fa.fa-cog {
      font-size: 40px;
    }

    .columns.cards {
      margin-top: 35px;
    }
  }
}
</style>
