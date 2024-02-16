

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}
function continueGame(){
    const randomAlpha = randomAlphabetGenerator();
    setInnerText('artboard-text', randomAlpha);
    setBackgroundColorById(randomAlpha);
}
function handleKeyboardKeyUpEvent(event){
    // the key you pressed on keyboard
    const playerPressed = event.key;
    // get the expected key to press
    const keyShowingUI = document.getElementById('artboard-text');
    const expectedKey = keyShowingUI.innerText;

    if(playerPressed === expectedKey){
        // update score
        const currentScore = getElementValueById('current-score');
        const updateScore = currentScore + 1;
        setInnerText('current-score', updateScore);
        
        // start a new round
        removeBackgroundColorById(expectedKey);
        continueGame();
    }
    else{
        // update life 
        const currentLife = getElementValueById('current-life');
        const updateLife = currentLife - 1;
        setInnerText('current-life', updateLife);
        
        if(updateLife === 0){
            gameOver();
        }
    }
     
}

// capture keyboard key press 
document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    // update final score 
    const currentScore = getElementValueById('current-score');
    setInnerText('ultimate-score', currentScore);

    // clear the latest selected alphabet highlighted
    const keyShowingUI = document.getElementById('artboard-text');
    const latestKey = keyShowingUI.innerText;
    removeBackgroundColorById(latestKey);
}

function playAgain(){
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life
    setInnerText('current-life', 10);
    setInnerText('current-score', 0);
    continueGame();
}