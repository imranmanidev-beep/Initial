/* ============ EDIT YOUR CONTENT HERE ============ */
const CONFIG = {
  name: "Qubnex",
  portraitSrc: "",                          // e.g. "portrait.jpg" (leave empty to show the placeholder)
  portraitAlt: "Qubnex: manual work becoming a digital system",
  email: "imran.mani.dev@gmail.com",          // replace
  social: [ /* {label:"LinkedIn", url:"https://linkedin.com/in/..."}, {label:"GitHub", url:"https://github.com/..."} */ ]
};
const TOOLKIT = {
  "Software & Systems": ["ERP and inventory systems","Oracle APEX applications","Oracle EBS R12 support","Reports and dashboards","Database design (SQL and PL/SQL)"],
  "Hardware & Infrastructure": ["Computers and workstations","Servers and networking","Barcode scanners","Label and receipt printers","Backup and security"],
  "Machines & Equipment": ["Machine and equipment integration","Point-of-sale and counter systems","Scanning and weighing devices","Automatic data capture"],
  "Support & Training": ["Requirements review","Installation and setup","Data migration from paper and Excel","Staff training","Ongoing support"]
};
const PROJECTS = [
  {title:"Paper-to-Digital Records", category:"Software", status:"Example solution · edit with a real case", v:"report",
   desc:"Moving registers, forms and spreadsheets into one searchable system with reports and print-ready output.", tech:["Forms","Reports","Database"], demo:"", code:""},
  {title:"Inventory and Stock Control", category:"Software + Hardware", status:"Design initiative", v:"grid",
   desc:"Stock, purchasing, issues and transfers with barcode support and batch tracking.", tech:["Inventory","Barcode","Batch tracking","Reports"], demo:"", code:""},
  {title:"Office and Equipment Setup", category:"Hardware & Machines", status:"Example solution · edit with a real case", v:"flow",
   desc:"Workstations, networking, printers and connected equipment installed and supported.", tech:["Hardware","Networking","Support"], demo:"", code:""}
];
/* Experience: add verified entries to show a timeline instead of "Technical Focus".
   {org:"", title:"", start:"", end:"", responsibilities:[], projects:[], tech:[]} */
const EXPERIENCE = [];
const FOCUS = [
  {h:"1. Assess", items:["Review current manual processes and records","Identify what needs software, hardware or equipment","Agree scope, priorities and a simple plan"]},
  {h:"2. Build and set up", items:["Configure or build the software system","Install and connect computers, printers, scanners and machines","Move existing data from paper and spreadsheets"]},
  {h:"3. Train and support", items:["Train your team on the new system","Go-live support","Ongoing help, updates and improvements"]}
];
const FOCUS_OLD = [
  {h:"Oracle APEX", items:["Building and styling forms and reports","Page items and application processes","JavaScript and CSS customization","Responsive user interfaces","HTML reports from PL/SQL functions returning CLOB","Browser print workflows and Save as PDF","A4 landscape layouts and print CSS","Troubleshooting hidden columns, page breaks and spacing","Investigating report performance"]},
  {h:"SQL and PL/SQL", items:["Queries, joins and data retrieval","Package functions and procedures","CLOB-based report generation","Data investigation and validation","Troubleshooting SQL and Oracle errors","Invoice, distribution and financial reporting data","Database relationships and application data flows"]},
  {h:"Oracle EBS R12", items:["Forms personalization and custom rules","Descriptive flexfield context and segment investigation","Concurrent request troubleshooting and logs","Quality-plan information lookup","Accounts Payable invoice and distribution data","Financial calculations and base-amount updates"]}
];
/* ================================================= */

const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const $ = id => document.getElementById(id);
$("logo").textContent = $("fname").textContent = CONFIG.name;
$("logo").innerHTML = esc(CONFIG.name.slice(0,-1)) + "<b>" + esc(CONFIG.name.slice(-1)) + "</b>";

$("groups").innerHTML = Object.entries(TOOLKIT).map(([g,a]) => `<div class="group rv"><h3>${esc(g)}</h3><ul>${a.map((i,n)=>`<li style="--i:${n}">${esc(i)}</li>`).join("")}</ul></div>`).join("");

