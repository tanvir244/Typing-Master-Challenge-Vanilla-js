

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}
function continueGame(){
    const randomAlpha = randomAlphabetGenerator();
    setInnerText('artboard-text', randomAlpha);
}