

let playerText = document.getElementById("playerText")
let restartBtn = document.getElementById("restart")
let computerBtn = document.getElementById("Computer")
let boxes = Array.from(document.getElementsByClassName("box"))
let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')
// console.log(boxes)
let moves = 0
const totalmoves = 9
const o_text = "O"
const x_text = "X"

let cur = x_text
let spaces = Array(9).fill(null)

const startGame = () =>{
    boxes.forEach(box =>box.addEventListener('click',boxClicked))

}

// console.log(boxes)
function boxClicked(e){
   
    // console.log(e.target)
    const id =  e.target.id

    if(!spaces[id]){
        spaces[id]=cur
        e.target.innerText = cur
        moves++;

        if(playerHasWon()!==false){
            playerText.innerHTML = `${cur} has won !`
            let winblocks = playerHasWon()

            // console.log(winblocks)
            winblocks.map(box => boxes[box].style.backgroundColor=winnerIndicator)


        }
        else if(moves === totalmoves){
            playerText.innerHTML = `DRAW`
        }
    
    

        cur = cur == x_text ? o_text : x_text
    }
}

const wincombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function playerHasWon(){
    for(const condition of wincombo){
        let [a,b,c] = condition

        if (spaces[a]&&(spaces[a]==spaces[b] && spaces[a]==spaces[c])){
            return [a,b,c]

        }
    }
    return false 

}
restartBtn.addEventListener('click',restartClicked)

function restartClicked(){
    spaces.fill(null)
    boxes.forEach(box =>{
        box.innerText = ''
        box.style.backgroundColor = ''
    })

    playerText.innerHTML = "Tic Tac Toe"
    cur = x_text
}
// computerBtn.addEventListener('click',computerTurn)


// function computerTurn(){
//     // check if it's the computer's turn (i.e., cur is "O")
//     if(cur === o_text){
//         let availableMoves = [];
//         for(let i = 0; i < spaces.length; i++){
//             if(spaces[i] === null){
//                 availableMoves.push(i);
//             }
//         }
//         if(availableMoves.length > 0){
//             const randomIndex = Math.floor(Math.random() * availableMoves.length);
//             const id = availableMoves[randomIndex];
//             spaces[id] = cur;
//             boxes[id].innerText = cur;
//             moves++;

//             if(playerHasWon() !== false){
//                 playerText.innerHTML = `${cur} has won !`
//                 let winblocks = playerHasWon()
//                 winblocks.map(box => boxes[box].style.backgroundColor = winnerIndicator)
//                 boxes.forEach(box => box.removeEventListener('click', boxClicked)); // disable clicking after the game ends
//             }
//             else if(moves === totalmoves){
//                 playerText.innerHTML = `DRAW`
//                 boxes.forEach(box => box.removeEventListener('click', boxClicked)); // disable clicking after the game ends
//             }

//             cur = x_text;
//         }
//     }
// }

startGame();


