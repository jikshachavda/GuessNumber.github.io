let computerGuess;
let userGuess = []
let userGuessUpdate = document.getElementById("textOutPut")
let userNumberUpdate = document.getElementById("inputBox")

const init = () => {
    computerGuess = Math.floor(Math.random() * 100);
    console.log(computerGuess)
    document.getElementById("newGameButton").style.display = "none"
    document.getElementById("gameArea").style.display = "none"
};

const startGame = () => {
    document.getElementById("welcomeScreen").style.display = "none"
    document.getElementById("gameArea").style.display = "block"
}

const easymode = () => {
    maxGuess = 10;
    startGame();
}

const hardmode = () => {
    maxGuess = 5;
    startGame();
}

const comparguess = () => {
    const userNumber = Number(document.getElementById("inputBox").value)
    userGuess = [...userGuess, userNumber]
    document.getElementById("Guesses").innerHTML = userGuess;
    if (userGuess.length < maxGuess) {
        if (computerGuess > userNumber) {
            userGuessUpdate.innerHTML = "Your Guess is low 😑"
            userNumberUpdate.value = "";
        } else if (computerGuess < userNumber) {
            userGuessUpdate.innerHTML = "Your Guess is high 😮"
            userNumberUpdate.value = "";
        } else {
            userGuessUpdate.innerHTML = "It's Correct 😄"
            userNumberUpdate.value = "";
            StartNewGame();
        }
    } else {
        if (computerGuess > userNumber) {
            userGuessUpdate.innerHTML = `You Loose !! correct number was ${computerGuess}`
            userNumberUpdate.value = "";
            StartNewGame();
        } else if (computerGuess < userNumber) {
            userGuessUpdate.innerHTML = `You Loose !! correct number was ${computerGuess}`
            userNumberUpdate.value = "";
            StartNewGame();
        } else {
            userGuessUpdate.innerHTML = "It's Correct 😄"
            userNumberUpdate.value = "";
            StartNewGame();
        }
    }
    document.getElementById("attempts").innerHTML = userGuess.length
}
const StartNewGame = () => {
    document.getElementById("newGameButton").style.display = "inline"
    userNumberUpdate.setAttribute("disabled", true)
}
const newGamebeing = () => {
    window.location.reload();
}