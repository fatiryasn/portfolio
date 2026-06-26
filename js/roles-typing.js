(function () {
  const roles = ["IT Developer", "SEO Specialist"];
  let index = 0,
    charIndex = 0,
    isDeleting = false;
  const element = document.getElementById("editorial-typing");
  if (!element) return;
  function typeEffect() {
    const currentRole = roles[index];
    if (isDeleting) {
      element.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % roles.length;
        setTimeout(typeEffect, 300);
      } else {
        setTimeout(typeEffect, 50);
      }
    } else {
      element.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1800);
      } else {
        setTimeout(typeEffect, 100);
      }
    }
  }
  typeEffect();
})();