document.addEventListener('DOMContentLoaded',()=>{
	console.log('Script is working')
let userScore = 0;
let compScore = 0;

// all choices and images inside them have same size so will add on one event listner on button.
const choices = document.querySelectorAll(".choice");

// generating some random number from computer
const getCompChoice = () => {
	// storing all 3 options into array to get random out of three using math.random methon in JS.
	const options = ["rock", "paper", "scissor"];
	const randomIdx = Math.floor(Math.random() * 3);
	return options[randomIdx];
}

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const msg = document.querySelector("#msg");

const drawGame = () =>  {
	msg.innerText = 'Game Draw!. Play Again!';
	msg.style.backgroundColor = "black";
}

const showWinner = (userWin, userChoice, compChoice) => {
	if( userWin ) {
		userScore++
		userScorePara.innerText = userScore;
		msg.innerText = `You Win!. Your ${userChoice} beats ${compChoice}`;
		msg.style.backgroundColor = "green";
	}
	else {
		compScore++
		compScorePara.innerText = compScore;
		msg.innerText = `You Loose!. ${compChoice} beats your ${userChoice}`;
		msg.style.backgroundColor = "red";
	}
}

// For generating computer choice
const playGame = (userChoice) => {
	// console.log("User Choice =", userChoice);
const compChoice = getCompChoice();
	// console.log("Computer Choice =", compChoice);

if( compChoice === userChoice ) {
	drawGame(); // game is draw.
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
	showWinner(userWin, userChoice, compChoice);
}
};

// For generating user choice.
// for each click on any of three image through choice button we are applying on individual choices div,  will apply one eventlistner namely click which will apply this function.
choices.forEach((choice) => {
	choice.addEventListener("click", () => {
		const userChoice = choice.getAttribute("id");
		playGame(userChoice);
	});
})
})