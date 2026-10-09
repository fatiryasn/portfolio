(function () {
  const techGroups = [
    {
      title: "Programming",
      items: [
        {
          logo: "https://devicons.io/devicons/icons/javascript.svg",
          alt: "JavaScript",
          label: "JavaScript",
        },
        {
          logo: "https://devicons.io/devicons/icons/typescript-icon.svg",
          alt: "TypeScript",
          label: "TypeScript",
        },
        {
          logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
          alt: "C++",
          label: "C++",
        },
        {
          logo: "https://devicons.io/devicons/icons/php.svg",
          alt: "PHP",
          label: "PHP",
        },
        {
          logo: "https://devicons.io/devicons/icons/python.svg",
          alt: "Python",
          label: "Python",
        },
      ],
    },
    {
      title: "Frontend Web",
      items: [
        {
          logo: "https://devicons.io/devicons/icons/tailwind-icon.svg",
          alt: "Tailwind CSS",
          label: "Tailwind",
        },
        {
          logo: "https://devicons.io/devicons/icons/bootstrap.svg",
          alt: "Bootstrap",
          label: "Bootstrap",
        },
        {
          logo: "https://devicons.io/devicons/icons/react.svg",
          alt: "React",
          label: "React",
        },
        {
          logo: "https://devicons.io/devicons/icons/nextjs-icon.svg",
          alt: "Next.js",
          label: "Next.js",
        },
      ],
    },
    {
      title: "Backend Web",
      items: [
        {
          logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
          alt: "Express",
          label: "Express",
          invert: true,
        },
        {
          logo: "https://devicons.io/devicons/icons/laravel.svg",
          alt: "Laravel",
          label: "Laravel",
        },
        {
          logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg",
          alt: "ASP.NET Web API",
          label: "ASP.NET Web API",
        },
      ],
    },
    {
      title: "Mobile",
      items: [
        {
          logo: "https://devicons.io/devicons/icons/flutter.svg",
          alt: "Flutter",
          label: "Flutter",
        },
      ],
    },
    {
      title: "Database & Tools",
      items: [
        {
          logo: "https://devicons.io/devicons/icons/mysql.svg",
          alt: "MySQL",
          label: "MySQL",
        },
        {
          logo: "https://devicons.io/devicons/icons/postgresql.svg",
          alt: "PostgreSQL",
          label: "PostgreSQL",
        },
        {
          logo: "https://devicons.io/devicons/icons/mongodb-icon.svg",
          alt: "MongoDB",
          label: "MongoDB",
        },
        {
          logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg",
          alt: "Redis",
          label: "Redis",
        },
      ],
    },
  ];

  const grid = document.getElementById("tech-stack-grid");
  if (!grid) return;

  grid.innerHTML = techGroups
    .map((group, idx) => {
      const isLast = idx === techGroups.length - 1;
      const itemsHtml = group.items
        .map((item) => {
          const invertClass = item.invert ? " filter invert" : "";
          const invertStyle = item.invert ? 'style="filter: invert(1)"' : "";
          return `
          <div class="flex flex-col md:items-center gap-3">
            <img src="${item.logo}" alt="${item.alt}" class="hover:scale-110 w-10 h-10 transition-transform${invertClass}"
                 ${invertStyle}>
            <span class="text-xs md:text-sm text-gray-100 font-manrope">${item.label}</span>
          </div>
        `;
        })
        .join("");

      return `
        <div 
          class="flex flex-col md:items-center md:border-r md:border-brand-yellow-light/30 ${isLast ? "last:border-r-0" : ""} lg:px-6 fade-up"
          style="transition-delay: ${(idx + 1) * 100}ms"
        >
          <h4 class="font-lexend text-base font-semibold text-brand-yellow-light tracking-wide mb-2 md:mb-6">${group.title}</h4>
          <div class="w-full h-px bg-brand-yellow-light/30 mb-4 md:hidden"></div>
          <div class="flex flex-row flex-wrap justify-start items-start gap-6 md:gap-4 md:flex-col md:items-center md:gap-5">
            ${itemsHtml}
          </div>
        </div>
      `;
    })
    .join("");
})();
