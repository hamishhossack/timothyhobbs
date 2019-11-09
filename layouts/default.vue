<template>
  <div id="layout">
    <div id="header">
      <div id="header-inner" class="units-container">
        <div class="units-row-end">
          <div id="logo" class="unit-40">
            <a href="/">
              <img src="~/assets/images/logo.png" alt="Timothy Hobbs Logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div id="nav">
      <div id="nav-inner">
        <div class="units-row-end">
          <div class="unit-66 centered">
            <nav class="nav-g">
              <ul>
                <li class="unit-25">
                  <a href="/">Home</a>
                </li>
                <li class="unit-25">
                  <a href="/about">About Us</a>
                </li>
                <li class="unit-25">
                  <a href="/portfolio">Portfolio</a>
                </li>
                <li class="unit-25 last">
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div id="content">
      <div id="content-inner">
        <nuxt />
      </div>
    </div>
    <div id="footer">
      <div id="footer-inner" class="text-right">
        <div class="units-row">
          <div class="unit-100">
            <p>
              Copyright &copy; Timothy Hobbs
              <br />Designed By
              <a href="https://www.hamishhossack.co.uk">Hamish Hossack Design &amp; Media</a>. 2015
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
