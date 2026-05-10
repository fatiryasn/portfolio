(function () {
  //exp data
  const experienceData = [
    {
      logo: "./assets/company-logos/falaah-digital-solutions.png",

      company: "Falaah Digital Solutions",
      role: "Full Stack Developer",
      period: "Feb 2025 — Present",
      description:
        "Delivered end-to-end full-stack projects using the MERN stack, integrating scalable architectures, optimized databases, and secure payment systems to ensure reliable performance and seamless user experiences.",
      tags: ["MERN Stack", "Next.js", "Git", "SEO", "Tailwind CSS"],
      markerColor: "bg-brand-yellow",
      shadowColor: "border-brand-yellow bg-brand-yellow",
    },
    {
      logo: "./assets/company-logos/telkom-akses.jpg",
      company: "Telkom Akses",
      role: "IT Intern",
      period: "Jul 2025 — Nov 2025",
      description:
        "Conducted system assessments and validation processes while developing automation tools to improve operational efficiency, accuracy, and scalable business solutions.",
      tags: ["Node.js", "Electron", "API Integration"],
      markerColor: "bg-brand-brown",
      shadowColor: "border-brand-brown bg-brand-brown",
    },
  ];

  //cert data
  const certificationsData = [
    {
      image: "./assets/certifications/1st.png",
      title: "1st place, IT Software Solutions for Business",
      date: "May 2025",
      description:
        "Medan City Student Competency Competition (LKS) in IT Software Solutions for Business by North Sumatera Department of Education",
    },
    {
      image: "./assets/certifications/finalist.png",
      title: "Finalist IT Software Solutions for Business",
      date: "Oct 2024",
      description:
        "National WorldSkills Selection in IT Software Solutions for Business by Republic Indonesia Ministry of Manpower",
    },
    {
      image: "./assets/certifications/react.png",
      title: "React Developer Certification",
      date: "Apr 2025",
      description:
        "HackerRank — React, component architecture, state management, and responsive UI.",
    },
    {
      image: "./assets/certifications/mobile.png",
      title: "Mobile Developer Certification",
      date: "Feb 2025",
      description:
        "PT. Potensi Karya Mandiri — Cross-platform mobile development, performance, and modern workflows.",
    },
    {
      image: "./assets/certifications/vibecode.png",
      title: "Vibecoding with Antigravity",
      date: "Mar 2026",
      description:
        "Dream Digital Indonesia — Rapid prototyping and creative product building.",
    },
  ];

  //render
  const experienceList = document.getElementById("experience-list");
  function createExperienceCard(exp) {
    const tagsHtml = exp.tags
      .map(
        (tag) =>
          `<span class="px-2 py-1 text-xs font-manrope bg-brand-brown/10 text-brand-brown border border-brand-brown/20">${tag}</span>`,
      )
      .join("");

    return `
        <div class="group relative fade-up delay-[0.3s]">
          <div class="hidden md:flex absolute left-[10px] top-10 w-4 h-4 ${exp.markerColor} rotate-45 border-2 border-brand-brown z-10 group-hover:scale-125 transition-transform duration-300"></div>

          <div class="ml-0 md:ml-24 lg:ml-32 relative">
            <div class="absolute top-3 left-[10px] w-full h-full border-2 ${exp.shadowColor} opacity-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>

            <div class="relative bg-brand-white border-2 border-brand-brown p-8 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 md:w-20 md:h-20 bg-brand-white flex items-center justify-center border-2 border-brand-yellow overflow-hidden">
                  <img
                    src="${exp.logo}"
                    alt="${exp.company} logo"
                    class="w-full h-full object-contain p-2"
                  />
                </div>
              </div>
              <div class="flex-1">
                <div class="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                  <div>
                    <h3 class="font-lexend text-xl md:text-2xl font-bold text-brand-black">${exp.company}</h3>
                    <p class="font-manrope text-base md:text-lg text-brand-brown font-medium mt-1">${exp.role}</p>
                  </div>
                  <span class="font-manrope text-xs md:text-sm text-gray-500 bg-brand-brown/5 px-3 py-1 border border-brand-brown/10 inline-block w-fit">${exp.period}</span>
                </div>
                <p class="font-manrope text-sm lg:text-base text-gray-600 leading-relaxed mt-3">${exp.description}</p>
                <div class="flex flex-wrap gap-2 mt-4">${tagsHtml}</div>
              </div>
            </div>
          </div>
        </div>
      `;
  }

  experienceList.innerHTML = experienceData
    .map((exp) => createExperienceCard(exp))
    .join("");

  const marquee = document.getElementById("cert-marquee");
  function createCertCard(cert) {
    return `
        <div class="group relative flex-shrink-0 w-[16rem] sm:w-[20rem] md:w-[24rem] lg:w-[30rem]">
          <div class="absolute top-3 sm:top-4 left-3 sm:left-4 w-full h-full border-2 border-brand-yellow bg-brand-yellow opacity-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
          <div class="relative bg-brand-white border-2 border-brand-brown overflow-hidden h-48 sm:h-60 md:h-72 lg:h-80 flex flex-col">
            <div class="relative flex-1 overflow-hidden">
              <img
                src="${cert.image}"
                alt="${cert.title}"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-brand-brown/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-4 sm:p-6 md:p-8">
                <p class="font-manrope text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed">${cert.description}</p>
                <div class="mt-4 sm:mt-6 flex items-center gap-2">
                  <i class="bi bi-calendar-check text-brand-yellow text-base sm:text-lg"></i>
                  <span class="font-manrope text-brand-yellow text-sm sm:text-base font-medium">Issued ${cert.date}</span>
                </div>
              </div>
            </div>
            <div class="absolute bottom-0 right-0 bg-brand-white border-t-2 rounded-tl-lg border-l-2 border-brand-brown px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3">
              <h4 class="font-grotesk text-xs sm:text-sm font-bold text-brand-black text-right line-clamp-1 max-w-[180px] sm:max-w-[220px] md:max-w-none">${cert.title}</h4>
            </div>
          </div>
        </div>
      `;
  }

  const cardsHtml = certificationsData
    .map((cert) => createCertCard(cert))
    .join("");
  marquee.innerHTML = cardsHtml + cardsHtml;

  // Pause on hover
  marquee.addEventListener("mouseenter", () => {
    marquee.style.animationPlayState = "paused";
  });
  marquee.addEventListener("mouseleave", () => {
    marquee.style.animationPlayState = "running";
  });

  // Inject keyframes
  const style = document.createElement("style");
  const cardWidth = 448 + 24; // w-[28rem] + gap-6
  const totalWidth = cardWidth * certificationsData.length;
  style.textContent = `
      @keyframes marqueeScroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-${totalWidth}px); }
      }
      #cert-marquee:hover {
        animation-play-state: paused;
      }
    `;
  document.head.appendChild(style);
  marquee.style.animation = `marqueeScroll ${certificationsData.length * 8}s linear infinite`;
})();
