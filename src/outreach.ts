import './style.css'
import { mount, renderPage } from './site'

mount(
  renderPage(
    'outreach',
    'Outreach',
    'This page highlights the outreach events our team has led to share STEM and robotics with our community. Part of our mission statement is to provide STEM opportunities to the youth in our community, and thus, we conduct several outreach events to fulfill our mission.',
    `
    <section class="home-section">
      <div class="outreach-hero-layout">
        <article class="outreach-hero-card">
          <p class="panel-label">Community mission</p>
          <h2>Sharing robotics and STEM with younger students.</h2>
          <p>
            Part of our mission is to provide STEM opportunities to youth in our
            community through hands-on outreach events.
          </p>
          <p>
            We run demos, explain engineering concepts, and invite students to
            interact with our robot and team members.
          </p>
        </article>

        <aside class="outreach-photo-stack">
          <div class="outreach-photo-slot">
            <p class="slot-title">Photo</p>
          </div>
          <div class="outreach-photo-slot">
            <p class="slot-title">Photo</p>
          </div>
        </aside>
      </div>
    </section>

    <section class="home-section">
      <header class="home-section-head">
        <p class="panel-label">Events</p>
        <h2>Outreach timeline</h2>
      </header>
      <div class="outreach-event-grid">
        <article class="outreach-event-card">
          <p class="event-badge">January 15, 2026</p>
          <h3>Lacy Elementary School STEM Night</h3>
          <p>Robot demos and STEM station engagement with elementary students.</p>
        </article>

        <article class="outreach-event-card">
          <p class="event-badge">February 25, 2026</p>
          <h3>Academy of Engineering Expo</h3>
          <p>Presented FRC engineering workflow to prospective students and families.</p>
        </article>

        <article class="outreach-event-card">
          <p class="event-badge">February 25, 2026</p>
          <h3>Woods Creek Elementary STEAM Night</h3>
          <p>Interactive demonstrations and Q&A about robotics and teamwork.</p>
        </article>

        <article class="outreach-event-card">
          <p class="event-badge">Coming Soon</p>
          <h3>More outreach events</h3>
          <p>Additional events and recap photos will be added throughout the season.</p>
        </article>
      </div>
    </section>

    <section class="home-section">
      <header class="home-section-head">
        <p class="panel-label">Gallery</p>
        <h2>Event photo wall</h2>
      </header>
      <div class="outreach-gallery-grid">
        <figure class="outreach-gallery-item wide">
          <div class="outreach-photo-slot">
            <p class="slot-title">Photo</p>
          </div>
        </figure>
        <figure class="outreach-gallery-item">
          <div class="outreach-photo-slot">
            <p class="slot-title">Photo</p>
          </div>
        </figure>
        <figure class="outreach-gallery-item">
          <div class="outreach-photo-slot">
            <p class="slot-title">Photo</p>
          </div>
        </figure>
        <figure class="outreach-gallery-item">
          <div class="outreach-photo-slot">
            <p class="slot-title">Photo</p>
          </div>
        </figure>
      </div>
    </section>
  `
  )
)
