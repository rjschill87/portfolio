<template>
  <section class="section">
    <div class="columns is-mobile">
      <div
        v-for="(contact, i) of contacts"
        :key="i"
        class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title has-text-grey">
              {{ contact.title }}
            </p>
          </header>
          <div class="card-content">
            <div class="content has-text-centered">
              <b-icon
                :icon="contact.icon"
                size="is-large"
                type="is-primary"/>
            </div>
          </div>
          <footer class="card-footer">
            <div
              class="card-footer-item"
              v-html="contact.content"/>
          </footer>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      contacts: [
        { icon: 'email', title: 'Email', content: `<a href="mailto:schillinger.rob@gmail.com">Send me an email.</a>`},
        { icon: 'github-circle', title: 'Github', content: `<a href="https://github.com/rjschill87">Find me on Github.</a>`},
        { icon: 'linkedin-box', title: 'LinkedIn', content: `<a href="https://www.linkedin.com/in/rjschill/">Message me on LinkedIn.</a>`}
      ]
    }
  }
}
</script>
