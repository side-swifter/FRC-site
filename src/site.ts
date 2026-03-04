export type NavItem = {
  href: string
  label: string
  id: string
}

export const navItems: NavItem[] = [
  { href: 'index.html', label: 'Home', id: 'home' },
  { href: 'team.html', label: 'Team', id: 'team' },
  { href: 'outreach.html', label: 'Outreach', id: 'outreach' },
  { href: 'sponsors.html', label: 'Sponsors', id: 'sponsors' },
  { href: 'join.html', label: 'Join Us', id: 'join' }
]

export type Resource = {
  title: string
  description: string
  href: string
}

export const resources: Resource[] = [
  {
    title: 'Team Overview',
    description: 'Quick intro deck for judges, families, and new members.',
    href: 'assets/FRC 11179.pdf'
  },
  {
    title: 'Joining the Team',
    description: 'Path for new students to get involved and build skills.',
    href: 'assets/FRC 11179 - Joining the team.pdf'
  },
  {
    title: 'Meet the Team',
    description: 'Who we are, how we work, and what roles exist.',
    href: 'assets/FRC 11179 - Meet the team.pdf'
  },
  {
    title: 'Outreach',
    description: 'Community impact, events, and STEM engagement work.',
    href: 'assets/FRC 11179 - Outreach.pdf'
  },
  {
    title: 'Mission Statement',
    description: 'Core values and long-term vision for Team 11179.',
    href: 'assets/mission statement.pdf'
  },
  {
    title: 'Sponsors',
    description: 'Partners who support our robot, events, and growth.',
    href: 'assets/page sponsors.pdf'
  }
]

export function renderPage(pageId: string, title: string, subtitle: string, content: string): string {
  const nav = navItems
    .map(
      (item) =>
        `<a class="nav-link ${item.id === pageId ? 'active' : ''}" href="${item.href}">${item.label}</a>`
    )
    .join('')

  return `
  <main class="site-shell">
    <section class="hero compact">
      <div class="noise"></div>
      <header class="topbar">
        <a class="brand" href="index.html">
          <img class="logo" src="assets/logo.png" alt="FRC Team 11179 logo" />
          <div>
            <p class="team-tag">FRC TEAM 11179</p>
            <p class="team-subtag">White • Red • Blue</p>
          </div>
        </a>
        <nav class="nav">${nav}</nav>
      </header>
      <div class="hero-content">
        <p class="eyebrow">FIRST Robotics Competition</p>
        <h1>${title}</h1>
        <p class="lead">${subtitle}</p>
      </div>
    </section>

    ${content}

    <footer class="footer">
      <p>Team 11179</p>
      <p>Built with TypeScript + Vite</p>
    </footer>
  </main>
  `
}

export function mount(html: string): void {
  const app = document.querySelector<HTMLDivElement>('#app')

  if (!app) {
    throw new Error('App root was not found')
  }

  app.innerHTML = html
}
