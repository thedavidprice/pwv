import { testimonials } from "./testimonialData";

export function renderTestimonials(): HTMLDivElement {
  const container = document.createElement("div");
  container.className = "flex flex-col gap-6";

  testimonials.testimonials.forEach((item) => {
    const card = document.createElement("div");
    card.className =
      "bg-neutral-100 shadow-lg rounded-lg p-6 border border-neutral-200";

    const quote = document.createElement("p");
    quote.className = "text-gray-800 mb-4";
    quote.textContent = `"${item.quote}"`;

    const authorInfo = document.createElement("div");
    authorInfo.className = "flex items-center";

    const avatar = document.createElement("img");
    avatar.src = "https://via.placeholder.com/40"; // Add placeholder image
    avatar.alt = `${item.name} avatar`;
    avatar.className = "w-10 h-10 rounded-full mr-4";

    const nameAndTitle = document.createElement("div");

    const name = document.createElement("p");
    name.className = "font-semibold text-sm";
    name.textContent = item.name;

    const title = document.createElement("p");
    title.className = "text-gray-600 text-sm";
    title.innerHTML = `${item.title} – <a href="${item.url}" target="_blank" class="text-neutral-600 underline hover:underline">${item.company}</a>`;

    nameAndTitle.appendChild(name);
    nameAndTitle.appendChild(title);

    authorInfo.appendChild(avatar);
    authorInfo.appendChild(nameAndTitle);

    card.appendChild(quote);
    card.appendChild(authorInfo);

    container.appendChild(card);
  });

  return container;
}

// Remove the renderBadge function as it's no longer needed
