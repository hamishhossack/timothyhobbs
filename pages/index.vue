<template>
  <div>
    <div class="units-row-end">
      <div class="unit-100">
        <h1>Garden Design &amp; Landscape Construction</h1>
        <p>
          Since 1992 Timothy Hobbs &amp; his team have been designing &amp;
          constructing gardens on various projects around the Mole Valley
          district. Based in Bookham, the garden design &amp; landscape construction company has
          been operating to a high standard. Previous work in Bookham, Leatherhead and Mole Valley have allowed Timothy Hobbs to produce a great portfolio for landscape gardening. This
          showcase this can be found on our
          <a
            href="/projects"
          >Projects</a>
          page, this displays a small selection of the latest garden and landscape projects.
        </p>
      </div>
    </div>
    <div class="units-row text-centered">
      <div class="unit-centered unit-80">
        <div class="units-row text-centered">
          <div class="unit-33">
            <a href="/about">
              <div class="cat-box cb1">
                <div class="cat-inner">
                  <img src="~/assets/images/small-job.jpg" alt="Small Gardening Jobs" />
                  <h2>Garden Design</h2>
                  <p>Each of our designs are bespoke and created around your lifestyle, tastes and immediate surroundings.</p>
                </div>
              </div>
            </a>
          </div>
          <div class="unit-33">
            <a href="/about">
              <div class="cat-box cb2">
                <div class="cat-inner">
                  <img src="~/assets/images/medium-job.jpg" alt="Medium Sized Gardening Jobs" />
                  <h2>Renovations</h2>
                  <p>In with the new and out with the old, garden renovations with the clients landscape designs to hand.</p>
                </div>
              </div>
            </a>
          </div>
          <div class="unit-33">
            <a href="/about">
              <div class="cat-box cb3">
                <div class="cat-inner">
                  <img src="~/assets/images/large-job.jpg" alt="Large Landscaping Jobs" />
                  <h2>Landscape Projects</h2>
                  <p>Full Landscape projects produced to a high standard and developed closely with the client.</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div id="main-quote" class="units-row">
      <div class="unit-centered unit-80 text-centered">
        <h4>"Quality Garden Design with the client in mind, backed up with great attention to detail on the finish."</h4>
      </div>
    </div>
    <div class="units-row">
      <div class="unit-60">
        <h3>Service &amp; Quotes</h3>
        <p>
          We can advise on all aspects of garden and landscape design, planning and planting.
          Whether you would like your garden fully landscaped or just advice on renovating your existing garden design, we can help.
          We enjoy design, landscaping and perfecting gardens in different styles, to suit your taste and the style of your surroundings.
        </p>
        <p>Don't hesitate to phone or email us for quotes on your project in or out of the Mole Valley region. We can arrange a time to view and design the garden you want in the time you need.</p>
        <div class="units-row-end">
          <div class="unit-100">
            <address>
              <div itemscope itemtype="http://schema.org/PostalAddress">
                <span itemprop="streetAddress">63 Beales Road</span>,
                <span itemprop="addressLocality">Bookham</span>,
                <span itemprop="areaServed">Leatherhead</span>,
                <span itemprop="postalCode">KT23 4NA</span>
                <span itemprop="addressCountry">United Kingdom</span>
              </div>
            </address>Tel: 01372 452197
            <br />Mob: 07923484874
            <br />Email: tim@timothyhobbs.co.uk
          </div>
        </div>
      </div>
      <div class="unit-40">
        <img src="~~/assets/images/theteam.jpg" alt="Timothy Hobbs Team" />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },

  mounted() {
    $('.cat-box').hover(
      function() {
        $(this)
          .stop(true, false)
          .animate({ 'margin-top': '0px' }, 400)
      },
      function() {
        $(this)
          .stop(true, false)
          .animate({ 'margin-top': '20px' }, 400)
      }
    )
  }
}
</script>

<style>
</style>
