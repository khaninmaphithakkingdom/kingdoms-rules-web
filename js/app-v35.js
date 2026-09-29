(() => {
  "use strict";

  const data = window.KI_RULES;
  const state = {
    lang: localStorage.getItem("ki-rules-lang") || "th",
    query: ""
  };

  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];

  const rulesRoot = $("#rulesRoot");
  const categoryNav = $("#categoryNav");
  const noResults = $("#noResults");
  const sidebar = $("#sidebar");
  const mobileMenuBtn = $("#mobileMenuBtn");
  const searchInput = $("#searchInput");
  const mobileSearchInput = $("#mobileSearchInput");
  const toast = $("#toast");

  const assetCache = {};
  const assetSpec = {
    herd: { mime:"image/jpeg", chunks:8 }
  };

  async function getAssetDataUrl(name) {
    if (assetCache[name]) return assetCache[name];

    const spec = assetSpec[name];
    if (!spec) return "";

    const parts = await Promise.all(
      Array.from({ length: spec.chunks }, (_, i) =>
        fetch(`assets-data/${name}-${i + 1}.txt`).then(r => {
          if (!r.ok) throw new Error(`Asset chunk failed: ${name}-${i + 1}`);
          return r.text();
        })
      )
    );

    assetCache[name] = `data:${spec.mime};base64,${parts.join("").replace(/\s+/g, "")}`;
    return assetCache[name];
  }

  async function hydrateAssets() {
    for (const name of Object.keys(assetSpec)) {
      const nodes = $$('[data-asset="' + name + '"]');
      if (!nodes.length) continue;

      try {
        const url = await getAssetDataUrl(name);
        nodes.forEach(node => node.src = url);
      } catch (error) {
        console.error(error);
      }
    }
  }

  const safeLang = () => ["th", "en", "vi"].includes(state.lang) ? state.lang : "th";
  const tx = obj => obj?.[safeLang()] ?? obj?.th ?? "";
  const normalize = value => (value || "").toLocaleLowerCase().normalize("NFKC");
  const cleanNavTitle = value => (value || "")
    .replace(/\p{Extended_Pictographic}/gu, "")
    .replace(/\uFE0F/gu, "")
    .replace(/\s{2,}/g, " ")
    .trim();

  function stripHTML(html) {
    const el = document.createElement("div");
    el.innerHTML = html || "";
    return el.textContent || "";
  }

  function setStaticUI() {
    const t = data.ui[safeLang()];
    document.documentElement.lang = safeLang();
    const languageCode = { th:"TH", en:"EN", vi:"VN" }[safeLang()] || "TH";
    const languageCount = $("#languageCount");
    if (languageCount) languageCount.textContent = languageCode;

    $$("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (t[key]) el.textContent = t[key];
    });

    searchInput.placeholder = t.search;
    mobileSearchInput.placeholder = t.search;

    $$(".lang-btn").forEach(button => {
      button.classList.toggle("active", button.dataset.lang === safeLang());
    });
  }

  function searchableText(section) {
    let text = tx(section.title) + " " + tx(section.subtitle) + " ";

    (section.items || []).forEach(item => {
      text += tx(item.title) + " " + stripHTML(tx(item.body)) + " ";
    });

    if (section.feature === "packLimits") {
      Object.entries(data.packLimits).forEach(([group, rows]) => {
        text += group + " " + rows.flat().join(" ") + " ";
      });
    }

    if (section.feature === "herdTokens") {
      Object.entries(data.herdTokens).forEach(([tier, rows]) => {
        text += tier + " " + rows.flat().join(" ") + " ";
      });
    }

    return normalize(text);
  }

  function highlight(html, rawQuery) {
    const q = rawQuery.trim();
    if (!q) return html;

    const holder = document.createElement("div");
    holder.innerHTML = html;

    const needle = normalize(q);
    const walker = document.createTreeWalker(holder, NodeFilter.SHOW_TEXT);
    const textNodes = [];

    while (walker.nextNode()) textNodes.push(walker.currentNode);

    textNodes.forEach(node => {
      const raw = node.nodeValue;
      const index = normalize(raw).indexOf(needle);
      if (index < 0) return;

      const fragment = document.createDocumentFragment();
      fragment.append(raw.slice(0, index));

      const mark = document.createElement("mark");
      mark.textContent = raw.slice(index, index + q.length);
      fragment.append(mark, raw.slice(index + q.length));

      node.replaceWith(fragment);
    });

    return holder.innerHTML;
  }

  function cleanRuleTitle(item) {
    const raw = tx(item.title).trim();
    const match = raw.match(/^([^\p{L}\p{N}]*)(?:\d+\.\s*)?(.*)$/u);
    const leading = match ? match[1] : "";
    const rest = match ? match[2].trimStart() : raw;
    return `${leading}${rest}`;
  }

  function renderRuleCard(item, index) {
    const query = state.query.trim();
    const content = `
      <div class="rule-card-head">
        <div class="rule-card-copy">
          <h3>${highlight(cleanRuleTitle(item), query)}</h3>
          <div class="rule-body">${highlight(tx(item.body), query)}</div>
        </div>
      </div>
    `;

    if (item.image) {
      return `
        <article class="rule-card ${item.type || ""} visual-rule ${item.image.includes("staff-assistance-area") ? "staff-assistance-rule" : ""}">
          <div class="visual-rule-media">
            <img src="${item.image}" alt="${tx(item.imageAlt) || stripHTML(tx(item.title))}" loading="lazy">
          </div>
          <div class="visual-rule-copy">${content}</div>
        </article>
      `;
    }

    return `<article class="rule-card ${item.type || ""}">${content}</article>`;
  }

  function renderRuleGroups(items) {
    const groups = [];
    let current = null;

    items.forEach((item, index) => {
      if (item.image) {
        groups.push({ visual:true, item, index });
        current = null;
        return;
      }

      const type = item.type || "default";
      if (!current || current.visual || current.type !== type) {
        current = { visual:false, type, rows:[] };
        groups.push(current);
      }
      current.rows.push({ item, index });
    });

    return groups.map(group => {
      if (group.visual) return renderRuleCard(group.item, group.index);

      return `
        <div class="rule-group ${group.type}">
          ${group.rows.map(({ item, index }) => `
            <article class="rule-group-item">
              <div class="rule-card-head">
                <div class="rule-card-copy">
                  <h3>${highlight(cleanRuleTitle(item), state.query.trim())}</h3>
                  <div class="rule-body">${highlight(tx(item.body), state.query.trim())}</div>
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      `;
    }).join("");
  }

  function renderPackLimits() {
    const t = data.ui[safeLang()];
    const labels = safeLang() === "th"
      ? { Herbivore:"HERBIVORE", Omnivore:"OMNIVORE", Carnivore:"CARNIVORE", species:"สายพันธุ์", limit:"จำนวนสูงสุด" }
      : safeLang() === "vi"
      ? { Herbivore:"HERBIVORE", Omnivore:"OMNIVORE", Carnivore:"CARNIVORE", species:"Loài", limit:"Giới hạn" }
      : { Herbivore:"HERBIVORE", Omnivore:"OMNIVORE", Carnivore:"CARNIVORE", species:"Species", limit:"Max" };

    return `
      <article class="rule-card feature">
        <div class="feature-copy">
          <span class="eyebrow">GROUP PACK LIMITS</span>
          <h3>${tx(data.sections.find(s => s.id === "pack-limits").title)}</h3>
          <div class="rule-body"><p>${t.packNote}</p></div>

          ${Object.entries(data.packLimits).map(([group, rows]) => `
            <div class="rule-card info" style="margin-top:14px">
              <h3>${labels[group]}</h3>
              <table class="pack-table">
                <thead>
                  <tr><th>${labels.species}</th><th>${labels.limit}</th></tr>
                </thead>
                <tbody>
                  ${rows.map(([name, amount]) => `<tr><td>${name}</td><td>× ${amount}</td></tr>`).join("")}
                </tbody>
              </table>
            </div>
          `).join("")}
        </div>
      </article>
    `;
  }

  function renderHerdTokens() {
    const t = data.ui[safeLang()];

    return `
      <article class="rule-card feature">
        <div class="feature-media">
          <img class="herd-reference-image" src="assets/herd-tokens-v10.jpg" alt="Herbivore Herd Tokens reference artwork" loading="lazy">
          <div class="feature-copy">
            <span class="eyebrow">HERBIVORE GROUP RULES</span>
            <h3>45 HERD TOKENS</h3>
            <div class="rule-body">
              <p>${t.herdIntro}</p>
              <p><strong>${t.herdFree}</strong></p>
            </div>

            <div class="token-grid">
              ${Object.entries(data.herdTokens).map(([tier, rows]) => `
                <div class="token-tier">
                  <strong class="token-tier-title"><span>${tier}</span><em>TOKENS</em></strong>
                  <small>${rows.map(([name, amount]) => `${name} — ${amount}`).join("<br>")}</small>
                </div>
              `).join("")}
            </div>

            <div class="rule-body">
              <div class="quote">
                <strong>${t.total}: 45 Herd Tokens</strong><br>
                ${t.herdSpecial}
              </div>
            </div>
          </div>
        </div>
      </article>
    `;
  }

  function renderPenalties(section) {
    const items = section.items || [];

    return `
      <div class="penalties-visual-bg" aria-hidden="true"></div>
      <div class="penalties-inner">
        <div class="penalties-grid">
          ${items.map(item => `
            <article class="penalty-card penalty-${item.type || "default"}">
              <div class="penalty-level" aria-hidden="true">${item.level}</div>
              <div class="penalty-card-copy">
                <small>${tx(item.kicker)}</small>
                <h3>${tx(item.title)}</h3>
                <div class="penalty-body">${tx(item.body)}</div>
                <div class="penalty-meta">${tx(item.meta)}</div>
              </div>
            </article>
          `).join("")}
        </div>
        <div class="penalties-notes">
          <div class="penalty-note history-note"><span>⌛</span><div>${tx(section.historyNote)}</div></div>
          <div class="penalty-note serious-note"><span>⚠</span><div>${tx(section.seriousNote)}</div></div>
        </div>
      </div>
    `;
  }

  function render() {
    setStaticUI();

    const query = normalize(state.query.trim());
    const visibleSections = data.sections.filter(section => {
      return !query || searchableText(section).includes(query);
    });

    categoryNav.innerHTML = data.sections.map(section => `
      <a class="nav-link" href="#${section.id}" data-target="${section.id}">
        <span class="nav-icon">${section.icon}</span>
        <span class="nav-copy">
          <strong>${cleanNavTitle(tx(section.title))}</strong>
        </span>
      </a>
    `).join("");

    rulesRoot.innerHTML = visibleSections.map(section => {
      let body = "";

      if (section.feature === "packLimits") {
        body = renderPackLimits();
      } else if (section.feature === "herdTokens") {
        body = renderHerdTokens();
      } else if (section.feature === "penalties") {
        body = renderPenalties(section);
      } else {
        body = `<div class="rule-grid">${renderRuleGroups(section.items)}</div>`;
      }

      return `
        <section class="rule-section ${section.feature ? `feature-${section.feature}` : ""}" id="${section.id}" data-section="${section.id}">
          <div class="section-heading">
            <div class="section-heading-main">
              <div>
                <h2>${section.icon} ${tx(section.title)}</h2>
                <p>${tx(section.subtitle)}</p>
              </div>
            </div>
            <button class="anchor-btn" type="button" data-copy="${section.id}" aria-label="Copy section link" title="Copy section link"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10.6 13.4a4 4 0 0 0 5.66 0l2.14-2.14a4 4 0 0 0-5.66-5.66l-1.22 1.22"/><path d="M13.4 10.6a4 4 0 0 0-5.66 0L5.6 12.74a4 4 0 1 0 5.66 5.66l1.22-1.22"/></svg></button>
          </div>
          ${body}
        </section>
      `;
    }).join("");

    noResults.hidden = visibleSections.length !== 0;

    $("#sectionCount").textContent = data.sections.length;
    $("#ruleCount").textContent = data.sections.reduce((total, section) => {
      return total + (section.items?.length || 1);
    }, 0);

    bindDynamic();
    updateActiveNav();
    hydrateAssets();
  }

  function bindDynamic() {
    $$(".nav-link").forEach(button => {
      button.addEventListener("click", () => goTo(button.dataset.target));
    });

    $$(".quick-card").forEach(button => {
      button.addEventListener("click", () => goTo(button.dataset.target));
    });

    $$("[data-copy]").forEach(button => {
      button.addEventListener("click", async () => {
        const id = button.dataset.copy;
        const url = `${location.origin}${location.pathname}#${id}`;

        try {
          await navigator.clipboard.writeText(url);
          showToast(data.ui[safeLang()].copy);
        } catch {
          location.hash = id;
        }
      });
    });
  }

  function goTo(id) {
    const element = document.getElementById(id);
    if (!element) return;

    $$(".nav-link").forEach(button => {
      button.classList.toggle("active", button.dataset.target === id);
    });
    $$(".quick-card").forEach(button => {
      button.classList.toggle("active", button.dataset.target === id);
    });

    const topbar = document.querySelector(".topbar");
    const offset = (topbar?.offsetHeight || 76) + 18;
    const targetY = Math.max(0, element.getBoundingClientRect().top + window.scrollY - offset);

    window.scrollTo({
      top: targetY,
      behavior: "smooth"
    });

    history.replaceState(null, "", `#${id}`);

    sidebar.classList.remove("open");
    mobileMenuBtn.setAttribute("aria-expanded", "false");
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
  }

  function syncSearch(value) {
    state.query = value;
    searchInput.value = value;
    mobileSearchInput.value = value;
    render();
  }

  searchInput.addEventListener("input", e => syncSearch(e.target.value));
  mobileSearchInput.addEventListener("input", e => syncSearch(e.target.value));

  let languageTransitionTimer = null;

  $$(".lang-btn").forEach(button => {
    button.addEventListener("click", () => {
      const nextLang = button.dataset.lang;
      if (!nextLang || nextLang === safeLang()) return;

      const savedScrollY = window.scrollY;
      clearTimeout(languageTransitionTimer);

      document.body.classList.add("language-transitioning");
      $$(".lang-btn").forEach(btn => {
        btn.disabled = true;
        btn.classList.toggle("pending", btn.dataset.lang === nextLang);
      });

      languageTransitionTimer = setTimeout(() => {
        state.lang = nextLang;
        localStorage.setItem("ki-rules-lang", state.lang);
        render();

        window.scrollTo({ top:savedScrollY, behavior:"auto" });

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            document.body.classList.remove("language-transitioning");
            $$(".lang-btn").forEach(btn => {
              btn.disabled = false;
              btn.classList.remove("pending");
            });
          });
        });
      }, 145);
    });
  });

  mobileMenuBtn.addEventListener("click", () => {
    const isOpen = sidebar.classList.toggle("open");
    mobileMenuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", event => {
    if (
      innerWidth <= 860 &&
      sidebar.classList.contains("open") &&
      !sidebar.contains(event.target) &&
      !mobileMenuBtn.contains(event.target)
    ) {
      sidebar.classList.remove("open");
      mobileMenuBtn.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", event => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      (innerWidth <= 860 ? mobileSearchInput : searchInput).focus();
    }

    if (event.key === "Escape") {
      sidebar.classList.remove("open");
      mobileMenuBtn.setAttribute("aria-expanded", "false");
    }
  });

  function updateActiveNav() {
    const sections = $$(".rule-section");
    if (!sections.length) return;

    let active = sections[0].id;
    const y = scrollY + 130;

    sections.forEach(section => {
      if (section.offsetTop <= y) active = section.id;
    });

    $$(".nav-link").forEach(button => {
      button.classList.toggle("active", button.dataset.target === active);
    });

    $$(".quick-card").forEach(button => {
      button.classList.toggle("active", button.dataset.target === active);
    });
  }

  addEventListener("scroll", () => requestAnimationFrame(updateActiveNav), { passive:true });

  render();

  if (location.hash) {
    const id = location.hash.slice(1);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (!element) return;
      const topbar = document.querySelector(".topbar");
      const offset = (topbar?.offsetHeight || 76) + 18;
      const targetY = Math.max(0, element.getBoundingClientRect().top + window.scrollY - offset);
      window.scrollTo({ top: targetY, behavior:"auto" });
    }, 50);
  }
})();