


function appendToDisplay() {
    document.getElementById('display1').value = Math.ceil (Math.random() *6);
    document.getElementById('display2').value = Math.ceil (Math.random() *6);
    // alert("winner")
    if (display1 > display2) {
        document.querySelector("h1") = "Player 1 Wins";
        alert("winner");
    }
    else if (display2 > display1 ) {
        document.querySelector("h1") = "Player 2 Wins";
        alert("winner");
    }
    
}

document.querySelector("button").addEventListener("click", () =>{

})
