
function DiceFace()
{
	var self = this;
	self.faceValue;
}



function Players()
{
	var self = this;
	self.playerName;
	self.playerDiceNumber;
}


function Dice()
{
	var self = this;
	self.faces = [];

	for(var i = 1; i<=6; i++){
	var diceFace = new DiceFace();
		diceFace.faceValue = i;
		self.faces.push(diceFace);
	}

}


function Game(playerNamesArray)
{
	var self = this;
	var displayNameWithValue = "";
	var dice = new Dice();
	//var btn = document.getElementById("rollButton");

	self.listOfPlayer=[];
	for(var i in playerNamesArray)
	{
		//generates the random value number from 1-6
		var rand_value = Math.floor(Math.random() * (5-1+1)) + 1;
		
		var faceValue = dice.faces[rand_value].faceValue;
		

		//adding the players name into listofplayers 
		var players = new Players();
		players.playerName = playerNamesArray[i];
		players.playerDiceNumber = faceValue;
		

		self.listOfPlayer.push(players);

	
		/
}
function main()
{
	
	var game = new Game(['Bibek','Roshan','hello','amberland']);
	
}


main();