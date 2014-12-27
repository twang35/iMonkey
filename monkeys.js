var run;
var speed = 0;
var output = "";
var dict = {};

var numLetters = 0;
var numIMonkeys = 0;

function driver() {
	randomText();
	run = setTimeout("driver()", 1000/(10+speed));
}

function hireIMonkey() {
	numIMonkeys += 1;
	document.getElementById("numIMonkeys").innerHTML = "<b>iMonkeys:</b> " + numIMonkeys + "</p>";

	speed += 1;
	clearTimeout(run);
	driver();
}

function randomText() {
	numLetters += 1;
	document.getElementById("numLetters").innerHTML = "<b>Letters:</b> " + numLetters + "</p>";

	if (output.length > 40) {
		// output = output.substring(1);
		clearText();
	}

	output += String.fromCharCode(65 + Math.floor(Math.random()*26));

	document.getElementById("out").innerHTML = output;
}

function stopText() {
	clearTimeout(run);
}

function clearText() {
	output = "";
	document.getElementById("out").innerHTML = output;
}
 
// Do a jQuery Ajax request for the text dictionary
$.get( "ospd.txt", function( txt ) {
    // Get an array of all the words
    var words = txt.split( "\n" );
 
    // And add them as properties to the dictionary lookup
    // This will allow for fast lookups later
    for ( var i = 0; i < words.length; i++ ) {
        dict[ words[i] ] = true;
    }
   
    // The game would start after the dictionary was loaded
    // startGame();
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