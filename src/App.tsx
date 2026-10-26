import React from 'react';
import { FileCard, Link, Route, Routes } from './files-shim';
import stories from './stories.js';
import { SECTIONS, sectionsFor, excerpt } from './sections.js';
import storyImages from './storyImages.js';
import './fonts.css';
import './style.css';
import headshot from './photos/headshot.webp';

type Story = { date: string; name: string; body: string; images: string[] };
const all: Story[] = stories as Story[];
const newest = [...all].reverse();
const MONTHS = ['january','february','march','april','may','june','july','august','september','october','november','december'];

const titleCase = (n: string) => n.replace(/\b\w/g, (c) => c.toUpperCase());


const ThemeCtx = React.createContext<{ dusk: boolean; toggle: () => void }>({ dusk: false, toggle: () => {} });
const PIX = ['........#........', '...#...###...#...', '..##..#####..##..', '.###.#######.###.', '####.#######.####', '.###############.', '..#############..', '...###########...', '.....#######.....', '~~~~~~~~~~~~~~~~~'];
function PixelLotus({ className }: { className?: string }) {
    return <svg className={className} viewBox="0 0 17 10" shapeRendering="crispEdges" aria-hidden="true">
        {PIX.flatMap((row, y) => [...row].map((c, x) => c === '.' ? null : <rect key={x + '-' + y} x={x} y={y} width="1" height="1" fill={c === '~' ? 'var(--soft)' : (y < 4 ? 'var(--accent)' : 'var(--pix2)')} />))}
    </svg>;
}
function Icon({ kind }: { kind: string }) {
    const p = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true };
    if (kind === 'mail') return <svg {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 7 9-7" /></svg>;
    if (kind === 'cal') return <svg {...p}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></svg>;
    if (kind === 'x') return <svg {...p}><path d="M5 4l14 16M19 4L5 20" /></svg>;
    if (kind === 'tree') return <svg {...p}><path d="M12 3v18M12 8l-5 4M12 8l5 4M12 13l-4 3M12 13l4 3" /></svg>;
    return <svg {...p}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 11v6M8 7.5v.01M12 17v-6M12 13c0-2 4-2.5 4 0v4" /></svg>;
}

function Lotus({ className }: { className?: string }) {
    const petals = [[0, 1], [-24, .92], [24, .92], [-48, .8], [48, .8], [-72, .64], [72, .64]];
    return <svg className={className} viewBox="0 0 200 130" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" aria-hidden="true">
        {[...petals].reverse().map(([r, s], i) => <path key={i} pathLength={1} style={{ ['--i' as string]: i } as React.CSSProperties} transform={`rotate(${r} 100 112) translate(100 112) scale(${s}) translate(-100 -112)`} d="M100 112 C78 86 78 42 100 6 C122 42 122 86 100 112 Z" />)}
        <path d="M100 112 C92 96 92 70 100 44 C108 70 108 96 100 112 Z" />
        <path d="M20 118 C60 124 80 124 100 120 C120 124 140 124 180 118" />
        <path d="M52 126 C80 130 120 130 148 126" />
    </svg>;
}

function StoryModal({ story, onClose }: { story: Story; onClose: () => void }) {
    React.useEffect(() => {
        const key = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', key);
        return () => window.removeEventListener('keydown', key);
    }, [onClose]);
    return <div className="ew-modal" role="dialog" aria-modal="true" aria-label={story.name} onClick={onClose}>
        <article className="ew-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="ew-close" onClick={onClose} aria-label="Close story">close</button>
            <div className="ew-meta">{story.date}</div>
            <h3>{titleCase(story.name)}</h3>
            {story.images.map((p, i) => <img key={i} className="ew-simg" src={storyImages[p]} alt={`${titleCase(story.name)}, from the original post`} loading="lazy" />)}
            {story.body.split(/\n{2,}/).map((p, i) => <p key={i}>{p}</p>)}
        </article>
    </div>;
}


const withSections = newest.map((s) => ({ s, secs: sectionsFor(s) as string[] }));
const inSection = (slug: string) => withSections.filter((x) => x.secs.includes(slug)).map((x) => x.s);
const today = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

