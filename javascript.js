let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let result=document.querySelector("#result");

function win(user) {
    let computer = ["rock", "paper", "scissor"];
    let choice = computer[Math.floor(Math.random() * computer.length)];
    if (choice == user) {
        result.innerHTML=`<p>Tie a game...</p> <span>usser choice ${user} and computer choice ${choice} </span>`
    
        console.log("tie a game");
        console.log(` usser choice ${user} and computer choice ${choice} `);
    }
    else if (
        (user == "rock" && choice == "scissor") || 
        (user == "scissor" && choice == "paper") ||
        (user=="paper" && choice=="rock")

    ) {
        console.log("You won");
        console.log(` usser choice ${user} and computer choice ${choice} `);
        result.innerHTML=`<p>you won...</p> <span>usser choice ${user} and computer choice ${choice} </span>`
    }
    else{
        console.log("You lose");
        console.log(` usser choice ${user} and computer choice ${choice} `);
        result.innerHTML=`<p>you lose...</p> <span>usser choice ${user} and computer choice ${choice} </span>`
    }

}
rock.addEventListener("click", () => {
    win(rock.value)
});
paper.addEventListener("click", () => {
    win(paper.value)
});
scissor.addEventListener("click", () => {
    win(scissor.value)
});
