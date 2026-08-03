(function () {
  const projectsData = [
    {
      image: "./assets/projects/admin-wisata.png",
      alt: "Admin Wisata",
      category: "Cross-Platform",
      title: "Admin Wisata",
      description: "A platform for online ticketing local tour destination.",
      tags: ["Laravel", "MySQL", "Flutter"],
      liveLink: "https://adminwisata.com",
      githubLink: "",
    },
    {
      image: "./assets/projects/mustika-traso.png",
      alt: "Mustika Traso",
      category: "Full Stack",
      title: "Mustika Traso",
      description:
        "A modern landing page & CMS for a precast concrete company.",
      tags: ["Next.js", "Supabase", "Tailwind", "SEO"],
      liveLink: "https://mustikatraso.com",
      githubLink: "",
    },
    {
      image: "./assets/projects/porlu-coffee.png",
      alt: "PorluCoffee",
      category: "Frontend",
      title: "PorluCoffee",
      description: "A modern landing page website for a coffee brand.",
      tags: ["Next.js", "Tailwind", "SEO"],
      liveLink: "https://porlucoffee.com",
      githubLink: "",
    },
    {
      image: "./assets/projects/pos.png",
      alt: "FalaahPOS",
      category: "Full Stack",
      title: "FalaahPOS",
      description: "POS system and back office management for business needs.",
      tags: ["React.js", "Express.js", "MySQL"],
      liveLink: "",
      githubLink: "",
    },
    // {
    //   image: "./assets/projects/inklusi-kerja.png",
    //   alt: "InklusiKerja",
    //   category: "Full Stack",
    //   title: "InklusiKerja",
    //   description:
    //     "A job platform connecting inclusive employers with diverse talent",
    //   tags: ["React.js", "Express.js", "MongoDB"],
    //   liveLink: "https://disabilitas-web.vercel.app/profile",
    //   githubLink: "",
    // },
    // {
    //   image: "./assets/projects/falaah-ds.png",
    //   alt: "Falaah Digital Solutions",
    //   category: "Frontend",
    //   title: "Falaah Digital Solutions",
    //   description:
    //     "Company profile website for a digital solutions agency with clean design.",
    //   tags: ["Next.js", "SEO", "Tailwind"],
    //   liveLink: "https://f-ds.vercel.app",
    //   githubLink: "",
    // },
    // {
    //   image: "./assets/projects/portfolio.png",
    //   alt: "Personal Portfolio",
    //   category: "Frontend",
    //   title: "Personal Portfolio",
    //   description: "A portfolio website showcasing my projects and skills in software engineering.",
    //   tags: ["JavaScript", "Tailwind"],
    //   liveLink: "https://fatirayp.vercel.app",
    //   githubLink: "",
    // },
    // {
    //   image: "./assets/projects/wfm.png",
    //   alt: "WFM Bot",
    //   category: "Automation",
    //   title: "WFM Bot",
    //   description:
    //     "Telegram bot for automating incident tickets distribution & workforce management.",
    //   tags: ["Node.js", "Telegram API", "Web Scraping"],
    //   liveLink: "",
    //   githubLink: "https://github.com/fatiryasn/WFM-Bot",
    // },
    // {
    //   image: "./assets/projects/ctu.png",
    //   alt: "CTU Agent",
    //   category: "Automation",
    //   title: "CTU Agent",
    //   description:
    //     "Desktop application for automating hundreds incident tickets creation everyday.",
    //   tags: ["Node.js", "Electron", "Web Scraping"],
    //   liveLink: "",
    //   githubLink: "https://github.com/fatiryasn/CTU-Agent",
    // },
  ];

  const techLogos = {
    JavaScript: "https://devicons.io/devicons/icons/javascript.svg",
    TypeScript: "https://devicons.io/devicons/icons/typescript-icon.svg",
    "C#": "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
    "C++":
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
    PHP: "https://devicons.io/devicons/icons/php.svg",
    Kotlin: "https://devicons.io/devicons/icons/kotlin-icon.svg",
    Python: "https://devicons.io/devicons/icons/python.svg",
    HTML5:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    CSS3: "https://devicons.io/devicons/icons/css.svg",
    Tailwind: "https://devicons.io/devicons/icons/tailwind-icon.svg",
    Bootstrap: "https://devicons.io/devicons/icons/bootstrap.svg",
    React: "https://devicons.io/devicons/icons/react.svg",
    "React.js": "https://devicons.io/devicons/icons/react.svg", // alias
    "Next.js": "https://devicons.io/devicons/icons/nextjs-icon.svg",
    "Vue.js": "https://devicons.io/devicons/icons/vue.svg",
    "Node.js": "https://devicons.io/devicons/icons/nodejs-icon.svg",
    Express:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
    "Express.js":
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg", // alias
    NestJS: "https://devicons.io/devicons/icons/nestjs.svg",
    Laravel: "https://devicons.io/devicons/icons/laravel.svg",
    "ASP.NET Core":
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg",
    Flutter: "https://devicons.io/devicons/icons/flutter.svg",
    Android: "https://devicons.io/devicons/icons/android.svg",
    MySQL: "https://devicons.io/devicons/icons/mysql.svg",
    PostgreSQL: "https://devicons.io/devicons/icons/postgresql.svg",
    MongoDB: "https://devicons.io/devicons/icons/mongodb-icon.svg",
    "SQL Server":
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg",
    Redis:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg",
    Supabase: "https://devicons.io/devicons/icons/supabase-icon.svg", // if available; fallback to text if not
    SEO: null, // no standard logo, will show text
  };

  const projectsGrid = document.getElementById("projects-grid");
  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");

  //is desktop
  function isDesktop() {
    return window.innerWidth >= 1024;
  }

  //create project card
  function createProjectCard(project, index) {
    const tagsHtml = project.tags
      .map((tag) => {
        const logoUrl = techLogos[tag];
        if (logoUrl) {
          return `
              <img src="${logoUrl}" alt="${tag}" class="object-contain w-6 h-6" />
            `;
        } else {
          return `<span class="text-sm font-semibold font-grotesk text-brand-yellow whitespace-nowrap">${tag}</span>`;
        }
      })
      .join("");

    const liveBtn = project.liveLink
      ? `<a href="${project.liveLink}" target="_blank" rel="noopener noreferrer"
            class="w-10 h-10 bg-brand-yellow flex items-center justify-center border border-brand-brown hover:bg-brand-yellow-light transition-colors duration-200 cursor-pointer">
            <i class="bi bi-arrow-up-right text-brand-black text-lg"></i>
          </a>`
      : "";

    const githubBtn = project.githubLink
      ? `<a href="${project.githubLink}" target="_blank" rel="noopener noreferrer"
            class="w-10 h-10 bg-brand-white flex items-center justify-center border border-brand-brown hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
            <i class="bi bi-github text-brand-black text-lg"></i>
          </a>`
      : "";

    const overlayButtons =
      liveBtn || githubBtn
        ? `<div class="absolute inset-0 bg-brand-brown/0 group-hover:bg-brand-brown/10 transition-colors duration-300 flex items-center justify-center">
            <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-3">
              ${liveBtn}
              ${githubBtn}
            </div>
          </div>`
        : "";

    const descriptionHtml = project.description
      ? `<p class="font-manrope text-gray-600 mt-2 leading-relaxed text-xs sm:text-sm md:text-base">${project.description}</p>`
      : "";

    const desktopClasses = isDesktop()
      ? "flex-shrink-0 w-[320px] md:w-[320px] snap-start"
      : "snap-start w-full";

    return `
    <div class="group ${desktopClasses} transition-all duration-700">
      <div class="relative mb-6">
        <div class="absolute top-3 left-3 w-full h-full border-2 border-brand-yellow bg-brand-yellow opacity-20 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
        <div class="relative sm:w-full aspect-video overflow-hidden border-2 border-brand-brown bg-brand-brown/5">
          <img
            src="${project.image}"
            alt="${project.alt}"
            draggable="false"
            class="w-full h-full object-cover group-hover:scale-95 transition-transform duration-500"
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
        <div class="flex flex-wrap items-center gap-3 mt-4">${tagsHtml}</div>
      </div>
    </div>
  `;
  }

  //drag to scroll
  function enableDragScroll(container) {
    let isDown = false;
    let startX;
    let scrollLeft;

    container.style.cursor = "grab";

    container.addEventListener("mousedown", (e) => {
      isDown = true;
      container.style.cursor = "grabbing";

      container.style.scrollSnapType = "none";
      container.style.scrollBehavior = "auto";

      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });

    container.addEventListener("mouseleave", () => {
      if (!isDown) return;
      isDown = false;
      container.style.cursor = "grab";
      container.style.scrollSnapType = "";
      container.style.scrollBehavior = "smooth";
    });

    container.addEventListener("mouseup", () => {
      if (!isDown) return;
      isDown = false;
      container.style.cursor = "grab";
      container.style.scrollSnapType = "";
      container.style.scrollBehavior = "smooth";
    });

    container.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();

      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 0.95;
      container.scrollLeft = scrollLeft - walk;
    });
  }

  //render for desktop
  function renderDesktop() {
    projectsGrid.className =
      "flex gap-8 overflow-x-auto overflow-y-hidden pb-6 snap-x snap-mandatory scroll-pl-12 scrollbar-hide px-1 fade-up delay-[200ms]";
    projectsGrid.style.gridAutoColumns = "";
    projectsGrid.style.gridTemplateRows = "";
    projectsGrid.style.gridAutoFlow = "";
    projectsGrid.innerHTML = projectsData
      .map((project, idx) => createProjectCard(project, idx))
      .join("");
    enableDragScroll(projectsGrid);

    updateFadeIndicators(projectsGrid);
  }

  //render for mobile / tablet
  function renderMobileOrTablet() {
    projectsGrid.className =
      "grid gap-3 overflow-x-auto overflow-y-hidden pb-6 snap-x snap-mandatory scroll-pl-7 sm:scroll-pl-12 scrollbar-hide px-1 fade-up delay-[200ms]";
    projectsGrid.style.gridTemplateRows = "auto auto";
    projectsGrid.style.gridAutoFlow = "column";
    projectsGrid.style.gridAutoColumns = "280px";
    projectsGrid.innerHTML = projectsData
      .map((project, idx) => createProjectCard(project, idx))
      .join("");
    enableDragScroll(projectsGrid);

    updateFadeIndicators(projectsGrid);
  }

  //fade indicators
  function updateFadeIndicators(container) {
    const fadeLeft = document.getElementById("fade-left");
    const fadeRight = document.getElementById("fade-right");

    if (!fadeLeft || !fadeRight) return;

    const maxScroll = container.scrollWidth - container.clientWidth;

    const current = container.scrollLeft;

    fadeLeft.style.opacity = current > 20 ? "1" : "0";

    fadeRight.style.opacity = current < maxScroll - 20 ? "1" : "0";
  }

  //layout handler
  function handleLayout() {
    if (isDesktop()) {
      renderDesktop();
    } else {
      renderMobileOrTablet();
    }
  }

  //initial render
  handleLayout();

  //event listeners
  projectsGrid.addEventListener("scroll", () => {
    updateFadeIndicators(projectsGrid);
  });
  btnPrev?.addEventListener("click", () => {
    const cardWidth = projectsGrid.firstElementChild
      ? projectsGrid.firstElementChild.offsetWidth
      : 360;

    const gap = isDesktop() ? 32 : 12;

    projectsGrid.scrollBy({
      left: -(cardWidth + gap),
      behavior: "smooth",
    });
  });
  btnNext?.addEventListener("click", () => {
    const cardWidth = projectsGrid.firstElementChild
      ? projectsGrid.firstElementChild.offsetWidth
      : 360;

    const gap = isDesktop() ? 32 : 12;

    projectsGrid.scrollBy({
      left: cardWidth + gap,
      behavior: "smooth",
    });
  });

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(handleLayout, 150);
  });
})();
