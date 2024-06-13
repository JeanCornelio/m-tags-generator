if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  document.querySelector("body").classList.add("dark:bg-slate-900");
} else {
  document.documentElement.classList.remove("dark");
  document.querySelector("body").classList.remove("dark:bg-slate-900");
}
