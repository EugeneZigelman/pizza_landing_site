
let wrapper = document.querySelector('.wrapper')
let menuLinks = document.querySelectorAll('.menu__link');
let menuLogo = document.querySelector('.logo_container__logo');
let buttonContact = document.querySelector('.button_contact');
const iconMenu = document.querySelector('.menu__icon');
const headerMenu = document.querySelectorAll('.header__menu');
const header = document.querySelector('.header');
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

// Контактная страница для размещения страниц меню
let contactPage = document.querySelector('.contact_page');

const pizzaStandartMenu = {
  pizzaClass: 'st_menu',
  name: ['МАРГАРИТА КЛАССИКА', 'ТОЛЕДО', 'ПЕПЕРОНИ', 'ГАВАЙСКАЯ', 'МОРСКОЙ БРИЗ', 'С ТУНЦОМ И КРАСНЫМ ЛУКОМ', 'С ЛОСОСЕМ И БРОККОЛИ ', 'ЧЕТЫРЕ СЫРА', 'ГРИБНАЯ'],
  description: [
    'состав: соус томатный, сыр Моцарелла, орегано, базилик',
    'состав: соус томатный, сыр Моцарелла, сыр Пармезан, шампиньоны , ветчина Мартаделла, ветчина говяжья в/к., помидоры черри, орегано, базилик',
    'состав: соус томатный с добавлением паприки, сыр Моцарелла, сыр Пармезан, салями Пеперони, острый перец Халапеньо, орегано, базилик',
    'состав: соус томатный, сыр Моцарелла, сыр Чеддер, куриное филе гриль, ананас, орегано, базилик',
    'состав: соус Бальзамелла, сыр Моцарелла, сыр Пармезан, креветка тигровая, мидии, кальмар, осьминог, мускатный орех, орегано, укроп, рукола',
    'состав: соус томатный, сыр Моцарелла, сыр Пармезан, тунец конс.в с/с, красный лук, орегано',
    'состав: соус Бальзамелла, лосось, брокколи, сыр Моцарелла, сыр Пармезан, сыр сливочный Филадельфия, мускатный орех, орегано',
    'состав: сыр Моцарелла, сыр Эдам, сыр Пармезан, сыр с плесенью Дано Блю,орегано', 'состав: сыр Моцарелла, сыр сливочный с трюфелем, шампиньоны, укроп'],
  prices: [
    '33см-39₪, 40см-45₪',
    '33см-63₪, 40см-78₪',
    '33см-60₪, 40см-75₪',
    '33см-60₪, 40см-75₪',
    '33см-69₪, 40см-88₪',
    '33см-49₪, 40см-60₪',
    '33см-69₪, 40см-88₪',
    '33см-52₪, 40см-65₪',
    '33см-50₪, 40см-68₪',
  ],
  pictureUrl: [
    "../img/pizza-menu/margarita.png",
    "../img/pizza-menu/toledo.png",
    "../img/pizza-menu/peperoni.png",
    "../img/pizza-menu/havawii.png",
    "../img/pizza-menu/sea.png",
    "../img/pizza-menu/tuna.png",
    "../img/pizza-menu/losos.png",
    "../img/pizza-menu/cheese4.png",
    "../img/pizza-menu/mushroom.png",
  ],
}

const pizzaChildMenu = {
  pizzaClass: 'ch_menu',
  name: ['ЗАЙЧОНОК ЯША', 'СОЛНЫШКО', 'КОТ БАЗИЛИО',],
  description: [
    'состав: соус из протертых помидорок Черри, сыр Моцарелла, орегано, для украшения: белок яичный, маслины, перец сладкий, черри, рукола',
    'состав: соус из протертых помидорок Черри, сыр Моцарелла, сыр Чеддер, орегано, для украшения: маслины, черри, сладкий перец',
    'состав: соус из протертых помидорок Черри, сыр Моцарелла, орегано, для украшения: Моцарелла, базилик, маслины, черри, рукола',
  ],
  prices: [
    '28см-39₪',
    '28см-39₪',
    '28см-39₪',
  ],
  pictureUrl: [
    "../img/pizza-menu/rabbit.png",
    "../img/pizza-menu/sun.png",
    "../img/pizza-menu/cat.png",
  ],
}

pizzaMenu = { pizzaStandartMenu, pizzaChildMenu };


// Размещение пицц
markupAllMenu(windowWidth, windowHeight, contactPage);
let pageScreen = document.querySelectorAll('.page__screen');
// Количество страниц стандартного меню
let pageStandartMenu = document.querySelectorAll('.st_menu');
// Количество страниц детского меню
let pageChildMenu = document.querySelectorAll('.ch_menu');
// main page->standart menu->child menu->contact page

