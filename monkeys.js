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
var monkeyCost = 10;
var numIMonkeys = 0;

var pause = 0;

var typed;
var todo = [].slice.call(document.getElementById("todo").innerHTML.toUpperCase());

function driver() {
	randomText();
	run = setTimeout("driver()", time);
}

function hireIMonkey() {
	if (bBills >= monkeyCost) {
		numIMonkeys += 1;
		changeBBills(-monkeyCost);
		changeMonkeyCost(monkeyCost+10);
		document.getElementById("numIMonkeys").innerHTML = "<b>iMonkeys:</b> " + numIMonkeys;

		clearTimeout(run);
		calcTime();
		driver();
	}
	else {
		before = document.getElementById("monkeyCost").innerHTML;
		setTimeout("needMoBills()", 1000);
		document.getElementById("monkeyCost").innerHTML = "<h4>" + "Banana Bills: " + monkeyCost + "</h4>";
	}
}

function needMoBills() {
	document.getElementById("monkeyCost").innerHTML = "Banana Bills: " + monkeyCost;
}

function calcTime() {
	time = 500/(9+numIMonkeys);
	document.getElementById("speed").innerHTML = "Letters Per Second: " + Math.floor(700/time + .5);
}

function changeMonkeyCost(change) {
	monkeyCost = change;
	document.getElementById("monkeyCost").innerHTML = "Banana Bills: " + monkeyCost;
}

function changeBBills(change) {
	bBills += change;
	document.getElementById("bBills").innerHTML = "<b>Banana Bills: </b> " + bBills;
}

function randomText() {
	numLetters += 1;
	document.getElementById("numLetters").innerHTML = "<b>Letters:</b> " + numLetters + "</p>";

	if (output.length > 40) {
		// output = output.substring(1);
		clearText();
	}

	var letter = String.fromCharCode(65 + Math.floor(Math.random()*26));
	output += letter;

	newLetter(letter);
	shakespeare(letter);

	document.getElementById("out").innerHTML = output;
}

function shakespeare(letter) {
	// console.log(todo);
	if (letter == todo[0] || /[^a-zA-Z]/.test(todo[0])) {
		todo.shift();

		var inner = document.getElementById("todo").innerHTML;
		
		document.getElementById("typed").innerHTML += inner.charAt(0);
		document.getElementById("todo").innerHTML = inner.substring(1, inner.length);

		if (inner.length == 1) {
			// clearTimeout(run);
			console.log("You win!");
			// pauseText();
			document.getElementById("todo").innerHTML = "<h2>You Won!</h2>";
		}
	}
}

function pauseText() {
	if (pause == 0) {
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

	// not found
	// alert("Not Found: " + index);
	return -1;
}

function test() {
	document.getElementById("typedWords").innerHTML = todo;
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

// function loadRandJ() {
// 	document.getElementById("todo").innerHTML = romeoAndJuliet;
// }
 
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