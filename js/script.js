const PROJECTS = [
  { t: "Logo Design 01", c: "logo", src: "project photos/logo/Artboard 1@4x-100.jpg" },
  { t: "Brand Identity 01", c: "branding", src: "project photos/brand/Artboard 1.jpg" },
  { t: "Brand Identity 02", c: "branding", src: "project photos/brand/Artboard 2.jpg" },
  { t: "Brand Identity 03", c: "branding", src: "project photos/brand/Artboard 3.jpg" },
  { t: "Brand Identity 04", c: "branding", src: "project photos/brand/Artboard 6.jpg" },
  { t: "Brand Identity 05", c: "branding", src: "project photos/brand/Artboard 7.jpg" },
  { t: "Brand Identity 06", c: "branding", src: "project photos/brand/Artboard 8.jpg" },
  { t: "Brand Identity 07", c: "branding", src: "project photos/brand/Artboard 9.jpg" },
  { t: "Brand Identity 08", c: "branding", src: "project photos/brand/Artboard 10.jpg" },
  { t: "Brand Identity 09", c: "branding", src: "project photos/brand/Artboard 11.jpg" },
  { t: "Brand Identity 10", c: "branding", src: "project photos/brand/Artboard 12.jpg" },
  { t: "Brand Identity 11", c: "branding", src: "project photos/brand/Artboard 13.jpg" },
  { t: "Brand Identity 12", c: "branding", src: "project photos/brand/Artboard 14.jpg" },
  { t: "Social Media 01", c: "social", src: "project photos/social media/3.jpg" },
  { t: "Social Media 02", c: "social", src: "project photos/social media/4.jpg" },
  { t: "Social Media 03", c: "social", src: "project photos/social media/5.jpg" },
  { t: "Social Media 04", c: "social", src: "project photos/social media/6.jpg" },
  { t: "Social Media 05", c: "social", src: "project photos/social media/7.jpg" },
  { t: "Social Media 06", c: "social", src: "project photos/social media/8.jpg" },
  { t: "Social Media 07", c: "social", src: "project photos/social media/1ece42304bcb3cb3feac2d967a78da3d.jpg" },
  { t: "Social Media 08", c: "social", src: "project photos/social media/2cf7b35cda68001d235818d2a7e18f6f.jpg" },
  { t: "Social Media 09", c: "social", src: "project photos/social media/2d9630fb9c3ccd76ba7151a42c515ad5.jpg" },
  { t: "Social Media 10", c: "social", src: "project photos/social media/4c2b92d4072637e62761d84061049129.jpg" },
  { t: "Social Media 11", c: "social", src: "project photos/social media/6d922df15d9e41c4a6ef7f4b91c10a85.jpg" },
  { t: "Social Media 12", c: "social", src: "project photos/social media/44dc20044fb64598bf7f7b720ffb2b52.jpg" },
  { t: "Social Media 13", c: "social", src: "project photos/social media/723bf5c0c62d1de01a9bd5a640666f44.jpg" },
  { t: "Social Media 14", c: "social", src: "project photos/social media/2881342728785525b0ab3d55ed914918.jpg" },
  { t: "Social Media 15", c: "social", src: "project photos/social media/new/4c1b94064f1226074c576897571f697b.jpg" },
  { t: "Social Media 16", c: "social", src: "project photos/social media/new/a07f3971c0c09d81cd412381984d190a.jpg" },
  { t: "Social Media 17", c: "social", src: "project photos/social media/new/e75996732c5ea15e8cb77e72d5c559d3.jpg" }
];

const PALETTE = [
  ["#FF4A1C", "#131211"], ["#0F3D36", "#E8B84B"], ["#1D1DFF", "#F2EFE8"],
  ["#E8B84B", "#131211"], ["#00C4CC", "#131211"], ["#F2EFE8", "#FF4A1C"],
  ["#7D2AE8", "#F2EFE8"], ["#131211", "#00C4CC"], ["#E63888", "#F2EFE8"],
  ["#2ECC71", "#0A2E1C"]
];