window.addEventListener(`resize`, event => {
  let windowWidth = window.innerWidth;
  removeMenu();
  markupAllMenu(windowWidth, windowHeight, contactPage);
  // Общее количество страниц в слайдере
  pageScreen = document.querySelectorAll('.page__screen');
  // Количество страниц стандартного меню
  pageStandartMenu = document.querySelectorAll('.st_menu');
  // Количество страниц детского меню
  pageChildMenu = document.querySelectorAll('.ch_menu');
// main page->standart menu->child menu->contact page
}, false);

// Параметры слайдера
let pageSlider = new Swiper('.page', {
  // Свои классы
  wrapperClass: 'page__wrapper',
  slideClass: 'page__screen',
  // Вертикальный слайдер
  direction: 'vertical',
  // Количество слайдов для показа
  slidesPerView: 'auto',
  // Включаем параллакс
  parallax: true,

  // Управление клавиатурой
  keyboard: {
    // Включить{выключить
    enabled: true,
    // Включить{выключить
    // только когда слайдер
    // в пределах вьюпорта
    onlylnViewport: true,
    // Включить{выключить
    // управление клавишами
    // pageUpj PageDown
    pageUpDown: true,
  },

  // Управление колесом мыши
  mousewheel: {
    // Чувствительность колеса мыши
    sensitivity: 1,
    // Класс объекта на котором
    // будет срабатывать прокрутка мышью.
    // eventsTarget: ".image-sLider"
  },

  // Отключение функционала
  // если слайдов меньше чем нужно
  watchOverflow: true,
  // Скорость
  speed: 800,
  // Обновить свайпер
  // при изменении элементов слайдера
  observer: true,
  // Обновить свайпер
  // при изменении родительских
  // элементов слайдера
  observeParents: true,
  // Обновить свайпер
  // при изменении дочерних
  // элементов слайда
  observeSlideChildren: true,

  // Навигация
  // Буллеты, текущее положение, прогрессбар
  pagination: {
    el: '.page__pagination',
    type: 'bullets',
    clickable: true,
    bulletClass: "page__bullet",
    bulletActiveClass: 'page__bullet_active',
  },
  // Скролл
  scrollbar: {
    el: '.page__scroll',
    dragClass: "page__drag-scroll",
    // Возможность перетаскивать скролл
    draggable: true,
  },

  // Отключаем автоинициализацию
  init: false,

  // События
  on: {
    init: function () {
      menuSlider();
      // setScrollType();
      wrapper.classList.add('_loaded');
    },
    slideChange: function () {
      menuSliderRemove();

      indexOfMenu(pageSlider.realIndex);
      // const sliderIndex = pageSlider.realIndex;
      // let menuIndex = 0;
      // if (sliderIndex == 0) {
      //   // Главная страница
      //   menuIndex = 0
      // } else if (sliderIndex >= 1 && sliderIndex <= (pageStandartMenu.length)) {
      //   menuIndex = 1
      // } else if (sliderIndex >= (pageStandartMenu.length + 1) && sliderIndex <= (pageStandartMenu.length + pageChildMenu.length)) {
      //   menuIndex = 2
      // } else if (sliderIndex > (pageStandartMenu.length + pageChildMenu.length)) {
      //   menuIndex = 3
      // }
      // menuLinks[menuIndex].classList.add('_active');
      
    },
    resize: function () {
      // setScrollType();
    },
  },
});

// Меню бургер
if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    // document.body.toggle('_lock');
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    headerMenu[0].classList.toggle('_active');
    // headerMenu[1].classList.toggle('_active');
    header.classList.toggle('_active');
  });
};

pageSlider.init();

// Нажатие на логотип
menuLogo.addEventListener('click', function (e) {
  menuSliderRemove();
  pageSlider.slideTo(0, 800);
  menuLinks[0].classList.add('_active');
  e.preventDefault();
});

// Нажатие на кнопку ЗАКАЗАТЬ
buttonContact.addEventListener('click', function (e) {
  menuSliderRemove();
  pageSlider.slideTo((pageScreen.length - 1), 800);  
  menuLinks[menuLinks.length-1].classList.add('_active');
  e.preventDefault();
});


