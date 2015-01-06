var run;
var time = 0;
var output = "";
var dict = {};
var dictArray = [];
var checkList = [];

var wordCount = 0;
var numLetters = 0;

var bBills = 10;
var bBillsMult = 1;

var primateName = ["iMonkey", "iGorilla", "King Kong", "Monkey King"];
var primateIncr = [10, 100, 200, 1000];
var primateCost = [10, 100, 200, 1000];
var primateSpeed = [1, 10, 20, 40];
var primateNum = [0, 0, 0, 0];

var JGoodallCost = 100;

var baseTime = 500;
var speedMult = 1;
var letterSpeed = 0;

var pause = 0;

var todo = [];

setTimeout('document.getElementById("firstLoad").innerHTML = \'<h3 style="margin-top: 0px;">Load A Text<h3>\'', 1000);

function driver() {
	randomText();
	run = setTimeout("driver()", time);
}

// Buy Things

function hire(type, num) {
	if (bBills >= primateCost[type]) {
		primateNum[type] += 1;
		changeBBills(-primateCost[type]);

		primateCost[type] += primateIncr[type];
		document.getElementById(primateName[type]+"Cost").innerHTML = "Banana Bills: " + primateCost[type];

		document.getElementById("num"+primateName[type]).innerHTML = "<b>"+primateName[type]+"s:</b> " + primateNum[type];

		clearTimeout(run);
		calcTime();
		driver();
	}
	else {
		setTimeout('document.getElementById(primateName['+type+']+"Cost").innerHTML = "Banana Bills: " + primateCost['+type+'];', 1000);
		document.getElementById(primateName[type]+"Cost").innerHTML = "<h4>" + "Banana Bills: " + primateCost[type] + "</h4>";
	}
}

function buyJaneGoodall() {
	if (JGoodallCost == 0 || bBills < JGoodallCost) {
		setTimeout('document.getElementById("buyJGoodallCost").innerHTML = "Banana Bills: " + JGoodallCost;', 1000);
		document.getElementById("buyJGoodallCost").innerHTML = "<h4>" + "Banana Bills: " + JGoodallCost + "</h4>";
	}
	else {
		bBillsMult *= 2;

		changeBBills(-100);

		document.getElementById("buyJGoodallCost").innerHTML = "<b>Earned Banana <br>Bills x2</b>";
	}
}

function calcTime() {
	var monkeySum = 0;
	for (var i = 0; i < primateNum.length; i++) {
		monkeySum += primateNum[i]*primateSpeed[i];
	}
	time = baseTime/monkeySum/speedMult;
	// document.getElementById("speed").innerHTML = "Letters Per Second: " + Math.floor(700/time + .5);
}

function changeBBills(change) {
	if (change>0 && bBillsMult == 2) 
		change += change;
	bBills += change;
	document.getElementById("bBills").innerHTML = "<b>Banana Bills: </b> " + bBills;
}

function manualMoney() {
	changeBBills(1);
}

function randomText() {
	numLetters += 1;
	letterSpeed += 1;
	document.getElementById("numLetters").innerHTML = "<b>Letters:</b> " + numLetters + "</p>";

	if (output.length > 40) {
		// output = output.substring(1);
		clearText();
	}

	var letter = String.fromCharCode(65 + Math.floor(Math.random()*26));
	output += letter;

	newLetter(letter);
	checkOriginal(letter);

	document.getElementById("out").innerHTML = output;
}

function checkOriginal(letter) {
	// console.log(todo);
	if (todo[0] == "<") {
		todo.shift();
		todo.shift();
		todo.shift();
		todo.shift();

		var inner = document.getElementById("todo").innerHTML;

		document.getElementById("typed").innerHTML += "<br>";
		document.getElementById("todo").innerHTML = inner.substring(4, inner.length);
		return;
	}
	if (letter == todo[0] || /[^a-zA-Z]/.test(todo[0])) {
		todo.shift();

		var inner = document.getElementById("todo").innerHTML;
		
		document.getElementById("typed").innerHTML += inner.charAt(0);
		document.getElementById("todo").innerHTML = inner.substring(1, inner.length);

		if (inner.length == 1) {
			console.log("You win!");
			// pauseText();
			var typed = document.getElementById("typed").innerHTML;
			document.getElementById("typed").innerHTML = '<h2>You Win!</h2><br><img src="giraffe.jpeg"><br><h1>DING HO!</h1><br><button type="button" class="btn btn-default" onclick="loadAgain()">Load Another Text</button><br><br>' + typed;
		}
	}
}