function Masthead() {
    const { dusk, toggle } = React.useContext(ThemeCtx);
    return <header className="ew-mast">
        <div className="ew-topline">
            <span>{today}</span>
            <span className="ew-tl-mid">you just have to ask &middot; {all.length} stories</span>
            <button className="ew-mode" onClick={toggle} aria-pressed={dusk} aria-label={dusk ? 'Switch to day mode' : 'Switch to dusk mode'}><PixelLotus />{dusk ? 'day' : 'dusk'}</button>
        </div>
        <div className="ew-brandrow">
            <Link to="/" className="ew-brand"><img src={headshot} alt="" />ellielwang</Link>
            <Lotus className="ew-mast-lotus" />
        </div>
        <nav className="ew-secnav" aria-label="Sections">
            <Link to="/">latest</Link>
            {SECTIONS.map((x) => <Link key={x.slug} to={'/section/' + x.slug}>{x.label}</Link>)}
            <Link to="/stories">all stories</Link>
            <a href="#about">about</a>
            <a href="#contact">contact</a>
        </nav>
    </header>;
}

function Thumb({ s }: { s: Story }) {
    return <img className="ew-thumb" src={storyImages[s.images[0]]} alt="" loading="lazy" />;
}

function Brief({ s, onOpen }: { s: Story; onOpen: (s: Story) => void }) {
    return <button className="ew-brief" onClick={() => onOpen(s)}>
        <Thumb s={s} />
        <span className="ew-kick">{s.date.replace('/2026', '')}</span>
        <span className="ew-hl">{titleCase(s.name)}</span>
        <span className="ew-dek">{excerpt(s, 120)}</span>
    </button>;
}

function Row({ items, onOpen, label }: { items: Story[]; onOpen: (s: Story) => void; label: string }) {
    const ref = React.useRef<HTMLDivElement>(null);
    const by = (dir: number) => ref.current?.scrollBy({ left: dir * Math.max(300, (ref.current?.clientWidth || 600) * 0.8), behavior: 'smooth' });
    return <div className="ew-rowwrap">
        <div className="ew-arrows">
            <button onClick={() => by(-1)} aria-label={'Scroll ' + label + ' left'}>&larr;</button>
            <button onClick={() => by(1)} aria-label={'Scroll ' + label + ' right'}>&rarr;</button>
        </div>
        <div className="ew-track" ref={ref} tabIndex={0} aria-label={label}>
            {items.map((s) => <Brief key={s.date + s.name} s={s} onOpen={onOpen} />)}
        </div>
    </div>;
}

