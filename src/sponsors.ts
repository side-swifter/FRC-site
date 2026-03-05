import './style.css'
import { mount, renderPage } from './site'

mount(
  renderPage(
    'sponsors',
    'Sponsors',
    'Sponsors are the foundation of our build and help our team foster innovation while expanding access to STEM education for youth.',
    `
    <section class="home-section">
      <article class="sponsor-intro-card">
        <h2>Why sponsorship matters</h2>
        <p>
          Sponsors are the foundation of our build, the source that helps our team foster innovation and
          allow ourselves to provide the opportunities to the youth that we wish to provide.
        </p>
        <p>
          We are extremely grateful to our generous sponsors making a real impact towards expanding access
          to STEM education for these children.
        </p>
        <div class="sponsor-actions">
          <a class="cta" href="sponsorship-perks.html">Sponsorship perks</a>
          <a class="cta red-btn" href="sponsorship-perks.html">Become a sponsor</a>
        </div>
      </article>
    </section>

    <section class="home-section">
      <article class="sponsor-tier power-tier">
        <p class="panel-label">Power level sponsor</p>
        <h2>NASA</h2>
        <p>
          The National Aeronautics and Space Administration (NASA) has generously chosen to be a power level
          sponsor of 11179! We are very grateful to NASA.
        </p>
        <img class="tier-logo nasa-tier-logo big-logo" src="assets/nasa-logo.png" alt="NASA sponsor logo" />
      </article>
    </section>

    <section class="home-section">
      <header class="home-section-head">
        <p class="panel-label">Alliance level sponsors</p>
        <h2>Alliance level sponsors</h2>
      </header>
      <div class="tier-grid alliance-grid">
        <article class="sponsor-tier">
          <img class="tier-logo big-logo" src="assets/argosy-foundation.png" alt="Argosy Foundation sponsor logo" />
        </article>
      </div>
    </section>

    <section class="home-section">
      <header class="home-section-head">
        <p class="panel-label">Build level sponsors</p>
        <h2>Build level sponsors</h2>
      </header>
      <div class="tier-grid build-grid">
        <article class="sponsor-tier">
          <img class="tier-logo big-logo" src="assets/rev-sponsor.png" alt="REV sponsor logo" />
        </article>
        <article class="sponsor-tier">
          <img class="tier-logo big-logo" src="assets/first-sponsor.png" alt="FIRST sponsor logo" />
        </article>
      </div>
    </section>

    <section class="home-section">
      <article class="sponsor-intro-card">
        <h2>Partner with us</h2>
        <p>
          We welcome support through funding, materials, mentorship, and collaboration opportunities.
        </p>
        <p>Email: <a href="mailto:rsettle@wcpss.net">rsettle@wcpss.net</a> or <a href="mailto:asousa@wcpss.net">asousa@wcpss.net</a></p>
      </article>
    </section>
  `
  )
)