const art = {
  report:`<rect x="190" y="30" width="260" height="340" rx="4" fill="#f4f5f7" fill-opacity=".06" stroke="#fff" stroke-opacity=".25"/><rect x="214" y="58" width="120" height="12" rx="6" fill="#12d0ff"/>${[100,126,152,178,204,230,256].map(y=>`<rect x="214" y="${y}" width="212" height="8" rx="4" fill="#fff" fill-opacity=".16"/>`).join("")}<rect x="214" y="290" width="90" height="40" rx="4" fill="none" stroke="#12d0ff" stroke-opacity=".7"/>`,
  flow:`${[[90,200],[250,110],[250,290],[420,200],[540,200]].map(([x,y])=>`<rect x="${x-50}" y="${y-26}" width="100" height="52" rx="6" fill="#0a1a3d" stroke="#fff" stroke-opacity=".3"/>`).join("")}<path d="M140 200 L200 110 M140 200 L200 290 M300 110 L370 200 M300 290 L370 200 M470 200 L490 200" stroke="#12d0ff" stroke-width="2" fill="none"/>`,
  grid:`${[0,1,2].map(r=>[0,1,2,3].map(c=>`<rect x="${70+c*130}" y="${60+r*100}" width="110" height="80" rx="6" fill="${(r+c)%3==0?"#12d0ff":"#fff"}" fill-opacity="${(r+c)%3==0?.55:.08}" stroke="#fff" stroke-opacity=".2"/>`).join("")).join("")}`
};
$("projects").innerHTML = PROJECTS.map(p => `<article class="project rv"><div class="vis"><svg viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="640" height="400" fill="#0a1a3d"/>${art[p.v]||""}</svg></div>
<div class="info"><p class="cat">${esc(p.category)}</p><h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p>
<ul class="tags">${p.tech.map(t=>`<li>${esc(t)}</li>`).join("")}</ul><span class="status">${esc(p.status)}</span>
<div class="links">${p.demo?`<a href="${esc(p.demo)}" target="_blank" rel="noopener">Live demo</a>`:""}${p.code?`<a href="${esc(p.code)}" target="_blank" rel="noopener">Source code</a>`:""}</div></div></article>`).join("");

if (EXPERIENCE.length) {
  $("focusTitle").textContent = "Experience";
  $("focusRows").innerHTML = EXPERIENCE.map(e => `<div class="row rv"><div><h3>${esc(e.title)}</h3><p class="meta">${esc(e.org)} · ${esc(e.start)} – ${esc(e.end)}</p></div><div><ul>${(e.responsibilities||[]).map(x=>`<li>${esc(x)}</li>`).join("")}</ul><p class="meta">${esc((e.tech||[]).join(", "))}</p></div></div>`).join("");
} else {
  $("focusRows").innerHTML = FOCUS.map(f => `<div class="row rv"><h3>${esc(f.h)}</h3><ul>${f.items.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>`).join("");
}
$("mail").href = "mailto:" + CONFIG.email; $("mail").textContent = CONFIG.email;
$("social").innerHTML = CONFIG.social.map(s=>`<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a>`).join("");
$("yr").textContent = new Date().getFullYear();

/* nav */
const burger = document.querySelector(".burger"), nav = $("nav");
const setMenu = o => { nav.classList.toggle("open",o); burger.setAttribute("aria-expanded",o); burger.textContent = o?"Close":"Menu"; };
burger.onclick = () => setMenu(!nav.classList.contains("open"));
nav.onclick = e => { if (e.target.closest("a")) setMenu(false); };
addEventListener("keydown", e => { if (e.key==="Escape") setMenu(false); });
const links = [...nav.querySelectorAll("a")];
const spy = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && links.forEach(a => a.classList.toggle("on", a.getAttribute("href")==="#"+e.target.id))), {rootMargin:"-45% 0px -50% 0px"});
document.querySelectorAll("main section").forEach(s => spy.observe(s));
const rv = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting){ e.target.classList.add("in"); rv.unobserve(e.target);} }), {threshold:.12});
document.querySelectorAll(".rv").forEach(el => rv.observe(el));

