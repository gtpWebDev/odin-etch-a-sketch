



const maxGridSize = 75
const etchFullWidthInPx = 500

let gridSizeButton = document.querySelector("#gridSizeButton")
gridSizeButton.addEventListener("click",generateEtchASketch)

// Need to deal with OK and cancel from prompt

function generateEtchASketch() {
  let gridSizeResponse = collectGridSizeFromUser()
  if (gridSizeResponse.generateGrid) {
    createEtchGrid(gridSizeResponse.gridSize)  
  }
}

function collectGridSizeFromUser() {

  let validInput = false

  while (!validInput) {
    let gridSizeInput = prompt("Please enter a grid size less than 75.")
    if (gridSizeInput === null) { // prompt is cancelled
      return {generateGrid: false, gridSize: null}
    }
    if (Number.isInteger(parseInt(gridSizeInput)) &&
        parseInt(gridSizeInput) <= maxGridSize &&
        parseInt(gridSizeInput) > 0
    ) {
      return {generateGrid: true, gridSize: parseInt(gridSizeInput)}
    }
  }

}

function createEtchGrid(gridSize) {

  removeOldGrid()

  let gridContainer = document.querySelector(".gridContainer")
  let gridArea = document.createElement("div")
  gridContainer.appendChild(gridArea)

  for (let i=0; i<gridSize; i++) {

    let rowDiv = document.createElement("div")
    rowDiv.setAttribute("class","etchRow")

    for (let j=0; j<gridSize; j++) {
      let cellDiv = document.createElement("div")

      cellDiv.addEventListener("mouseenter",() => {
        cellDiv.setAttribute("class","blackCell")
      })

      let edgeLength = etchFullWidthInPx / gridSize
      cellDiv.setAttribute("style",`width:${edgeLength}px; height:${edgeLength}px`)

      rowDiv.appendChild(cellDiv)
    }
    gridArea.appendChild(rowDiv)
  }

}

function removeOldGrid() {

  let gridContainer = document.querySelector(".gridContainer")
  while (gridContainer.firstChild) {
  gridContainer.removeChild(gridContainer.firstChild);
}

}


