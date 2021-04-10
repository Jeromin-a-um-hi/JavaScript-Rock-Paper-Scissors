let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let pwins = document.getElementById("playerwins");
let cwins = document.getElementById("computerwins");
let buttoncontainer = document.getElementById("buttoncontainer");
let main = document.getElementById("mainone");
let startgame = document.getElementById("startgame");
let message = document.getElementById("messagestyle")
let pscore = 0;
let cscore = 0;
let freeze = false;

startgame.onclick = () => {
    console.log("ACTIVE");
    pwins.innerHTML = " " + pscore;
    cwins.innerHTML = " " + cscore;
    main.classList.remove("none", "invisible");
    main.classList.add("visible");
    startgame.classList.add("none", "invisible");
    buttoncontainer.classList.add("none", "invisible");
};

rock.onclick = () => {
    if(freeze === true){
        return 0;
    }
    else{
        aiTurn(0);
        console.log("ROCK");
    };
};

paper.onclick = () => {
    if(freeze === true){
        return 0;
    }
    else{
        aiTurn(1);
        console.log("PAPER");
    };
};

scissors.onclick = () => {
    if(freeze === true){
        return 0;
    }
    else{
        aiTurn(2);
        console.log("SCISSORS");
    };
};

function wins(str, aiPick) {
    if(str === "Draw"){
        message.innerHTML = "It is a Draw";
    }
    else{
        message.innerHTML = `The ${str} wins!`;
    };
    message.classList.add("messagetext");
    rock.classList.remove("greenhover");
    paper.classList.remove("greenhover");
    scissors.classList.remove("greenhover");
    freeze = true;

    setTimeout(() => {
        message.innerHTML = "";
        switch (aiPick) {
            case 0:
                rock.classList.remove("red");
                break;
    
            case 1:
                paper.classList.remove("red");
                break;
    
            case 2:
                scissors.classList.remove("red");
                break;
        };
        rock.classList.add("greenhover");
        paper.classList.add("greenhover");
        scissors.classList.add("greenhover");
        message.classList.remove("messagetext");
        freeze = false;
    }, 2000);
}

function aiTurn(value){
    let aiPick = Math.floor(Math.random() * 3);
    console.log(aiPick + " IS THE RANDOM NUMBER");

    switch (value) {

        case 0:
            if (aiPick === 0) {
                console.log("DRAW");
                wins("Draw", aiPick);
            }
            else if (aiPick === 1) {
                console.log("COMPUTER WINS");
                cscore += 1;
                wins("Computer", aiPick);
            }
            else {
                console.log("PLAYER WINS");
                pscore += 1;
                wins("Player", aiPick);
            };
            break;

        case 1:
            if (aiPick === 0) {
                console.log("PLAYER WINS");
                pscore += 1;
                wins("Player", aiPick);
            }
            else if (aiPick === 1) {
                console.log("DRAW");
                wins("Draw", aiPick);
            }
            else {
                console.log("COMPUTER WINS");
                cscore += 1;
                wins("Computer", aiPick);
            };
            break;

        case 2:
            if (aiPick === 0) {
                console.log("COMPUTER WINS");
                cscore += 1;
                wins("Computer", aiPick);
            }
            else if (aiPick === 1) {
                console.log("PLAYER WINS");
                pscore += 1;
                wins("Player", aiPick);
            }
            else {
                console.log("DRAW");
                wins("Draw", aiPick);
            };
            break;
    };

    switch (aiPick) {
        case 0:
            rock.classList.add("red");
            break;

        case 1:
            paper.classList.add("red");
            break;

        case 2:
            scissors.classList.add("red");
            break;
    };

    if (pscore === 5 || cscore === 5) {
        pscore = 0;
        cscore = 0;
        console.log("RESET");
    };

    pwins.innerHTML = " " + pscore;
    cwins.innerHTML = " " + cscore;
};