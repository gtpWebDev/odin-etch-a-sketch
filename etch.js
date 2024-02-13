

/*

for a given number, e.g. 3
we'll need to create the full 3x3 grid

repeat 3 times:
add a horizontal flexbox div:
  - add 3 divs


*/

const maxGridSize = 75

let gridSize = collectGridSizeFromUser()
createEtchGrid(gridSize)  

function collectGridSizeFromUser() {

  let validInput = false

  while (!validInput) {
    let gridSizeInput = prompt("Please enter a grid size less than 75.")
    if (Number.isInteger(parseInt(gridSizeInput)) && parseInt(gridSizeInput) <= maxGridSize) {
      return parseInt(gridSizeInput)
    }
  }

}

function createEtchGrid(gridSize) {

  let gridArea = document.querySelector("#gridArea")

  for (let i=0; i<gridSize; i++) {

    let rowDiv = document.createElement("div")
    rowDiv.setAttribute("class","etchRow")

    for (let j=0; j<gridSize; j++) {
      let cellDiv = document.createElement("div")
      cellDiv.setAttribute("class","etchCell")

      cellDiv.addEventListener("mouseenter",() => {
        cellDiv.setAttribute("style","background-color:black")
      })

      rowDiv.appendChild(cellDiv)
    }
    gridArea.appendChild(rowDiv)
  }

}
