const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
     } else {
      console.log('error, the input is invalid.');
      }
};

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
      return 'rock';
    } else if (randomNumber === 1) {
      return 'paper';
    } else if (randomNumber === 2) {
      return 'scissors'
    }
};

const determineWinner = (userChoice, computerChoice) => {
  
  if (userChoice === computerChoice) {
      return 'This round is a tie!';
      } 
  
	if (userChoice === 'rock') {
      if (computerChoice === 'scissors') {
     		return 'You won this round!';
    } else {
     		return 'You lost this round!';
    }
  }
  
  if (userChoice === 'paper') {
    	if (computerChoice === 'rock') {
        return 'You won this round!'
      } else {
        	return 'You lost this round!'
      }
  }
  
  if (userChoice === 'scissors') {
    	if (computerChoice === 'paper') {
        return 'You won this round!'
      } else {
        	return 'You lost this round!'
      }
  }
  
   if (userChoice === 'bomb') {
    	if (computerChoice === 'paper') {
        return 'You won this round!'
      } else {
        	return 'You won this round!'
      }
  }
  
};

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log(`You chose ${userChoice} and the computer chose ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();