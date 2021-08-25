import { createHeader } from './../components/header'
import { createMain } from './../components/main'
import { createFooter } from './../components/footer'

export const renderLayout = () => {
  const content = document.querySelector('#content');
  content.append(createHeader(), createMain(), createFooter());
}
