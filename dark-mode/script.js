const themeBtn = document.querySelector(".theme-btn");

document.querySelector("body .theme-btn").addEventListener("click", () => {
  const theme = document.body.dataset.theme ?? null;

  if (theme === "dark") {
    document.body.dataset.theme = "light";
    themeBtn.textContent = "Turn on Dark Mode";
  } else {
    document.body.dataset.theme = "dark";
    themeBtn.textContent = "Turn off Dark Mode";
  }
});
