export default function renderBasket(count = 1) {
  const classname = count === 0 ? 'empty' : 'filled';
  return `<div class="${classname}">basket: ${count} item(s)</div>`;
}
