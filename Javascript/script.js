let minNum = document.getElementById("minNum");
let maxNum = document.getElementById("maxNum");
let gameSettings = document.getElementById("gameSettings");
let submitSettings = document.getElementById("submitSettings");
let gameStart = document.getElementById("gameStart");
let gameH1 = document.getElementById("gameH1");
let ranNum;
let guessH1 = document.getElementById("guessH1");
let yourGuess = document.getElementById("yourGuess");
let guessNum;
let minGuess;
let maxGuess;
let guessSubmit = document.getElementById("guessSubmit");
let guessAnswer = document.getElementById("guessAnswer");
let errorMsg = document.getElementById("errorMsg");
let restartBtn = document.getElementById("restartBtn")

submitSettings.onclick = function(){

    minGuess = Number(minNum.value);
    maxGuess = Number(maxNum.value);
    if (minGuess > maxGuess){
        errorMsg.innerText = "MIN must me lower than MAX!"
        errorMsg.style = "display: block"
    }
    else if (minGuess == maxGuess){
        errorMsg.innerText = "MIN can't be same as MAX!"
        errorMsg.style = "display: block"
    }
    else
    {
        ranNum = Math.floor(Math.random() * (maxGuess - minGuess) + 1) + minGuess; 
        gameStart.style = "display: flex";
        guessH1.innerText = "You are guessing a number between " + minGuess + " and " + maxGuess;
        gameSettings.style = "display: none";
        submitSettings.style = "display: none";
        gameH1.style = "display: none"
    }
    }
   


guessSubmit.onclick = function(){
    guessNum = Number(yourGuess.value);
    guessAnswer.style = "display: block"

    
        if (isNaN(guessNum))
        {
            guessAnswer.innerText = "That is NOT a number. Try again!";
        }
        else
        {
        if (guessNum == ranNum)
        {
            guessAnswer.innerText = "Good job " + guessNum + " is correct!";
            restartBtn.style = "display: block"
        }
        else if (guessNum < minGuess)
        {
            guessAnswer.innerText = "Your guess is below the allowed range. Try again!";
        }
        else if (guessNum > maxGuess)
            {
                guessAnswer.innerText = "Your guess is above the allowed range. Try again!";
            }
        else{
            guessAnswer.innerText = guessNum + " is incorrect, try again!";
        }
    }
   
    restartBtn.onclick = function(){
    restartBtn.style.display = "none"
    minNum.value = ""
    maxNum.value = ""
    yourGuess.value = "";
    guessAnswer.innerText = "";
    errorMsg.innerText = "";
    gameSettings.style.display = "flex";
    submitSettings.style.display = "block";
    gameH1.style.display = "block";
    guessAnswer.style.display = "none";
    gameStart.style.display = "none";
    resetGame.style.display = "none";
    ranNum = null;
    minGuess = null;
    maxGuess = null;

    }
}

