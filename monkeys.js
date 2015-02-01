var run;
var time = 0;
var output = "";
var dict = {};
var dictArray = [];
var checkList = [];

var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var alphaDouble = ["AA","AB","AC","AD","AE","AF","AG","AH","AI","AJ","AK","AL","AM","AN","AO","AP","AQ","AR","AS","AT","AU","AV","AW","AX","AY","AZ","BA","BB","BC","BD","BE","BF","BG","BH","BI","BJ","BK","BL","BM","BN","BO","BP","BQ","BR","BS","BT","BU","BV","BW","BX","BY","BZ","CA","CB","CC","CD","CE","CF","CG","CH","CI","CJ","CK","CL","CM","CN","CO","CP","CQ","CR","CS","CT","CU","CV","CW","CX","CY","CZ","DA","DB","DC","DD","DE","DF","DG","DH","DI","DJ","DK","DL","DM","DN","DO","DP","DQ","DR","DS","DT","DU","DV","DW","DX","DY","DZ","EA","EB","EC","ED","EE","EF","EG","EH","EI","EJ","EK","EL","EM","EN","EO","EP","EQ","ER","ES","ET","EU","EV","EW","EX","EY","EZ","FA","FB","FC","FD","FE","FF","FG","FH","FI","FJ","FK","FL","FM","FN","FO","FP","FQ","FR","FS","FT","FU","FV","FW","FX","FY","FZ","GA","GB","GC","GD","GE","GF","GG","GH","GI","GJ","GK","GL","GM","GN","GO","GP","GQ","GR","GS","GT","GU","GV","GW","GX","GY","GZ","HA","HB","HC","HD","HE","HF","HG","HH","HI","HJ","HK","HL","HM","HN","HO","HP","HQ","HR","HS","HT","HU","HV","HW","HX","HY","HZ","IA","IB","IC","ID","IE","IF","IG","IH","II","IJ","IK","IL","IM","IN","IO","IP","IQ","IR","IS","IT","IU","IV","IW","IX","IY","IZ","JA","JB","JC","JD","JE","JF","JG","JH","JI","JJ","JK","JL","JM","JN","JO","JP","JQ","JR","JS","JT","JU","JV","JW","JX","JY","JZ","KA","KB","KC","KD","KE","KF","KG","KH","KI","KJ","KK","KL","KM","KN","KO","KP","KQ","KR","KS","KT","KU","KV","KW","KX","KY","KZ","LA","LB","LC","LD","LE","LF","LG","LH","LI","LJ","LK","LL","LM","LN","LO","LP","LQ","LR","LS","LT","LU","LV","LW","LX","LY","LZ","MA","MB","MC","MD","ME","MF","MG","MH","MI","MJ","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NB","NC","ND","NE","NF","NG","NH","NI","NJ","NK","NL","NM","NN","NO","NP","NQ","NR","NS","NT","NU","NV","NW","NX","NY","NZ","OA","OB","OC","OD","OE","OF","OG","OH","OI","OJ","OK","OL","OM","ON","OO","OP","OQ","OR","OS","OT","OU","OV","OW","OX","OY","OZ","PA","PB","PC","PD","PE","PF","PG","PH","PI","PJ","PK","PL","PM","PN","PO","PP","PQ","PR","PS","PT","PU","PV","PW","PX","PY","PZ","QA","QB","QC","QD","QE","QF","QG","QH","QI","QJ","QK","QL","QM","QN","QO","QP","QQ","QR","QS","QT","QU","QV","QW","QX","QY","QZ","RA","RB","RC","RD","RE","RF","RG","RH","RI","RJ","RK","RL","RM","RN","RO","RP","RQ","RR","RS","RT","RU","RV","RW","RX","RY","RZ","SA","SB","SC","SD","SE","SF","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SP","SQ","SR","SS","ST","SU","SV","SW","SX","SY","SZ","TA","TB","TC","TD","TE","TF","TG","TH","TI","TJ","TK","TL","TM","TN","TO","TP","TQ","TR","TS","TT","TU","TV","TW","TX","TY","TZ","UA","UB","UC","UD","UE","UF","UG","UH","UI","UJ","UK","UL","UM","UN","UO","UP","UQ","UR","US","UT","UU","UV","UW","UX","UY","UZ","VA","VB","VC","VD","VE","VF","VG","VH","VI","VJ","VK","VL","VM","VN","VO","VP","VQ","VR","VS","VT","VU","VV","VW","VX","VY","VZ","WA","WB","WC","WD","WE","WF","WG","WH","WI","WJ","WK","WL","WM","WN","WO","WP","WQ","WR","WS","WT","WU","WV","WW","WX","WY","WZ","XA","XB","XC","XD","XE","XF","XG","XH","XI","XJ","XK","XL","XM","XN","XO","XP","XQ","XR","XS","XT","XU","XV","XW","XX","XY","XZ","YA","YB","YC","YD","YE","YF","YG","YH","YI","YJ","YK","YL","YM","YN","YO","YP","YQ","YR","YS","YT","YU","YV","YW","YX","YY","YZ","ZA","ZB","ZC","ZD","ZE","ZF","ZG","ZH","ZI","ZJ","ZK","ZL","ZM","ZN","ZO","ZP","ZQ","ZR","ZS","ZT","ZU","ZV","ZW","ZX","ZY","ZZ",];