/* ---- preloader, services, gallery, FAQ, footer ---- */
const reduceM = matchMedia("(prefers-reduced-motion: reduce)").matches;
const pre = $("pre"), pct = $("pct");
const endLoad = () => { pre.classList.add("done"); document.body.classList.remove("loading"); setTimeout(() => pre.remove(), 1100); };
if (reduceM) endLoad(); else {
  const s = performance.now();
  (function f(n){ const p = Math.min(1,(n-s)/1500); pct.textContent = String(Math.round(p*100)).padStart(2,"0"); p < 1 ? requestAnimationFrame(f) : setTimeout(endLoad,250); })(s);
  setTimeout(endLoad, 4500);
}
art.bars = [80,140,100,190,150,230].map((h,i)=>`<rect x="${110+i*70}" y="${300-h}" width="44" height="${h}" fill="#12d0ff" fill-opacity="${.3+i*.1}"/>`).join("");
const mini = k => `<svg viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="640" height="400" fill="#0a1a3d"/>${art[k]||""}</svg>`;
const SERVICES = [
  {t:"Business Software & ERP", d:"Inventory, purchasing, accounts and reporting systems that replace paper and spreadsheets.", v:"report"},
  {t:"Hardware & Networks", d:"Computers, servers, networking and peripherals set up around how your business works.", v:"grid"},
  {t:"Machines & Automation", d:"Connecting scanners, printers and equipment so data is captured automatically.", v:"flow"},
  {t:"Support & Training", d:"Setup, data migration, staff training and help after go-live.", v:"bars"}
];
$("svc").innerHTML = SERVICES.map((s,i)=>`<li data-v="${s.v}"><span class="n">0${i+1}</span><h3>${esc(s.t)}</h3><p>${esc(s.d)}</p><span class="ar" aria-hidden="true">↗</span></li>`).join("");
const peek = document.createElement("div"); peek.className = "peek"; peek.setAttribute("aria-hidden","true"); peek.innerHTML = '<div class="pk"></div>'; document.body.appendChild(peek);
const pk = peek.firstChild; let px=0, py=0, tx=0, ty=0, loopOn=false, curLi=null;
const ploop = () => { px += (tx-px)*.15; py += (ty-py)*.15; peek.style.transform = `translate(${px}px,${py}px) translate(-50%,-50%) rotate(${(tx-px)*.05}deg)`; if (peek.classList.contains("on") || Math.abs(tx-px) > .5) requestAnimationFrame(ploop); else loopOn = false; };
if (matchMedia("(hover:hover) and (pointer:fine)").matches && !reduceM) {
  const svc = $("svc");
  svc.addEventListener("pointermove", e => {
    tx = e.clientX + 170; ty = e.clientY; const li = e.target.closest("li");
    if (li && li !== curLi) { curLi = li; pk.innerHTML = mini(li.dataset.v); }
    if (li) { peek.classList.add("on"); if (!loopOn) { loopOn = true; px = tx; py = ty; requestAnimationFrame(ploop); } }
  });
  svc.addEventListener("pointerleave", () => { peek.classList.remove("on"); curLi = null; });
}
const GALLERY = (() => {
  const r = (a,b) => Math.floor(a + Math.random()*(b-a+1));
  const T = (x,y,t,o,c) => `<text x="${x}" y="${y}" fill="${c||"#9fb2d0"}" ${o||""}>${t}</text>`;
  const head = t => `<text x="32" y="44" fill="#f4f5f7" font-size="20" font-weight="700">${t}</text>` + T(608,44,"Sample data",'text-anchor="end" font-size="12"');
  const wrap = (label,body) => `<svg viewBox="0 0 640 400" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${label}"><defs><linearGradient id="gbar" x1="0" x2="1"><stop offset="0" stop-color="#1a5cff"/><stop offset="1" stop-color="#12d0ff"/></linearGradient><linearGradient id="ga" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#12d0ff" stop-opacity=".35"/><stop offset="1" stop-color="#12d0ff" stop-opacity="0"/></linearGradient></defs><rect width="640" height="400" fill="#0a1a3d"/><g font-family="Arial,sans-serif" font-size="14">${body}</g></svg>`;
  const line = () => {
    const pts = Array.from({length:12}, (_,i) => [70+i*48, 320 - r(35,100)*2.4]);
    const d = pts.map((p,i) => (i?"L":"M") + p[0] + " " + p[1]).join("");
    const grid = [0,25,50,75,100].map(g => `<line x1="60" x2="610" y1="${320-g*2.4}" y2="${320-g*2.4}" stroke="rgba(255,255,255,.1)"/>` + T(20,324-g*2.4,g)).join("");
    const m = "JFMAMJJASOND".split("").map((c,i) => T(70+i*48,346,c,'text-anchor="middle"')).join("");
    return wrap("Line chart of monthly orders, sample data", head("Monthly orders") + grid + m + `<path class="fd" d="${d}L598 320L70 320Z" fill="url(#ga)"/><path class="draw" d="${d}" fill="none" stroke="#12d0ff" stroke-width="3" stroke-linejoin="round"/>` + pts.map(p => `<circle class="fd" cx="${p[0]}" cy="${p[1]}" r="4" fill="#030d26" stroke="#12d0ff" stroke-width="2"/>`).join(""));
  };
  const hbar = () => {
    const names = ["Computers","Printers","Scanners","Networking","Consumables"];
    return wrap("Bar chart of stock by category, sample data", head("Stock by category") + names.map((l,i) => { const v = r(25,95), y = 84+i*58; return T(32,y+20,l) + `<rect x="150" y="${y}" width="420" height="28" rx="4" fill="rgba(255,255,255,.06)"/><rect class="gb" x="150" y="${y}" width="${v*4.2}" height="28" rx="4" fill="url(#gbar)"/>` + T(150+v*4.2+8,y+19,v,"","#f4f5f7"); }).join(""));
  };
  const donut = () => {
    const w = [r(30,60),r(15,30),r(8,20),r(3,10)], s = w.reduce((a,b)=>a+b), p = w.map(x => Math.round(x*100/s)); p[0] += 100 - p.reduce((a,b)=>a+b);
    const C = 2*Math.PI*90, col = ["#12d0ff","#1a5cff","#7aa2ff","#3a4a7a"], nm = ["Completed","In progress","Pending","Cancelled"]; let off = 0;
    const seg = p.map((x,i) => { const len = C*x/100, e = `<circle class="fd" cx="190" cy="215" r="90" fill="none" stroke="${col[i]}" stroke-width="38" stroke-dasharray="${len-2} ${C-len+2}" stroke-dashoffset="${-off}" transform="rotate(-90 190 215)"/>`; off += len; return e; }).join("");
    const leg = p.map((x,i) => `<rect x="370" y="${130+i*48}" width="14" height="14" rx="3" fill="${col[i]}"/>` + T(394,142+i*48,nm[i]) + T(590,142+i*48,x+"%",'text-anchor="end"',"#f4f5f7")).join("");
    return wrap("Donut chart of orders by status, sample data", head("Orders by status") + seg + T(190,214,r(300,900),'text-anchor="middle" font-size="32" font-weight="700"',"#f4f5f7") + T(190,238,"orders",'text-anchor="middle"') + leg);
  };
  const gauge = () => {
    const v = r(72,98), st = [[r(80,200),"generated"],[r(10,40),"scheduled"],[r(0,3),"failed"]];
    return wrap("Gauge of reports delivered on schedule, sample data", head("Reports on schedule") + `<path d="M200 270A120 120 0 0 1 440 270" fill="none" stroke="rgba(255,255,255,.08)" stroke-width="26" stroke-linecap="round"/><path class="gdraw" style="--o:${378*(1-v/100)}" d="M200 270A120 120 0 0 1 440 270" fill="none" stroke="url(#gbar)" stroke-width="26" stroke-linecap="round"/>` + T(320,262,v+"%",'text-anchor="middle" font-size="44" font-weight="700"',"#f4f5f7") + T(320,296,"delivered on time",'text-anchor="middle"') + st.map((x,i) => T(140+i*180,346,x[0],'text-anchor="middle" font-size="24" font-weight="700"',"#f4f5f7") + T(140+i*180,368,x[1],'text-anchor="middle" font-size="12"')).join(""));
  };
  return [{c:"Monthly orders",svg:line},{c:"Stock by category",svg:hbar},{c:"Orders by status",svg:donut},{c:"Reports on schedule",svg:gauge}];
})();
$("gtrack").innerHTML = GALLERY.map((g,i)=>`<figure class="gcard"><div class="vis">${g.svg()}</div><figcaption><span>0${i+1}</span>${esc(g.c)}</figcaption></figure>`).join("");
const gal = $("gal"), gtrack = $("gtrack");
const gio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("go"); gio.unobserve(e.target); } }), {threshold:.25});
document.querySelectorAll(".gcard").forEach(c => gio.observe(c));
if (matchMedia("(min-width:861px)").matches && !reduceM) {   /* pinned horizontal scroll on desktop; swipe row elsewhere */
  gal.classList.add("pinned");
  const setH = () => { gal.style.height = (gtrack.scrollWidth - innerWidth + innerHeight) + "px"; };
  const mv = () => { const r = gal.getBoundingClientRect(), max = gal.offsetHeight - innerHeight, p = Math.max(0, Math.min(1, -r.top / max)); gtrack.style.transform = `translateX(${-p*(gtrack.scrollWidth - innerWidth)}px)`; };
  setH(); mv(); addEventListener("resize", () => { setH(); mv(); }); addEventListener("scroll", mv, {passive:true});
}
const FAQS = [
  {q:"What does Qubnex do?", a:"Qubnex helps businesses move from manual, paper-based processes to computer-based systems, covering software, hardware, machines and the support to run them."},
  {q:"Do you only provide software?", a:"No. Depending on your needs, a solution can include software, computers and networking, printers and scanners, and equipment connected to the system."},
  {q:"Can you work with what we already have?", a:"That is the aim. The first step is to review your current processes and equipment so the upgrade fits how you already work."},
  {q:"How can I get in touch?", a:"Use the email address in the Contact section."}
];
$("faqList").innerHTML = FAQS.map(f=>`<details><summary>${esc(f.q)}</summary><p class="ans">${esc(f.a)}</p></details>`).join("");
$("giant").textContent = CONFIG.name;
nav.querySelectorAll("li").forEach((li,i) => li.style.setProperty("--k", i));
$("navsoc").innerHTML = (CONFIG.social.length ? CONFIG.social : [{label:CONFIG.email, url:"mailto:"+CONFIG.email}]).map(s=>`<a href="${esc(s.url)}">${esc(s.label)}</a>`).join("");
const fab = $("fab"), ct = $("contact");
const fabUpd = () => fab.classList.toggle("show", scrollY > innerHeight*.6 && ct.getBoundingClientRect().top > innerHeight*.5);
addEventListener("scroll", fabUpd, {passive:true}); fabUpd();
if (matchMedia("(hover:hover) and (pointer:fine)").matches && !reduceM) {   /* project previews cycle on hover */
  const ks = ["report","flow","grid","bars"];
  document.querySelectorAll(".project").forEach((el,i) => {
    const svg = el.querySelector(".vis svg"); let n = ks.indexOf(PROJECTS[i].v), t;
    el.addEventListener("pointerenter", () => { clearInterval(t); t = setInterval(() => { n = (n+1) % ks.length; svg.style.opacity = 0; setTimeout(() => { svg.innerHTML = `<rect width="640" height="400" fill="#0a1a3d"/>${art[ks[n]]}`; svg.style.opacity = 1; }, 220); }, 1400); });
    el.addEventListener("pointerleave", () => clearInterval(t));
  });
}
$("up").onclick = () => scrollTo({top:0, behavior:reduceM ? "auto" : "smooth"});
/* SEO: structured data built from the same content shown on the page */
(() => {
  const ld = {"@context":"https://schema.org","@graph":[
    Object.assign({"@type":"Organization","name":"Qubnex Technologies","slogan":"Intelligence Beyond Limits.",
      "description":"Qubnex Technologies helps businesses replace manual, paper-based work with digital systems: software and ERP, hardware, machines, training and support.",
      "address":{"@type":"PostalAddress","addressLocality":"Multan","addressCountry":"PK"},
      "sameAs":CONFIG.social.map(s=>s.url),
      "makesOffer":SERVICES.map(s=>({"@type":"Offer","itemOffered":{"@type":"Service","name":s.t,"description":s.d}}))},
      CONFIG.email.includes("example.com") ? {} : {"email":CONFIG.email}),
    {"@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))}
  ]};
  const sc = document.createElement("script"); sc.type = "application/ld+json"; sc.textContent = JSON.stringify(ld); document.head.appendChild(sc);
})();

/* ---- demo dashboard + chat ---- */
(() => {
  const rnd = (a,b) => Math.floor(a + Math.random()*(b-a+1));
  const kp = [["Items in stock",rnd(900,1800),"+"+rnd(2,9)+"% this week"],["Orders today",rnd(20,60),"+"+rnd(1,12)+" vs yesterday"],["Pending approvals",rnd(3,12),"waiting for review"],["Reports generated",rnd(10,40),"scheduled automatically"]];
  $("kpis").innerHTML = kp.map(k=>`<div class="kpi"><small>${k[0]}</small><b data-to="${k[1]}">0</b><span>${k[2]}</span></div>`).join("");
  $("bars").innerHTML = Array.from({length:7},()=>`<div data-h="${rnd(35,95)}"></div>`).join("");
  $("days").innerHTML = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d=>`<span>${d}</span>`).join("");
  const ITEMS = ["Barcode scanners (x10)","A4 paper cartons","Label printer rolls","24-port network switch","Thermal receipt rolls","512 GB SSD drives","Toner cartridges","1 kVA UPS units"];
  const ACTS = [["Received","ok"],["Issued","act"],["Transfer","act"],["Awaiting approval","wait"]];
  const now = () => new Date().toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"});
  const row = () => { const a = ACTS[rnd(0,3)]; return `<tr><td>${ITEMS[rnd(0,7)]}</td><td><span class="tag ${a[1]}">${a[0]}</span></td><td>${now()}</td></tr>`; };
  const feed = $("feed"); feed.innerHTML = Array.from({length:6},row).join("");
  setInterval(() => { if (document.hidden || reduceM) return; feed.insertAdjacentHTML("afterbegin", row()); feed.firstChild.style.animation = "fadeIn .5s both"; if (feed.children.length > 6) feed.lastChild.remove(); }, 3500);
  const count = el => { const to = +el.dataset.to; if (reduceM) { el.textContent = to.toLocaleString(); return; } const s = performance.now(); (function f(n){ const p = Math.min(1,(n-s)/1200); el.textContent = Math.round(to*(1-Math.pow(1-p,3))).toLocaleString(); if (p < 1) requestAnimationFrame(f); })(s); };
  new IntersectionObserver((es,ob) => { if (es[0].isIntersecting) { document.querySelectorAll("#kpis b").forEach(count); document.querySelectorAll("#bars div").forEach((b,i) => setTimeout(() => b.style.height = b.dataset.h + "%", i*80)); ob.disconnect(); } }, {threshold:.3}).observe(document.querySelector(".dash .frame"));

  /* chat widget with scripted replies */
  const chat = $("chat"), btn = $("chatbtn"), log = $("chlog"), inp = $("chin");
  $("chimg").src = document.querySelector(".logo img").src;
  const QA = {
    "What services do you offer?":"We cover four areas: business software and ERP, hardware and networks, machines and automation, and support and training. You can browse them under What We Do.",
    "Can you help with hardware?":"Yes. That can include computers, networking, printers, barcode scanners and equipment connected to your system.",
    "How do we get started?":"The first step is a short review of how you work today. Then we agree what to build or install, set it up, and train your team.",
    "Can I see a demo?":"Scroll to See It In Action for a sample dashboard, or leave your email and we will arrange one."
  };
  const add = (txt,who) => { const d = document.createElement("div"); d.className = "msg " + who; d.innerHTML = esc(txt) + `<time>${now()}</time>`; log.appendChild(d); log.scrollTop = log.scrollHeight; };
  const reply = q => {
    const ty = document.createElement("div"); ty.className = "msg bot typing"; ty.innerHTML = "<i></i><i></i><i></i>"; log.appendChild(ty); log.scrollTop = log.scrollHeight;
    const key = Object.keys(QA).find(k => k === q) || Object.keys(QA).find(k => k.toLowerCase().split(" ").some(w => w.length > 4 && q.toLowerCase().includes(w)));
    setTimeout(() => { ty.remove(); add(key ? QA[key] : "Thanks for your message. Our team will reply by email. You can also write to us at " + CONFIG.email + ".", "bot"); }, reduceM ? 0 : 900);
  };
  $("chips").innerHTML = Object.keys(QA).map(q=>`<button type="button">${esc(q)}</button>`).join("");
  $("chips").onclick = e => { const b = e.target.closest("button"); if (b) { add(b.textContent,"me"); reply(b.textContent); } };
  $("chform").onsubmit = e => { e.preventDefault(); const v = inp.value.trim(); if (!v) return; add(v,"me"); inp.value = ""; reply(v); };
  let greeted = false;
  const setChat = o => { chat.classList.toggle("open", o); btn.setAttribute("aria-expanded", o); if (o) { if (!greeted) { greeted = true; add("Hello! I am the Qubnex assistant. Ask about our services, or pick a question below.", "bot"); } inp.focus(); } };
  btn.onclick = () => setChat(!chat.classList.contains("open"));
  $("chclose").onclick = () => setChat(false);
  addEventListener("keydown", e => { if (e.key === "Escape") setChat(false); });
})();

