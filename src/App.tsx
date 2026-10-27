import React from 'react';
import { FileCard, Link, Route, Routes } from './files-shim';
import stories from './stories.js';
import { SECTIONS, sectionsFor, excerpt } from './sections.js';
import storyImages from './storyImages.js';
import './fonts.css';
import './style.css';
import headshot from './photos/headshot.webp';
import lotusArt from './photos/lotus.png';
import snowPhoto from './photos/snow.jpg';

type Story = { date: string; name: string; body: string; images: string[] };
const all: Story[] = stories as Story[];
const newest = [...all].reverse();
const MONTHS = ['january','february','march','april','may','june','july','august','september','october','november','december'];

const titleCase = (n: string) => n.replace(/\b\w/g, (c) => c.toUpperCase());


const ThemeCtx = React.createContext<{ dusk: boolean; toggle: () => void }>({ dusk: false, toggle: () => {} });
function Icon({ kind }: { kind: string }) {
    const p = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true };
    if (kind === 'mail') return <svg {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 7 9-7" /></svg>;
    if (kind === 'cal') return <svg {...p}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></svg>;
    if (kind === 'x') return <svg {...p}><path d="M5 4l14 16M19 4L5 20" /></svg>;
    if (kind === 'tree') return <svg {...p}><path d="M12 3v18M12 8l-5 4M12 8l5 4M12 13l-4 3M12 13l4 3" /></svg>;
    return <svg {...p}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 11v6M8 7.5v.01M12 17v-6M12 13c0-2 4-2.5 4 0v4" /></svg>;
}

function Lotus({ className }: { className?: string }) {
    return <img className={className} src={lotusArt} alt="" aria-hidden="true" />;
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
            <Link to="/" className="ew-brand"><img src={headshot} alt="" />ellielwang</Link>
            <span className="ew-tl-mid">{today} &middot; {all.length} stories</span>
            <span className="ew-tl-right"><button className="ew-sub" onClick={goNewsletter}>subscribe</button><button className="ew-mode" onClick={toggle} aria-pressed={dusk} aria-label={dusk ? 'Switch to day mode' : 'Switch to dusk mode'}><Lotus className="ew-btn-lotus" />{dusk ? 'day' : 'dusk'}</button></span>
        </div>
        <div className="ew-brandrow">
            <div className="ew-title"><h1 className="ew-h1"><Link to="/" className="ew-pub">you just have to ask</Link></h1><div className="ew-by">by Elizabeth (Ellie) Wang</div></div>
            <Lotus className="ew-mast-lotus" />
        </div>
        <nav className="ew-secnav" aria-label="Sections">
            <div className="ew-marq">
                <div className="ew-marq-track">
                    {[0, 1].map((k) => <div className="ew-marq-set" key={k} aria-hidden={k === 1 ? true : undefined}>
                        <Link to="/" tabIndex={k === 1 ? -1 : undefined}>latest</Link>
                        {SECTIONS.map((x) => <Link key={x.slug} to={'/section/' + x.slug} tabIndex={k === 1 ? -1 : undefined}>{x.label}</Link>)}
                        <Link to="/stories" tabIndex={k === 1 ? -1 : undefined}>all stories</Link>
                    </div>)}
                </div>
            </div>
            <div className="ew-navfix">
                <button className="ew-navbtn" onClick={goNewsletter}>newsletter</button>
                <a href="#about">about</a>
                <a href="#contact">contact</a>
            </div>
        </nav>
    </header>;
}

