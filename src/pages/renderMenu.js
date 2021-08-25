import data from './../data/data.json5';
import { createMenuItemCard } from './../components/menuitem';

export const renderMenu = () => {
  const menu = document.createElement('section');
  menu.classList.add('menu', 'hidden')
  
  const menuTitle = document.createElement('h2');
  menuTitle.textContent = 'Tastes';
  menu.append(menuTitle);

  const menuContainer = document.createElement('div');
  menuContainer.classList.add('grid-container', 'menu-container');
  
  const menuItems = data.menu;
  menuItems.forEach(item => {
    const menuItemCard = createMenuItemCard(item.title, item.description, item.price, item.image)
    menuContainer.append(menuItemCard);
  })

  menu.append(menuContainer);

  return menu;
}