function Home() {
    const [open, setOpen] = React.useState<Story | null>(null);
    const lead = newest[0];
    const next = newest.slice(1, 6);
    return <div className={'ew' + (React.useContext(ThemeCtx).dusk ? ' dusk' : '')}>
        <Masthead />
        <main className="ew-wrap">
            <section className="ew-front">
                <aside className="ew-rail">
                    <figure className="ew-arch"><img src={headshot} alt="Ellie Wang standing on a balcony in a black blazer" /></figure>
                    <p className="ew-kicker">UGA &rsquo;29, Terry College of Business</p>
                    <h1>building community, <em>one genuine conversation</em> at a time</h1>
                    <div className="ew-pills"><a href="#sections">browse by industry</a><a href="https://calendly.com/elizabethlynnwang/30min" target="_blank" rel="noreferrer">book a chat</a></div>
                </aside>
                <article className="ew-lead">
                    <Lotus className="ew-lead-lotus" />
                    <span className="ew-label">latest story</span>
                    <button className="ew-leadbtn" onClick={() => setOpen(lead)}>
                        <img src={storyImages[lead.images[0]]} alt={titleCase(lead.name) + ', from the original post'} />
                        <span className="ew-kick">{lead.date}</span>
                        <span className="ew-leadhl">{titleCase(lead.name)}</span>
                        <span className="ew-leaddek">{excerpt(lead, 260)}</span>
                        <span className="ew-more">read the story &rarr;</span>
                    </button>
                </article>
                <aside className="ew-latest">
                    <span className="ew-label">more recent</span>
                    {next.map((s) => <button key={s.date + s.name} className="ew-item" onClick={() => setOpen(s)}>
                        <span className="ew-kick">{s.date.replace('/2026', '')}</span>
                        <span className="ew-hl">{titleCase(s.name)}</span>
                        <span className="ew-dek">{excerpt(s, 90)}</span>
                    </button>)}
                    <Link className="ew-link" to="/stories">search all {all.length} stories</Link>
                </aside>
            </section>

            <section className="ew-band">
                <div><h3>cofounder of <u>Pitcher</u></h3><p>A professional discovery network for early-stage startups. <b>Human-curated</b>, not an algorithm. First pilot open to <b>Georgia founders</b>. <a href="https://trypitcher.co" target="_blank" rel="noreferrer">trypitcher.co</a></p></div>
                <div><h3>at <u>school</u></h3><p><b>Management Information Systems</b> at Terry College, with a <b>Sociology</b> minor and an <b>Entrepreneurship</b> certificate</p></div>
                <div><h3>the <u>series</u></h3><p>You Just Have to Ask: <b>one story every day</b> on LinkedIn since July 4, talking with founders, advocates and students</p></div>
                <div><h3>building <u>community</u></h3><p>Co-founder and co-president of <b>Lotus Society</b>, a mentorship org for Asian American students at UGA</p></div>
            </section>

            <section id="stories" className="ew-sect">
                <div className="ew-shead"><h2>the newest <em>stories</em></h2><Link to="/stories">see all {all.length} &rarr;</Link></div>
                <Row items={newest.slice(0, 24)} onOpen={setOpen} label="Latest stories" />
                <p className="ew-hint"><span className="ew-h-d">use the arrows</span><span className="ew-h-m">swipe</span> &middot; tap a story to read it</p>
            </section>

            <div id="sections" />
            {SECTIONS.map((x) => {
                const items = inSection(x.slug);
                if (!items.length) return null;
                return <section key={x.slug} className="ew-sect ew-secblock">
                    <div className="ew-shead"><h2>{x.label}</h2><Link to={'/section/' + x.slug}>{items.length} {items.length === 1 ? 'story' : 'stories'} &rarr;</Link></div>
                    <Row items={items.slice(0, 12)} onOpen={setOpen} label={x.label} />
                </section>;
            })}

            <section className="ew-sect" id="work">
                <div className="ew-shead"><h2>in the <em>field</em></h2></div>
                <div className="ew-trio">
                    <div className="ew-tcol"><h3>venture + business</h3><ul>
                        <li><b>JSV Launchpad</b>, venture scout</li>
                        <li><b>Todd AgriScience</b>, go-to-market intern</li>
                        <li><b>Terry Student Consulting</b>, 1 of 40 from 225 applicants</li>
                        <li><b>UGA SMIS</b>, senior VP of finance</li>
                        <li>Intern Insider fellow, TextPip ambassador</li></ul></div>
                    <div className="ew-tcol"><h3>research + policy</h3><ul>
                        <li><b>NASA L&rsquo;SPACE</b>, principal investigator on an orbital debris mission concept</li>
                        <li><b>Institute for Youth in Policy</b>, fellow, Outstanding Capstone Writer</li>
                        <li><b>AAAIM</b>, investment management extern</li>
                        <li><b>Anthropic Claude Builder Club</b>, campus ambassador</li></ul></div>
                    <div className="ew-tcol"><h3>leadership</h3><ul>
                        <li><b>Alpha Sigma Rho</b>, philanthropy and social chair, raised $1,418</li>
                        <li><b>Magellan Program</b>, selected from 500+ applicants</li>
                        <li><b>Emerging Greek Leaders</b>, sole MGC representative</li>
                        <li>Reed &amp; Payne Community Council, UGA campus tour guide</li></ul></div>
                </div>
            </section>

            <section className="ew-row">
                <div>
                    <div className="ew-shead"><h2>about the <em>series</em></h2></div>
                    <p>My daily storytelling series on LinkedIn: one story every day since July 4, 2026, posted at 12:12 PM ET. I talk with young founders, advocates, students, and anyone with a passion for helping the world.</p>
                    <p>I take handwritten notes during conversations, and guests review their stories before publication. It started because I wanted to give my mentors their flowers. It kept going because everyone has a story worth telling.</p>
                    <blockquote>&ldquo;A bad question is one that&rsquo;s never asked.&rdquo;</blockquote>
                    <a className="ew-link" href="https://www.linkedin.com/in/ellielwang" target="_blank" rel="noreferrer">read the series on LinkedIn</a>
                </div>
                <div>
                    <div className="ew-stats"><div>100+<small>stories told</small></div><div>9+<small>countries</small></div><div>319,719<small>impressions</small></div></div>
                    <h3 className="ew-small">honors</h3>
                    <ul className="ew-honors">
                        <li>EY SAP S/4HANA Case Competition<span>2nd</span></li>
                        <li>Goldman Sachs Case Competition<span>top 5</span></li>
                        <li>Global Health Union Case Competition<span>top 2</span></li>
                        <li>SHRM Case Competition<span>top 4</span></li>
                        <li>UGA SMIS &amp; WIC Consulting Case Competition<span>4th</span></li>
                        <li>UGA Claude AI Hackathon<span>3rd</span></li>
                        <li>LightReel AI Fellowship<span>1 of 10</span></li>
                        <li>Point Foundation Persistence Scholarship<span>2x</span></li>
                        <li>Public Health Pathway Student of the Year<span>2025</span></li>
                        <li>ASTA National Orchestra Festival<span>1st</span></li>
                    </ul>
                </div>
            </section>

            <section className="ew-row ew-about" id="about">
                <Lotus className="ew-deco ew-deco-b" />
                <div>
                    <div className="ew-shead"><h2>about</h2></div>
                    <p>I&rsquo;m a student at the University of Georgia studying Management Information Systems in the Terry College of Business, with a Sociology minor and an Entrepreneurship Certificate.</p>
                    <p>Born and raised in Georgia, the daughter of immigrants. My mother is from Cambodia and my father is from Taiwan. I&rsquo;ve studied at Oxford University (Biomedical Ethics and Computing Ethics &amp; Society) and traveled Italy and Germany for a Food Industries Maymester.</p>
                </div>
                <div className="ew-aboutr">
                    <p>I&rsquo;ve played piano since I was 4 and violin since 4th grade, and I started making content at 15 by posting piano videos. Music taught me how to work hard; people taught me why it matters.</p>
                    <p className="ew-values">authenticity &middot; curiosity &middot; gratitude &middot; community</p>
                </div>
            </section>

            <Newsletter /><Contact />
            <Foot />
        </main>
        {open && <StoryModal story={open} onClose={() => setOpen(null)} />}
    </div>;
}

