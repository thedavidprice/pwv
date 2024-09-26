export function renderBadge(tagName: string): HTMLSpanElement {
  const badge = document.createElement("span");
  badge.className =
    "inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ring-neutral-300";

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
      return ["bg-neutral-50", "text-neutral-700", "fill-sky-400"];
    case "dev":
      return ["bg-neutral-50", "text-neutral-700", "fill-green-400"];
    case "board":
      return ["bg-neutral-50", "text-neutral-700", "fill-purple-400"];
    case "db":
      return ["bg-neutral-50", "text-neutral-700", "fill-emerald-400"];
    case "saas":
      return ["bg-neutral-50", "text-neutral-700", "fill-indigo-600"];
    case "space":
      return ["bg-neutral-50", "text-neutral-700", "fill-blue-400"];
    case "energy":
      return ["bg-neutral-50", "text-neutral-700", "fill-yellow-400"];
    case "construction":
      return ["bg-neutral-50", "text-neutral-700", "fill-cyan-400"];
    case "auth":
      return ["bg-neutral-50", "text-neutral-700", "fill-teal-400"];
    case "b2b":
      return ["bg-neutral-50", "text-neutral-700", "fill-orange-400"];
    case "defense":
      return ["bg-neutral-50", "text-neutral-700", "fill-red-400"];
    case "health":
      return ["bg-neutral-50", "text-neutral-700", "fill-pink-400"];
    case "finance":
      return ["bg-neutral-50", "text-neutral-700", "fill-yellow-400"];
    case "insurance":
      return ["bg-neutral-50", "text-neutral-700", "fill-green-400"];
    case "retail":
      return ["bg-neutral-50", "text-neutral-700", "fill-blue-400"];
    case "cad":
      return ["bg-neutral-50", "text-neutral-700", "fill-blue-400"];

    default:
      return ["bg-neutral-50", "text-neutral-700", "fill-neutral-400"]; // Default neutral color
  }
}
