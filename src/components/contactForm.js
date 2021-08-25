export const createContactForm = () => {
  const contactForm = document.createElement('form');
  contactForm.classList.add('card', 'contact-form');
  const contactFormHTML = `
    <h4>Holler At Us</h4>
    <div>
      <label for="name">Name</label>
      <input type="text" class="u-full-width" name="name" placeholder="e.g. John Smith">
    </div>
    <div>
      <label for="phone">Phone Number</label>
      <input type="tel" class="u-full-width" name="phone">
    </div>
    <div>
      <label for="message">Message</label>
      <textarea class="u-full-width" name="message" placeholder="Hi Tasty Eats..." rows="10"></textarea>
    </div>
    <button type="submit" class="button-primary u-full-width">Send Message</button>
  `
  contactForm.innerHTML = contactFormHTML;
  return contactForm;
}