function Newsletter() {
    const [email, setEmail] = React.useState('');
    const [done, setDone] = React.useState(false);
    return <section className="ew-sect ew-news" id="newsletter">
        <div className="ew-shead"><h2>the <em>newsletter</em></h2></div>
        <p className="ew-clede">New stories in your inbox, so you never have to catch every post. Always free. No paywall.</p>
        <form className="ew-nform" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
            <input type="email" required value={email} onChange={(e) => { setEmail(e.target.value); setDone(false); }} placeholder="you@email.com" aria-label="email address" />
            <button type="submit">subscribe</button>
        </form>
        {done && <p className="ew-nnote">Preview only. Signup is not live yet and nothing was saved.</p>}
    </section>;
}

function Contact() {
    const [name, setName] = React.useState('');
    const [msg, setMsg] = React.useState('');
    const href = 'mailto:ellielwang1@gmail.com?subject=' + encodeURIComponent('Hi Ellie' + (name ? ', from ' + name : '')) + '&body=' + encodeURIComponent(msg);
    return <section className="ew-sect ew-contact" id="contact">
        <div className="ew-shead"><h2>say <em>hi</em></h2></div>
        <p className="ew-clede">Have a story, a question or an idea? Write below and it opens as an email to me. Or book a time.</p>
        <div className="ew-cform">
            <label>your name<input value={name} onChange={(e) => setName(e.target.value)} placeholder="your name" /></label>
            <label>message<textarea value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="say hi!" rows={4} /></label>
            <div className="ew-pills"><a href={href}>open in my email app</a><a href="https://calendly.com/elizabethlynnwang/30min" target="_blank" rel="noreferrer">book a chat</a></div>
        </div>
    </section>;
}

