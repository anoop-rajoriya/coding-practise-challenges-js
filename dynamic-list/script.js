const Icon = `<svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M4 8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8ZM6 10V20H18V10H6ZM9 12H11V18H9V12ZM13 12H15V18H13V12ZM7 5V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V5H22V7H2V5H7ZM9 4V5H15V4H9Z"
              ></path>
            </svg>`;

document.getElementById("addBtn").addEventListener("click", (evt) => {
  const userInput = document.getElementById("userInput");
  const value = userInput.value.trim();

  if (value === "") return;

  const li = document.createElement("li");
  li.classList.add("list-item");
  li.innerHTML = `
  <span class="check"></span> 
  <p class="text">${value}</p> 
  <button class="remove-btn">${Icon}</button>
  `;

  const listContainer = document.getElementById("listContainer");
  listContainer.append(li);
  userInput.value = "";

  const itemsLength = listContainer.querySelectorAll("li.list-item").length;
  document.getElementById("listCount").textContent = `${itemsLength} Items`;

  li.addEventListener("click", (evt) => {
    li.classList.toggle("checked");
  });

  li.querySelector(".remove-btn").addEventListener("click", (evt) => {
    evt.stopPropagation();
    listContainer.removeChild(li);
    const itemsLength = listContainer.querySelectorAll("li.list-item").length;
    document.getElementById("listCount").textContent = `${itemsLength} Items`;
  });
});
