(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return false;
    }
  };

  const emailBtn = document.getElementById("copyEmailBtn");
  const linkedInBtn = document.getElementById("copyLinkedInBtn");

  if (emailBtn) {
    emailBtn.addEventListener("click", async () => {
      const ok = await copy("vanessa.m.sudano@gmail.com");
      emailBtn.textContent = ok ? "Copied!" : "Copy failed";
      setTimeout(() => (emailBtn.textContent = "Copy email"), 1200);
    });
  }

  if (linkedInBtn) {
    linkedInBtn.addEventListener("click", async () => {
      const ok = await copy("https://linkedin.com/in/vanessarocca");
      linkedInBtn.textContent = ok ? "Copied!" : "Copy failed";
      setTimeout(() => (linkedInBtn.textContent = "Copy LinkedIn"), 1200);
    });
  }
})();
