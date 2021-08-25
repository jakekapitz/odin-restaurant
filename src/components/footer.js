import { createIconElement } from './icon';
import GithubIcon from './../img/github.svg';

export const createFooter = () => {
  const footerEl = document.createElement('footer');
  const createdByEl = document.createElement('p')
  const text = 'Created by Jake Kapitz ';
  
  const githubLink = document.createElement('a')
  githubLink.href = 'https://github.com/jakekapitz';

  const icon = createIconElement(GithubIcon, 16, 16);
  githubLink.append(icon);  

  createdByEl.insertAdjacentText('afterbegin', text)
  createdByEl.append(githubLink)

  footerEl.append(createdByEl);
  return footerEl;
}
