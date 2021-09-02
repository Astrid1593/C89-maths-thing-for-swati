var player1Name = localStorage.getItem("Player 1");
var player2Name = localStorage.getItem("Player 2");
var player1Score = 0;
var player2Score = 0;
console.log(player1Name);
console.log(player2Name);
localStorage.setItem("Player 1 score", player1Score);
localStorage.setItem("Player 2 score", player2Score);
document.getElementById("player1Name").innerHTML = player1Name + ":";
document.getElementById("player2Name").innerHTML = player2Name + ":";
document.getElementById("player1Score").innerHTML = player1Score;
document.getElementById("player2Score").innerHTML = player2Score;
document.getElementById("question").innerHTML = "Question Turn: " + player1Name;
document.getElementById("answer").innerHTML = "Answer Turn: " + player2Name;
function send(){
    
}