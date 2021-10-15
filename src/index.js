import './sass/main.scss';

const qs = s => document.querySelector(s);
const qsa = s => document.querySelectorAll(s);
const l = s => console.log(s);

const cardItems = qsa('.card__item');

l(cardItems);

const addAniamtion = function (cardItem, className) {
  cardItem.classList.add(className);
};
const removeAniamtion = function (cardItem, className) {
  cardItem.classList.remove(className);
};

function moveCard() {
  [cardItems[0], cardItems[1], cardItems[2]].forEach((card, idx) => {
    card.addEventListener('click', () => {
      addAniamtion(card, 'card__item-animation');
      idx === 0 ? card.classList.remove('shake') : 0;
    });
  });

  const innerCard = qs('.flip-card-inner');
  const backCard = qs('.flip-card-back');

  cardItems[3].addEventListener('click', () => {
    innerCard.classList.add('flip');
  });

  // backCard.addEventListener('click', () => {
  //   cardItems[3].removeEventListener();
  //   innerCard.classList.toggle('flip');
  // });
}

moveCard();
