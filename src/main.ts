import {
  renderRollingFundPortfolio,
  renderAngelPortfolio,
} from "./portfolio/renderPortfolio";

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
});
