(function () {
  const projectsData = [
    {
      image: "./assets/projects/porlu-coffee.png",
      alt: "PorluCoffee",
      category: "Frontend",
      title: "PorluCoffee",
      description:
        "A modern landing page for a specialty coffee brand, optimized for performance and search visibility.",
      tags: ["Next.js", "SEO", "Tailwind"],
      liveLink: "https://porlucoffee.com",
      githubLink: "",
    },
    {
      image: "./assets/projects/mustika-traso.png",
      alt: "Mustika Traso",
      category: "Full Stack",
      title: "Mustika Traso",
      description:
        "A modern landing page for a precast concrete company, with basic custom CMS / admin control.",
      tags: ["Next.js", "Supabase", "SEO", "Tailwind"],
      liveLink: "https://mustikatraso.com",
      githubLink: "",
    },
    {
      image: "./assets/projects/falaah-ds.png",
      alt: "Falaah Digital Solutions",
      category: "Frontend",
      title: "Falaah Digital Solutions",
      description:
        "Company profile website for a digital solutions agency with clean design and fast load times.",
      tags: ["Next.js", "SEO", "Tailwind"],
      liveLink: "https://f-ds.vercel.app",
      githubLink: "",
    },
    {
      image: "./assets/projects/inklusi-kerja.png",
      alt: "InklusiKerja",
      category: "Full Stack",
      title: "InklusiKerja",
      description:
        "A job platform connecting inclusive employers with diverse talent, featuring profile management and job listings.",
      tags: ["React.js", "Express.js", "MongoDB"],
      liveLink: "https://disabilitas-web.vercel.app/profile",
      githubLink: "",
    },
    {
      image: "./assets/projects/wfm.png",
      alt: "WFM Bot",
      category: "Automation",
      title: "WFM Bot",
      description:
        "Telegram bot that automates workforce management tasks including scheduling, attendance tracking, and reporting.",
      tags: ["Node.js", "Telegram API", "Web Scraping"],
      liveLink: "",
      githubLink: "https://github.com/fatiryasn/WFM-Bot",
    },
    {
      image: "./assets/projects/portfolio.png",
      alt: "Personal Portfolio",
      category: "Frontend",
      title: "Personal Portfolio",
      description:
        "A responsive portfolio website showcasing my projects and skills, built with modern web technologies.",
      tags: ["JavaScript", "Tailwind"],
      liveLink: "https://fatirayp.vercel.app",
      githubLink: "",
    },
    {
      image: "./assets/projects/pos.png",
      alt: "FalaahPOS",
      category: "Full Stack",
      title: "FalaahPOS",
      description:
        "Point of sale system with inventory management, sales tracking, and real-time reporting dashboard.",
      tags: ["React.js", "Express.js", "MySQL"],
      liveLink: "",
      githubLink: "",
    },
    {
      image: "./assets/projects/ctu.png",
      alt: "CTU Agent",
      category: "Automation",
      title: "CTU Agent",
      description:
        "Desktop application for automated data collection and processing, built with Electron for cross-platform support.",
      tags: ["Node.js", "Electron", "Web Scraping"],
      liveLink: "",
      githubLink: "https://github.com/fatiryasn/CTU-Agent",
    },
  ];

  const projectsGrid = document.getElementById("projects-grid");
  const paginationContainer = document.getElementById("pagination-container");
  const scrollContainer = document.getElementById("scroll-container");
  let currentPage = 1;
  let projectsPerPage = 3;
  let totalPages = Math.ceil(projectsData.length / projectsPerPage);

  function isMobileOrTablet() {
    return window.innerWidth < 1024;
  }

  function createProjectCard(project, index) {
    const tagsHtml = project.tags
      .map(
        (tag) => `
        <span class="px-2 py-1 text-xs font-manrope bg-brand-brown/10 text-brand-brown border border-brand-brown/20 whitespace-nowrap">${tag}</span>
      `,
      )
      .join("");

    const liveBtn = project.liveLink
      ? `
          <a
            href="${project.liveLink}"
            target="_blank"
            rel="noopener noreferrer"
            class="w-10 h-10 bg-brand-yellow flex items-center justify-center border border-brand-brown hover:bg-brand-yellow-light transition-colors duration-200"
          >
            <i class="bi bi-arrow-up-right text-brand-black text-lg"></i>
          </a>
        `
      : "";

    const githubBtn = project.githubLink
      ? `
          <a
            href="${project.githubLink}"
            target="_blank"
            rel="noopener noreferrer"
            class="w-10 h-10 bg-brand-white flex items-center justify-center border border-brand-brown hover:bg-gray-100 transition-colors duration-200"
          >
            <i class="bi bi-github text-brand-black text-lg"></i>
          </a>
        `
      : "";

    const overlayButtons =
      liveBtn || githubBtn
        ? `
          <div class="absolute inset-0 bg-brand-brown/0 group-hover:bg-brand-brown/10 transition-colors duration-300 flex items-center justify-center">
            <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-3">
              ${liveBtn}
              ${githubBtn}
            </div>
          </div>
        `
        : "";

    const descriptionHtml = project.description
      ? `<p class="font-manrope text-gray-600 mt-2 leading-relaxed text-sm md:text-base">${project.description}</p>`
      : "";

    const delayClass = isMobileOrTablet()
      ? ""
      : `fade-up transition-all duration-700 delay-[${(index % 3) * 100}ms]`;

    return `
    <div class="group ${delayClass} ${isMobileOrTablet() ? "flex-shrink-0 w-[80vw] max-w-[300px]" : ""}">
      <div class="relative mb-6">
        <div class="absolute top-3 left-3 w-full h-full border-2 border-brand-yellow bg-brand-yellow opacity-20 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
        <div class="relative w-full aspect-video overflow-hidden border-2 border-brand-brown bg-brand-brown/5">
          <img
            src="${project.image}"
            alt="${project.alt}"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          ${overlayButtons}
        </div>
      </div>
      <div>
        <div class="flex items-center gap-3 mb-2">
          <div class="h-1 w-4 bg-brand-yellow rounded"></div>
          <span class="font-manrope text-xs text-gray-500 uppercase tracking-wider">${project.category}</span>
        </div>
        <h3 class="font-lexend text-xl md:text-2xl font-bold text-brand-black group-hover:text-brand-brown transition-colors duration-200">
          ${project.title}
        </h3>
        ${descriptionHtml}
        <div class="flex flex-wrap gap-2 mt-4">${tagsHtml}</div>
      </div>
    </div>
  `;
  }

  function renderMobileScroll() {
    projectsGrid.className =
      "flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide";
    projectsGrid.innerHTML = projectsData
      .map((project, idx) => createProjectCard(project, idx))
      .join("");

    // Hide pagination
    paginationContainer.classList.add("hidden");
  }

  function renderDesktopPagination() {
    projectsGrid.className =
      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10";
    projectsPerPage = 3;
    totalPages = Math.ceil(projectsData.length / projectsPerPage);
    showPage(currentPage);

    // Show pagination
    paginationContainer.classList.remove("hidden");
  }

  function createPaginationDots() {
    const paginationDots = document.getElementById("pagination-dots");
    paginationDots.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
      const dot = document.createElement("button");
      dot.className = `pagination-dot w-3 h-3 rounded-full transition-all duration-300 ${i === currentPage ? "bg-brand-brown" : "bg-brand-brown/30 hover:bg-brand-brown/50"}`;
      dot.setAttribute("data-page", i);
      dot.addEventListener("click", () => showPage(i));
      paginationDots.appendChild(dot);
    }
  }

  function showPage(pageNumber) {
    currentPage = pageNumber;
    const startIndex = (pageNumber - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    const pageProjects = projectsData.slice(startIndex, endIndex);

    projectsGrid.innerHTML = pageProjects
      .map((project, idx) => createProjectCard(project, idx))
      .join("");

    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    if (prevBtn) prevBtn.disabled = currentPage === 1;
    if (nextBtn) nextBtn.disabled = currentPage === totalPages;

    updatePaginationDots();
  }

  function updatePaginationDots() {
    const dots = document.querySelectorAll("#pagination-dots .pagination-dot");
    dots.forEach((dot) => {
      const dotPage = parseInt(dot.getAttribute("data-page"));
      if (dotPage === currentPage) {
        dot.classList.add("bg-brand-brown");
        dot.classList.remove("bg-brand-brown/30", "hover:bg-brand-brown/50");
      } else {
        dot.classList.remove("bg-brand-brown");
        dot.classList.add("bg-brand-brown/30", "hover:bg-brand-brown/50");
      }
    });
  }

  function handleResize() {
    if (isMobileOrTablet()) {
      renderMobileScroll();
    } else {
      renderDesktopPagination();
    }
  }

  // Event Listeners
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentPage > 1) {
        showPage(currentPage - 1);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (currentPage < totalPages) {
        showPage(currentPage + 1);
      }
    });
  }

  window.addEventListener("resize", handleResize);

  // Initial render
  if (isMobileOrTablet()) {
    renderMobileScroll();
  } else {
    renderDesktopPagination();
    createPaginationDots();
  }
})();
