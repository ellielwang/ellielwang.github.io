import React from 'react';
import { FileCard, TextLink, Link, Route, Routes } from './files-shim';
import stories from './stories.js';
import storyImages from './storyImages.js';
import './style.css';
import headshot from './photos/headshot.webp';
import pitcherLogo from './photos/pitcher-logo.png';

const experience = [
    { name: 'JSV Launchpad', role: 'Venture scout - sourcing founders and learning how early teams actually get built.', dates: "sep 2026 - present" },
    { name: 'Todd AgriScience', role: 'Go-to-market intern - interviews with farmers and founders across the country.', dates: 'aug 2026 - present' },
    { name: 'Intern Insider', role: 'Go-to-market fellow.', dates: 'sep 2026 - present' },
    { name: 'TextPip', role: 'Ambassador.', dates: 'sep 2026 - present' },
    { name: 'Anthropic Claude Builder Club', role: 'Campus ambassador at UGA.', dates: 'oct 2026 - present' },
    { name: 'UGA SMIS', role: 'Senior VP of Finance - budgets and funding documentation for the Society for Management Information Systems.', dates: '2026 - 27' },
    { name: 'Terry Student Consulting', role: 'Associate consultant - 1 of 40 selected from 225 applicants.', dates: 'apr 2026 - present' },
    { name: 'Institute for Youth in Policy', role: "Fellow & education intern - Outstanding Capstone Writer for a policy brief on institutional barriers for bereaved college students.", dates: 'fellowship' },
    { name: "NASA L'SPACE", role: 'Principal investigator & program analyst - led a 10-person team on an orbital debris mitigation mission concept.', dates: 'nasa-funded' },
    { name: 'AAAIM', role: 'Investment management extern.', dates: 'externship' },
];

const leadership = [
    { name: 'Lotus Society', role: 'Co-founder & co-president - mentorship community for Asian American students at UGA.', dates: 'may 2026 - present' },
    { name: 'Alpha Sigma Rho Sorority, Inc.', role: 'Philanthropy & social chair - raised $1,418 for the National Ovarian Cancer Coalition and OneSky.', dates: 'greek life' },
    { name: 'Magellan Program', role: 'Selected participant - chosen from 500+ applicants.', dates: 'fellowship' },
    { name: 'Emerging Greek Leaders', role: 'Sole Multicultural Greek Council representative in the cohort.', dates: 'leadership' },
    { name: 'Reed & Payne Community Council', role: 'Coordinator of communications.', dates: 'community' },
    { name: 'UGA', role: 'Campus tour guide for visiting families, and UGArden community service volunteer.', dates: 'service' },
];

const honors = [
    { name: 'EY SAP S/4HANA Case Competition', dates: '2nd place' },
    { name: 'Goldman Sachs Case Competition', dates: 'top 5' },
    { name: 'Global Health Union Case Competition', dates: 'top 2' },
    { name: 'SHRM Case Competition', dates: 'top 4' },
    { name: 'UGA SMIS & WIC Consulting Case Competition', dates: '4th place' },
    { name: 'UGA Claude AI Hackathon', dates: '3rd place' },
    { name: 'LightReel AI Fellowship', dates: '1 of 10 from 300+' },
    { name: 'Point Foundation Persistence Scholarship', dates: '2x recipient' },
    { name: 'Public Health Pathway Student of the Year', dates: '2025' },
    { name: 'ASTA National Orchestra Festival', dates: '1st place · 2025' },
];

const MONTHS = ['january','february','march','april','may','june','july','august','september','october','november','december'];

