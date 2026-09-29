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
      const nodes = $$('[d
…[middle output omitted]…
22"/></svg></button>
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
