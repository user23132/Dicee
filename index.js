var randomNumber1 = Math.random()*6;
randomNumber1 = Math.floor(randomNumber1);
randomNumber1++;

var randomNumber2 = Math.random()*6;
randomNumber2 = Math.floor(randomNumber2);
randomNumber2++;


document.querySelector("img").setAttribute("src","images/dice"+  randomNumber1 + ".png");
document.getElementsByTagName("img")[1].setAttribute("src","images/dice"+  randomNumber2 + ".png");

if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").textContent = "Player 2 Won!";
}
else if (randomNumber2 < randomNumber1)
{
    document.querySelector("h1").textContent = "Player 1 Won!";
}

else {
    document.querySelector("h1").textContent = "It is a draw!";
}