function menuSlider() {
  if (menuLinks.length > 0) {

    indexOfMenu(pageSlider.realIndex);
    
    for (let index = 0; index < menuLinks.length; index++) {
      const menuLink = menuLinks[index];
      menuLink.addEventListener('click', function (e) {
        menuSliderRemove();
        switch (index) {
          case (0):
            pageSlider.slideTo(index, 800);
            break;          
          case (1):
            pageSlider.slideTo(index, 800);
            break;
          case (2):
            pageSlider.slideTo(pageStandartMenu.length+1, 800);
            break;
          case (3):
            pageSlider.slideTo(pageStandartMenu.length + pageChildMenu.length+1, 800);
            break;
        }
        
        menuLink.classList.add('_active');
        e.preventDefault();
        iconMenu.classList.toggle('_active');
        headerMenu[0].classList.toggle('_active');
        // headerMenu[1].classList.toggle('_active');
        header.classList.toggle('_active');

      })
    }

  }
};

function menuSliderRemove() {
  let menuLinkActive = document.querySelector('.menu__link._active');
  if (menuLinkActive) {
    menuLinkActive.classList.remove('_active')
  }
}

function setScrollType() {

  if (wrapper.classList.contains('_free')) {
    wrapper.classList.remove('_free');
    pageSlider.params.freeMode = false;
  }
  for (let index = 0; index < pageSlider.slides.length; index++) {
    const pageSlide = pageSlider.slides[index];
    const pageSlideContent = pageSlide.querySelector('.screen__content');
    if (pageSlideContent) {
      const pageSlideContentHeight = pageSlideContent.offsetHeight;
      if (pageSlideContentHeight > window.innerHeight) {
        wrapper.classList.add('_free');
        pageSlider.params.freeMode = true;
        break;
      }
    }
  }
}




function markupPageMenu(pizzaAttribute, row, col, gridType, contactPage) {

  for (let i = 0; i < Math.ceil(pizzaAttribute.name.length / (row * col)); i++) {
    let htmlCodeFlex = `<div class="page__screen pizza_menu screen ${pizzaAttribute.pizzaClass} ${pizzaAttribute.pizzaClass}_${i}"> <div class="flex__container">`;
    contactPage.insertAdjacentHTML("beforeBegin", htmlCodeFlex);

    for (let k = 0; k < col * row; k++) {
      let j = i * row * col + k;
      if (j > pizzaAttribute.name.length - 1) {
        break;
      }
      let htmlCode = `<div class="product__item item${j}">
      <div class="products__image" data-swiper-parallax="100%" data-swiper-parallax-opacity="0"
              data-swiper-parallax-duration="1000">
        <img src=${pizzaAttribute.pictureUrl[j]} alt="">
      </div>
      <div class="products__name">
        <div class="products__text" data-swiper-parallax="-100%" data-swiper-parallax-opacity="0"
              data-swiper-parallax-duration="900">
          ${pizzaAttribute.name[j]}<p>${pizzaAttribute.description[j]}</p><p>${pizzaAttribute.prices[j]}</p>
        </div>
      </div>
      <div class="products__button">Купить</div>
    </div>`;

      let menu = document.querySelectorAll('.flex__container');
      menu[menu.length - 1].insertAdjacentHTML("beforeEnd", htmlCode);
    }
  }
}

function markupAllMenu(windowWidth, windowHeight, contactPage) {
  let row = 2;
  let col = 2;
  let gridType = 'row';

  if (windowWidth > 1200) {
    row = 3; col = 3; gridType = 'row';
  } else if (windowWidth > 768 && windowWidth <= 1200) {
    row = 2; col = 2; gridType = 'row';
  } else if (windowWidth > 520 && windowWidth <= 768) {
    row = 2; col = 2; gridType = 'col';
  } else if (windowWidth > 420 && windowWidth <= 520) {
    row = 2; col = 2; gridType = 'col';
  } else if (windowWidth > 319 && windowWidth <= 420) {
    row = 2; col = 1; gridType = 'col';
  } else {
    row = 1; col = 1; gridType = 'col';
  }

  for (pizza in pizzaMenu) {
    const pizzaAttribute = pizzaMenu[pizza];
    markupPageMenu(pizzaAttribute, row, col, gridType, contactPage);
  }
};


