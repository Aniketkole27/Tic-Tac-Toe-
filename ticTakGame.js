let boxes = document.querySelectorAll(".box");
let boxContener = document.querySelector(".boxes");
let body = document.querySelector("body");
let resetClick = document.querySelector("#reset");
let winnerPrint = document.querySelector(".winnerPrint");
let playAgain = document.querySelector(".again");
let hideDiv = document.querySelector(".mgs");

let mode = "O";
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", () => {
    if (mode === "O") {
      boxes[i].innerText = "X";
      boxes[i].style.color = "white";
      boxes[i].disabled = true;
      mode = "X";
    } else {
      boxes[i].innerText = "O";
      boxes[i].style.color = "black";
      boxes[i].disabled = true;
      mode = "O";
    }
    checkWinner();
  });
}

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const disableBoxes = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

resetClick.addEventListener("click", () => {
  mode = "O";
  resetClick.style.transitionDelay = "200s";
  enableBoxes();
});

const newGame = () => {
  playAgain.addEventListener("click", () => {
    boxContener.classList.remove("hide");
    resetClick.classList.remove("hide");
    hideDiv.classList.add("hide");
    enableBoxes();
  });
};

const finalwinner = (winner) => {
  const jsConfetti = new JSConfetti();
  jsConfetti.addConfetti();
  winnerPrint.innerText = `Congratulation Player - ${winner} is a winner`;
  // console.log(winnerPrint.innerText);
  boxContener.classList.add("hide");
  resetClick.classList.add("hide");
  hideDiv.classList.remove("hide");
  newGame();
};

// const gameDraw = (draw) => {
//   let over = true;
//   over = draw;
//   if (over) {
//     winnerPrint.innerText = `Oo! Sorry match  draw`;
//     boxContener.classList.add("hide");
//     resetClick.classList.add("hide");
//     hideDiv.classList.remove("hide");
//   }
//   newGame();
// };

let checkWinner = () => {
  for (let condition of winConditions) {
    let condition1 = boxes[condition[0]].innerText;
    let condition2 = boxes[condition[1]].innerText;
    let condition3 = boxes[condition[2]].innerText;
    if (condition1 != "" && condition2 != "" && condition3 != "") {
      if (condition1 === condition2 && condition2 === condition3) {
        console.log("Winner = ", condition1);
        disableBoxes();
        finalwinner(condition1);
        // gameDraw("false");
      }
    }
  }
};
