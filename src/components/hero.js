import { createButton } from './button';
import data from './../data/data.json5'
import { handleNavigation } from './../controllers/displayController';

export const createHero = () => {
  const hero = document.createElement('div')
  hero.classList.add('hero')
  
  const heroTitle = document.createElement('h2')
  heroTitle.textContent = 'Taste it. Live it.';

  const heroDescription = document.createElement('p');
  heroDescription.textContent = `Your favourite local restaurant. All the food that's good to eat.`
  
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');

  const contactButton = createButton('Contact Us', 'contactButton' );
  const menuButton = createButton('Our Menu', 'menuButton', true);

  contactButton.addEventListener('click', handleNavigation);
  menuButton.addEventListener('click', handleNavigation);

  buttonContainer.append(contactButton, menuButton);

  hero.append(heroTitle, heroDescription,buttonContainer);

  return hero;
}
