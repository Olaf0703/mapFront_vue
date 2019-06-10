<template>
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
</template>


<script>
export default {
  name: 'FaqList',
  props: [
    'faqs'
  ]
}
</script>
