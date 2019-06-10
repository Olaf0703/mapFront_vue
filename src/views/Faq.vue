<template>
  <div class="faq">
    <div class="container">
      <section class="section">
        <h1 class="title">FAQ</h1>
        <h2 class="subtitle is-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <FaqList :faqs="faqs"></FaqList>
      </section>
    </div>
  </div>
</template>

<script>
import FaqList from '../components/FaqList'

import fetchFaqs from '../api'

export default {
  name: "Faq",
  components: {
    FaqList
  },
  data:() => ({
    faqs: []
  }),
  async created() {
    this.faqs = await fetchFaqs()
  }
};
</script>



<style lang="scss" scoped>
.columns {
  flex-wrap: wrap;
}
</style>
