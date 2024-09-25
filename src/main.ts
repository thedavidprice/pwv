import {
  renderRollingFundPortfolio,
  renderAngelPortfolio,
} from "./portfolio/renderPortfolio";
import { renderTestimonials } from "./testimonials/renderTestimonials";

// Render the list when the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(
    "#portfolio-rolling-fund-list-container"
  );
  if (container) {
    container.appendChild(renderRollingFundPortfolio());
  }
  const angelContainer = document.querySelector(
    "#portfolio-angel-list-container"
  );
  if (angelContainer) {
    angelContainer.appendChild(renderAngelPortfolio());
  }

  // Add testimonials
  const testimonialContainer = document.querySelector(
    "#testimonial-list-container"
  );

  if (testimonialContainer) {
    testimonialContainer.appendChild(renderTestimonials());
  } else {
    console.error("Testimonial container not found");
  }
});
