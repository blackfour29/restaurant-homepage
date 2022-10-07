import logoPath from './images/restaurant-logo.png';
import createHomePage from "./home";
import createMenuPage from './menu';
import createAboutPage from './about';
import createContactPage from './contact';

const content = document.querySelector('#content');
const header = createHeader();
const main = createMain();
const homePage = createHomePage(); // default page 
const menuPage = createMenuPage();
const aboutPage = createAboutPage();
const contactPage = createContactPage();

function init()
{
  content.appendChild(header);
  content.appendChild(main);
  document.querySelector('.main__content').appendChild(homePage);
  addPageButtonsEvents('home');

}

export default init;


function createHeader()
{
  let headerEl = document.createElement('div');
  headerEl.classList.add('header');
  const logoImg = new Image();
  logoImg.src = logoPath;
  logoImg.classList.add('header__logo');
  headerEl.appendChild(logoImg); 

  let navMenu = createNavMenu();
  headerEl.appendChild(navMenu);

  return headerEl;
}

function createNavMenu()
{
  let navMenu = document.createElement('nav');
  let ulMenu = document.createElement('ul');

  navMenu.classList.add('menu');
  ulMenu.classList.add('menu__list');

  const homeBtn = document.createElement('li');
  homeBtn.classList.add('menu__item', 'menu__home', 'active-page'); // active by default
  homeBtn.textContent = 'Home';

  const menuBtn = document.createElement('li');
  menuBtn.classList.add('menu__item', 'menu__menu');
  menuBtn.textContent = 'Menu';

  const aboutBtn = document.createElement('li');
  aboutBtn.classList.add('menu__item', 'menu__about');
  aboutBtn.textContent = 'About';

  const contactBtn = document.createElement('li');
  contactBtn.classList.add('menu__item', 'menu__contact');
  contactBtn.textContent = 'Contact';

  [homeBtn, menuBtn, aboutBtn, contactBtn].forEach(button => {
    button.addEventListener('click', changePage);
  })

  ulMenu.appendChild(homeBtn);
  ulMenu.appendChild(menuBtn);
  ulMenu.appendChild(aboutBtn);
  ulMenu.appendChild(contactBtn);
  navMenu.appendChild(ulMenu);

  return navMenu;
}

function createMain() 
{
  let main = document.createElement('main');
  main.classList.add('main')
  const mainContent = document.createElement('div');
  mainContent.classList.add('main__content');

  main.appendChild(mainContent);

  return main;
}

function changePage(event)
{ 
  if(event.target.classList.contains('active-page')){
    return;
  }
  else{
    document.querySelectorAll('.menu__item').forEach(button => {
      button.classList.remove('active-page')
    })
    let pageName = event.target.classList[1].split('__')[1]; // home, menu , about, contact
    event.target.classList.add('active-page');
    changePageTo(pageName);
  }
}

function changePageTo(pageName){
  let page; 
  if(pageName == 'home'){
    page = createHomePage();
  }
  else if(pageName == 'menu'){
    page = createMenuPage();
  }
  else if(pageName == 'about'){
    page = createAboutPage();
  }
  else if(pageName == 'contact'){
    page = createContactPage();
  }
  const main = document.querySelector('.main');
  main.innerHTML = '';
  main.appendChild(page);

  addPageButtonsEvents(pageName);
}

function addPageButtonsEvents(page)
{
  if(page === 'home')
  {
    const orderNowBtn = document.querySelector('.home__order-now');
    orderNowBtn.addEventListener('click', () => {
      document.querySelector('.menu__menu').click();
    });

    const downloadBtn = document.querySelector('.home__download-button');
    downloadBtn.addEventListener('click', () => {
      document.querySelector('.menu__contact').click();
    });

    const contactBtn = document.querySelector('.home__contact-button');
    contactBtn.addEventListener('click', () => {
      document.querySelector('.menu__contact').click();
    });

    const checkBtn = document.querySelector('.home__check-button');
    checkBtn.addEventListener('click', () => {
      document.querySelector('.menu__menu').click();
    });

    const sendMessageBtn = document.querySelector('.home__send-message-button');
    sendMessageBtn.addEventListener('click', () => {
      document.querySelector('.menu__contact').click();
    });
  }
  else if(page == 'about'){
    const seeMenuBtn = document.querySelector('.about__see-menu-button');
    seeMenuBtn.addEventListener('click', () => {
      document.querySelector('.menu__menu').click();
    });
  }
}
