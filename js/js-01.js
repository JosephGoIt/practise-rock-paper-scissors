let rps = document.getElementById('rps');

rps.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        let you = parseInt(e.target.getAttribute('id'));
        console.log("You: " + you);
        let computer = Math.floor(Math.random() * 3); // computer pick 0 to 2
        console.log("Computer: " + computer);
        let message = "";
        
        if (you === computer) {
            message = "It's a tie!";
        } else if (you === 0 && computer === 2) {
            message = "You win!";
        } else if (you < computer || (you === 2 && computer === 0)) {
            message = "You lose!";
        } else {
            message = "You win!";
        }
        
        console.log(message);
    }
});