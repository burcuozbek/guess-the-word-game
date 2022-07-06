// WORD LIST
var wordArray = [
    "ABOUT",
    "ABOVE",
    "ACTOR",
    "ACUTE",
    "AFTER",
    "AGAIN",
    "ALARM",
    "ALBUM",
    "ALIVE",
    "ALONE",
    "ANGER",
    "APPLY",
    "ARENA",
    "ARRAY",
    "ASSET",
    "AUDIO",
    "AUDIT",
    "AVOID",
    "AWARE",
    "BASIC",
    "BASIS",
    "BEGIN",
    "BELOW",
    "BLACK",
    "BLOCK",
    "BOARD",
    "BLOOD",
    "BOUND",
    "BREAD",
    "BOOST",
    "BREAK",
    "BREED",
    "BROAD",
    "BROKE",
    "BUILD",
    "CABLE",
    "CARRY",
    "CATCH",
    "CHAIR",
    "CHAIN",
    "CHART",
    "CHEAP",
    "CHEST",
    "CHILD",
    "CIVIL",
    "CLAIM",
    "CLEAN",
    "CLICK",
    "CLOCK",
    "CLOSE",
    "CLEAN",
    "CLICK",
    "COVER",
    "CRASH",
    "CRIME",
    "CURVE",
    "CYCLE",
    "DAILY",
    "DANCE",
    "DEATH",
    "DELAY",
    "DEPTH",
    "DOZEN",
    "DRAFT",
    "DRILL",
    "DRINK",
    "EAGER",
    "EARTH",
    "EMPTY",
    "ENJOY",
    "ELITE",
    "ENTER",
    "ERROR",
    "EXIST",
    "EVENT",
    "EXACT",
    "EXTRA",
    "FALSE",
    "FIBER",
    "FIELD",
    "FIGHT",
    "FIXED",
    "FINAL",
    "FLASH",
    "FLOOR",
    "FOCUS",
    "FOUND",
    "FRAME",
    "FRONT",
    "GIVEN",
    "GLASS",
    "GRADE",
    "GREAT",
    "GROSS",
    "GUARD",
    "GUIDE",
    "HEART",
    "HOTEL",
    "HOUSE",
    "INDEX",
    "IMAGE",
    "INPUT",
    "JOINT",
    "JUDGE",
    "LABEL",
    "LARGE",
    "LASER",
    "LEARN",
    "LEVEL",
    "LIMIT",
    "LOWER",
    "LUCKY",
    "LUNCH",
    "MAGIC",
    "MAJOR",
    "MINOR",
    "MATCH",
    "MEANT",
    "MINUS",
    "MIXED",
    "MOTOR",
    "MOUTH",
    "MUSIC",
    "NEVER",
    "NIGHT",
    "OCCUR",
    "OFFER",
    "ORDER",
    "OTHER",
    "PAINT",
    "PAPER",
    "PEACE",
    "PHASE",
    "PHONE",
    "PIECE",
    "PITCH",
    "PLAIN",
    "PLANE",
    "PLATE",
    "POUND",
    "POWER",
    "PRESS",
    "PRIDE",
    "PROOF",
    "PRIZE",
    "QUICK",
    "QUIET",
    "QUITE",
    "RAISE",
    "RANGE",
    "RAPID",
    "RATIO",
    "REACH",
    "RIGHT",
    "WRONG",
    "ROUTE",
    "SCALE",
    "SCOPE",
    "SCORE",
    "SHAPE",
    "SENSE",
    "SHAPE",
    "SHELF",
    "SHIFT",
    "SHIFT",
    "SHEET",
    "SHARP",
    "SHOCK",
    "SHORT",
    "SHOOT",
    "SKILL",
    "SKULL",
    "SLEEP",
    "SLIDE",
    "SMALL",
    "SMART",
    "SMILE",
    "SOLID",
    "SOLVE",
    "SOUND",
    "SPACE",
    "SPARE",
    "SPEED",
    "SPEND",
    "SPLIT",
    "STAGE",
    "START",
    "STATE",
    "STEEL",
    "STILL",
    "STONE",
    "STOCK",
    "STOVE",
    "STORY",
    "STORM",
    "STUCK",
    "STUFF",
    "STYLE",
    "SUPER",
    "TABLE",
    "TEACH",
    "THING",
    "TITLE",
    "TOTAL",
    "TRACK",
    "TRADE",
    "TRUTH",
    "UNION",
    "UPPER",
    "URBAN",
    "USAGE",
    "USUAL",
    "VALUE",
    "VALID",
    "VIDEO",
    "VIRUS",
    "WASTE",
    "WATER",
    "WATCH",
    "WHITE",
    "WORLD",
    "WRITE",
];
localStorage.removeItem("game");
//VARIABLES
let guesses = 4;
var answersInput = document.querySelector(".answer-input");
var wordList = document.querySelector(".word-list");
var result = document.getElementById("result");
var guessContainer = document.querySelector(".guess-container");
var guessesLeft = document.querySelector(".guesses-left");
var game = document.querySelector(".game");
var helper = document.querySelector(".helper");
var timerDiv = document.getElementById("timer");

