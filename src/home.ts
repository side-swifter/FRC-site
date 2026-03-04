import './style.css'
import { mount, renderPage, resources } from './site'

const stats = [
  {
    title: 'Design + Build',
    body: 'From CAD to fabrication, students own the engineering process end to end.'
  },
  {
    title: 'Code + Controls',
    body: 'Autonomous routines, driver controls, and testing are developed by our programmers.'
  },
  {
    title: 'Compete + Improve',
    body: 'Every event is a chance to iterate, collaborate, and grow as a team.'
  }
]

const resourceCards = resources
  .slice(0, 3)
  .map(
    (resource) => `
    <a class="resource-card" href="${resource.href}" target="_blank" rel="noreferrer">
      <h3>${resource.title}</h3>
      <p>${resource.description}</p>
      <span>Open PDF</span>
    </a>
  `
  )
  .join('')

mount(
  renderPage(
    'home',
    'Student engineers turning ideas into robots.',
    'We are Team 11179, focused on technical excellence, team culture, and community impact.',
    `
    <section class="stats">
      ${stats
        .map(
          (stat) => `
        <article>
          <h2>${stat.title}</h2>
          <p>${stat.body}</p>
        </article>
      `
        )
        .join('')}
    </section>

    <section class="split-card">
      <div>
        <p class="eyebrow">Our Mission</p>
        <h2>Build capable students through real engineering challenges.</h2>
        <p>
          Team 11179 combines mechanical design, electrical integration, software,
          strategy, business, and media into one focused build program.
        </p>
        <a class="cta" href="join.html">Join the Team</a>
      </div>
      <img class="about-logo" src="assets/logo.png" alt="Team logo" />
    </section>

    <section class="resources">
      <div class="section-head">
        <p class="eyebrow">Featured Files</p>
        <h2>Start Here</h2>
      </div>
      <div class="resource-grid">${resourceCards}</div>
    </section>
  `
  )
)
