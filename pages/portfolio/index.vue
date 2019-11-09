<template>
  <div>
    <div class="title units-row">
      <div class="unit-100">
        <h1>Portfolio</h1>
      </div>
    </div>
    <div class="units-row">
      <div class="unit-100">
        <p>Here are examples of our work carried out throughout the company's life time. Please click the picture to view more on the project.</p>
      </div>
    </div>
    <div v-for="row in rows" class="units-row">
      <div v-for="project in row" class="unit-20 galleryItem">
        <nuxt-link :to="{ name: 'portfolio-projects-id', params: { id: project.id } }">
          <img class="circular" :src="`/images/work/thumbs/${project.id}.jpg`" :alt="project.name" />
          <p class="text">{{ project.name }}</p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import chunk from '~/utils/chunk'
import projects from '~/utils/projects'

export default {
  data() {
    return {
      rows: chunk(projects, 5)
    }
  },

  mounted() {
    $('.text').hide()
    $('.galleryItem').hover(
      function() {
        $('.text', this)
          .stop(true, false)
          .show('fast')
        $('.circular', this)
          .stop(true, false)
          .addClass('grnBdr', 400)
      },
      function() {
        $('.text', this)
          .stop(true, false)
          .hide('fast')
        $('.circular', this)
          .stop(true, false)
          .removeClass('grnBdr', 400)
      }
    )
  }
}
</script>