function Stories() {
    const [query, setQuery] = React.useState('');
    const q = query.trim().toLowerCase();
    const visible = q ? stories.filter((s) => (s.name + ' ' + s.body).toLowerCase().includes(q)) : stories;
    const groups = [];
    [...visible].reverse().forEach((s) => {
        const [m] = s.date.split('/');
        const label = MONTHS[parseInt(m, 10) - 1] + ' 2026';
        const last = groups[groups.length - 1];
        if (last && last.label === label) last.items.push(s); else groups.push({ label, items: [s] });
    });
    return <div className="ew-page">
        <div className="ew-topbar">
            <Link to="/" className="ew-brand ew-back">&#8592; ellie wang</Link>
            <span className="ew-meta">you just have to ask · the archive</span>
        </div>
        <section className="ew-hero">
            <div className="ew-meta">(01) · every story, by date</div>
            <h1>{stories.length} stories</h1>
            <p className="ew-sub">Stories from You Just Have to Ask, organized by date.</p>
            <input
                className="ew-filter"
                type="search"
                placeholder="search a name or a detail"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search stories"
            />
        </section>
        {groups.map((g) => (
            <section className="ew-section" key={g.label}>
                <div className="ew-section-head"><h2>{g.label}</h2><span className="ew-meta">{g.items.length} {g.items.length === 1 ? 'story' : 'stories'}</span></div>
                {g.items.map((s) => (
                    <details className="ew-story" key={s.date + s.name}>
                        <summary>
                            <span className="ew-sdate">{s.date.replace('/2026','')}</span>
                            <span className="ew-sname">{s.name}</span>
                        </summary>
                        <div className="ew-sbody">
                            {(s.images || []).map((p, i) => (
                                <img key={i} className="ew-simg" src={storyImages[p]} alt={`${s.name} - from the original post`} loading="lazy" />
                            ))}
                            {s.body.split(/\n{2,}/).map((p, i) => <p key={i}>{p}</p>)}
                        </div>
                    </details>
                ))}
            </section>
        ))}
        {visible.length === 0 && <p className="ew-body" style={{ padding: '20px 0' }}>no stories match that search.</p>}
        <div className="ew-footer">
            <span className="ew-meta">© 2026 elizabeth &ldquo;ellie&rdquo; wang</span>
        </div>
    </div>;
}

