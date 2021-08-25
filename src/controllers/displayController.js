import { renderHome } from './../pages/renderHome';
import { renderMenu } from './../pages/renderMenu'
import { renderContact } from './../pages/renderContact'

const renderApp = () => {
  const main = document.querySelector('main');
  main.append(renderHome(), renderContact(), renderMenu());
}

const handleNavigation = (e) => {
  const pages = document.querySelectorAll('section');
  const pageLinks = document.querySelectorAll('.navbar li');

  let pageToDisplay = e.target.id;
  switch (pageToDisplay) {
    case 'home':
      pages.forEach(page => {
        if (!(page.classList.contains('home'))) {
          page.classList.add('hidden')
        } else {
          page.classList.remove('hidden');
        }
      });
      pageLinks.forEach(link => {
        if (!(link.id === 'home')) {
          link.classList.remove('active')
        } else {
          link.classList.add('active')
        }
      });
      break;
    case 'menu':
    case 'menuButton':
      pages.forEach(page => {
        if (!(page.classList.contains('menu'))) {
          page.classList.add('hidden')
        } else {
          page.classList.remove('hidden');
        }
      })
      pageLinks.forEach(link => {
        if (!(link.id === 'menu')) {
          link.classList.remove('active')
        } else {
          link.classList.add('active')
        }
      })
      break;
    case 'contact':
    case 'contactButton':
      pages.forEach(page => {
        if (!(page.classList.contains('contact'))) {
          page.classList.add('hidden')
        } else {
          page.classList.remove('hidden');
        }
      })
      pageLinks.forEach(link => {
        if (!(link.id === 'contact')) {
          link.classList.remove('active')
        } else {
          link.classList.add('active')
        }
      })
      break;
    default:
      break;
  }    
}  

export { renderApp, handleNavigation }
