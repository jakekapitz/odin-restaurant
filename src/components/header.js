import navbar from './navbar';
import data from './../data/data.json5';

export const createHeader = () => {
  const headerEl = document.createElement('header')
  
  const title = document.createElement('h1');
  title.textContent = data.name;

  headerEl.append(title);
  headerEl.append(navbar);
  return headerEl;
};