function markupStandartMenu(windowWidth, windowHeight, contactPage) {

  if (windowWidth > 1200) {
    markup(3, 3, 'row', contactPage);
  } else if (windowWidth > 768 && windowWidth < 1200) {
    markup(2, 2, 'row', contactPage);
  } else if (windowWidth > 520 && windowWidth < 768) {
    markup(2, 2, 'col', contactPage);
  } else if (windowWidth > 420 && windowWidth < 520) {
    markup(2, 2, 'col', contactPage);
  } else if (windowWidth > 320 && windowWidth < 420) {
    markup(2, 1, 'col', contactPage);
  } else {
    markup(1, 1, 'col', contactPage);
  }
};
function markup(row, col, gridType, contactPage) {
  const pizzaAttribute = {
    name: ['Маргарита Классика', 'Толедо', 'Пеперони', 'Гавайская', 'Морской бриз', 'С тунцом и красным луком', 'С лососем и брокколи ', 'Четыре Сыра', 'Грибная'],
    description: [
      'состав: соус томатный, сыр Моцарелла, орегано, базилик',
      'состав: соус томатный, сыр Моцарелла, сыр Пармезан, шампиньоны , ветчина Мартаделла, ветчина говяжья в/к., помидоры черри, орегано, базилик',
      'состав: соус томатный с добавлением паприки, сыр Моцарелла, сыр Пармезан, салями Пеперони, острый перец Халапеньо, орегано, базилик',
      'состав: соус томатный, сыр Моцарелла, сыр Чеддер, куриное филе гриль, ананас, орегано, базилик',
      'состав: соус Бальзамелла, сыр Моцарелла, сыр Пармезан, креветка тигровая, мидии, кальмар, осьминог, мускатный орех, орегано, укроп, рукола',
      'состав: соус томатный, сыр Моцарелла, сыр Пармезан, тунец конс.в с/с, красный лук, орегано',
      'состав: соус Бальзамелла, лосось, брокколи, сыр Моцарелла, сыр Пармезан, сыр сливочный Филадельфия, мускатный орех, орегано',
      'состав: сыр Моцарелла, сыр Эдам, сыр Пармезан, сыр с плесенью Дано Блю,орегано', 'состав: сыр Моцарелла, сыр сливочный с трюфелем, шампиньоны, укроп'],
    prices: [
      '33см-39₪, 40см-45₪',
      '33см-63₪, 40см-78₪',
      '33см-60₪, 40см-75₪',
      '33см-60₪, 40см-75₪',
      '33см-69₪, 40см-88₪',
      '33см-49₪, 40см-60₪',
      '33см-69₪, 40см-88₪',
      '33см-52₪, 40см-65₪',
      '33см-50₪, 40см-68₪',
    ],
    pictureUrl: [
      "../img/pizza-menu/Маргарита.jpeg",
      "../img/pizza-menu/Толедо.jpeg",
      "../img/pizza-menu/Пеперони.jpeg",
      "../img/pizza-menu/Гавайская.jpeg",
      "../img/pizza-menu/Морской_бриз.jpeg",
      "../img/pizza-menu/Тунец.jpeg",
      "../img/pizza-menu/Лосось.jpeg",
      "../img/pizza-menu/Четыре_сыра.jpeg",
      "../img/pizza-menu/Грибная.jpeg",
    ],
  }

  for (let i = 0; i < Math.ceil(pizzaAttribute.name.length / (row * col)); i++) {

    let htmlCodeFlex = `<div class="page__screen pizza_menu screen st_menu st_menu_${i}"> <div class="flex__container">`;
    contactPage.insertAdjacentHTML("beforeBegin", htmlCodeFlex);

    for (let k = 0; k < col * row; k++) {
      let j = i * row * col + k;
      if (j > pizzaAttribute.name.length - 1) {
        break;
      }
      let htmlCode = `<div class="product__item item${j}">
      <div class="products__image">
        <img src=${pizzaAttribute.pictureUrl[j]} alt="">
      </div>
      <div class="products__name">
        <div class="products__text">
          ${pizzaAttribute.name[j]}<p>${pizzaAttribute.description[j]}</p><p>${pizzaAttribute.prices[j]}</p>
        </div>
      </div>
      <div class="products__button">Купить</div>
    </div>`;

      let st_menu = document.querySelectorAll('.flex__container');
      st_menu[st_menu.length - 1].insertAdjacentHTML("beforeEnd", htmlCode);
    }
  }
};
function removeMenu() {
  const pizzaMenu = document.querySelectorAll('.pizza_menu');
  if (pizzaMenu) {
    for (let i = 0; i < pizzaMenu.length; i++) {
      pizzaMenu[i].remove();
    }
  }
}

function indexOfMenu(sliderIndex) {
  
  let menuIndex = 0;
  if (sliderIndex == 0) {
    // Главная страница
    menuIndex = 0
  } else if (sliderIndex >= 1 && sliderIndex <= (pageStandartMenu.length)) {
    menuIndex = 1
  } else if (sliderIndex >= (pageStandartMenu.length + 1) && sliderIndex <= (pageStandartMenu.length + pageChildMenu.length)) {
    menuIndex = 2
  } else if (sliderIndex > (pageStandartMenu.length + pageChildMenu.length)) {
    menuIndex = 3
  }
  menuLinks[menuIndex].classList.add('_active');
}
