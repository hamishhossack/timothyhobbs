export default {
  mode: 'spa',
  generate: {
    dir: 'public',
    fallback: true
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'Timothy Hobbs',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'google-site-verification',
        content: 'Dp1fd7xEVHuluaKtQmVJrk20tGc8hEHw8IavZmG8vXA'
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Garden Design &amp; Landscape Gardening by Timothy Hobbs in the Mole Valley district, Leatherhead.'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'Garden Design, Timothy Hobbs, Landscape Gardening, Mole Valley, Timoth Hobbs, Landscaping, Gardening, Surrey, Leatherhead, Mole Valley'
      },
      { hid: 'copyright', name: 'copyright', content: 'Timothy Hobbs Ltd' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      { src: 'https://code.jquery.com/jquery-1.10.2.min.js' },
      { src: '/kube.buttons.js', defer: true }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~/css/kube.css',
    '~/css/lightbox.css',
    '~/css/master.css',
    '~/css/mediaqueries.css',
    '~/css/thickbox.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/recaptcha'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
