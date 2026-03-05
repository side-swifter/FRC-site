import './style.css'
import { mount, renderPage } from './site'

mount(
  renderPage(
    'about',
    'About Team 11179',
    'Student-led robotics focused on engineering, leadership, and community impact.',
    `
    <section class="home-section">
      <div class="about-mosaic">
        <article class="about-hero-card">
          <p class="panel-label">Who we are</p>
          <h2>We build robots and leaders at the same time.</h2>
          <p>
            Team 11179 is a FIRST Robotics Competition team at Apex Friendship High School.
            Students run real projects across mechanical, electrical, programming, design,
            business, and media.
          </p>
          <div class="sponsor-actions">
            <a class="cta" href="team.html">Meet the team</a>
            <a class="cta red-btn" href="join.html">Join us</a>
          </div>
        </article>

        <aside class="about-kpi-rail">
          <article class="about-kpi-card">
            <p class="kpi-label">Focus</p>
            <h3>Build + Compete</h3>
            <p>Student-led robot design from kickoff to district events.</p>
          </article>
          <article class="about-kpi-card">
            <p class="kpi-label">Impact</p>
            <h3>STEM Outreach</h3>
            <p>We run demos and events to inspire younger students.</p>
          </article>
          <article class="about-kpi-card">
            <p class="kpi-label">Culture</p>
            <h3>Mentor Driven</h3>
            <p>Experienced mentors and student leaders guide every subteam.</p>
          </article>
        </aside>
      </div>
    </section>

    <section class="home-section">
      <div class="about-split-grid">
        <article class="about-story-card">
          <p class="panel-label">Our mission</p>
          <h2>Open doors to STEM for every student.</h2>
          <p>
            We aim to inspire students of all backgrounds to explore STEM and make a positive
            impact on our school and community through hands-on robotics.
          </p>
          <p>
            Members graduate with practical engineering experience, communication skills,
            and confidence built under real deadlines.
          </p>
        </article>

        <div class="about-values-stack">
          <article class="about-value">
            <h3>Design with purpose</h3>
            <p>Every subsystem is built around reliability, iteration, and strategy.</p>
          </article>
          <article class="about-value">
            <h3>Lead through service</h3>
            <p>Older members mentor new students and pass down technical knowledge.</p>
          </article>
          <article class="about-value">
            <h3>Compete with grit</h3>
            <p>We test, learn from data, and improve fast through each event.</p>
          </article>
        </div>
      </div>
      <div class="featured-photo-layout">
        <div class="team-photo-card team-photo-card-large">
          <img class="team-photo team-photo-large" src="assets/team-photo.png" alt="FRC Team 11179 team photo" />
        </div>
        <figure class="robot-card">
          <img class="robot-photo" src="assets/robots/robot-1.png" alt="FRC robot photo" />
        </figure>
      </div>
    </section>

    <section class="home-section">
      <header class="home-section-head">
        <p class="panel-label">Team journey</p>
        <h2>How we run the season</h2>
      </header>
      <div class="about-timeline">
        <article class="timeline-item">
          <p class="timeline-step">01</p>
          <h3>Kickoff + Strategy</h3>
          <p>Analyze game rules, define priorities, and map our robot architecture.</p>
        </article>
        <article class="timeline-item">
          <p class="timeline-step">02</p>
          <h3>Design + Prototype</h3>
          <p>Create CAD, build prototypes, and validate mechanisms early.</p>
        </article>
        <article class="timeline-item">
          <p class="timeline-step">03</p>
          <h3>Integrate + Test</h3>
          <p>Combine hardware/software, tune autos, and harden for reliability.</p>
        </article>
        <article class="timeline-item">
          <p class="timeline-step">04</p>
          <h3>Compete + Outreach</h3>
          <p>Compete at district events and share STEM through local programs.</p>
        </article>
      </div>
    </section>
  `
  )
)