//SUBMIT WORDS
document.body.addEventListener("keyup", pressKeyboard);

function pressKeyboard(e) {
    e.preventDefault();
    if (e.keyCode === 13) {

        if (localStorage.getItem("game") === null) {
            guess();
        } else if (localStorage.getItem("game") === "1") {
            guess1();

        } else if (localStorage.getItem("game") === "2") {
            guess2();
        }
        if (guesses < 0) {
            guessesLeft.style.display = "none";
        }
    }
}

//SELECT A RANDOM WORD FROM ARRAY
var randomWords = wordArray.sort(() => 0.5 - Math.random());

let selectedWords = randomWords.slice(0, 10);
var password = selectedWords[Math.floor(Math.random() * selectedWords.length)];

let selectedWords1 = randomWords.slice(11, 21);
var password1 =
    selectedWords1[Math.floor(Math.random() * selectedWords1.length)];

let selectedWords2 = randomWords.slice(22, 32);
var password2 =
    selectedWords2[Math.floor(Math.random() * selectedWords2.length)];
console.log(password, password1, password2);


//ADD WORDS TO CHECKLIST AND COMPARING WORDS
function guess() {
    var answers = answersInput.value
        .toString()
        .split("ı")
        .join("i")
        .split("İ")
        .join("I")
        .replace("ğ", "g")
        .replace("ç", "c")
        .replace("ü", "u")
        .replace("ö", "o")
        .replace("ş", "s")
        .toUpperCase();

    if (selectedWords.includes(answers)) {
        if (answers === password) {
            gameWon();
            guesses = 4;
            localStorage.setItem("game", "1");
        }
        var answersArr = answers.split("");
        var passwordArr = password.split("");
        var arrays = [];
        arrays.push(answersArr);
        arrays.push(passwordArr);

        var resultArr = arrays.shift().filter(function(e) {
            return arrays.every(function(a) {
                return a.indexOf(e) !== -1;
            });
        });

        answersInput.value = "";
        var p = document.createElement("p");
        resultArr.forEach((item, key) => {
            answers = answers.replaceAll(
                item,
                '<span style="color:#0f0;">' + item + "</span>"
            );
        });
        p.innerHTML = answers;
        guessContainer.appendChild(p);
    } else {
        answersInput.value = "";
    }

    guesses--;
    executeAsynchronously([
        ["Guesses Left: " + guesses + "/4", "guesses-left", 30]
    ]);
    guessesLeft.innerText = "";

    if (guesses === 0) {
        gameOver();
        clearInterval(counter);
        timerDiv.innerHTML = "00:00";
    }
}

function guess1() {
    guessesLeft.style.display = "inline";
    var answers = answersInput.value
        .toString()
        .split("ı")
        .join("i")
        .split("İ")
        .join("I")
        .replace("ğ", "g")
        .replace("ç", "c")
        .replace("ü", "u")
        .replace("ö", "o")
        .replace("ş", "s")
        .toUpperCase();

    if (selectedWords1.includes(answers)) {
        if (answers === password1) {
            gameWon1();

            guesses = 3;
            localStorage.setItem("game", "2");

        }
        var answersArr = answers.split("");
        var passwordArr = password1.split("");
        var arrays = [];
        arrays.push(answersArr);
        arrays.push(passwordArr);

        var resultArr = arrays.shift().filter(function(e) {
            return arrays.every(function(a) {
                return a.indexOf(e) !== -1;
            });
        });
        answersInput.value = "";
        var p = document.createElement("p");
        resultArr.forEach((item, key) => {
            answers = answers.replaceAll(
                item,
                '<span style="color:#0f0;">' + item + "</span>"
            );
        });
        p.innerHTML = answers;
        guessContainer.appendChild(p);
    } else {
        answersInput.value = "";
    }

    guesses--;
    executeAsynchronously([
        ["Guesses Left: " + guesses + "/3", "guesses-left", 30]
    ]);
    guessesLeft.innerText = "";
    if (guesses === 0) {
        gameOver1();
    }
}

function guess2() {
    guessesLeft.style.display = "inline";
    var answers = answersInput.value
        .toString()
        .split("ı")
        .join("i")
        .split("İ")
        .join("I")
        .replace("ğ", "g")
        .replace("ç", "c")
        .replace("ü", "u")
        .replace("ö", "o")
        .replace("ş", "s")
        .toUpperCase();

    if (selectedWords2.includes(answers)) {
        if (answers === password2) {
            gameWon2();

        }
        var answersArr = answers.split("");
        var passwordArr = password2.split("");
        var arrays = [];
        arrays.push(answersArr);
        arrays.push(passwordArr);

        var resultArr = arrays.shift().filter(function(e) {
            return arrays.every(function(a) {
                return a.indexOf(e) !== -1;
            });
        });

        answersInput.value = "";
        var p = document.createElement("p");
        resultArr.forEach((item, key) => {
            answers = answers.replaceAll(
                item,
                '<span style="color:#0f0;">' + item + "</span>"
            );
        });
        p.innerHTML = answers;
        guessContainer.appendChild(p);
    } else {
        answersInput.value = "";
    }

    guesses--;

    executeAsynchronously([
        ["Guesses Left: " + guesses + "/2", "guesses-left", 30],
    ]);
    guessesLeft.innerText = "";

    if (guesses === 0) {
        gameOver2();
    }
}