function Portfolio() {
    return <div className="ew-page">
            <div className="ew-topbar">
                <span className="ew-brand">ellie wang</span>
                <span className="ew-meta"><Link to="/stories" className="ew-toplink">stories archive</Link> · vol. 02 · 2026</span>
            </div>

            <section className="ew-hero">
                <div className="ew-hero-grid">
                    <div>
                        <div className="ew-meta">(01) · uga &rsquo;29 · terry college · mis + sociology + entrepreneurship</div>
                        <h1>Elizabeth &ldquo;Ellie&rdquo; Wang</h1>
                        <p className="ew-sub">Building community, one genuine conversation at a time - through mentorship, entrepreneurship, and the technology that connects us.</p>
                        <span className="ew-meta">athens, ga · johns creek, ga</span>
                    </div>
                    <img className="ew-headshot" src={headshot} alt="Ellie Wang professional headshot" />
                </div>
            </section>

            <section className="ew-section">
                <div className="ew-section-head"><h2>about</h2><span className="ew-meta">(02)</span></div>
                <div className="ew-body">
                    <p>I&apos;m a student at the University of Georgia studying Management Information Systems in the Terry College of Business, with a Sociology minor and an Entrepreneurship Certificate.</p>
                    <p>Born and raised in Georgia, the daughter of immigrants - my mother is from Cambodia and my father is from Taiwan. I&apos;ve studied at Oxford University (Biomedical Ethics and Computing Ethics &amp; Society) and traveled Italy and Germany for a Food Industries Maymester.</p>
                    <p>I&apos;ve played piano since I was 4 and violin since 4th grade, and I started making content at 15 by posting piano videos. Music taught me how to work hard; people taught me why it matters.</p>
                </div>
                <div className="ew-values"><span>authenticity</span><span>curiosity</span><span>gratitude</span><span>community</span></div>
            </section>

            <section className="ew-section">
                <div className="ew-section-head"><h2>building</h2><span className="ew-meta">(03)</span></div>
                <div className="ew-venture">
                    <img src={pitcherLogo} alt="Pitcher logo" />
                    <div>
                        <h3>Pitcher</h3>
                        <p>Co-founder (June 2026). A professional discovery network for early-stage startups - human-curated, not an algorithm. My cofounder and I connect student founders with the right people through real connections. First pilot open to Georgia founders, live now.</p>
                        <TextLink href="https://trypitcher.co">trypitcher.co - pitch to anyone</TextLink>
                    </div>
                </div>
                <div className="ew-row">
                    <span className="ew-name">Lotus Society</span>
                    <span className="ew-role">Co-founder &amp; co-president - mentorship organization for Asian American students at UGA.</span>
                    <span className="ew-dates">since may 2026</span>
                </div>
            </section>

            <section className="ew-section">
                <div className="ew-section-head"><h2>you just have to ask</h2><span className="ew-meta">(04)</span></div>
                <div className="ew-body">
                    <p>My daily storytelling series on LinkedIn - one story every day since July 4, 2026, posted at 12:12 PM ET. I talk with young founders, advocates, students, and anyone with a passion for helping the world.</p>
                    <p>I take handwritten notes during conversations, and guests review their stories before publication. It started because I wanted to give my mentors their flowers. It kept going because everyone has a story worth telling.</p>
                </div>
                <div className="ew-stats">
                    <div className="ew-stat"><b>100+</b><span>stories told</span></div>
                    <div className="ew-stat"><b>9+</b><span>countries</span></div>
                    <div className="ew-stat"><b>315,905</b><span>impressions</span></div>
                </div>
                <div className="ew-quote">&ldquo;A bad question is one that&apos;s never asked.&rdquo;</div>
                <TextLink href="https://www.linkedin.com/in/ellielwang">read the series on linkedin - @ellielwang</TextLink>
            </section>

            <section className="ew-section">
                <div className="ew-section-head"><h2>experience</h2><span className="ew-meta">(05)</span></div>
                {experience.map((r) => (
                    <div className="ew-row" key={r.name}>
                        <span className="ew-name">{r.name}</span>
                        <span className="ew-role">{r.role}</span>
                        <span className="ew-dates">{r.dates}</span>
                    </div>
                ))}
            </section>

            <section className="ew-section">
                <div className="ew-section-head"><h2>leadership</h2><span className="ew-meta">(06)</span></div>
                {leadership.map((r) => (
                    <div className="ew-row" key={r.name}>
                        <span className="ew-name">{r.name}</span>
                        <span className="ew-role">{r.role}</span>
                        <span className="ew-dates">{r.dates}</span>
                    </div>
                ))}
            </section>

            <section className="ew-section">
                <div className="ew-section-head"><h2>honors</h2><span className="ew-meta">(07)</span></div>
                {honors.map((r) => (
                    <div className="ew-row" key={r.name}>
                        <span className="ew-name">{r.name}</span>
                        <span className="ew-dates">{r.dates}</span>
                    </div>
                ))}
            </section>

            <section className="ew-section">
                <div className="ew-section-head"><h2>say hi</h2><span className="ew-meta">(08)</span></div>
                <div className="ew-body"><p>Mentors, founders, collaborators - I&apos;m genuinely most reachable through a real conversation.</p></div>
                <div className="ew-links">
                    <a href="https://www.linkedin.com/in/ellielwang" target="_blank" rel="noreferrer"><span className="ew-lname">LinkedIn</span><span className="ew-lval">linkedin.com/in/ellielwang</span></a>
                    <a href="https://linktr.ee/ellielwang" target="_blank" rel="noreferrer"><span className="ew-lname">Linktree</span><span className="ew-lval">linktr.ee/ellielwang</span></a>
                    <a href="https://x.com/ellielwang" target="_blank" rel="noreferrer"><span className="ew-lname">X</span><span className="ew-lval">x.com/ellielwang</span></a>
                    <a href="https://calendly.com/elizabethlynnwang/30min" target="_blank" rel="noreferrer"><span className="ew-lname">Book a chat</span><span className="ew-lval">calendly.com/elizabethlynnwang/30min</span></a>
                    <a href="mailto:ellielwang1@gmail.com"><span className="ew-lname">Email</span><span className="ew-lval">ellielwang1@gmail.com</span></a>
                </div>
            </section>

            <div className="ew-footer">
                <span className="ew-meta">© 2026 elizabeth &ldquo;ellie&rdquo; wang</span>
            </div>
        </div>;
}

export function App() {
    return <FileCard>
        <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/stories" element={<Stories />} />
        </Routes>
    </FileCard>;
}
