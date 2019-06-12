<template>
  <div class="features">
    <div class="container">
      <div class="columns">
        <div class="column is-12">
          <section class="section">
            <h1 class="title">Contact</h1>
            <h4 class="subtitle is-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
            <ContactForm></ContactForm>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm'

export default {
  name: 'Contact',
  components: {
    ContactForm
  }
}
</script>
