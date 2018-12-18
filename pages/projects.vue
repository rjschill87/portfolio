<template>
  <section class="section ">
    <div class="tile is-ancestor  swing-in-left-fwd">
      <div class="tile is-parent is-vertical">
        <article
          v-for="(project, i) of projects"
          :key="i"
          class="tile is-child card"
          @click="toggleModal(i)">
          <header class="card-header">
            <p class="card-header-title has-text-grey">{{ project.name }}</p>
          </header>
          <div class="card-content">
            <p>{{ project.snippet }}</p>
          </div>
          <div
            :class="{ 'is-active': project.isActive }"
            :ref="i"
            class="modal"
            @click.stop>
            <div class="modal-background"/>
            <div class="modal-card scale-in-ver-top">
              <header class="modal-card-head">
                <p class="modal-card-title">{{ project.name }}</p>
                <button
                  class="delete"
                  aria-label="close"
                  @click="toggleModal(i)" />
              </header>
              <figure class="image is-3by1">
                <img :src="project.img">
              </figure>
              <section class="modal-card-body">
                <div class="content">
                  <p v-html="project.description">
                    {{ project.description }}
                  </p>
                </div>
              </section>
              <footer class="modal-card-foot">
                <div
                  v-if="project.link && project.link != null"
                  class="card-header-title-sub has-text-gray">
                  [
                  <a
                    :href="project.link"
                    target="_blank">{{ project.type == 'repo' ? 'Repo' : 'Site' }}
                  </a>
                  ]
                </div>
              </footer>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import goodPlaceImage from 'assets/theGoodPlace.png';
import questImage from 'assets/Quest.png';
import taskMasterImage from 'assets/taskMaster.png';
import potmImage from 'assets/potm.png';

export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          isActive: false,
          name: '/r/TheGoodPlace Subreddit Bot',
          link: 'https://www.github.com/rjschill87/theGoodPlaceBot/',
          type: 'repo',
          img: goodPlaceImage,
          snippet: `A subreddit bot`,
          description: `Built around an event-based stream, this bot parses each comment posted to the <a href="https://reddit.com/r/thegoodplace" target="_blank">/r/theGoodPlace</a>. It then analyzes the comment for profantiy, indecisive language, polarity, and positive/negative sentiment using the <a href="https://github.com/retextjs/retext" target="_blank">retext</a> library and plugins. It also awards additional points for using key phrases from the show. Each week, when a new episode airs, the users are ranked 1-10, the leaderboard is posted as a reply to the Episode Discussion thread, and all subreddit users are awarded with new flair denoting their placement.`
        },
        {
          isActive: false,
          name: 'Quest Oracle Community',
          img: questImage,
          link: 'https://questoraclecommunity.org',
          type: 'site',
          snippet: `A learning website and social network`,
          description: `Designed as half learning center and half social media network, Quest Oracle Community was built around WordPress, NodeBB, Elasticsearch, and a Laravel API. Featuring SSO, completely custom plugins and themes, real time notifications, and integrations with various third party services, it's your one-stop-shop for all things Oracle.`,
        },
        {
          isActive: false,
          name: 'TaskMaster',
          link: 'https://github.com/rjschill87/task-master/',
          img: taskMasterImage,
          type: 'repo',
          snippet: `A simple to-do app.`,
          description: `Created for a quick interview test over a weekend, TaskMaster is a simple app where you can create new tasks. Using a combination of local storage and MongoDB, you can create tasks and child tasks, drag and drop, and rank tasks by priority.`
        },
        {
          isActive: false,
          name: 'LA Kings Player of the Month',
          link: 'https://lakingsplayerofthemonth.com/',
          img: potmImage,
          type: 'site',
          snippet: `Vote for your Player of the Month.`,
          description: `Built on Wordpress, the site features a completely custom theme where 4 players can be selected to be voted on for Player of the Month. When the selected time has passed, the winner is automatically selected as that month's winner. Users can also have sponsored coupons emailed to them, and share their votes with friends.`
        }
      ]
    }
  },
  methods: {
    toggleModal: function(i) {
      this.projects[i].isActive = !this.projects[i].isActive;
    }
  }
}
</script>

<style>
.tile.is-child:hover {
  cursor: pointer;
}
.modal {
  cursor: initial;
}
</style>
