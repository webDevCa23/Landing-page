document.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, 0); // Ensures the page starts at the top on reload
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const servicesGrid = document.querySelector(".services-grid");
  const totalServices = document.querySelectorAll(".service").length;
  let currentIndex = 0;

  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links a");

  // Toggle menu when hamburger is clicked
  hamburger.addEventListener("click", () => {
    const isExpanded = navLinks.classList.toggle("show");
    hamburger.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", isExpanded);
  });

  // Smooth scroll and close menu on link click
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const targetId = link.getAttribute("href").substring(1);
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });

      navLinks.classList.remove("show");
      hamburger.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });

  // Update the grid to show the current service
  function updateSlider() {
    servicesGrid.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Next button functionality
  nextBtn.addEventListener("click", () => {
    if (currentIndex < totalServices - 1) {
      currentIndex++;
      updateSlider();
    } else {
      currentIndex = 0; // Loop back to the first service
      updateSlider();
    }
  });

  // Previous button functionality
  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    } else {
      currentIndex = totalServices - 1; // Loop back to the last service
      updateSlider();
    }
  });
});
