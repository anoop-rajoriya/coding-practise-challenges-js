document.querySelectorAll(".tabs .btn").forEach((btn) => {
  btn.addEventListener("click", (evt) => {
    // Inacive all buttons
    document.querySelectorAll(".tabs .btn").forEach((btn) => {
      btn.classList.remove("active");
    });

    // inactive all content
    document
      .querySelectorAll(".content-container .content-panel")
      .forEach((content) => {
        content.classList.remove("active");
      });

    //   Active clicked button
    btn.classList.add("active");

    // Find related element
    const panelId = btn.dataset.target;

    // Active related conent
    document.getElementById(panelId).classList.add("active");
  });
});
