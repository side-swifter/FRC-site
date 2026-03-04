import './style.css'
import { mount, renderPage } from './site'

mount(
  renderPage(
    'team',
    'Meet Team 11179',
    'Students, mentors, and subteams collaborating across disciplines.',
    `
    <section class="content-card">
      <h2>Subteams</h2>
      <div class="pill-grid">
        <span>Mechanical</span>
        <span>Electrical</span>
        <span>Programming</span>
        <span>Drive Team</span>
        <span>CAD</span>
        <span>Business + Media</span>
      </div>
      <p>
        Every member gets hands-on training and real responsibility in robot design,
        testing, and competition prep.
      </p>
    </section>

    <section class="content-card">
      <h2>Team Culture</h2>
      <ul class="clean-list">
        <li>Respectful communication under pressure.</li>
        <li>Rapid iteration based on data and testing.</li>
        <li>Mentorship from experienced students and adults.</li>
        <li>Leadership pathways for every grade level.</li>
      </ul>
      <a class="cta" href="assets/FRC 11179 - Meet the team.pdf" target="_blank" rel="noreferrer">Read Team PDF</a>
    </section>
  `
  )
)
