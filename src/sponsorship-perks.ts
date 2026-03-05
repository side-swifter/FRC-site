import './style.css'
import { mount, renderPage } from './site'

mount(
  renderPage(
    'sponsors',
    'Sponsorship perks',
    'Support Team 11179 and help us expand student access to STEM through robotics.',
    `
    <section class="home-section">
      <div class="sponsor-actions">
        <a class="cta" href="sponsors.html">Back to sponsors</a>
        <a class="cta red-btn" href="mailto:rsettle@wcpss.net?subject=FRC%2011179%20Sponsorship%20Interest">Become a sponsor</a>
      </div>
    </section>

    <section class="home-section">
      <header class="home-section-head">
        <p class="panel-label">Sponsorship perks</p>
        <h2>Sponsorship perks</h2>
      </header>
      <div class="perk-stack">
        <article class="perk-card">
          <h3>Friend of 11179 ($1-$499)</h3>
          <p>For this amount of money, you receive;</p>
          <ul class="clean-list">
            <li>A personalized thank-you email/letter</li>
            <li>Team updates within the season</li>
            <li>Recognition on social media (group post)</li>
            <li>Opportunity to attend a robot demo or community outreach event</li>
          </ul>
        </article>

        <article class="perk-card">
          <h3>Community Level Sponsor ($500 - $999)</h3>
          <p>For this amount of money, you receive all previous perks, plus;</p>
          <ul class="clean-list">
            <li>Company name on the team website sponsors page</li>
            <li>Social media shoutout thanking your business/organization</li>
            <li>A personalized thank-you letter from the team</li>
          </ul>
        </article>

        <article class="perk-card">
          <h3>Build Level Sponsor ($1,000 - $2,999)</h3>
          <p>For this amount of money, you receive all previous perks, plus;</p>
          <ul class="clean-list">
            <li>Small company logo on the team website's sponsors page</li>
            <li>Clickable button to your company website on our website</li>
            <li>Company logo displayed in the competition pit</li>
            <li>Invitation to team open house/outreach event</li>
            <li>Company logo printed on team shirts (size scaled to contribution)</li>
          </ul>
        </article>

        <article class="perk-card">
          <h3>Alliance Level Sponsor ($3,000 - $5,999)</h3>
          <p>For this amount of money, you receive all previous perks, plus;</p>
          <ul class="clean-list">
            <li>Medium company logo on the team website's sponsors page</li>
            <li>Logo displayed on the competition robot</li>
            <li>Medium company logo printed on team shirts (size scaled to contribution)</li>
            <li>Option to schedule a team visit at your business or organization</li>
            <li>Recognition in a dedicated sponsor appreciation social media post</li>
          </ul>
        </article>

        <article class="perk-card">
          <h3>Power Level Sponsor ($6,000+)</h3>
          <p>For this amount of money, you receive all previous perks, plus;</p>
          <ul class="clean-list">
            <li>Large company logo featured on the team website home page and sponsors page</li>
            <li>Company name recognized as a sponsor during competitions and public events</li>
            <li>Logo displayed prominently in the competition pit</li>
            <li>Invitation to attend a team meeting, build session, or competition</li>
            <li>Personalized sponsor appreciation plaque or frame team photo</li>
          </ul>
        </article>
      </div>
    </section>
  `
  )
)