function goNewsletter() {
    const go = () => { const el = document.getElementById('newsletter'); if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'center' }); const i = el.querySelector('input'); if (i) setTimeout(() => (i as HTMLInputElement).focus({ preventScroll: true }), 600); } };
    const h = window.location.hash;
    if (h && h !== '#' && h !== '#/') { window.location.hash = '/'; setTimeout(go, 400); } else go();
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
                    <div className="ew-pills"><a href="#sections">browse by industry</a><a href="https://calendly.com/elizabethlynnwang/30min" target="_blank" rel="noreferrer">book a chat</a></div>
                </aside>
                <article className="ew-lead">
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
                <div><h3>cofounder of <u>Pitcher</u></h3><p>A professional discovery network for early-stage startups. <b>Human-curated.</b> First pilot open to <b>Georgia founders</b>. <a href="https://trypitcher.co" target="_blank" rel="noreferrer">trypitcher.co</a></p></div>
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

            <section className="ew-sect" id="record">
                <div className="ew-shead"><h2>the full <em>record</em></h2></div>
                <div className="ew-trio">
                    <div className="ew-tcol"><h3>experience</h3><ul>
                        <li><b>Claude Campus Ambassador</b>, NEXT GEN&middot;TEAM<small>Oct 2026 to present</small>Leading the Claude Builder Community at UGA</li>
                        <li><b>Co-Founder, Go-To-Market</b>, Pitcher<small>Jun 2026 to present</small>A founder discovery network for early startups</li>
                        <li><b>Go-To-Market</b>, Todd<small>Aug 2026 to present</small>Interviews with people who run farms across New York, California, Utah, and Maryland. Instagram graphics for an ag-tech startup that raised pre-seed funding at a $40M valuation cap.</li>
                        <li><b>Founding Growth @ UGA</b>, Ditto<small>Aug 2026 to present</small>Secured approval to put Ditto flyers up across UGA dorms and student centers. #1 cupid all time in the US.</li>
                        <li><b>Lucy Mission Ambassador</b>, L&rsquo;SPACE Program<small>Sep 2026 to present</small></li>
                        <li><b>Team Program Analyst (MCA)</b>, L&rsquo;SPACE Program<small>May 2026 to Aug 2026</small>Supporting a lunar surface mission concept focused on hazards in permanently shadowed regions, including dust, radiation, and impact risk. Driving schedule and cost estimation for the team&rsquo;s Preliminary Definition Review.</li>
                        <li><b>Team Principal Investigator (NPWEE)</b>, L&rsquo;SPACE Program<small>Jan 2026 to May 2026</small>Led a 10-member interdisciplinary team in the NASA-funded L&rsquo;SPACE NPWEE to develop a NASA-style mission concept addressing orbital debris mitigation.</li></ul></div>
                    <div className="ew-tcol"><h3>education</h3><ul>
                        <li><b>University of Georgia, Terry College of Business</b><small>Aug 2025 to May 2029</small>BBA in Management Information Systems, with Entrepreneurship and FinTech Certificates. Alpha Sigma Rho (Fundraising &amp; Philanthropy Chair), Magellan Program, Emerging Greek Leaders, Reed/Payne Community Council (Coordinator of Communications), UGA Trial Gardens, International Business Society, Society for Management Information Systems, Shop With A Bulldawg mentor, UGA Fencing Club, UGAHacks.</li>
                        <li><b>University of Oxford</b><small>Jun 2026 to Aug 2026</small>Biomedical Ethics, Computing Ethics. UGA Foundation Incentive Scholarship ($3,500) and EL Ready to Thrive Scholarship ($7K).</li>
                        <li><b>Northview High School</b><small>Aug 2021 to May 2025</small>Magna Cum Laude. Public Health and Fine Arts Pathways Seal (Mastery Orchestra: Violin). Outstanding Public Health Pathway Student of the Year.</li>
                        <li><b>Atlanta Contemporary Chinese Academy</b><small>2012 to 2023</small>Completed the 9-year curriculum and 1-year AP Chinese Language and Culture course.</li>
                        <li>Selected participant: Goldman Sachs Possibilities Series, BCG Launch, PwC Future Focus, DHL Future Leaders Summit</li></ul></div>
                    <div className="ew-tcol"><h3>service + learning</h3><ul>
                        <li><b>Johns Creek Baptist Church</b>, contemporary production director and event volunteer<small>Sep 2021 to Mar 2025</small></li>
                        <li><b>Findley Oaks Elementary Literacy Initiative</b>, English Second Language tutor<small>Jan 2024 to May 2024</small></li>
                        <li><b>Wellstar Health System</b>, Cobb &amp; North Fulton Wellstar Hospital VolunTEEN<small>Jun 2023 to Jul 2024</small></li>
                        <li><b>National Beta</b>, student volunteer<small>Aug 2021 to May 2025</small></li>
                        <li><b>Capstone Hospice</b>, volunteer<small>Apr 2024</small></li>
                        <li><b>National Honor Society</b>, inductee, 1 of 75 from a 450+ senior class<small>May 2024 to May 2025</small></li>
                        <li><b>Policy brief:</b> &ldquo;The Invisible Workload of Grief: Student Bereavement Administrative Burdens,&rdquo; Institute for Youth in Policy<small>Jan 2026 to Mar 2026</small></li>
                        <li><b>Certifications:</b> CITI Social and Behavioral Research; National Health Science Certificate; JHU Global Health Leaders Conference (2024); Excel Essential Training; Basic Life Support (CPR and AED)</li></ul></div>
                </div>
            </section>

            <section className="ew-row">
                <div>
                    <div className="ew-shead"><h2>about the <em>series</em></h2></div>
                    <p>My daily storytelling series on LinkedIn: one story every day since July 4, 2026, posted at 12:12 PM ET. I talk with founders, advocates, students, and anyone with a passion for helping the world.</p>
                    <p>I take handwritten notes during conversations, and guests review their stories before publication. It started because I wanted to give my mentors their flowers. It kept going because everyone has a story worth telling.</p>
                    <blockquote><span lang="zh-Hant" className="ew-zh">人有兩次生命，當你意識到只有一次的時候，第二次生命就開始了。</span><span className="ew-en">&ldquo;We have two lives, and the second begins when we realize we only have one.&rdquo;</span></blockquote>
                    <a className="ew-link" href="https://www.linkedin.com/in/ellielwang" target="_blank" rel="noreferrer">read the series on LinkedIn</a>
                </div>
                <div>
                    <div className="ew-stats"><div>100+<small>stories told</small></div><div>9+<small>countries</small></div><div>330,440<small>linkedin impressions</small></div></div>
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
                        <li>Top 6, Medical Business Association/SMIS Case Competition<span>top 6</span></li>
                        <li>HOSA Georgia State Leadership Conference, Medical Reading<span>1st in state, 2026</span></li>
                        <li>National BETA Scholarship Program, top 5 of 3,500+ applicants<span>$6K</span></li>
                        <li>Runner-Up Student Project Award, UGA Data Science and AI Summer Camp<span>2024</span></li>
                        <li>Selected presenter, Georgia State Undergraduate Research Conference<span>2025</span></li>
                        <li>Published in &ldquo;Bubbles,&rdquo; Northview MUSE literary magazine<span>2025</span></li>
                    </ul>
                </div>
            </section>

            <section className="ew-row ew-about" id="about">
                <div>
                    <div className="ew-shead"><h2>about</h2></div>
                    <p>I&rsquo;m a student at the University of Georgia studying Management Information Systems in the Terry College of Business, with a Sociology minor and an Entrepreneurship Certificate.</p>
                    <p>Born and raised in Georgia, the daughter of immigrants. My mother is from Cambodia and my father is from Taiwan. I&rsquo;ve studied at the University of Oxford (Biomedical Ethics and Computing Ethics &amp; Society) and traveled Italy and Germany for a Food Industries Maymester.</p>
                </div>
                <div className="ew-aboutr">
                    <p>I&rsquo;ve played piano since I was 4 and violin since 4th grade, and I started making content at 15 by posting piano videos. Music taught me how to work hard; people taught me why it matters.</p>
                    <p className="ew-values">authenticity &middot; curiosity &middot; gratitude &middot; community</p>
                    <figure className="ew-snow"><img src={snowPhoto} alt="A snowy outdoor scene with a child in a red jacket in the foreground" loading="lazy" /></figure>
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
    const [state, setState] = React.useState<'idle' | 'sending' | 'ok' | 'guard' | 'err'>('idle');
    const [guard, setGuard] = React.useState('');
    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        setState('sending');
        try {
            const fd = new FormData();
            fd.append('email_address', email);
            const r = await fetch('https://app.kit.com/forms/10102413/subscriptions', { method: 'POST', body: fd, headers: { Accept: 'application/json' } });
            const j = await r.json().catch(() => ({} as any));
            if (j && j.status === 'quarantined' && j.url) { setGuard(j.url); setState('guard'); }
            else if (r.ok && (!j.status || j.status === 'success' || j.status === 'created')) setState('ok');
            else setState('err');
        } catch (_) { setState('err'); }
    };
    return <section className="ew-sect ew-news" id="newsletter">
        <Lotus className="ew-news-lotus" />
        <div className="ew-shead"><h2>the <em>&quot;you just have to ask&quot;</em> newsletter</h2></div>
        <p className="ew-clede">New stories in your inbox, so you never have to catch every post. Free, no paywall.</p>
        <form className="ew-nform" onSubmit={submit}>
            <input type="email" required value={email} onChange={(e) => { setEmail(e.target.value); if (state !== 'sending') setState('idle'); }} placeholder="you@email.com" aria-label="email address" />
            <button type="submit" disabled={state === 'sending'}>{state === 'sending' ? 'sending' : 'subscribe'}</button>
        </form>
        {state === 'ok' && <p className="ew-nnote" role="status">Almost there. Check your email and click the link to confirm your subscription.</p>}
        {state === 'guard' && <p className="ew-nnote" role="status">One quick check first: <a href={guard} target="_blank" rel="noopener noreferrer">confirm you&rsquo;re human</a>, then check your email.</p>}
        {state === 'err' && <p className="ew-nnote" role="alert">Something went wrong. Please try again in a moment.</p>}
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
        <div className="ew-sign"><Lotus className="ew-pix" />ellielwang</div>
        <p className="ew-credit">Lotus designed by <a href="https://www.linkedin.com/in/ava-c-589144366/" target="_blank" rel="noopener noreferrer">Ava Chapagain</a></p>
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
