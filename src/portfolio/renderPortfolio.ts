import { type PortfolioItem, portfolioData } from "./portfolioData";

// New function to sort portfolio items by name
function sortPortfolioItems(items: PortfolioItem[]): PortfolioItem[] {
  return [...items].sort((a, b) => a.name.localeCompare(b.name));
}

export function renderRollingFundPortfolio(): HTMLUListElement {
  const rollingFundData = sortPortfolioItems(
    portfolioData.rollingFund.portfolioItems
  );

  return renderPortfolioList(rollingFundData);
}

export function renderAngelPortfolio(): HTMLUListElement {
  const angelData = sortPortfolioItems(portfolioData.angel.portfolioItems);

  return renderPortfolioList(angelData);
}

function renderBadge(tagName: string): HTMLSpanElement {
  const badge = document.createElement("span");
  badge.className =
    "inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset";

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 6 6");
  svg.setAttribute("aria-hidden", "true");
  svg.classList.add("h-1.5", "w-1.5");

  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  circle.setAttribute("r", "3");
  circle.setAttribute("cx", "3");
  circle.setAttribute("cy", "3");

  svg.appendChild(circle);

  const text = document.createTextNode(tagName);

  badge.appendChild(svg);
  badge.appendChild(text);

  // Set colors based on tag name
  const [bgClass, textClass, fillClass] = getColorsForTag(tagName);
  badge.classList.add(bgClass, textClass);
  circle.classList.add(fillClass);

  return badge;
}

function getColorsForTag(tagName: string): [string, string, string] {
  // Define color schemes for different tags using Tailwind CSS classes
  switch (tagName.toLowerCase()) {
    case "ai":
      return ["bg-sky-50", "text-sky-700", "fill-sky-400"]; // Light blue
    case "dev":
      return ["bg-green-50", "text-green-700", "fill-green-400"]; // Light green
    case "board":
      return ["bg-purple-50", "text-purple-700", "fill-purple-400"]; // Light purple
    case "db":
      return ["bg-emerald-50", "text-emerald-700", "fill-emerald-400"]; // Emerald
    case "saas":
      return ["bg-indigo-50", "text-indigo-700", "fill-indigo-400"]; // Indigo
    case "space":
      return ["bg-blue-50", "text-blue-700", "fill-blue-400"]; // Blue
    default:
      return ["bg-gray-100", "text-gray-700", "fill-gray-400"]; // Light gray (default)
  }
}

function renderPortfolioList(data: PortfolioItem[]): HTMLUListElement {
  const ul = document.createElement("ul");
  ul.className =
    "font-mono list-disc list-inside text-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2";

  data.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.url;
    a.target = "_blank";
    a.className = "font-link";
    a.textContent = item.name;
    li.appendChild(a);

    if (item.tags.length > 0) {
      const tagsContainer = document.createElement("span");
      tagsContainer.className = "ml-2 inline-flex gap-1";
      item.tags.forEach((tag) => {
        tagsContainer.appendChild(renderBadge(tag));
      });
      li.appendChild(tagsContainer);
    }

    ul.appendChild(li);
  });

  return ul;
}
