<template>
  <section class="section">
    <div class="tile is-ancestor">
      <div class="tile is-parent is-vertical">
        <article
          v-for="(project, i) of projects"
          :key="i"
          class="tile is-child card" >

          <header class="card-header">
            <p class="card-header-title has-text-grey">{{ project.name }}</p>
          </header>
          <div class="card-content">
            <div class="content">
              <p>{{ project.description }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        { name: '/r/TheGoodPlace Subreddit Bot', img: '~assets/theGoodPlace.png', description: `A subreddit bot` },
        { name: 'Quest Oracle Community', img: '~assets/Quest.png', description: `A learning website and social network`}
      ]
    }
  }
}
</script>
