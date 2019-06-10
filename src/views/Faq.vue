<template>
  <div class="faq">
    <div class="container">
      <section class="section">
        <h1 class="title">FAQ</h1>
        <h2 class="subtitle is-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        <div class="columns" v-if="faqs && faqs.length">
          <div class="column is-4" v-for="faq of faqs" :key="faq.id">
            <div class="card">
              <div class="card-content">
                <p class="title">{{ faq.title }}</p>
                <p class="answer">{{ faq.body }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Faq",
  data: () => ({
    faqs: [],
    errors: []
  }),
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        this.faqs = res.data.slice(0, 10);
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>



<style lang="scss" scoped>
.columns {
  flex-wrap: wrap;
}
</style>
