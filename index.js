
// if the score was inside the function the function would create a new score eachtime

const scores = JSON.parse(localStorage.getItem('scores')) || {
  score: 0,
};

  const rulesCover = document.querySelector('.rules-cover');
  const rulesModal = document.querySelector('.rules-modal');
  const closeContainer = document.querySelector('.close-container');


const playerPick = (value) => {
  let result = '';


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
    } else if (result === "You lose") {
      scores.score -= 1;
    }

    localStorage.setItem('scores', JSON.stringify(scores));
    document.querySelector('.result').innerHTML = result;

    document.querySelector('.score').innerHTML = scores.score;

  }, 1000);





  document.querySelector('.player-choice').innerHTML = value;
};

document.querySelector('.score').innerHTML = scores.score;

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

  document.querySelector('.computer-choice').innerHTML = computerChoice;
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