/* extra motion */
const h1 = document.querySelector(".hero h1");
h1.setAttribute("aria-label", h1.textContent.trim());
h1.innerHTML = h1.textContent.trim().split(/\s+/).map((w,i)=>`<span class="w" aria-hidden="true"><i style="--i:${i}">${esc(w)}</i></span>`).join(" ");
const seq = Object.values(TOOLKIT).flat().map(t=>`<span>${esc(t)}</span>`).join("");
const PHRASES = ["Go Digital","Software","Hardware","Machines","Support","Training"];
const mk = a => { const s = a.map(t=>`<span>${esc(t)}</span>`).join(""); return s+s+s+s; };
$("track").innerHTML = mk(Object.values(TOOLKIT).flat());
$("track2").innerHTML = mk(PHRASES);
$("track3").innerHTML = mk(["Go digital","Get in touch","Let’s build"]);

/* Marquee engine: scroll speed makes the rows accelerate and skew; hover slows them */
const redu = matchMedia("(prefers-reduced-motion: reduce)").matches;
const rows = [["track",-1,.6],["track2",1,.8],["track3",-1,.5]].map(([id,d,s]) => ({el:$(id), d, s, x:0, u:0, vis:true, slow:1}));
rows.forEach(r => {
  const box = r.el.parentElement;
  new IntersectionObserver(es => r.vis = es[0].isIntersecting).observe(box);
  box.addEventListener("mouseenter", () => r.slow = .2); box.addEventListener("mouseleave", () => r.slow = 1);
});
addEventListener("resize", () => rows.forEach(r => r.u = 0));
let vel = 0, lastS = scrollY;
if (!redu) (function loop() {
  const dy = scrollY - lastS; lastS = scrollY;
  vel += (Math.min(Math.abs(dy),60)*.35 - vel)*.1;
  rows.forEach(r => {
    if (!r.vis) return;
    if (!r.u) r.u = r.el.scrollWidth/4;
    r.x = (((r.x + r.d*(r.s*r.slow + vel)) % r.u) + r.u) % r.u - r.u;
    r.el.style.transform = `translateX(${r.x}px) skewX(${-r.d*Math.min(vel,12)*.5}deg)`;
  });
  requestAnimationFrame(loop);
})();

