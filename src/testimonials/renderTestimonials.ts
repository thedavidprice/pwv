import { testimonials } from "./testimonialData";

export function renderTestimonials(): HTMLDivElement {
  const container = document.createElement("div");
  container.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";

  testimonials.testimonials.forEach((item) => {
    const card = document.createElement("div");
    card.className = "bg-white shadow-lg rounded-lg p-6 flex flex-col";

    const quote = document.createElement("p");
    quote.className = "text-gray-600 italic mb-4 flex-grow";
    quote.textContent = `"${item.quote}"`;

    const nameTitle = document.createElement("p");
    nameTitle.className = "font-semibold text-lg";
    nameTitle.textContent = item.name;

    const companyLink = document.createElement("a");
    companyLink.href = item.url;
    companyLink.target = "_blank";
    companyLink.className = "text-blue-600 hover:underline";
    companyLink.textContent = `${item.title} at ${item.company}`;

    const tagsContainer = document.createElement("div");
    tagsContainer.className = "mt-2 flex flex-wrap gap-2";
    item.tags.forEach((tag) => {
      tagsContainer.appendChild(renderBadge(tag));
    });

    card.appendChild(quote);
    card.appendChild(nameTitle);
    card.appendChild(companyLink);
    card.appendChild(tagsContainer);

    container.appendChild(card);
  });

  return container;
}

function renderBadge(tag: string): HTMLSpanElement {
  const badge = document.createElement("span");
  badge.className = "px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs";
  badge.textContent = tag;
  return badge;
}
