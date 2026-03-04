import './style.css'
import { mount, renderPage } from './site'

mount(
  renderPage(
    'outreach',
    'Outreach & Community Impact',
    'Sharing STEM through demos, events, and mentoring.',
    `
    <section class="content-card">
      <h2>What We Do</h2>
      <ul class="clean-list">
        <li>Host and support local STEM showcases.</li>
        <li>Demonstrate the robot at school and community events.</li>
        <li>Encourage younger students to explore engineering.</li>
      </ul>
    </section>

    <section class="split-card">
      <div>
        <p class="eyebrow">Outreach File</p>
        <h2>See our outreach highlights and event impact.</h2>
        <a class="cta" href="assets/FRC 11179 - Outreach.pdf" target="_blank" rel="noreferrer">Open Outreach PDF</a>
      </div>
      <img class="about-logo" src="assets/logo.png" alt="Team logo" />
    </section>
  `
  )
)
