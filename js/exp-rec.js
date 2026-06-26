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
      role: "Network Operations (Intern)",
      period: "Jul 2025 — Nov 2025",
      description:
        "Conducted system assessments and validation processes while developing automation tools to improve operational efficiency, accuracy, and scalable business solutions.",
      tags: ["Node.js", "FO Networks", "Operations"],
      markerColor: "bg-brand-brown",
      shadowColor: "border-brand-brown bg-brand-brown",
    },
  ];

  //cert data
  const certificationsData = [
    {
      image: "./assets/certifications/1st.png",
      title: "IT Software Solutions for Business",
      date: "May 2025",
      description:
        "1st Place in 2025 Student Competency Competition (LKS) in IT Software Solutions for Business category.",
      issuer: "North Sumatera Department of Education",
    },
    {
      image: "./assets/certifications/participant.png",
      title: "IT Software Solutions for Business",
      date: "Oct 2024",
      description:
        "Participant in Indonesia National Selection for 2025 ASEAN WorldSkills in IT Software Solutions for Business category",
      issuer: "Republic of Indonesia Ministry of Manpower ",
    },
    {
      image: "./assets/certifications/react.png",
      title: "React Developer Certification",
      date: "Apr 2025",
      description:
        "React, component architecture, state management, and responsive UI.",
      issuer: "HackerRank",
    },
    {
      image: "./assets/certifications/mobile.png",
      title: "Mobile Developer Certification",
      date: "Feb 2025",
      description:
        "Kotlin programming and Android Studio for mobile development.",
      issuer: "PT. Potensi Karya Mandiri",
    },
    {
      image: "./assets/certifications/vibecode.png",
      title: "Vibecoding with Antigravity",
      date: "Mar 2026",
      description:
        "Rapid prototyping and creative website building using Google Antigravity.",
      issuer: "Dream Digital Indonesia",
    },
    {
      image: "./assets/certifications/jvc.jpg",
      title: "#JuaraVibeCoding",
      date: "Jun 2026",
      description:
        "Building project with Google AI Studio and deploy in Cloud Run.",
      issuer: "GDG Indonesia",
    },
  ];

  //EXPERIENCES
  const experienceList = document.getElementById("experience-list");
  function createExperienceCard(exp) {
    const tagsHtml = exp.tags
      .map(
        (tag) =>
          `<span class="px-2 py-1 text-xs font-manrope bg-brand-brown/10 text-brand-brown border border-brand-brown/20">${tag}</span>`,
      )
      .join("");

    return `
        <div class="group relative fade-up delay-[100ms]">
          <div class="hidden md:flex absolute left-[10px] top-10 w-4 h-4 ${exp.markerColor} rotate-45 border-2 border-brand-brown z-10 group-hover:scale-125 transition-transform duration-300"></div>

          <div class="ml-0 md:ml-24 lg:ml-32 relative">
            <div class="absolute top-3 left-[10px] w-full h-full border-2 ${exp.shadowColor} opacity-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>

            <div class="relative bg-brand-white border-2 border-brand-brown p-8 sm:p-10 flex flex-col sm:flex-row gap-6 sm:gap-10">
              <div class="flex-shrink-0">
                <div class="w-20 h-20 bg-brand-white flex items-center justify-center border-2 border-brand-yellow overflow-hidden">
                  <img
                    src="${exp.logo}"
                    alt="${exp.company} logo"
                    class="w-full h-full object-contain p-2"
                  />
                </div>
              </div>
              <div class="flex-1">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                  <div>
                    <h3 class="font-lexend text-xl sm:text-2xl font-bold text-brand-black">${exp.company}</h3>
                    <p class="font-manrope text-base sm:text-lg text-brand-brown font-medium mt-1">${exp.role}</p>
                  </div>
                  <span class="font-manrope text-xs sm:text-sm text-gray-500 bg-brand-brown/5 px-3 py-1 border border-brand-brown/10 inline-block w-fit">${exp.period}</span>
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

  //CERTIFICATES
  const certGrid = document.getElementById("cert-grid");
  const MOBILE_VISIBLE_COUNT = 3;
  let certExpanded = false;
  function createCertCard(cert, index) {
    const delayMs = index * 75;

    return `
    <div class="group relative fade-up delay-[${delayMs}ms]">
      <div class="absolute top-3 sm:top-4 left-3 sm:left-4 w-full h-full border-2 border-brand-yellow bg-brand-yellow opacity-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
      <div class="relative bg-brand-white border-2 border-brand-brown overflow-hidden aspect-[1.414] w-full flex flex-col">
        <div class="relative flex-1 overflow-hidden">
          <img
            src="${cert.image}"
            alt="${cert.title}"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 bg-brand-brown/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-4 sm:p-6 md:p-8">
            <p class="font-manrope text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed">${cert.description}</p>
            <div class="mt-4 sm:mt-6 flex items-center gap-2">
              <i class="bi bi-people text-brand-yellow text-base sm:text-lg"></i>
              <span class="font-manrope text-brand-yellow text-sm sm:text-base font-medium">${cert.issuer}</span>
            </div>
            <div class="mt-2 flex items-center gap-2">
              <i class="bi bi-calendar-check text-brand-yellow text-base sm:text-lg"></i>
              <span class="font-manrope text-brand-yellow text-sm sm:text-base font-medium">${cert.date}</span>
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

  //render initial certs
  function renderInitialCertificates() {
    const isMobile = window.innerWidth < 640;

    const initialData = isMobile
      ? certificationsData.slice(0, MOBILE_VISIBLE_COUNT)
      : certificationsData;

    certGrid.innerHTML = initialData
      .map((cert, i) => createCertCard(cert, i))
      .join("");

    updateToggleButton();
  }

  //append certs
  function appendRemainingCertificates() {
    const remaining = certificationsData.slice(MOBILE_VISIBLE_COUNT);

    remaining.forEach((cert, index) => {
      certGrid.insertAdjacentHTML(
        "beforeend",
        createCertCard(cert, index + MOBILE_VISIBLE_COUNT),
      );
    });
  }

  //remove certs
  function removeExtraCertificates() {
    const cards = certGrid.children;

    while (cards.length > MOBILE_VISIBLE_COUNT) {
      cards[cards.length - 1].remove();
    }
  }

  //update toggle button
  function updateToggleButton() {
    const toggleBtn = document.getElementById("cert-toggle-btn");

    if (!toggleBtn) return;

    const isMobile = window.innerWidth < 640;

    if (!isMobile || certificationsData.length <= MOBILE_VISIBLE_COUNT) {
      toggleBtn.parentElement.classList.add("hidden");
      return;
    }

    toggleBtn.parentElement.classList.remove("hidden");

    const label = toggleBtn.querySelector("span");
    const icon = toggleBtn.querySelector("i");

    label.textContent = certExpanded ? "Show Less" : "Show More";
    icon.classList.toggle("rotate-180", certExpanded);
  }

  //cert toggle button
  const certToggleBtn = document.getElementById("cert-toggle-btn");
  certToggleBtn?.addEventListener("click", () => {
    certExpanded = !certExpanded;

    if (certExpanded) {
      appendRemainingCertificates();
    } else {
      removeExtraCertificates();

      certGrid.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    updateToggleButton();
  });

  renderInitialCertificates();

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {
      certExpanded = false;
      renderInitialCertificates();
    }, 150);
  });
})();
