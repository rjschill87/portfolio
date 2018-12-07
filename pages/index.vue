<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{ title }}
        </h1>
      </div>
      <div class="container">
        <div class="content is-medium">
          <p>{{ content }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      title: 'About',
      content: `My name is Rob, and I'm a full-stack developer. I work with a number of technologies, including but not limited to PHP, Node.js, React, React Native, MongoDB and Sass. I always appreciate a good challenge, so let me know if you want to build something together!`
    }
  }
}
</script>

<style>
  .content {
    padding: 1em 5em 0 0;
  }
</style>
