export const createIconElement = (el, h, w) => {
  const iconElement = document.createElement('img');
  iconElement.src = el;
  iconElement.height = h;
  iconElement.width = w;
  return iconElement
}
