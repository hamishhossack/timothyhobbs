<template>
  <div>
    <div class="title units-row">
      <div class="unit-100">
        <h2>{{ project.name }}</h2>
      </div>
    </div>
    <div class="units-row">
      <div class="unit-100">
        <p>{{ project.desc }}</p>
      </div>
    </div>
    <div v-if="beforeAfter" class="units-row beforeafter">
      <div class="unit-50 galleryItem">
        <p>Before</p>
        <a
          :href="`${assetUrl}/before1.jpg`"
          data-lightbox="BeforeAfter-Images"
          :title="project.name"
        >
          <img class="circular" :src="`${assetUrl}/before1.jpg`" :alt="project.name" />
        </a>
      </div>
      <div class="unit-50 galleryItem">
        <p>After</p>
        <a
          :href="`${assetUrl}/after1.jpg`"
          data-lightbox="BeforeAfter-Images"
          :title="project.name"
        >
          <img class="circular" :src="`${assetUrl}/after1.jpg`" :alt="project.name" />
        </a>
      </div>
    </div>
    <div v-if="beforeAfter" class="units-row beforeafter">
      <div class="unit-25 galleryItem">
        <p>Before</p>
        <a
          :href="`${assetUrl}/before1.jpg`"
          data-lightbox="BeforeAfter-Images"
          :title="project.name"
        >
          <img class="circular" :src="`${assetUrl}/before1.jpg`" :alt="project.name" />
        </a>
      </div>
      <div class="unit-25 galleryItem">
        <p>After</p>
        <a
          :href="`${assetUrl}/after1.jpg`"
          data-lightbox="BeforeAfter-Images"
          :title="project.name"
        >
          <img class="circular" :src="`${assetUrl}/after1.jpg`" :alt="project.name" />
        </a>
      </div>
      <div class="unit-25 galleryItem">
        <p>Before</p>
        <a
          :href="`${assetUrl}/before2.jpg`"
          data-lightbox="BeforeAfter-Images"
          :title="project.name"
        >
          <img class="circular" :src="`${assetUrl}/before2.jpg`" :alt="project.name" />
        </a>
      </div>
      <div class="unit-25 galleryItem">
        <p>After</p>
        <a
          :href="`${assetUrl}/after2.jpg`"
          data-lightbox="BeforeAfter-Images"
          :title="project.name"
        >
          <img class="circular" :src="`${assetUrl}/after2.jpg`" :alt="project.name" />
        </a>
      </div>
    </div>
    <div class="units-row-end">
      <div class="unit-100">
        <h3>Project Images</h3>
      </div>
    </div>
    <div v-for="(row, i) in rows" class="units-row">
      <div v-for="(v, j) in row" class="unit-20 galleryItem">
        <a
          :href="`${assetUrl}/${(i * rowWidth) + (j + 1)}.jpg`"
          data-lightbox="Project-Images"
          :title="project.name"
        >
          <img
            class="circular"
            :src="`${assetUrl}/${(i * rowWidth) + (j + 1)}.jpg`"
            :alt="project.name"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import chunk from '~/utils/chunk'

const projects = [
  { id: 1, name: 'Dorking Road', desc: '', images: 9 },
  {
    id: 3,
    name: 'Little Bookham - Contemporary',
    desc: '',
    images: 10
  },
  { id: 5, name: 'Cornwall', desc: '', images: 8 },
  { id: 6, name: 'Oxshott', desc: '', images: 7 },
  { id: 7, name: 'Epsom', desc: '', images: 10 },
  { id: 8, name: 'Kings Wood', desc: '', images: 10 },
  { id: 9, name: 'Fetcham', desc: '', images: 6 },
  {
    id: 10,
    name: 'Walton<br/>- On -<br/>Thames',
    desc: '',
    images: 5
  },
  { id: 11, name: 'Little Bookham', desc: '', images: 8 },
  { id: 12, name: 'Other Projects', desc: '', images: 21 }
]

export default {
  head: {
    script: [{ src: '/lightbox-2.6.min.js', defer: true }]
  },

  data() {
    return {
      project: {},
      assetUrl: '',
      id: '1',
      rows: []
    }
  },

  asyncData({ params, route }) {
    const { id } = params
    const rowWidth = 5
    const project = projects.find(p => p.id == id)

    return {
      id,
      assetUrl: `/images/work/${id}`,
      project,
      rowWidth,
      rows: chunk(new Array(project.images), rowWidth)
    }
  },

  mounted() {
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
    $('.circular').click(function() {
      var img = $(this).children('img')
    })
  },

  computed: {
    beforeAfter() {
      return ['10', '12'].includes(this.id)
    }
  }
}
</script>