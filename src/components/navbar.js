import { handleNavigation } from '../controllers/displayController';

const navItems = ['home', 'menu', 'contact'];

const createNavbar = () => {
  const navEl = document.createElement('nav');
  navEl.classList.add('navbar');

  const navList = document.createElement('ul');

  navItems.forEach(item => {
    const navItem = document.createElement('li')
    navItem.textContent = item;
    navItem.id = item;
    navList.append(navItem);
  });

  navEl.append(navList);
  navEl.addEventListener('click', handleNavigation);
  return navEl;
}

const navbar = createNavbar();

export default navbar;
