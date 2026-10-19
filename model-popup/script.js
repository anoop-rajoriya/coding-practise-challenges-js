const toggleDialog = () => {
  const classNames = document
    .getElementById("modelOverlay")
    .classList.toggle("active");
};

document.getElementById("openModelBtn").addEventListener("click", (evt) => {
  toggleDialog();
});

document.getElementById("closeModelBtn").addEventListener("click", (e) => {
  toggleDialog();
  e.stopPropagation();
});

document.getElementById("cancelModelBtn").addEventListener("click", (e) => {
  toggleDialog();
  e.stopPropagation();
});

document.getElementById("modelOverlay").addEventListener("click", (e) => {
  toggleDialog();
});
