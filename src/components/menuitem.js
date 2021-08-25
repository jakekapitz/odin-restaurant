function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./../img/menu', false, /\.(png|jpe?g|svg)$/));

export const createMenuItemCard = (title, description, price, image) => {
  const card = document.createElement('div');
  card.classList.add('card', 'menu-item');

  const cardImage = images[`${image}`];

  const cardHTML = `
    <img width="480" height="480" src=${cardImage} alt="${title} - ${description}" class="menu-item__image"/>
    <div class="menu-item__detail">
      <h4>${title}<span>$${price}</span></h4>
      <p>${description}</p>
    </div>
  `
  './../img'
  card.innerHTML = cardHTML;
  return card;
}
