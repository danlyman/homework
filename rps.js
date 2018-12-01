myChoice = prompt("Rock, Paper, or Scissors?");

computerChoice = Math.random();

if(computerChoice<=.33){

	computerChoice = "Rock"
}

else if(computerChoice>.33 && computerChoice<=.66){

	computerChoice = "Paper"
}

else{
	computerChoice = "Scissors"
}

console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2){

	if(choice1===choice2){
		return "Tie!";
	}

	
	else if(choice1==="Rock"){

		if(choice2==="Scissors"){
			return "You beat Scissors!"
		}

		else{
			return "You lost to Paper"
		}
	}

	
	else if(choice1==="Paper"){
		if(choice2==="Rock"){
			return "You beat Rock!"
		}

		else{
			return "You lost to Scissors"
		}
	}

	
	else (choice1==="Scissors") 
	{
		if(choice2==="Paper"){
			return "You beat Paper!"
		}

		else{
			return "You lost to Rock"
		}
	}
}


compare(myChoice, computerChoice);