import './style.css'
import { mount, renderPage } from './site'

type Member = {
  name: string
  role?: string
  photo?: string
  photoClass?: string
}

const coCaptains: Member[] = [
  { name: 'Dhruv M.', photo: 'assets/dhruv.png' },
  { name: 'Dhanvin P.', photo: 'assets/dhanvin.png' }
]

const subteamLeads: Member[] = [
  { role: 'Mechanical Lead Captain', name: 'Ted B.', photo: 'assets/ted.png' },
  { role: 'Mechanical Lead Vice- Captain', name: 'Josh A.', photo: 'assets/josh.png' },
  { role: 'Business Lead', name: 'Avi M.', photo: 'assets/avi.png' },
  { role: 'Programming Lead', name: 'Senuk W.' },
  { role: 'Outreach Lead', name: 'Joanna W.', photo: 'assets/joanna.png' },
  { role: 'Design Lead', name: 'Akshay S.', photo: 'assets/akshay.jpeg', photoClass: 'photo-akshay' },
  { role: 'Media Lead', name: 'Karma M.', photo: 'assets/karma.png' },
  { role: 'Electrical Lead', name: 'Matthew T.', photo: 'assets/matthew.png' },
  { role: 'Safety Lead', name: 'Chelsea B.' }
]

const founders: Member[] = [
  { name: 'Dhruv M.', photo: 'assets/dhruv.png' },
  { name: 'Dhanvin P.', photo: 'assets/dhanvin.png' },
  { name: 'Avi M.', photo: 'assets/avi.png' },
  { name: 'Joshua A.' },
  { name: 'Ritvik S.' },
  { name: 'Sandeep J.', photo: 'assets/sandeep.png' },
  { name: 'Chelsea B.' }
]

function initials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function renderMemberCard(member: Member): string {
  return `
    <article class="member-card">
      ${
        member.photo
          ? `<div class="member-photo-frame"><img class="member-photo ${member.photoClass ?? ''}" src="${member.photo}" alt="${member.name} headshot" /></div>`
          : `<div class="member-avatar" aria-hidden="true">${initials(member.name)}</div>`
      }
      ${member.role ? `<p class="role">${member.role}</p>` : ''}
      <h3>${member.name}</h3>
    </article>
  `
}

mount(
  renderPage(
    'team',
    'Meet the team!',
    'Students leading design, code, outreach, and competition for Team 11179.',
    `
    <section class="home-section">
      <div class="team-photo-card team-photo-card-large">
        <img class="team-photo team-photo-large" src="assets/team-photo.png" alt="FRC Team 11179 team photo" />
        <p class="photo-caption">FRC 11179 Team Photo</p>
      </div>
    </section>

    <section class="home-section">
      <header class="home-section-head">
        <p class="panel-label">Robot</p>
        <h2>Robot Spotlight</h2>
      </header>
      <figure class="robot-card robot-card-standalone">
        <img class="robot-photo" src="assets/robots/robot-2.png" alt="FRC robot photo" />
      </figure>
    </section>

    <section class="home-section content-card centered">
      <h2>Co-Captains</h2>
      <div class="member-grid two">
        ${coCaptains.map((member) => renderMemberCard(member)).join('')}
      </div>
    </section>

    <section class="home-section content-card centered">
      <h2>Subteam leaders</h2>
      <div class="member-grid three">
        ${subteamLeads.map((member) => renderMemberCard(member)).join('')}
      </div>
    </section>

    <section class="home-section content-card centered">
      <h2>Club Founders</h2>
      <div class="member-grid three">
        ${founders.map((member) => renderMemberCard(member)).join('')}
      </div>
    </section>
  `
  )
)
