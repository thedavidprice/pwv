export function renderBadge(tagName: string): HTMLSpanElement {
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
    case "energy":
      return ["bg-yellow-50", "text-yellow-700", "fill-yellow-400"]; // Yellow
    case "construction":
      return ["bg-cyan-50", "text-cyan-700", "fill-cyan-400"]; // Cyan
    case "auth":
      return ["bg-teal-50", "text-teal-700", "fill-teal-400"]; // Teal
    case "b2b":
      return ["bg-orange-50", "text-orange-700", "fill-orange-400"]; // Orange
    case "defense":
      return ["bg-red-50", "text-red-700", "fill-red-400"]; // Red
    case "health":
      return ["bg-pink-50", "text-pink-700", "fill-pink-400"]; // Pink
    case "finance":
      return ["bg-yellow-50", "text-yellow-700", "fill-yellow-400"]; // Yellow
    case "insurance":
      return ["bg-green-50", "text-green-700", "fill-green-400"]; // Green
    case "retail":
      return ["bg-blue-50", "text-blue-700", "fill-blue-400"]; // Blue

    default:
      return ["bg-gray-100", "text-gray-700", "fill-gray-400"]; // Light gray (default)
  }
}
