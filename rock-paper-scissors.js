const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  switch (userInput) {
    case 'rock':
      return userInput
      break;
    case 'paper':
      return userInput
      break;
    case 'scissors':
      return userInput
      break;
    case 'bomb':
      return userInput
    default:
      console.log('Please choose a valid input: rock, paper, scissors')
      break;
  }
}

const getComputerChoice = () => {
  computerChoice = Math.floor(Math.random() * 3)

  switch (computerChoice) {
    case 0:
      computerChoice = 'rock'
      break;
    case 1:
      computerChoice = 'paper'
      break;
    case 2:
      computerChoice = 'scissors'
      break;
  }
  return computerChoice
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    console.log('You won and the computer is annihilated!')
  } else if (userChoice === computerChoice) {
    console.log('This game was a tie.')
  } else {
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        console.log('The computer won this round.')
      } else {
        console.log('Congratulations, you won!')
      }
    }

    if (userChoice === 'paper') {
      if (computerChoice === 'rock') {
        console.log('Congratulations, you won!')
      } else {
        console.log('The computer won this round.')
      }
    }

    if (userChoice === 'scissors') {
      if (computerChoice === 'paper') {
        console.log('Congratulations, you won!')
      } else {
        console.log('The computer won this round.')
      }
    }
  }
}

const playGame = (userChoice, computerChoice) => {
  userChoice = getUserChoice('bomb');
  computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  determineWinner(userChoice, computerChoice);
}

playGame()