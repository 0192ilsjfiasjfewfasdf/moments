const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imgNumber)
{
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`; // because the Math.floor may give result 0 (so add 1)
    image.classList.add("bgImage");
    body.prepend(image);
}
function genRandom() // generate random number to pick random bg images
{
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
} 

function init()
{
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
init();