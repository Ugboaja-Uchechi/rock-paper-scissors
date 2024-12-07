



const playerPick = (value) => {
  let result = '';
  let score = 0;

  setTimeout(() => {
    const computer = computerPick();
    if (value === "paper") {
      if (computer === "rock") {
        result = "You win";
        score = score + 1;
      } else if (computer === "paper") {
        result = "Tie";
      } else if (computer === "scissors") {
        result = "You lose";
        score = score - 1;
      }
    } else if (value === "scissors") {
      if (computer === "rock") {
        result = "You lose";
        score = score - 1;
      } else if (computer === "paper") {
        result = "You win";
        score = score + 1;
      } else if (computer === "scissors") {
        result = "Tie";
      }
    } else if (value === "rock") {
      if (computer === "rock") {
        result = "Tie";
      } else if (computer === "paper") {
        result = "You lose";
        score = score - 1;
      } else if (computer === "scissors") {
        result = "You win";
        score = score + 1;
      }
    }
    document.querySelector('.result').innerHTML = result;

    document.querySelector('.score').innerHTML = score;

  }, 1000);





  document.querySelector('.player-choice').innerHTML = value;
};

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