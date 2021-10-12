import './sass/main.scss';

const qs = s => document.querySelector(s);
const qsa = s => document.querySelectorAll(s);
const l = s => console.log(s);

const cardItems = qsa('.card__item');

l(cardItems);

const addAniamtion = function (cardItem) {
  cardItem.classList.add('card__item-animation');
};

function ani() {
  [...cardItems].forEach(card => {
    card.addEventListener('click', () => {
      addAniamtion(card);
    });
  });
}

ani();
