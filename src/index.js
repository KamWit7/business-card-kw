import './sass/main.scss';

const qs = s => document.querySelector(s);
const qsa = s => document.querySelectorAll(s);
const l = s => console.log(s);

const cardItems = qsa('.card__item');

l(cardItems);

const addAniamtion = function (cardItem, className) {
  cardItem.classList.add(className);
};

function moveCard() {
  [cardItems[0], cardItems[1], cardItems[2]].forEach(card => {
    card.addEventListener('click', () => {
      addAniamtion(card, 'card__item-animation');
    });
  });

  // addAniamtion(cardItems[3], 'flip-card');
}

moveCard();
