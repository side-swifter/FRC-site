import './style.css'
import { mount, renderPage } from './site'

mount(
  renderPage(
    'outreach',
    'Outreach',
    'This page highlights the outreach events our team has led to share STEM and robotics with our community. Part of our mission statement is to provide STEM opportunities to the youth in our community, and thus, we conduct several outreach events to fulfill our mission.',
    `
    <section class="home-section">
      <article class="sponsor-intro-card">
        <h2>Outreach</h2>
        <p>
          This page highlights the outreach events our team has led to share STEM and robotics with our community.
        </p>
        <p>
          Part of our mission statement is to provide STEM opportunities to the youth in our community, and thus,
          we conduct several outreach events to fulfill our mission.
        </p>
      </article>
    </section>

    <section class="home-section">
      <header class="home-section-head">
        <p class="panel-label">Events</p>
        <h2>Outreach events</h2>
      </header>
      <div class="perk-stack">
        <article class="perk-card">
          <h3>Lacy Elementary School STEM Night - 1/15/26</h3>
          <p>Coming soon!</p>
        </article>

        <article class="perk-card">
          <h3>Academy of Engineering Expo - 2/25/26</h3>
          <p>Coming soon!</p>
        </article>

        <article class="perk-card">
          <h3>Woods Creek Elementary STEAM night - 2/25/26</h3>
          <p>Coming soon!</p>
        </article>

        <article class="perk-card">
          <h3>More outreach events</h3>
          <p>Coming soon!</p>
        </article>
      </div>
    </section>

    <section class="home-section">
      <article class="sponsor-intro-card">
        <h2>More updates</h2>
        <p>Coming soon!</p>
      </article>
    </section>
  `
  )
)
