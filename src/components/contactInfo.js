import data from './../data/data.json5'
import { createIconElement } from './icon';
import UtensilsIcon from './../img/utensils.svg';
import ClockIcon from './../img/clock.svg';
import PhoneIcon from './../img/phone.svg';


export const createContactInfo = () => {
  const contactInfo = document.createElement('div');
  contactInfo.classList.add('card', 'contact-info')
  const contactInfoTitle = document.createElement('h4');
  contactInfoTitle.textContent = 'Our Deets'

  const createAddressHTML = () => {
    let addressHTML = `
        <span>${data.address.street}, ${data.address.suburb} ${data.address.state} ${data.address.postcode}</span>
    `
    return addressHTML
  };

  const createOpeningHoursHTML = () => {
    const openingHours = data.hours;
    let openingHoursHTML = '<ul>';
    openingHours.forEach(weekday => {
      let dayHTML = `
        <li><span>${weekday.day}: </span>${weekday.isOpen ? `${weekday.open} - ${weekday.close}` : 'Closed'}</li>
      `
      openingHoursHTML += dayHTML;
    })
    openingHoursHTML += '<ul/>';
    return openingHoursHTML;
  }

  const createInfoElement = (icon, html) => {
    const element = document.createElement('p');
    element.classList.add('contact-info__item');
    const elementIcon = createIconElement(icon, 32, 32);
    element.append(elementIcon);
    element.insertAdjacentHTML('beforeend', html);
    return element;
  }

  const phone = createInfoElement(PhoneIcon, `<span>${data.phone}</span>`);
  const openingHours = createInfoElement(ClockIcon, createOpeningHoursHTML());
  const address = createInfoElement(UtensilsIcon, createAddressHTML())

  contactInfo.append(contactInfoTitle, address, phone, openingHours)

  return contactInfo;
}