function loadAgain() {
	document.getElementById("textLoaded").style.display="none";
	document.getElementById("loadText").style.display="inherit";

	document.getElementById("typed").innerHTML = '';
}

function pauseText() {
	if (pause == 0) {
		if (run == null) 
			return;
		clearTimeout(run);
		pause = 1;
		document.getElementById("pauseBTN").innerHTML = "Start";
	}
	else {
		pause = 0;
		driver();
		document.getElementById("pauseBTN").innerHTML = "Pause";
	}
}

function clearText() {
	output = "";
	document.getElementById("out").innerHTML = output;
}

function newLetter(letter) {
	for (var i = 0; i < checkList.length; i++) {
		checkList[i] += letter;
		var found = inArray(checkList[i]);
		
		var word = checkList[i];

		// console.log(word + ": " + found);

		if (found == -1) {
			// take off last letter, check to see if inside dictionary
			word = word.slice(0, -1);
			if (dict[word]) {
				foundWord(word);
			}

			// remove word from checkList
			checkList.splice(i, 1);
			i--;    // correct i because of removed element
		}
		else if (dictArray[found].length != word.length) {
			// nothing
		}
		else if (dictArray[found+1].indexOf(word) == 0) {
			// nothing
		}
		else { // final instance of word in dictionary
			// print word as found
			foundWord(checkList[i]);

			// remove word from checkList
			checkList.splice(i, 1);
			i--;    // correct i because of removed element
		}
	}
	checkList.push(letter);
}

function inArray(word) {
	// Binary Search for word inside of dictArray
	var start = 0;
	var end = dictArray.length - 1;
	var index = Math.floor(end/2);

	while (start != index){
		if (dictArray[index].indexOf(word) == 0) { // fix this
			// alert("Found it: " + index);
			return index;
		}
		else if(word > dictArray[index]) {
			start = index;
			index = Math.floor((start + end) / 2);
		}
		else { // word < dictArray[index]
			end = index;
			index = Math.floor((start + end) / 2);
		}
	}
	return -1;
}

function foundWord(word) {
	wordCount += 1;
	if (wordCount > 20) {
		wordCount = 0;
		document.getElementById("typedWords").innerHTML = "";
	}
	document.getElementById("typedWords").innerHTML = word + " <br> " + document.getElementById("typedWords").innerHTML
	changeBBills(word.length);
}
 
// Do a jQuery Ajax request for the text dictionary
$.get( "ospd.txt", function( txt ) {
	// Get an array of all the words
	dictArray = txt.split( "\n" );
 
	// And add them as properties to the dictionary lookup
	// This will allow for fast lookups later
	for ( var i = 0; i < dictArray.length; i++ ) {
		dict[ dictArray[i] ] = true;
	}
   
	// The game would start after the dictionary was loaded
	// startGame();
	console.log("Done");
});
 
// Takes in an array of letters and finds the longest
// possible word at the front of the letters
function findWord( letters ) {
	// Clone the array for manipulation
	var curLetters = letters.slice( 0 ), word = "";
   
	// Make sure the word is at least 3 letters long
	while ( curLetters.length > 2 ) {
		// Get a word out of the existing letters
		word = curLetters.join("");
   
		// And see if it's in the dictionary
		if ( dict[ word ] ) {
			// If it is, return that word
			return word;
		}
 
		// Otherwise remove another letter from the end
		curLetters.pop();
	}
}

function speedMultFunct() {
	if(speedMult == 32) {
		speedMult = 0.5;
	}
	speedMult *= 2;

	document.getElementById("speedMultBTN").innerHTML = "Speed: " + speedMult + "x";

	calcTime();
}

accurateSpeed();
function accurateSpeed() {
	document.getElementById("speed").innerHTML = "Letters Per Second: " + letterSpeed;
	letterSpeed = 0;
	setTimeout("accurateSpeed()", 1000);
}

function test() {
	document.getElementById("speedMultBTN").style.visibility="visible";
}