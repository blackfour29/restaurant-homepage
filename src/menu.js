import menuImgPath from './images/restaurant-menu.jpg'

function createMenuPage()
{
  let menu = document.createElement('div');
  menu.classList.add('menu__content');

  const menuImg = new Image();
  menuImg.src = menuImgPath;
  menuImg.classList.add('menu__full-menu');

  menu.appendChild(menuImg);

  return menu;
}

export default createMenuPage;