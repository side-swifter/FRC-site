import './style.css'
import { mount, renderPage } from './site'

mount(
  renderPage(
    'home',
    'The Power of Friendship',
    'Team 11179 is an FRC team located in Apex, NC. Our mission is to inspire students of all backgrounds to explore STEM and make a positive impact on our K-12 campus and community!',
    `
    <section class="home-frame">
      <div class="home-hero-grid">
        <article class="hero-main-panel">
          <p class="panel-label">What we do</p>
          <h2>Build. Compete. Grow.</h2>
          <p>
            Students lead real robot projects from design to competition, while
            building technical skills, confidence, and community impact.
          </p>
          <div class="hero-actions">
            <a class="cta" href="join.html">Join the team</a>
            <a class="home-link-btn" href="team.html">Meet the team</a>
          </div>
        </article>

        <article class="hero-side-panel">
          <p class="panel-label">Build sessions</p>
          <h3>Room 4222</h3>
          <ul class="clean-list">
            <li>2:30-5 PM on Tuesdays-Thursdays</li>
            <li>9-4 PM on Saturdays</li>
          </ul>
        </article>

        <article class="hero-side-panel">
          <p class="panel-label">Current focus</p>
          <h3>Competition + outreach</h3>
          <p>We build, test, and mentor with student-led subteams across engineering, business, and media.</p>
        </article>

        <article class="hero-wide-panel">
          <p class="panel-label">Important dates</p>
          <p>Wake County District Events: March 6-8 and March 20-22 at Heritage High School, Wake Forest, NC.</p>
        </article>
      </div>
    </section>

    <section class="home-section">
      <header class="home-section-head">
        <p class="panel-label">Competition Schedule</p>
        <h2>District Events</h2>
      </header>

      <div class="event-lattice">
        <article class="event-card">
          <p class="event-date">March 6-8</p>
          <h3>FNC Wake County #1 District Event</h3>
          <p class="event-location">Heritage High School, Wake Forest, NC</p>
          <ul class="clean-list">
            <li>Friday, March 6th: 5pm - 10pm</li>
            <li>Saturday, March 7th: 8am - 8pm</li>
            <li>Sunday, March 8th: 8am - 5pm</li>
          </ul>
        </article>

        <article class="event-card">
          <p class="event-date">March 20-22</p>
          <h3>FNC Wake County #2 District Event</h3>
          <p class="event-location">Heritage High School, Wake Forest, NC</p>
          <ul class="clean-list">
            <li>Friday, March 20th: 5pm - 10pm</li>
            <li>Saturday, March 21th: 8am - 8pm</li>
            <li>Sunday, March 22th: 8am - 5pm</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="home-section">
      <header class="home-section-head">
        <p class="panel-label">Gallery</p>
        <h2>Our Team</h2>
      </header>
      <div class="team-photo-card">
        <img class="team-photo" src="assets/team-photo.png" alt="FRC Team 11179 team photo" />
      </div>
    </section>

    <section class="home-section">
      <div class="info-layout">
        <article class="info-card">
          <p class="panel-label">Support</p>
          <h2>Special shoutout to our power level sponsor!</h2>
          <p>Thank you for supporting our team, outreach programs, and student growth this season.</p>
          <img class="sponsor-logo" src="assets/nasa-logo.png" alt="NASA logo" />
        </article>

        <article class="info-card">
          <p class="panel-label">Coach emails</p>
          <h2>Contact coaches</h2>
          <p><a href="mailto:rsettle@wcpss.net">rsettle@wcpss.net</a></p>
          <p><a href="mailto:asousa@wcpss.net">asousa@wcpss.net</a></p>
        </article>

        <article class="info-card social-card">
          <h2>Follow the team</h2>
          <p>Build updates, event highlights, and outreach moments.</p>
          <a class="cta" href="https://www.instagram.com/afhs_frc11179/" target="_blank" rel="noreferrer">Open Instagram</a>
        </article>
      </div>
    </section>
  `
  )
)
