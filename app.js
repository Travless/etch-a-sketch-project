let numOfSquares;

function numGridInput () {
    numOfSquares = Number(prompt('How many squares would you like on each side?'));
    if (numOfSquares <= 36 && numOfSquares >= 10) {
        return numOfSquares;
    } else {
        alert('Invalid input, please enter a number of at least 10 or higher.');
    }
}

const boxContainer = document.querySelector('#box-container');
let colContainer = document.createElement('div');
let box;
boxContainer.style.display = 'flex';


function makeGrid(numOfSquares) {
    for(let i = 0; i < numOfSquares; i++) {
        colContainer = document.createElement('div');
        colContainer.classList.add('container');
        boxContainer.appendChild(colContainer);
        for (let j = 0; j < numOfSquares; j++) {
            box = document.createElement('div');
            box.classList.add('single');
            colContainer.appendChild(box);
        };
    };
};


makeGrid(numOfSquares);

const boxColor = document.getElementsByClassName('single');

for (let i = 0; i < boxColor.length; i++) {
    boxColor[i].addEventListener('mouseover', function(event) {
        event.target.style.backgroundColor = 'black';
    })
}