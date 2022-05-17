var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var imageLeft = document.querySelector("img").setAttribute("src", `images/dice${randomNumber1}.png`);
var imageRight = document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`);
if (randomNumber1 > randomNumber2) {
    document.querySelector("#title").innerHTML = "🚩Player 1 Wins";

}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("#title").innerHTML = "🚩Player 2 Wins";
}
else {
    document.querySelector("#title").innerHTML = "Draw!";
}


