
// if the score was inside the function the function would create a new score eachtime

const scores = JSON.parse(localStorage.getItem('scores')) || {
  score: 0,
};

const rulesCover = document.querySelector('.rules-cover');
const rulesModal = document.querySelector('.rules-modal');
const closeContainer = document.querySelector('.close-container');
let playSection = document.querySelector('.center');
let playerImg = document.querySelector('.player-choice');
let computerImg = document.querySelector('.computer-choice');
let resultSection = document.querySelector('.js-result-section');
let playBtn = document.querySelector('.js-play');

const playerPick = (value) => {
  let result = '';

  playerImg.src = `./images/icon-${value}.svg`;
  playerImg.alt = value;
  playerImg.className =`${value} object`;

  setTimeout(() => {
    const computer = computerPick();
    if (value === "paper") {
      if (computer === "rock") {
        result = "You win";

      } else if (computer === "paper") {
        result = "Tie";
      } else if (computer === "scissors") {
        result = "You lose";

      }
    } else if (value === "scissors") {
      if (computer === "rock") {
        result = "You lose";

      } else if (computer === "paper") {
        result = "You win";

      } else if (computer === "scissors") {
        result = "Tie";
      }
    } else if (value === "rock") {
      if (computer === "rock") {
        result = "Tie";
      } else if (computer === "paper") {
        result = "You lose";

      } else if (computer === "scissors") {
        result = "You win";

      }
    }

    if (result === "You win") {
      scores.score = scores.score + 1;
      playerImg.classList.add('pulse');
    } else if (result === "You lose") {
      scores.score -= 1;
      computerImg.classList.add('pulse');
    } else if (result === "Tie") {
      computerImg.classList.add('pulse');
      playerImg.classList.add('pulse');
    }

    if (result !== "") {
      resultSection.style.display = 'flex';
      playSection.style.display = 'none';
    } 

    localStorage.setItem('scores', JSON.stringify(scores));
    document.querySelector('.result').innerHTML = result;

    document.querySelector('.score').innerHTML = scores.score;

  }, 1000);

};

document.querySelector('.score').innerHTML = scores.score;

playBtn.addEventListener('click', () => {
  resultSection.style.display = 'none';
  playSection.style.display = 'flex';
})

const computerPick = () => {
  const randomValue = Math.random();

  let computerChoice = '';

  if (randomValue >= 0 && randomValue < 1 / 3) {
    computerChoice = 'rock'
  } else if (randomValue >= 1 / 3 && randomValue < 2 / 3) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }

  computerImg.src = `./images/icon-${computerChoice}.svg`;
  computerImg.alt = computerChoice;
  computerImg.className = `${computerChoice} object`;

  return computerChoice;
}

const showRulesModal = () => {

  if (rulesCover.click) {
    rulesModal.style.display = 'flex';
  }

};

const hideRulesModal = () => {

  if (closeContainer.click) {
    rulesModal.style.display = 'none';
  }

};
