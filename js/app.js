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

    $$("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (t[key]) el.textContent = t[key];
   
…[middle output omitted]…
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

  function render() {
    setStaticUI();

    const query = normalize(state.query.trim());
    const visibleSections = data.sections.filter(section => {
      return !query || searchableText(section).includes(query);
    });

    categoryNav.innerHTML = data.sections.map(section => `
      <button class="nav-link" type="button" data-target="${section.id}">
        <span class="nav-icon">${section.icon}</span>
        <span class="nav-copy">
          <strong>${cleanNavTitle(tx(section.title))}</strong>
          <small><b>${section.code}</b><span>·</span>${tx(section.subtitle)}</small>
        </span>
      </button>
    `).join("");

    rulesRoot.innerHTML = visibleSections.map(section => {
      let body = "";

      if (section.feature === "packLimits") {
        body = renderPackLimits();
      } else if (section.feature === "herdTokens") {
        body = renderHerdTokens();
      } else {
        body = `<div class="rule-grid">${section.items.map(renderRuleCard).join("")}</div>`;
      }

      return `
        <section class="rule-section" id="${section.id}" data-section="${section.id}">
          <div class="section-heading">
            <div class="section-heading-main">
              <span class="section-number">${section.code}</span>
              <div>
                <h2>${section.icon} ${tx(section.title)}</h2>
                <p>${tx(section.subtitle)}</p>
              </div>
            </div>
            <button class="anchor-btn" type="button" data-copy="${section.id}" aria-label="Copy section link">#</button>
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

    element.scrollIntoView({ behavior:"smooth", block:"start" });
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

  $$(".lang-btn").forEach(button => {
    button.addEventListener("click", () => {
      state.lang = button.dataset.lang;
      localStorage.setItem("ki-rules-lang", state.lang);
      render();
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
  }

  addEventListener("scroll", () => requestAnimationFrame(updateActiveNav), { passive:true });

  render();

  if (location.hash) {
    const id = location.hash.slice(1);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ block:"start" });
    }, 50);
  }
})();

