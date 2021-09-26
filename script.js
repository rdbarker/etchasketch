const divGrid = document.querySelector(".grid");
let gridArray = [];

function generateGrid(length,width){
    const area = length * width;
    for (let i = 0; i<area; i++){
        const elementCreated = document.createElement('div');
        elementCreated.classList.add('square');
        divGrid.appendChild(elementCreated);
    }
}

generateGrid(4,4);