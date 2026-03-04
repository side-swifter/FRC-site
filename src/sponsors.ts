import './style.css'
import { mount, renderPage } from './site'

mount(
  renderPage(
    'sponsors',
    'Sponsors & Partners',
    'Supporters who make our season possible.',
    `
    <section class="content-card">
      <h2>Why Sponsorship Matters</h2>
      <p>
        Sponsorship helps fund materials, registration fees, travel, and outreach programs.
        It directly expands what students can build and learn each season.
      </p>
      <a class="cta" href="assets/page sponsors.pdf" target="_blank" rel="noreferrer">View Sponsor Page</a>
    </section>

    <section class="content-card">
      <h2>Partner With Us</h2>
      <p>
        We welcome support through funding, materials, mentorship, and collaboration opportunities.
      </p>
      <p>Email: <a href="mailto:team11179@example.com">team11179@example.com</a></p>
    </section>
  `
  )
)
