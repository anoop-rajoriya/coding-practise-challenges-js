const getRandomNumber = (min = 50, max = 200) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomColor = () => {
  const red = getRandomNumber();
  const green = getRandomNumber();
  const blue = getRandomNumber();

  const toHex = (n) => Number(n).toString(16);

  return `#${toHex(red)}${toHex(green)}${toHex(blue)}`.toUpperCase();
};

const createSwatchCard = (colorHex) => {
  const card = document.createElement("div");
  card.classList.add("swatch-card");
  card.dataset.colorHex = colorHex;
  card.innerHTML = `<div class="swatch-preview" style="background-color: ${colorHex};"></div>
          <div class="swatch-meta">
            <span class="hex-label">${colorHex}</span>
            <button class="lock-btn">Lock</button>
          </div>`;
  return card;
};

const copyColor = async (card) => {
  const toast = document.getElementById("toast");
  try {
    const hex = card.dataset.colorHex;
    await navigator.clipboard.writeText(hex);
    toast.textContent = `Palette ${hex} copied to clipboard`;
    toast.classList.add("active");
    setTimeout(() => toast.classList.remove("active"), 800);
  } catch (error) {
    toast.textContent = `Can't able to copy to clipboard`;
    toast.classList.add("active");
    setTimeout(() => toast.classList.remove("active"), 800);
  }
};

const lockColor = (swatchCard) => {
  swatchCard.classList.toggle("locked");
};

const randerSwatches = (count = 5) => {
  const swatchsContainer = document.getElementById("swatchsContainer");

  if (swatchsContainer.children.length == 0) {
    for (let i = 0; i < count; i++) {
      const color = getRandomColor();
      swatchsContainer.append(createSwatchCard(color));
    }
    return;
  }

  Array.from(swatchsContainer.children).forEach((oldCard) => {
    if (!oldCard.classList.contains("locked")) {
      const color = getRandomColor();
      oldCard.replaceWith(createSwatchCard(color));
    }
  });

  Array.from(swatchsContainer.children).forEach((swatchCard) => {
    swatchCard.addEventListener("click", (evt) => {
      evt.stopPropagation();
      copyColor(swatchCard, evt);
    });

    swatchCard.querySelector("button").addEventListener("click", (evt) => {
      evt.stopPropagation();
      lockColor(swatchCard, evt);
    });
  });
};

document
  .getElementById("generatePaletteBtn")
  .addEventListener("click", (evt) => {
    randerSwatches();
  });

randerSwatches();
