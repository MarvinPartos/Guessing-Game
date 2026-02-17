// ===== WORD LIST =====
const words = ["apple", "banana", "grape", "orange", "mango"];

// ===== GAME VARIABLES =====
let secretWord;
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
    secretWord = words[Math.floor(Math.random() * words.length)];
    attemptsLeft = maxAttempts;
    gameOver = false;

    console.log("Secret word (for testing):", secretWord);

    message.textContent = "";
    hint.textContent = `Hint: The word starts with '${secretWord[0].toUpperCase()}'.`;
    input.value = "";
    document.body.style.background = "#f4f4f4";
}

// ===== CHECK GUESS =====
function checkGuess(){
    if(gameOver) return;

    // trim spaces & make lowercase
    let guess = input.value.trim().toLowerCase();

    // decrease attempts even if empty (based on instructions)
    attemptsLeft--;

    if(guess === secretWord){
        message.textContent = "Congratulations! You guessed the secret word!";
        document.body.style.background = "#b8f5b8";
        gameOver = true;
        return;
    }

    if(attemptsLeft > 0){
        message.textContent =
            `Incorrect guess. You have ${attemptsLeft} attempts left. Try again!`;
    } else {
        message.textContent =
            `Game over! The secret word was '${secretWord}'.`;
        document.body.style.background = "#f5b8b8";
        gameOver = true;
    }

    input.value = "";
    input.focus();
}

// ===== EVENTS =====
submitBtn.addEventListener("click", checkGuess);

// Enter key support
input.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        checkGuess();
    }
});

// Restart game
restartBtn.addEventListener("click", startGame);

// initialize game
startGame();
