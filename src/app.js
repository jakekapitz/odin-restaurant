import './normalize.css';
import './barebones.css';
import './style.css';
import { renderLayout } from './layout/layout';
import { renderApp, handleNavigation } from './controllers/displayController';

export const init = () => {
  const app = document.createElement('div');
  app.id = 'content';
  document.body.append(app);
  renderLayout();
  renderApp();
}
