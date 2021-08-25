// shows background image, heading, paragraph and two buttons linking to 'Menu' and 'Contact'
import { createHero } from './../components/hero';

export const renderHome = () => {
  const home = document.createElement('section')
  home.classList.add('home')
  
  const heroElement = createHero();
  home.append(heroElement);

  return home;
}
