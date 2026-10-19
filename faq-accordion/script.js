document.querySelectorAll(".accordion").forEach((accordion) => {
  accordion.querySelector(".question").addEventListener("click", (evt) => {
    accordion.classList.toggle("active");
  });
});
