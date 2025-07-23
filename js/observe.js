document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(
    ".ali, .tyson, .foreman, .haft, .einleitung, #tabelle, #formular"
  );

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    revealElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - revealPoint) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});