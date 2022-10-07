function createAboutPage(){
  let about = document.createElement('div');
  about.classList.add('about__content');

  about.innerHTML = `
  <div class="about__left-side">
      <h1 class="about__title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid tempore asperiores corporis!</h1>
      <button class="about__seeMenuButton">See our menu</button>
  </div>
  <div class="about__right-side">
    <p class="about__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In magni asperiores quos nesciunt corrupti ratione officiis facilis commodi dicta praesentium! Ea tempore deserunt quo aliquid provident veniam assumenda, perferendis animi eum esse, sed omnis dolores numquam! Explicabo ipsam, accusantium voluptates impedit nam repudiandae in id vero iusto perspiciatis corporis facere dolore officiis sint. <br><br> Autem sed tempore, ullam molestias, odio culpa temporibus perferendis magnam, voluptatum ipsum facilis architecto. Asperiores quibusdam aperiam dolorum consectetur eum non enim dolorem tempora laborum. Distinctio ut aperiam officia dignissimos velit unde voluptatum neque nesciunt recusandae magni, excepturi atque? Ducimus nisi atque enim illo nihil quo expedita!</p>
  </div>
  `;

  return about;
}

export default createAboutPage;