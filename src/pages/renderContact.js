import { createContactInfo } from '../components/contactInfo';
import { createContactForm } from '../components/contactform';

export const renderContact = () => {
  const contact = document.createElement('section');
  contact.classList.add('contact', 'hidden');

  const contactTitle = document.createElement('h2');
  contactTitle.textContent = 'Get In Touch';
  contact.append(contactTitle);

  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contact-container');
  contactContainer.append(createContactInfo(), createContactForm())

  contact.append(contactContainer)
  
  return contact
}
