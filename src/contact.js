function createContactPage()
{
  let contact = document.createElement('div');
  contact.classList.add('contact__content');

  contact.innerHTML = `
    <div class="contact__map-container">
      <iframe class="contact__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85262.13527772806!2d20.69016499612555!3d48.101713974404596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47409f56dd4ed145%3A0xfff7bb808b2bf074!2sRandom%20B%C3%A1r!5e0!3m2!1sen!2sro!4v1664985473591!5m2!1sen!2sro" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <section class="contact__info">
      <div class="contact__panel ">
        <h1 class="contact__title" >Phone</h1>
        <p class="contact__phone-number"><i class="fa-solid fa-phone contact__phone-icon"></i> 0123-456-789</p>
        <p class="contact__email">Email: aroma.restaurant@email.com</p>
      </div>
      
      <div class="contact__panel">
        <h1 class="contact__title">Address</h1>
        <i class="fa-solid fa-map-location-dot contact__address-icon"></i>
        <p class="contact__address">123 Somewhere Place, Whynot, NC, USA </p>
      </div>

      <div class="contact__panel">
        <h1 class="contact__title">Opening hours</h1>
        <div class="contact__opening-hours__row">
          <p class="contact__opening__day">Monday - Friday</p>
          <p class="contact__opening__hours">9:00 - 22:00</p>
        </div>

        <div class="contact__opening-hours__row">
          <p class="contact__opening__day">Saturday</p>
          <p class="contact__opening__hours">09:00 - 20:00</p>
        </div>
        <div class="contact__opening-hours__row">
          <p class="contact__opening__day">Sunday</p>
          <p class="contact__opening__hours">10:00 - 18:00</p>
        </div>
      </div>
    </section>
  `;

  return contact;
}

export default createContactPage;