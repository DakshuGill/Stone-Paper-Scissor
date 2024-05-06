const getCompChoice = ():string => {
	// storing all 3 options into array to get random out of three using math.random methon in JS.
	const options = ["rock", "paper", "scissor"];
	const randomIdx = Math.floor(Math.random() * 3);
	return options[randomIdx];
}
const playGame = (userChoice) => {
	
const compChoice = getCompChoice();
	

if( compChoice === userChoice ) {
	return 'Draw'
}
else {
	let userWin = true;
	if( userChoice === 'rock' ) {
		// compChoices = scissor or paper
		userWin = compChoice === 'scissor' ? true : false;
	}
	else if( userChoice === "scissor" ) {
		// compChoice  = rock, paper
		userWin = compChoice === 'rock' ? false : true;
	}
	else {// userChoice = paper and compChoice = scissor, rock
		userWin = compChoice === "scissor" ? false : true;
    }
	
}
};