/* Cursor ring that grows over links, buttons and images */
if (matchMedia("(hover:hover) and (pointer:fine)").matches && !redu) {
  const c = document.createElement("div"); c.className = "cur"; c.setAttribute("aria-hidden","true"); document.body.appendChild(c);
  let cx = 0, cy = 0, tx = 0, ty = 0;
  addEventListener("pointermove", e => { tx = e.clientX; ty = e.clientY; c.style.opacity = 1; });
  (function f() { cx += (tx-cx)*.18; cy += (ty-cy)*.18; c.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`; requestAnimationFrame(f); })();
  document.addEventListener("pointerover", e => c.classList.toggle("big", !!e.target.closest("a,button,.vis,.card")));
}

/* Letter scramble on nav links */
const abc = "abcdefghijklmnopqrstuvwxyz";
links.forEach(a => { const o = a.textContent; a.addEventListener("mouseenter", () => {
  if (redu) return; let i = 0; clearInterval(a._t);
  a._t = setInterval(() => { a.textContent = o.split("").map((ch,k) => k < i ? ch : abc[Math.random()*26|0]).join(""); if (++i > o.length) { clearInterval(a._t); a.textContent = o; } }, 45);
}); });
const prog = document.querySelector(".progress"), hdr = document.querySelector("header");
let lastY = scrollY;
addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  prog.style.setProperty("--p", max > 0 ? scrollY / max : 0);
  hdr.classList.toggle("hide", scrollY > lastY && scrollY > 200 && !nav.classList.contains("open"));
  lastY = scrollY;
}, {passive:true});
if (matchMedia("(hover:hover) and (pointer:fine)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const hero = document.querySelector(".hero");
  hero.addEventListener("pointermove", e => { const r = hero.getBoundingClientRect(); hero.style.setProperty("--mx", (e.clientX-r.left)+"px"); hero.style.setProperty("--my", (e.clientY-r.top)+"px"); });
  document.querySelectorAll(".btn").forEach(b => {
    b.addEventListener("pointermove", e => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX-r.left-r.width/2)*.2}px,${(e.clientY-r.top-r.height/2)*.3}px)`; });
    b.addEventListener("pointerleave", () => b.style.transform = "");
  });
}

