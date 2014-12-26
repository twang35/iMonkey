var generate = false;

function randomText() {

    var outputField = document.getElementById("out");

    if (generate == true) {
        outputField.innerHTML += String.fromCharCode(65 + Math.floor(Math.random()*26));
        setTimeout("randomText()", 500)
    }
}

function startText() {
    generate = true;
    randomText();
}

function stopText() {
    generate = false;
}

function clearText() {
    document.getElementById("out").innerHTML = "";
}