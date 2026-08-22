import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="brand" href="/">VK<span>.</span></a>
    <a class="header-link" href="https://github.com/VishnuKeerthan" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
  </header>

  <main>
    <section class="intro">
      <p class="kicker">Front-end developer <span></span> Bengaluru, India</p>
      <h1>Building digital<br /><em>places to belong.</em></h1>
      <p class="lede">I turn thoughtful ideas into clear, useful web experiences with a little unexpected joy.</p>
      <a class="button" href="mailto:hello@example.com">Start a conversation <span aria-hidden="true">↗</span></a>
    </section>

    <section class="work" aria-labelledby="work-title">
      <div class="section-heading"><p class="kicker">Selected work</p><h2 id="work-title">A few things I care about.</h2></div>
      <div class="project-grid">
        <article class="project project-sun"><p class="project-number">01 / 03</p><h3>Warm interfaces</h3><p>Systems that make complex things feel human.</p></article>
        <article class="project project-blue"><p class="project-number">02 / 03</p><h3>Useful motion</h3><p>Small moments that help people find their way.</p></article>
        <article class="project project-ink"><p class="project-number">03 / 03</p><h3>Good questions</h3><p>Starting with curiosity, ending with clarity.</p></article>
      </div>
    </section>
  </main>

  <footer><p>Made with care, curiosity, and Vanilla JS.</p><p>© 2026 Vishnu Keerthan</p></footer>
`
