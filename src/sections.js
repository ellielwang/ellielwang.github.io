// Industry sections come from a curated map, checked against what each story says its guest does.
// Key is date|name. A story is listed only where its own text supports it; the rest stay unsorted
// (they still appear under all stories). Newly appended stories are left unsorted until reviewed.
export const SECTIONS = [
  { slug: 'fintech', label: 'fintech & finance' },
  { slug: 'creators', label: 'creators & ugc' },
  { slug: 'startups', label: 'startups & founders' },
  { slug: 'health', label: 'health & medicine' },
  { slug: 'tech', label: 'tech & ai' },
  { slug: 'space', label: 'space & science' },
  { slug: 'policy', label: 'policy & advocacy' },
];
const CURATED = {
  "10/27/2026|adeetya jain": ["fintech","startups","tech"],
  "10/29/2026|haolin feng": ["startups","tech"],
  "10/30/2026|wilman chan": ["creators"],
  "10/26/2026|david derama": ["tech"],
  "8/28/2026|alyssa lee": ["fintech"],
  "9/10/2026|ashutos jain": ["fintech"],
  "9/14/2026|jessica jones": ["fintech"],
  "9/21/2026|joe radest": ["fintech","startups"],
  "9/29/2026|jonathan pertchik": ["fintech"],
  "10/9/2026|tracy huang": ["fintech","startups"],
  "10/14/2026|Tony Erwin, MSF CBDA": ["fintech"],
  "7/25/2026|ben aratame": ["creators"],
  "8/2/2026|jay yang": ["creators"],
  "8/30/2026|kolton rice": ["creators"],
  "8/31/2026|vivian lin": ["creators"],
  "9/1/2026|subal kumar": ["creators","startups"],
  "9/3/2026|yash alluri": ["creators","startups"],
  "9/4/2026|alice lan": ["creators"],
  "9/9/2026|zexi li": ["creators"],
  "9/12/2026|elisha kim": ["creators"],
  "9/13/2026|marko ciganovic": ["creators"],
  "9/24/2026|jibran khalil": ["creators"],
  "9/25/2026|eric d'amico": ["creators"],
  "10/1/2026|jerry zhu": ["creators","tech"],
  "10/2/2026|nicholas low": ["creators"],
  "10/7/2026|arthur park": ["creators","startups"],
  "10/10/2026|radin shahravan": ["creators"],
  "10/15/2026|ashlynn wong": ["creators"],
  "10/20/2026|teagan yuen": ["creators"],
  "10/21/2026|lukas gross": ["creators","startups"],
  "10/24/2026|umar faheem": ["creators"],
  "7/27/2026|jeff nguyen": ["startups"],
  "8/11/2026|naman mehrotra": ["startups"],
  "8/12/2026|matthew huang": ["startups"],
  "8/19/2026|zawadi pilipili": ["startups"],
  "8/22/2026|subal kumar": ["startups"],
  "9/7/2026|evan kong": ["startups","tech"],
  "9/20/2026|kennard liong": ["startups"],
  "9/22/2026|joe nedza": ["startups"],
  "9/23/2026|chloe hughes": ["startups"],
  "9/27/2026|fredrick okwudili": ["startups","tech"],
  "10/3/2026|dimas aryo": ["startups"],
  "10/6/2026|duy nguyen": ["startups"],
  "10/8/2026|Jose Cruz-Lopez": ["startups","tech"],
  "7/7/2026|Ngozi F. Anachebe, PharmD, MD, FACOG": ["health"],
  "8/10/2026|anandhi bharadwaj": ["tech"],
  "9/17/2026|shivansh rastogi": ["tech"],
  "9/19/2026|phil-ho combatir": ["tech","space"],
  "10/19/2026|roshan ramani": ["tech"],
  "10/22/2026|nathan stanford": ["tech"],
  "8/4/2026|ava martinez": ["space"],
  "8/8/2026|joaquin santander": ["space"],
  "8/9/2026|amanda schultz": ["space"],
  "8/13/2026|matthew foster": ["space"],
  "8/25/2026|macy felton": ["space"],
  "9/11/2026|rachel paiz": ["space"],
  "9/26/2026|ezekiel wood & lemma post": ["space"],
  "9/28/2026|manoj d": ["space"],
  "9/30/2026|dominick filipponi": ["space"],
  "10/16/2026|tami maeda": ["space"],
  "7/8/2026|girish menon": ["policy"],
  "8/20/2026|patrick pickren": ["policy"],
  "8/23/2026|anshi purohit": ["policy"],
};
// New stories stay unsorted (still under all stories) until they are reviewed and added to CURATED.
export function sectionsFor(story) {
  return CURATED[story.date + '|' + story.name] || [];
}
export function excerpt(story, max = 170) {
  const paras = story.body.split(/\n{2,}/).map((p) => p.replace(/Continuing to tell these[^.!?]*[.!?]\s*/i, '').trim()).filter((p) => p.length > 30);
  const p = (paras[0] || '').replace(/\s+/g, ' ');
  if (p.length <= max) return p;
  const cut = p.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(' ')) + '...';
}
