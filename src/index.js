import './sass/main.scss';

const qs = s => document.querySelector(s);
const qsa = s => document.querySelectorAll(s);
const l = s => console.log(s);

const cardItems = qsa('.card__item');
const innerCard = qs('.flip-card-inner');

const cards = [...cardItems];
const [firstCard, secondCard, thirdCard, fourthCard] = cards;

const addAniamtion = function (cardItem, className) {
  cardItem.classList.add(className);
};

[firstCard, secondCard, thirdCard].forEach((card, idx) => {
  card.addEventListener('click', () => {
    addAniamtion(card, 'card__item-animation');
    idx === 0 ? card.classList.remove('shake') : 0;
  });
});

fourthCard.addEventListener('click', () => {
  addAniamtion(innerCard, 'flip');
});
