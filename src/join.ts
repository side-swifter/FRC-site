import './style.css'
import { mount, renderPage } from './site'

mount(
  renderPage(
    'join',
    'Join Team 11179',
    'New members are welcome across all experience levels.',
    `
    <section class="content-card">
      <h2>Who Should Join</h2>
      <p>
        Students interested in building, coding, design, media, strategy, or business.
        No prior robotics experience is required.
      </p>
    </section>

    <section class="content-card">
      <h2>How to Start</h2>
      <ol class="clean-list ordered">
        <li>Review the team onboarding PDF.</li>
        <li>Attend an intro meeting or outreach event.</li>
        <li>Pick a subteam and start training.</li>
      </ol>
      <a class="cta" href="assets/FRC 11179 - Joining the team.pdf" target="_blank" rel="noreferrer">Open Joining Guide</a>
    </section>
  `
  )
)
