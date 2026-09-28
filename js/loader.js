(() => {
  "use strict";

  async function loadParts(prefix, count) {
    const files = Array.from({length: count}, (_, i) =>
      `site-data/${prefix}-${String(i + 1).padStart(2, "0")}.txt`
    );
    const parts = await Promise.all(files.map(async file => {
      const response = await fetch(file, {cache: "no-store"});
      if (!response.ok) throw new Error(`Failed to load ${file}: ${response.status}`);
      return response.text();
    }));
    return parts.join("");
  }

  async function boot() {
    const css = await loadParts("css", 5);
    const style = document.createElement("style");
    style.id = "ki-full-styles";
    style.textContent = css;
    document.head.appendChild(style);

    const rules = await loadParts("rules", 22);
    (0, eval)(rules);

    const app = await loadParts("app", 3);
    (0, eval)(app);

    document.documentElement.classList.add("ki-ready");
  }

  boot().catch(error => {
    console.error("Kingdoms Isle loader failed", error);
    const box = document.createElement("div");
    box.style.cssText = "margin:120px auto;max-width:720px;padding:24px;color:#f2eee2;background:#111813;border:1px solid #6e5635;border-radius:14px;font-family:system-ui";
    box.innerHTML = "<strong>Unable to load the full rules interface.</strong><br><span style='opacity:.7'>Please refresh the page. If the problem continues, contact Kingdoms Isle staff.</span>";
    document.body.appendChild(box);
  });
})();