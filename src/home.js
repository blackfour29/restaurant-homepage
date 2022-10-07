function createHomePage()
{
  let home = document.createElement('div');
  home.classList.add('home__content');
  home.innerHTML = `
  <p class="home__message">We are <span class="accent">open</span> and ready to take your orders!</p>
  <button class="home__order-now">Order now</button>
  <img src="../src/images/chef.jpg" class="home__image" alt="chef in kitchen">
  <div class="home__cards">
      <div class="home__card home__app-card">
        <h1 class="home__card-title">We've launched our app!</h1>
        <button class="home__download-button">Download now</button>
      </div>
      <div class="home__card home__hiring-card">
        <h1 class="home__card-title">We're looking for awesome colleagues</h1>
        <button class="home__contact-button">Get in touch!</button>
      </div>
      <div class="home__card home__featured-card">
        <h1 class="home__card-title">This week's featured dish</h1>
        <button class="home__check-button">Check</button>
        
      </div>
      <div class="home__card home__suggestion-card">
        <h1 class="home__card-title">Have a suggestion or reclamation?</h1>
        <button class="home__send-message-button">Send message</button>
      </div>
    </div>
  `;

  return home;
}

export default createHomePage;