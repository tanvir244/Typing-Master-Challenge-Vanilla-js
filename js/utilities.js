// add and remove property
function hideElementById(elementId){
    const hiddenSection = document.getElementById(elementId);
    hiddenSection.classList.add('hidden');
}
function showElementById(elementId){
    const shownSection = document.getElementById(elementId);
    shownSection.classList.remove('hidden');
}

// set innerText
function setInnerText(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function randomAlphabetGenerator(){
    // including A-Z inside a Array 
    const alphaString = 'abcdefghijklmnopqrstuvwxyz';
    const alphaArray = alphaString.split('');
    
    // creating a random number
    const randomNumber = Math.floor(Math.random() * alphaArray.length);
    
    // getting random alphabet
    const randomAlpha = alphaArray[randomNumber];
    return randomAlpha;
}