var wordCount = 0;

var primateName = ["iMonkey", "iGorilla", "King Kong", "Monkey King"];
var primateIncr = [10, 100, 200, 1000];
var primateSpeed = [1, 10, 20, 40];

var JGoodallCost = 100;
var doubleLettersCost = 1000;

var baseTime = 500;
var speedMult = 1;
var letterSpeed = 0;
var makeFaster = false;

var pause = 0;

var todo = [];

var Player = {
      primateNum: [0,0,0,0],
      primateCost: [10,100,200,1000],
      letterRate: 1,   // single, double, triple per tick
      bBillsMult: 1,
      bBills: 10,
      numLetters: 0
    };
    
setTimeout('document.getElementById("firstLoad").innerHTML = \'<h3 style="margin-top: 0px;">Load A Text<h3>\'', 1000);

function driver() {
	if (isFinite(time)) {
		randomText();
		setTimeout("driver()", time);
	}
}

// Buy Things

function hire(type, num) {
	if (Player.bBills >= Player.primateCost[type]) {
		Player.primateNum[type] += 1;
		changeBBills(-Player.primateCost[type]);

		Player.primateCost[type] += primateIncr[type];
		document.getElementById(primateName[type]+"Cost").innerHTML = "Banana Bills: " + Player.primateCost[type];

		document.getElementById("num"+primateName[type]).innerHTML = "<b>"+primateName[type]+"s:</b> " + Player.primateNum[type];

		// clearTimeout(run);
		calcTime();
		driver();
	}
	else {
		setTimeout('document.getElementById(primateName['+type+']+"Cost").innerHTML = "Banana Bills: " + Player.primateCost['+type+'];', 1000);
		document.getElementById(primateName[type]+"Cost").innerHTML = "<h4>" + "Banana Bills: " + Player.primateCost[type] + "</h4>";
	}
}

function buyJaneGoodall() {
	if (Player.bBills < JGoodallCost) {
		setTimeout('document.getElementById("buyJGoodallCost").innerHTML = "Banana Bills: " + JGoodallCost;', 1000);
		document.getElementById("buyJGoodallCost").innerHTML = "<h4>" + "Banana Bills: " + JGoodallCost + "</h4>";
	}
	else {
		Player.bBillsMult *= 2;

		changeBBills(-100);

		document.getElementById("JGoodallBTN").disabled = true;

		document.getElementById("buyJGoodallCost").innerHTML = "<b>Earned Banana <br>Bills x2</b>";
	}
}

function buyDoubleLetters() {
	if (Player.bBills < doubleLettersCost) {
		setTimeout('document.getElementById("doubleLettersCost").innerHTML = "Banana Bills: " + doubleLettersCost;', 1000);
		document.getElementById("doubleLettersCost").innerHTML = "<h4>" + "Banana Bills: " + doubleLettersCost + "</h4>";
	}
	else {
		Player.letterRate *= 2;

		changeBBills(-1000);

		document.getElementById("doubleLettersBTN").disabled = true;

		document.getElementById("doubleLettersCost").innerHTML = "<b>Each monkey types<br>two letters at a time</b>";
	}
}

function calcTime() {
	var monkeySum = 0;
	for (var i = 0; i < Player.primateNum.length; i++) {
		monkeySum += Player.primateNum[i]*primateSpeed[i];
	}
	time = baseTime/monkeySum/speedMult;
	// document.getElementById("speed").innerHTML = "Letters Per Second: " + Math.floor(700/time + .5);
}

