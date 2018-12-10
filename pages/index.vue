<template>
  <section class="section">
    <div class="tile is-ancestor">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child card">
          <header class="card-header" />
          <div class="card-content">
            <p>{{ content }}</p>
          </div>
        </article>
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
      content: `My name is Rob, and I'm a full-stack developer. I work with a number of technologies, including but not limited to PHP, Node.js, React, React Native, MongoDB and HTML5/JS/CSS/Sass. I always appreciate a good challenge, so let me know if you want to build something together!`
    }
  }
}
</script>
