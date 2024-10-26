var dice1 = Math.floor(Math.random() * 6);
var dice2 = Math.floor(Math.random() * 6);
var dice = ["dice1.jpg","dice2.jpg","dice3.jpg","dice4.jpg","dice5.jpg","dice6.jpg"];

if (dice1 > dice2){
    document.querySelector("h1").textContent = "Player 1 win!";
    document.getElementsByTagName("img")[0].setAttribute("src",dice[dice1]);
    document.getElementsByTagName("img")[1].setAttribute("src",dice[dice2]);
}
else if (dice2 > dice1){
    document.querySelector("h1").textContent = "Player 2 win!";
    document.getElementsByTagName("img")[0].setAttribute("src",dice[dice1]);
    document.getElementsByTagName("img")[1].setAttribute("src",dice[dice2]);
}
else {
    document.querySelector("h1").textContent = "Draw!";
    document.getElementsByTagName("img")[0].setAttribute("src",dice[dice1]);
    document.getElementsByTagName("img")[1].setAttribute("src",dice[dice2]);
}