/* portrait */
const img = $("pimg"), ph = $("pph"), file = $("file");
const showImg = src => { img.src = src; img.alt = CONFIG.portraitAlt; img.hidden = false; ph.style.display = "none"; };
if (CONFIG.portraitSrc) showImg(CONFIG.portraitSrc);
$("pick").onclick = () => file.click();
file.onchange = () => { const f = file.files[0]; if (f) { const r = new FileReader(); r.onload = () => showImg(r.result); r.readAsDataURL(f); } };

/* 3D tilt: base angle + scroll progress + pointer hover, eased with a lerp */
const card = $("card"), root = getComputedStyle(document.documentElement);
const v = n => parseFloat(root.getPropertyValue(n)) || 0;
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const fine = matchMedia("(hover:hover) and (pointer:fine)").matches;
let cur = {y: v("--tilt-y") - 38, x: v("--tilt-x"), z: v("--tilt-z") - 6}, pointer = {x:0,y:0}, raf = 0, t0 = performance.now();
const target = () => {
  const k = v("--intensity"), heroH = innerHeight, p = Math.min(1, scrollY / heroH);
  return { y: (v("--tilt-y") + p*v("--scroll-y") + pointer.x*v("--hover-y")) * k,
           x: (v("--tilt-x") - pointer.y*v("--hover-y")*.5) * k, z: v("--tilt-z") * k };
};
const apply = () => { card.style.transform = `rotateX(${cur.x}deg) rotateY(${cur.y}deg) rotateZ(${cur.z}deg)`; };
const tick = now => {
  const t = target(), ease = now - t0 < parseFloat(v("--intro-ms")) ? .05 : .12;
  cur.x += (t.x-cur.x)*ease; cur.y += (t.y-cur.y)*ease; cur.z += (t.z-cur.z)*ease; apply();
  raf = (Math.abs(t.y-cur.y)+Math.abs(t.x-cur.x) > .02) ? requestAnimationFrame(tick) : 0;
};
const kick = () => { if (!raf) raf = requestAnimationFrame(tick); };
if (reduce) { const t = target(); cur = {x:t.x*.3, y:t.y*.3, z:0}; apply(); }
else {
  kick(); addEventListener("scroll", kick, {passive:true}); addEventListener("resize", kick);
  if (fine) {
    card.parentElement.addEventListener("pointermove", e => { const r = card.parentElement.getBoundingClientRect(); pointer.x = ((e.clientX-r.left)/r.width-.5)*2; pointer.y = ((e.clientY-r.top)/r.height-.5)*2; kick(); });
    card.parentElement.addEventListener("pointerleave", () => { pointer = {x:0,y:0}; kick(); });
  }
}
