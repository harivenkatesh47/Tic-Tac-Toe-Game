let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset-btn")
let newGameBtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turnO = true //playerX, playerO (By default we have taken player O turn as turnO to be true)
let count = 0

const winpatterns = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7,],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turnO = false
    count = 0
    enableBoxes()
    msgContainer.classList.add("hide")
}


boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        //console.log("Box was clicked")   ->> In order to check whether its working or not
        //box.innerText = "adj"            ->> Just to check if its getting something print or not on been clicked.
        if(turnO){              // if(turnO === true) either of the one are same
            box.innerText = "P1"   // P1 : Player 1
            turnO=false
        }
        else {
            box.innerText = "P2"    // P2 : Player 2
            turnO =true
        }
        box.disabled = true
        count++

        let isWinner = checkWinner()

        if (count === 9 && !isWinner) {
        gameDraw();
        }
    })
})

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`
    msgContainer.classList.remove("hide")
    disableBoxes();
  }

const disableBoxes = () =>{
    for(let box of boxes)
        box.disabled = true 
 }

 const enableBoxes = () =>{             
    for(let box of boxes) {
         box.disabled = false
        box.innerText = ""
    }
       
 }


const showWinner = (winner) => {
    msg.innerText = `Congrats to our winner ->  ${winner}`
    msgContainer.classList.remove("hide")
    disableBoxes()
}

const checkWinner =() =>{
    for(let pattern of winpatterns){
       // console.log([pattern[0]], pattern[1],pattern[2])
       // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText,boxes[pattern[2]].innerText)

       let po1Val = boxes[pattern[0]].innerText
       let po2Val = boxes[pattern[1]].innerText
       let po3Val = boxes[pattern[2]].innerText

       if(po1Val !="" && po2Val !="" && po3Val !="") {
        if( po1Val === po2Val && po2Val === po3Val){
           // console.log("Winner" ,po1Val)
            showWinner(po1Val)
            return true
        }    
       }
    }
}

newGameBtn.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetGame)