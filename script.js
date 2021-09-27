const divGrid = document.querySelector(".grid");

function generateGrid(length,oldSquares=[]){
    //remove old grid if arg is passed
    oldSquares.forEach(square=>(divGrid.removeChild(square)));
    const area = length * length;
    const gridSquares = [];
    divGrid.style.setProperty('grid-template-columns',`repeat(${length} ,1fr)`);
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
    this.style.setProperty('background','#525252');
}
let g = generateGrid(32);