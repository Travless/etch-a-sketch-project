let box;
let numOfSquares;
const boxContainer = document.querySelector('#box-container');
boxContainer.style.display = 'flex';


function numGridInput () {
    numOfSquares = Number(prompt('How many squares would you like on each side?'));
    if (numOfSquares <= 36 && numOfSquares >= 10) {
        return numOfSquares;
    } else {
        alert('Invalid input, please enter a number of at least 10 or higher.');
        window.close();
    }
}

function makeGrid(numOfSquares) {
    for(let i = 0; i < numOfSquares; i++) {
        let colContainer = document.createElement('div');
        colContainer.classList.add('container');
        boxContainer.appendChild(colContainer);
        for (let j = 0; j < numOfSquares; j++) {
            box = document.createElement('div');
            box.classList.add('single');
            colContainer.appendChild(box);
        };
    };
};

numGridInput();
makeGrid(numOfSquares);

const boxColor = document.getElementsByClassName('single');
const refreshBtn = document.getElementById('refresh-btn');

for (let i = 0; i < boxColor.length; i++) {
    boxColor[i].addEventListener('mouseover', function(event) {
        event.target.style.backgroundColor = 'black';
    })
}

refreshBtn.addEventListener('click', function(event) {
    location.reload();
    return false;
})