function placeholder(index) {
  const p = PALETTE[index % PALETTE.length];
  const n = String(index + 1).padStart(2, "0");
  const shape = index % 4;
  const deco =
    shape === 0 ? `<circle cx="620" cy="140" r="170" fill="${p[1]}" opacity=".22"/>` :
    shape === 1 ? `<rect x="520" y="60" width="260" height="260" rx="30" fill="${p[1]}" opacity=".22" transform="rotate(14 650 190)"/>` :
    shape === 2 ? `<path d="M760 40 L900 300 L620 300 Z" fill="${p[1]}" opacity=".22"/>` :
                  `<rect x="560" y="70" width="300" height="300" rx="150" fill="none" stroke="${p[1]}" stroke-width="26" opacity=".25"/>`;
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">` +
    `<rect width="800" height="600" fill="${p[0]}"/>${deco}` +
    `<g fill="none" stroke="${p[1]}" stroke-width="2" opacity=".55">` +
    `<path d="M40 40h44M40 40v44M760 560h-44M760 560v-44"/></g>` +
    `<text x="52" y="520" font-family="Arial Black,Arial" font-size="150" font-weight="900" fill="${p[1]}" opacity=".95">${n}</text>` +
    `<text x="56" y="565" font-family="Arial,Helvetica" font-size="26" letter-spacing="6" fill="${p[1]}" opacity=".8">HAZEM EKRAMY</text>` +
    `</svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const isTouch = matchMedia("(pointer:coarse)").matches;

/* ---------------- categories & groups ---------------- */
const SKIN = [7, 8, 9, 11, 12, 14];
const FOOD = [10, 13, 15, 16, 17];
const CAT_ORDER = { logo: 0, branding: 1, social: 2 };
const GROUP_ORDER = { "Real Estate": 0, "Skin cares": 1, "Food": 2, "Speedia Project": 0 };

PROJECTS.forEach((p, i) => {
  p._i = i;
  if (p.c === "branding") p.g = "Speedia Project";
  else if (p.c === "social") {
    const n = +(p.t.match(/(\d+)$/) || [, 0])[1];
    p.g = FOOD.includes(n) ? "Food" : SKIN.includes(n) ? "Skin cares" : "Real Estate";
  }
});
PROJECTS.sort((a, b) =>
  CAT_ORDER[a.c] - CAT_ORDER[b.c] ||
  (GROUP_ORDER[a.g] ?? 0) - (GROUP_ORDER[b.g] ?? 0) ||
  a._i - b._i
);

/* ---------------- build project grid ---------------- */
const grid = $("#workGrid");
let lastGroup = null;
PROJECTS.forEach((p, i) => {
  if (p.g && p.g !== lastGroup) {
    lastGroup = p.g;
    const h = document.createElement("h3");
    h.className = "work-group reveal hide";
    h.dataset.cat = p.c;
    h.innerHTML = `<span>${p.g}</span><em>${String(PROJECTS.filter(x => x.g === p.g).length).padStart(2, "0")}</em><i></i>`;
    grid.appendChild(h);
  }
  if (!p.g) lastGroup = null;

  const card = document.createElement("figure");
  card.className = "work-card reveal hide";
  card.dataset.cat = p.c;
  card.dataset.g = p.g || "";
  card.dataset.index = i;
  card.dataset.cursor = "view";
  const no = (p.t.match(/(\d+)$/) || [, i + 1])[1];
  const file = p.src;
  card.innerHTML = `
    <div class="work-frame">
      <span class="crop a"></span><span class="crop b"></span>
      <span class="crop c"></span><span class="crop d"></span>
      <span class="work-no">${String(no).padStart(2, "0")}</span>
      <img src="${file}" alt="${p.t}" loading="lazy" data-ph="${placeholder(i)}">
      <div class="work-hover"><span>View project</span></div>
    </div>
    <figcaption class="work-meta">
      <h3>${p.t}</h3><em>${p.g || p.c}</em>
    </figcaption>`;
  const img = card.querySelector("img");
  img.addEventListener("error", () => { if (img.src !== img.dataset.ph) img.src = img.dataset.ph; });
  grid.appendChild(card);
});

const TOTAL = PROJECTS.length;
["projCount", "heroCount", "metaCount"].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.textContent = TOTAL;
});
const statProjects = document.getElementById("statProjects");
if (statProjects) statProjects.dataset.count = TOTAL;

/* ---------------- loader ---------------- */
const loader = $("#loader"), num = $("#loaderNum");
let pct = 0;
const tick = setInterval(() => {
  pct = Math.min(100, pct + Math.random() * 14 + 5);
  num.textContent = Math.floor(pct);
  if (pct >= 100) {
    clearInterval(tick);
    setTimeout(() => {
      loader.classList.add("done");
      document.body.classList.add("ready");
      setTimeout(() => loader.remove(), 1100);
    }, 380);
  }
}, 110);

/* ---------------- cursor ---------------- */
const dot = $("#cursorDot"), ring = $("#cursorRing"), label = $("#cursorLabel"), glow = $("#glow");
let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my, gx = mx, gy = my;

addEventListener("mousemove", e => {
  mx = e.clientX; my = e.clientY;
  dot.style.transform = `translate(${mx}px,${my}px)`;
  if (glow) glow.style.opacity = "1";
});

(function loop() {
  rx += (mx - rx) * 0.16; ry += (my - ry) * 0.16;
  gx += (mx - gx) * 0.06; gy += (my - gy) * 0.06;
  ring.style.transform = `translate(${rx}px,${ry}px)`;
  if (glow) glow.style.transform = `translate(${gx}px,${gy}px)`;
  requestAnimationFrame(loop);
})();

const hoverables = "a, button, .work-card, input, textarea, .skill-strip span";
document.addEventListener("mouseover", e => {
  const cur = e.target.closest("[data-cursor]");
  const link = e.target.closest(hoverables);
  document.body.classList.toggle("cur-grow", !!cur);
  document.body.classList.toggle("cur-link", !cur && !!link);
  if (cur) label.textContent = cur.dataset.cursor === "view" ? "VIEW" : "";
});
document.addEventListener("mouseout", e => {
  if (e.target.closest("[data-cursor]")) { document.body.classList.remove("cur-grow"); label.textContent = ""; }
});

/* ---------------- nav ---------------- */
const nav = $("#nav"), navLinks = $("#navLinks"), burger = $("#burger");
burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  navLinks.classList.toggle("open");
  document.body.style.overflow = navLinks.classList.contains("open") ? "hidden" : "";
});
$$(".nav-link").forEach(l => l.addEventListener("click", () => {
  burger.classList.remove("open"); navLinks.classList.remove("open"); document.body.style.overflow = "";
}));

const progress = $("#progress");
addEventListener("scroll", () => {
  const h = document.documentElement;
  const max = h.scrollHeight - innerHeight;
  progress.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
  nav.classList.toggle("stuck", h.scrollTop > 40);
}, { passive: true });

const sections = $$("main section[id]");
const spy = new IntersectionObserver(es => {
  es.forEach(e => {
    if (e.isIntersecting) {
      $$(".nav-link").forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id));
    }
  });
}, { rootMargin: "-45% 0px -50% 0px" });
sections.forEach(s => spy.observe(s));

/* ---------------- reveal ---------------- */
const io = new IntersectionObserver(es => {
  es.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add("in"), (i % 6) * 70);
      io.unobserve(e.target);
      $$("[data-count]", e.target).forEach(runCount);
    }
  });
}, { threshold: 0.15 });
$$(".reveal, .tool-card").forEach(el => io.observe(el));

function runCount(el) {
  const target = +el.dataset.count, suf = el.dataset.suffix || "";
  let cur = 0;
  const step = Math.max(1, Math.round(target / 45));
  const id = setInterval(() => {
    cur += step;
    if (cur >= target) { cur = target; clearInterval(id); }
    el.textContent = String(cur).padStart(2, "0") + suf;
  }, 28);
}

/* ---------------- mouse parallax ---------------- */
if (!isTouch) {
  const floats = $$("[data-float]");
  const pimg = $("#parallaxImg");
  const tiltEls = $$("[data-tilt]");
  addEventListener("mousemove", e => {
    const nx = (e.clientX / innerWidth - 0.5);
    const ny = (e.clientY / innerHeight - 0.5);
    floats.forEach((el, i) => {
      const d = (i + 1) * 14;
      el.style.transform = `translate(${nx * d}px,${ny * d}px)`;
    });
    if (pimg) pimg.style.transform = `translate(${nx * -18}px,${ny * -18}px) scale(1.06)`;
  });

  tiltEls.forEach(el => {
    el.addEventListener("mousemove", e => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateX(${-y * 7}deg) rotateY(${x * 9}deg) translateY(-6px)`;
    });
    el.addEventListener("mouseleave", () => { el.style.transform = ""; });
  });

  $$("[data-magnet]").forEach(el => {
    el.addEventListener("mousemove", e => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.22}px,${(e.clientY - r.top - r.height / 2) * 0.3}px)`;
    });
    el.addEventListener("mouseleave", () => { el.style.transform = ""; });
  });
}

/* ---------------- filters ---------------- */
let current = null;
const emptyState = $("#workEmpty");

function applyFilter(animate) {
  $$(".filter").forEach(f => f.classList.toggle("active", f.dataset.filter === current));
  let k = 0;
  $$(".work-card, .work-group").forEach(el => {
    const show = !!current && el.dataset.cat === current;
    el.classList.toggle("hide", !show);
    if (show && animate) {
      el.classList.remove("in");
      setTimeout(() => el.classList.add("in"), 60 + k * 40);
      k++;
    }
  });
  emptyState.classList.toggle("hide", !!current);
}

$("#filters").addEventListener("click", e => {
  const b = e.target.closest(".filter");
  if (!b) return;
  current = b.dataset.filter;
  applyFilter(true);
});

applyFilter(false);

/* ---------------- lightbox ---------------- */
const lb = $("#lightbox"), lbImg = $("#lbImg"), lbTitle = $("#lbTitle"),
      lbCat = $("#lbCat"), lbCount = $("#lbCount");
let lbIndex = 0;

function visibleCards() { return $$(".work-card").filter(c => !c.classList.contains("hide")); }

function openLb(card) {
  const list = visibleCards();
  lbIndex = list.indexOf(card);
  render();
  lb.classList.add("open");
  lb.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function render() {
  const list = visibleCards();
  if (!list.length) return;
  lbIndex = (lbIndex + list.length) % list.length;
  const card = list[lbIndex];
  const img = card.querySelector("img");
  lbImg.src = img.currentSrc || img.src;
  lbTitle.textContent = card.querySelector("h3").textContent;
  lbCat.textContent = card.dataset.g || card.dataset.cat;
  lbCount.textContent = String(lbIndex + 1).padStart(2, "0") + " / " + String(list.length).padStart(2, "0");
}
function closeLb() {
  lb.classList.remove("open");
  lb.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
grid.addEventListener("click", e => {
  const card = e.target.closest(".work-card");
  if (card) openLb(card);
});
$("#lbClose").addEventListener("click", closeLb);
$("#lbPrev").addEventListener("click", () => { lbIndex--; render(); });
$("#lbNext").addEventListener("click", () => { lbIndex++; render(); });
lb.addEventListener("click", e => { if (e.target === lb) closeLb(); });
addEventListener("keydown", e => {
  if (!lb.classList.contains("open")) return;
  if (e.key === "Escape") closeLb();
  if (e.key === "ArrowLeft") { lbIndex--; render(); }
  if (e.key === "ArrowRight") { lbIndex++; render(); }
});

/* ---------------- contact form (EmailJS) ---------------- */
const EMAILJS_CONFIG = {
  publicKey: "eYKXtsYP5vAQpKmnt",
  serviceId: "service_4btme5c",
  templateId: "template_ad5aie9",
  toEmail: "hazemekramy2006@gmail.com"
};

function sendViaFormSubmit(p) {
  return fetch("https://formsubmit.co/ajax/" + encodeURIComponent(EMAILJS_CONFIG.toEmail), {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      _subject: `New project from ${p.from_name}`,
      _captcha: "false",
      Name: p.from_name,
      Email: p.from_email,
      Message: p.message
    })
  }).then(r => { if (!r.ok) throw new Error("formsubmit " + r.status); return r.json(); });
}

function openMailFallback(p) {
  $("#fNote").style.color = "var(--accent)";
  $("#fNote").textContent = "Couldn't send it — opening your email app...";
  window.location.href = `mailto:${EMAILJS_CONFIG.toEmail}?subject=${encodeURIComponent("New project from " + p.from_name)}&body=${encodeURIComponent("Name: " + p.from_name + "\nEmail: " + p.from_email + "\n\n" + p.message)}`;
}

$("#cForm").addEventListener("submit", async e => {
  e.preventDefault();
  const f = e.target, note = $("#fNote"), btn = f.querySelector("button");
  const params = {
    from_name: f.name.value.trim(),
    from_email: f.email.value.trim(),
    reply_to: f.email.value.trim(),
    message: f.msg.value.trim(),
    to_email: EMAILJS_CONFIG.toEmail
  };
  const ready = window.emailjs && EMAILJS_CONFIG.publicKey && EMAILJS_CONFIG.serviceId && EMAILJS_CONFIG.templateId;

  btn.disabled = true;
  note.style.color = "";
  note.textContent = "Sending...";
  try {
    if (ready) {
      await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, params, { publicKey: EMAILJS_CONFIG.publicKey });
    } else {
      await sendViaFormSubmit(params);
    }
    note.textContent = "Thanks! I'll get back to you within 24 hours.";
    f.reset();
  } catch (err) {
    openMailFallback(params);
  } finally {
    btn.disabled = false;
  }
});