function changeBBills(change) {
	if (change>0 && Player.bBillsMult == 2) 
		change += change;
	Player.bBills += change;
	document.getElementById("bBills").innerHTML = "<b>Banana Bills: </b> " + Player.bBills;
}

function manualMoney() {
	changeBBills(1);
}

function randomText() {
	if (output.length > 40) {
		output = output.substring(1);
		clearText();
	}

	output += genLetters();

	if (makeFaster) {
		if (output.length > 39) {
			document.getElementById("out").innerHTML = output;
			output = "";
			document.getElementById("numLetters").innerHTML = "<b>Letters:</b> " + Player.numLetters + "</p>";
		}
	}
	else {
		document.getElementById("out").innerHTML = output;
		document.getElementById("numLetters").innerHTML = "<b>Letters:</b> " + Player.numLetters + "</p>";
	}
}

function genLetters() {
	Player.numLetters += Player.letterRate;
	letterSpeed += Player.letterRate;

	if (Player.letterRate == 1) {
		var letter = alphabet[Math.floor(Math.random()*26)];

		newLetter(letter);
		checkOriginal(letter);

		return letter;
	}
	else if (Player.letterRate == 2) {
		var letters = alphaDouble[Math.floor(Math.random()*676)];

		newLetter(letters.charAt(0));
		checkOriginal(letters.charAt(0));
		newLetter(letters.charAt(1));
		checkOriginal(letters.charAt(1));

		return letters;
	}
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

// Removed run variable to increase Letters Per Second
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

accurateSpeed();
function accurateSpeed() {
	document.getElementById("speed").innerHTML = "Letters Per Second: " + letterSpeed;
	letterSpeed = 0;
	setTimeout("accurateSpeed()", 1000);
}

function speedUp() {
	makeFaster = !makeFaster;
	if (makeFaster)
		document.getElementById("increaseSpeed").innerHTML = "Frame Rate: Low";
	else
		document.getElementById("increaseSpeed").innerHTML = "Frame Rate: High";
}

function test() {
	document.getElementById("speedMultBTN").style.visibility="visible";
	document.getElementById("moneyBTN").style.visibility="visible";
	document.getElementById("monkeyKingBTN").style.visibility="visible";
}

function speedMultFunct() {
	if(speedMult == 32) {
		speedMult = 0.5;
	}
	speedMult *= 2;

	document.getElementById("speedMultBTN").innerHTML = "Speed: " + speedMult + "x";

	calcTime();
}

function giveMeMoney() {
	changeBBills(10000);
}

function makeMonkeyKings() {
	changeBBills(1000000000);
	var i;
	for (i = 0; i < 100; i++) {
		hire(3, 1);
	}
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
	
	//Once dictionary is loaded, start the game loop
	calcTime();
	driver();
});

//Save Gamegit s

function SaveGame() {
  window.localStorage.setItem("iMonkey-Player", JSON.stringify(Player)); //set localstorage for player info
  console.log("Game Saved");
}

function LoadGame() {
  $.extend(true, Player, JSON.parse(window.localStorage.getItem("iMonkey-Player"))); //load player
  console.log("Game Loaded");
  
  //Update GUI
  document.getElementById("bBills").innerHTML = "<b>Banana Bills: </b> " + Player.bBills;
  document.getElementById("numLetters").innerHTML = "<b>Letters:</b> " + Player.numLetters + "</p>";
  
  for (var el in Player.primateNum) {
  	document.getElementById(primateName[el]+"Cost").innerHTML = "Banana Bills: " + Player.primateCost[el];
		document.getElementById("num"+primateName[el]).innerHTML = "<b>"+primateName[el]+"s:</b> " + Player.primateNum[el];
  }
  
  if (Player.bBillsMult == 2) {
		document.getElementById("JGoodallBTN").disabled = true;
		document.getElementById("buyJGoodallCost").innerHTML = "<b>Earned Banana <br>Bills x2</b>";
  }
  
  if (Player.letterRate == 2) {
		document.getElementById("doubleLettersBTN").disabled = true;
		document.getElementById("doubleLettersCost").innerHTML = "<b>Each monkey types<br>two letters at a time</b>";
  }
}

function ResetGame() {
  window.localStorage.removeItem("iMonkey-Player"); //delete
  console.log("Game Reset");
  window.location.reload(); //refresh page to restart
}

LoadGame();