//GAME WIN/LOSE FUNCTIONS
function gameWon() {
    gameStatus = true;
    guessesLeft.style.display = "none";
    var txt_1 = selectedWords1.toString();
    wordList.innerHTML = "";
    executeAsynchronously([
        [txt_1, "word-list", 30]
    ]);
    clearInterval(counter);
    expires = new Date();
    expires.setSeconds(expires.getSeconds() + 30);
    timerDiv.innerHTML = "30:00";
    counter = setInterval(timer, 1);
}

function gameWon1() {
    result.innerHTML = "";
    gameStatus = true;
    guessesLeft.style.display = "none";
    var txt_2 = selectedWords2.toString();
    wordList.innerHTML = "";
    executeAsynchronously([
        [txt_2, "word-list", 30]
    ]);
    clearInterval(counter);
    expires = new Date();
    expires.setSeconds(expires.getSeconds() + 20);
    timerDiv.innerHTML = "20:00";
    counter = setInterval(timer, 1);
}

function gameWon2() {

    result.innerHTML = "";
    gameStatus = true;
    answersInput.disabled = true;
    executeAsynchronously([
        ["YOU WON!", "result", 50]
    ]);
    guesses = 0;
    clearInterval(counter);
    timerDiv.innerHTML = "console.log('WON')";
}

function gameOver() {
    guessesLeft.style.display = "none";
    gameStatus = true;
    answersInput.disabled = true;
    executeAsynchronously([
        ["GAME OVER! PASSWORD: " + password + ". PLAY AGAIN?", "result", 50],
    ]);

    clearInterval(counter);
    timerDiv.innerHTML = "00:00";
    guesses = 0;
}

function gameOver1() {
    guessesLeft.style.display = "none";
    gameStatus = true;
    answersInput.disabled = true;
    executeAsynchronously([
        ["GAME OVER! PASSWORD: " + password1 + ". PLAY AGAIN?", "result", 50],
    ]);
    clearInterval(counter);
    timerDiv.innerHTML = "00:00";
    guesses = 0;
}

function gameOver2() {
    guessesLeft.style.display = "none";
    gameStatus = true;
    answersInput.disabled = true;
    executeAsynchronously([
        ["GAME OVER! PASSWORD: " + password2 + ". PLAY AGAIN?", "result", 50],
    ]);
    clearInterval(counter);
    timerDiv.innerHTML = "00:00";
    guesses = 0;
}

//ASYNCHRONOUSLY WRITING TEXTS
var txt1 = "GUESS THE PASSWORD";
var txt2 = selectedWords.toString();
var txt3 = "CHECKLIST";

window.addEventListener("load", function() {
    executeAsynchronously([
        [txt1, "word-title", 50],
        [txt2, "word-list", 30],
        [txt3, "check-list", 50],
    ]);
});

async function executeAsynchronously(texts) {
    texts.forEach(async(args) => {
        if (texts.indexOf(args) == 0) {
            const node = document.getElementById(args[1]);
            for (let i = 0; i <= args[0].length; i++) {
                setTimeout(() => {
                    node.textContent += args[0].charAt(i);
                }, i * args[2]);
            }
        } else {
            setTimeout(() => {
                const node = document.getElementById(args[1]);
                for (let i = 0; i <= args[0].length; i++) {
                    setTimeout(() => {
                        node.textContent += args[0].charAt(i);
                    }, i * args[2]);
                }
            }, 1500);
        }
    });
}

//TIMER
var expires = new Date();
expires.setSeconds(expires.getSeconds() + 60); // set timer to 60 seconds
var counter = setInterval(timer, 1);

function timer() {
    var timeDiff = expires - new Date();
    if (timeDiff <= 0) {
        if (wordList.innerText === selectedWords.toString()) {
            gameOver();
            timerDiv.innerHTML = "00:00";
            clearInterval(counter);
        }
        if (wordList.innerText === selectedWords1.toString()) {
            gameOver1();
            timerDiv.innerHTML = "00:00";
            clearInterval(counter);
        }
        if (wordList.innerText === selectedWords2.toString()) {
            gameOver2();
            timerDiv.innerHTML = "00:00";
            clearInterval(counter);
        }

    } else {
        var seconds = new Date(timeDiff).getSeconds();
        var milliSeconds = (new Date(timeDiff).getMilliseconds() / 10).toFixed(0);
        var seconds = seconds < 10 ? "0" + seconds : seconds;
        var milliSeconds = milliSeconds < 10 ? "0" + milliSeconds : milliSeconds;
        timerDiv.innerHTML = seconds + ":" + milliSeconds; // watch for spelling
    }
}