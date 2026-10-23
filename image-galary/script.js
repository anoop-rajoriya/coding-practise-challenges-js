const galleryData = [
  {
    url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    title: "Neon Canyon",
    description: "Bioluminescent rock formations under twilight sky.",
  },
  {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    title: "Alpine Mist",
    description: "Serene mountain valley mirrored in calm alpine waters.",
  },
  {
    url: "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?auto=format&fit=crop&w=1200&q=80",
    title: "Chromatic Echo",
    description: "Atmospheric light beams cutting through deep indigo haze.",
  },
  {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    title: "Dusk Coast",
    description: "Gentle oceanic tide dissolving into sand during golden hour.",
  },
];

let activeThumbIndex = 0;

const displayStage = document.getElementById("displayStage");
const captionTitle = document.getElementById("captionTitle");
const captionDesc = document.getElementById("captionDesc");

const img = document.createElement("img");
img.src = galleryData[activeThumbIndex].url;
img.alt = galleryData[activeThumbIndex].title;

displayStage.append(img);
captionTitle.textContent = galleryData[activeThumbIndex].title;
captionDesc.textContent = galleryData[activeThumbIndex].description;

const thumbnailStrip = document.getElementById("thumbnailStrip");

for (let i = 0; i < galleryData.length; i++) {
  const img = document.createElement("img");
  img.src = galleryData[i].url;
  img.alt = galleryData[i].title;

  const btn = document.createElement("button");
  btn.append(img);
  btn.classList = activeThumbIndex === i ? "thumb-btn active" : "thumb-btn";

  thumbnailStrip.append(btn);
}

const updateGalary = (index) => {
  if (index === activeThumbIndex) return;
  const { url, title, description } = galleryData[index];

  const stagedImg = document.querySelector("#displayStage img");
  stagedImg.src = url;
  stagedImg.alt = title;

  captionTitle.textContent = title;
  captionDesc.textContent = description;

  thumbnailStrip.children[activeThumbIndex].classList.remove("active");
  thumbnailStrip.children[index].classList.add("active");
  activeThumbIndex = index;
};

document.getElementById("prevBtn").addEventListener("click", (evt) => {
  updateGalary(
    (activeThumbIndex - 1 + galleryData.length) % galleryData.length,
  );
});
document.getElementById("nextBtn").addEventListener("click", (evt) => {
  updateGalary((activeThumbIndex + 1) % galleryData.length);
});

Array.from(thumbnailStrip.children).forEach((btn, index) => {
  btn.addEventListener("click", (evt) => updateGalary(index));
});
