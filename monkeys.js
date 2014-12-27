var run;
var speed = 0;
var output = "";
var dict = {};
var dictArray = [];
var checkList = [];

var numLetters = 0;
var numIMonkeys = 0;

var pause = 0;

function driver() {
	randomText();
	run = setTimeout("driver()", 20000/(10+speed));
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

    var letter = String.fromCharCode(65 + Math.floor(Math.random()*26));
	output += letter;

    newLetter(letter);

	document.getElementById("out").innerHTML = output;
}

function pauseText() {
    if (pause == 0) {
	   clearTimeout(run);
       pause = 1;
       console.log(pause);
    }
    else {
        pause = 0;
        driver();
    }
}

function clearText() {
	output = "";
	document.getElementById("out").innerHTML = output;
}

function newLetter(letter) {
    console.log(checkList);
    for (var i = 0; i < checkList.length; i++) {
        checkList[i] += letter;
        var found = inArray(checkList[i]);
        
        var word = checkList[i];

        console.log(word + ": " + found);

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
    foundWord("blah");
}

function foundWord(word) {
    document.getElementById("typedWords").innerHTML = word + " <br> " + document.getElementById("typedWords").innerHTML
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