function generateGrid(){
    //remove old grid if arg is passed
    currentSquares.forEach(square=>(divGrid.removeChild(square)));
    const area = gridSize * gridSize;
    const gridSquares = [];
    divGrid.style.setProperty('grid-template-columns',`repeat(${gridSize} ,1fr)`);
    for (let i = 0; i<area; i++){
        const elementCreated = document.createElement('div');
        elementCreated.classList.add('square');
        divGrid.appendChild(elementCreated);
        elementCreated.addEventListener("mouseenter",replaceSquareColor)
        gridSquares.push(elementCreated);
    }
    return gridSquares;
}
function replaceSquareColor(){
    this.style.setProperty('background',colorPicked);
}
function getPickedColor(event){
    colorPicked = event.target.value;
}
function updateGrid(event){
    gridSize = event.target.value;
    currentSquares = generateGrid();
    document.querySelector('.grid-value').textContent = gridSize;
}
let colorPicked = "#525252";
let gridSize = 32;
let currentSquares = [];

const divGrid = document.querySelector(".grid");
const inputColorPicker = document.querySelector("input[type='color']");
const buttonErase = document.querySelector(".erase > button");
inputColorPicker.addEventListener("change",getPickedColor);
buttonErase.addEventListener("click",e => (currentSquares = generateGrid(gridSize,currentSquares)));
const gridInput = document.querySelector("input[type='range']");
gridInput.addEventListener("input",updateGrid);

currentSquares = generateGrid();
