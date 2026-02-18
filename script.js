// ===== COUNTRY LIST =====
const countries = [
    "philippines",
    "malaysia",
    "japan",
    "chile",
    "brazil",
    "france",
    "germany",
    "thailand",
    "indonesia",
    "australia",
    "egypt",
    "united kingdom"
];

// ===== GAME VARIABLES =====
let secretCountry;
let attemptsLeft;
const maxAttempts = 5;
let gameOver = false;

// ===== ELEMENTS =====
const input = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitBtn");
const restartBtn = document.getElementById("restartBtn");
const message = document.getElementById("message");
const hint = document.getElementById("hint");

// ===== START GAME =====
function startGame(){
    secretCountry =
        countries[Math.floor(Math.random() * countries.length)];

    attemptsLeft = maxAttempts;
    gameOver = false;

    console.log("Secret country (for testing):", secretCountry);

    message.textContent = "";
    hint.textContent =
        `Hint: The country starts with '${secretCountry[0].toUpperCase()}'.`;

    input.value = "";
    document.body.style.background = "#f4f4f4";
}

// ===== CHECK GUESS =====
function checkGuess(){
    if(gameOver) return;

    let guess = input.value.trim().toLowerCase();

    attemptsLeft--;

    if(guess === secretCountry){
        message.textContent =
            "Congratulations! You guessed the country!";
        document.body.style.background = "#b8f5b8";
        gameOver = true;
        return;
    }

    if(attemptsLeft > 0){
        message.textContent =
            `Incorrect guess. You have ${attemptsLeft} attempts left. Try again!`;
    } else {
        message.textContent =
            `Game over! The secret country was '${secretCountry}'.`;
        document.body.style.background = "#f5b8b8";
        gameOver = true;
    }

    input.value = "";
    input.focus();
}

// ===== EVENTS =====
submitBtn.addEventListener("click", checkGuess);

input.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        checkGuess();
    }
});

restartBtn.addEventListener("click", startGame);

// Start game
startGame();
