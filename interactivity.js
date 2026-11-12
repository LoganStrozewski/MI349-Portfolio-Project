function setupThemeToggle() {
	const themeToggle = document.querySelector(".theme-toggle");
	const root = document.documentElement;
	const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

	root.dataset.theme = isDark ? "dark" : "light";
	themeToggle.setAttribute("aria-pressed", String(isDark));
	themeToggle.addEventListener("click", () => {
		const enableDarkMode = root.dataset.theme !== "dark";
		root.dataset.theme = enableDarkMode ? "dark" : "light";
		themeToggle.setAttribute("aria-pressed", String(enableDarkMode));
	});
}

function setupScrollReveal() {
	window.ScrollReveal().reveal("#home h1, #home p, #home img, #about, #projects, #contact, .experience-grid article", {
		distance: "18px",
		duration: 600,
		interval: 150,
		origin: "bottom",
		reset: true
	});
}

setupThemeToggle();
setupScrollReveal();