function Foot() {
    return <footer>
        <div className="ew-sign"><PixelLotus className="ew-pix" />ellielwang</div>
        <ul className="ew-icons">
            <li><a href="https://www.linkedin.com/in/ellielwang" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon kind="in" /></a></li>
            <li><a href="https://x.com/ellielwang" target="_blank" rel="noreferrer" aria-label="X"><Icon kind="x" /></a></li>
            <li><a href="https://linktr.ee/ellielwang" target="_blank" rel="noreferrer" aria-label="Linktree"><Icon kind="tree" /></a></li>
            <li><a href="https://calendly.com/elizabethlynnwang/30min" target="_blank" rel="noreferrer" aria-label="Book a chat"><Icon kind="cal" /></a></li>
            <li><a href="mailto:ellielwang1@gmail.com" aria-label="Email"><Icon kind="mail" /></a></li>
        </ul>
        <p className="ew-copy">&copy; 2026 Elizabeth &ldquo;Ellie&rdquo; Wang &middot; Athens, GA &middot; Johns Creek, GA</p>
    </footer>;
}

function Archive({ section }: { section?: string }) {
    const [query, setQuery] = React.useState('');
    const [open, setOpen] = React.useState<Story | null>(null);
    const meta = SECTIONS.find((x) => x.slug === section);
    const base = section ? inSection(section) : newest;
    const q = query.trim().toLowerCase();
    const visible = q ? base.filter((s) => (s.name + ' ' + s.body).toLowerCase().includes(q)) : base;
    const groups: { label: string; items: Story[] }[] = [];
    visible.forEach((s) => {
        const label = MONTHS[parseInt(s.date.split('/')[0], 10) - 1] + ' 2026';
        const last = groups[groups.length - 1];
        if (last && last.label === label) last.items.push(s); else groups.push({ label, items: [s] });
    });
    return <div className={'ew' + (React.useContext(ThemeCtx).dusk ? ' dusk' : '')}>
        <Masthead />
        <main className="ew-wrap ew-archive">
            <h1>{meta ? meta.label : base.length + ' stories'}</h1>
            <p className="ew-lede">{meta ? base.length + ' stories from You Just Have to Ask that talk about this field, newest first. Sorted by what each story says.' : 'From You Just Have to Ask, newest first.'}</p>
            <input className="ew-filter" type="search" placeholder="search a name or a detail" value={query} onChange={(e) => setQuery(e.target.value)} aria-label="Search stories" />
            {groups.map((g) => <section key={g.label}>
                <div className="ew-ghead"><h2>{g.label}</h2><span className="ew-meta">{g.items.length} {g.items.length === 1 ? 'story' : 'stories'}</span></div>
                {g.items.map((s) => <button className="ew-arow" key={s.date + s.name} onClick={() => setOpen(s)}>
                    <Thumb s={s} />
                    <span className="ew-atext"><span className="ew-kick">{s.date.replace('/2026', '')}</span><span className="ew-sname">{titleCase(s.name)}</span><span className="ew-dek">{excerpt(s, 200)}</span></span>
                </button>)}
            </section>)}
            {visible.length === 0 && <p className="ew-lede">No stories match that search.</p>}
            <Foot />
        </main>
        {open && <StoryModal story={open} onClose={() => setOpen(null)} />}
    </div>;
}

export function App() {
    const [dusk, setDusk] = React.useState(false);
    React.useEffect(() => { document.body.style.background = dusk ? '#2b1322' : '#fbe4ea'; document.documentElement.style.background = dusk ? '#2b1322' : '#fbe4ea'; }, [dusk]);
    return <ThemeCtx.Provider value={{ dusk, toggle: () => setDusk((d) => !d) }}><FileCard>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stories" element={<Archive />} />
            {SECTIONS.map((x) => <Route key={x.slug} path={'/section/' + x.slug} element={<Archive section={x.slug} />} />)}
        </Routes>
    </FileCard></ThemeCtx.Provider>;
}
