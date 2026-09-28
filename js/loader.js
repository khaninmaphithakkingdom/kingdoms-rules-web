(() => {
  "use strict";

  async function loadParts(prefix, count) {
    const files = Array.from({ length: count }, (_, i) =>
      `site-data/${prefix}-${String(i + 1).padStart(2, "0")}.txt?v=2`
    );
    const parts = [];
    for (const file of files) {
      const response = await fetch(file, { cache: "no-store" });
      if (!response.ok) throw new Error(`Failed to load ${file}: ${response.status}`);
      parts.push(await response.text());
    }
    return parts.join("");
  }

  function runScript(source, name) {
    return new Promise((resolve, reject) => {
      const blob = new Blob([source + "\n//# sourceURL=" + name], { type: "text/javascript" });
      const url = URL.createObjectURL(blob);
      const script = document.createElement("script");
      script.src = url;
      script.onload = () => {
        URL.revokeObjectURL(url);
        script.remove();
        resolve();
      };
      script.onerror = () => {
        URL.revokeObjectURL(url);
        script.remove();
        reject(new Error("Failed to execute " + name));
      };
      document.head.appendChild(script);
    });
  }

  async function boot() {
    const css = await loadParts("css", 5);
    const style = document.createElement("style");
    style.id = "ki-full-styles";
    style.textContent = css;
    document.head.appendChild(style);

    const rules = await loadParts("rules", 22);
    await runScript(rules, "rules-full.js");

    const app = await loadParts("app", 3);
    await runScript(app, "app-full.js");

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