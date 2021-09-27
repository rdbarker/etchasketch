const divGrid = document.querySelector(".grid");
function generateGrid(length){
    const area = length * length;
    const gridSquares = [];
    for (let i = 0; i<area; i++){
        const elementCreated = document.createElement('div');
        elementCreated.classList.add('square');
        divGrid.appendChild(elementCreated);
        gridSquares.push(elementCreated);
    }
    return gridSquares;
}
//function replaceColor()
generateGrid(4);