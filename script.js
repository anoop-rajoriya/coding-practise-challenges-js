const projectsData = [
  {
    title: "Color Palette Generator",
    slug: "color-palette-generator",
  },
  {
    title: "Dark Mode Toggle",
    slug: "dark-mode",
  },
  {
    title: "Dynamic List",
    slug: "dynamic-list",
  },
  {
    title: "FAQ Accordion",
    slug: "faq-accordion",
  },
  {
    title: "Image Gallery",
    slug: "image-galary", // Matches folder name in repository
  },
  {
    title: "Modal Popup",
    slug: "model-popup", // Matches folder name in repository
  },
  {
    title: "Tabs Component",
    slug: "tabs-component",
  },
];

const projectsContainer = document.querySelector(".projects");

function renderProjects(projects) {
  if (!projectsContainer) return;

  const fragment = document.createDocumentFragment();

  projects.forEach((project, index) => {
    const card = document.createElement("a");
    card.className = "project-card";
    card.href = `./${project.slug}/index.html`;

    const formattedIndex = String(index + 1).padStart(2, "0");

    card.innerHTML = `
      <img
        src="./${project.slug}/preview.webp"
        alt="${project.title} preview"
        class="project-card__preview"
        loading="lazy"
      />
      <span class="project-card__arrow" aria-hidden="true">-&gt;</span>
      <div class="project-card__info">
        <span class="project-card__number">#${formattedIndex}</span>
        <h2 class="project-card__title">${project.title}</h2>
      </div>
    `;

    fragment.appendChild(card);
  });

  projectsContainer.appendChild(fragment);
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects(projectsData);
});
