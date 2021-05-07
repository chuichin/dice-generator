

function changeHeader(){

    let randomNumber1 = Math.floor(Math.random()*6) + 1;
    let randomNumber2 = Math.floor(Math.random()*6) + 1
    
    // Change the left dice 
    let dice1 = document.querySelector(".img1")
    dice1.setAttribute("src", `images/dice${randomNumber1}.png`)
    
    let dice2 = document.querySelector(".img2")
    dice2.setAttribute("src", `images/dice${randomNumber2}.png`)
    
    const heading = document.querySelector("h1");

    if (randomNumber2 == randomNumber1){
        heading.innerHTML = "Draw!";
    } else if (randomNumber2 > randomNumber1){
        heading.innerHTML = "Player 2 Wins!";
    } else if (randomNumber1 > randomNumber2){
        heading.innerHTML = "Player 1 Wins!"
    }

    console.log(heading.innerHTML)

}
changeHeader()