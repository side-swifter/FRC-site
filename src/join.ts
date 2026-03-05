import './style.css'
import { mount, renderPage } from './site'

mount(
  renderPage(
    'join',
    'Join Team 11179',
    'Steps to join the team',
    `
    <section class="home-section">
      <div class="join-layout">
        <article class="join-card">
          <p class="panel-label">Eligibility</p>
          <h2>Who can join</h2>
          <p>Must be in 9th-12th grade and a student at Apex Friendship High.</p>
        </article>

        <article class="join-card">
          <p class="panel-label">Contact</p>
          <h2>Email your interest</h2>
          <p>Contact Ms. Settle OR Ms. Sousa of your interest to join at the following emails:</p>
          <p><a href="mailto:rsettle@wcpss.net">rsettle@wcpss.net</a></p>
          <p><a href="mailto:asousa@wcpss.net">asousa@wcpss.net</a></p>
        </article>
      </div>
    </section>

    <section class="home-section">
      <header class="home-section-head">
        <p class="panel-label">Process</p>
        <h2>Steps to join the team</h2>
      </header>
      <div class="join-steps">
        <article class="join-step">
          <p class="step-num">01</p>
          <p>Contact Ms. Settle OR Ms. Sousa of your interest to join.</p>
        </article>
        <article class="join-step">
          <p class="step-num">02</p>
          <p>Follow the steps listed in the email (register for FIRST, join the Remind, etc.).</p>
        </article>
        <article class="join-step">
          <p class="step-num">03</p>
          <p>Show up to the meetings!</p>
        </article>
      </div>
    </section>

    <section class="home-section">
      <article class="join-schedule">
        <p class="panel-label">Meeting times</p>
        <h2>Weekly schedule</h2>
        <ul class="clean-list">
          <li>Tuesdays, Wednesdays, Thursdays - 2:30 - 5 PM</li>
          <li>Saturday- 9 AM - 4 PM</li>
        </ul>
      </article>
    </section>
  `
  )
)
