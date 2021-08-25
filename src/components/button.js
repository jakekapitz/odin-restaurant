export const createButton = (text, id, primary = false) => {
  const buttonEl = document.createElement('button')
  if (primary) {
    buttonEl.classList.add('button-primary')
  }
  buttonEl.id = id;
  buttonEl.innerHTML = text;
  return buttonEl;
}
