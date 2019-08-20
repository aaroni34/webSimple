var colors = [];
var numberSquares = 6;
//Select all the elements of the page
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("goal");
var messageDisplay = document. getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

//Add event click to ResetButton
resetButton.addEventListener("click", function(){
	randomColors();
});

//Add event click to easyButton
easyButton.addEventListener("click", function(){
	numberSquares = 3;
	this.classList.add("selected");
	hardButton.classList.remove("selected");
	randomColors();
});

//Add event click to hardButton
hardButton.addEventListener("click", function(){
	numberSquares = 6;
	this.classList.add("selected");
	easyButton.classList.remove("selected");
	randomColors();
	//If we come from easy selected, the other 3 squares are hidden --> show them
	for(i = 3; i < 6; i++){
		squares[i].style.display = "initial";
	}
});

//Default generation random colors and change displayGoal
randomColors();

for(var i = 0; i < squares.length; i++){
	//Add click events
	squares[i].addEventListener("click", function(){
		//Grab color of picked square
		var clickedColor = this.style.backgroundColor;
		//--- Check color --> CORRECT
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			//Change all squares to matched color
			for(var i = 0; i < colors.length; i++){
				squares[i].style.backgroundColor = clickedColor;
			}
			//Change h1 color
			h1.style.backgroundColor = pickedColor;
			//Change button to PLAY AGAIN
			resetButton.textContent = "Play Again?";
		}	
		//--- Check color --> NOT CORRECT	
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!";
		} 
	})
}

function randomColors (){
	colors = [];
	//Generate N rgb random colors
	for(var i = 0; i < numberSquares; i++){
		color1 = Math.floor((Math.random() * 255) + 1);
		color2 = Math.floor((Math.random() * 255) + 1);
		color3 = Math.floor((Math.random() * 255) + 1);

		rgb = "rgb(" + color1 + ", " + color2 + ", " + color3 + ")";
		colors.push(rgb);
		//Add the color to square
		squares[i].style.backgroundColor = colors[i];
	}
	//Check if is called by easyButton :: Delete the other 3 squares
	if(numberSquares < 6){
		while(i < squares.length){
			squares[i].style.display = "none";
			i++;
		}
	}
	//Take a new random color of the x generated
	pickedColor = colors[Math.floor((Math.random() * colors.length))];
	colorDisplay.textContent = pickedColor;

	//Erase message and change h1 background to default
	messageDisplay.textContent = "";
	h1.style.backgroundColor = "steelblue"

	//Put another time the default message NEW COLORS
	//Maybe is clicked after winning the game
	resetButton.textContent = "New Colors";
}