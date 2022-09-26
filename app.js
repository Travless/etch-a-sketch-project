const boxContainer = document.querySelector('#box-container');
let colContainer = document.createElement('div');
let box;
let boxArray = [];
boxContainer.style.display = 'inline-flex';


function makeRows(colQuantity, rowQuantity) {
    for(let i = 0; i < colQuantity; i++) {
        colContainer = document.createElement('div');
        colContainer.classList.add('container');
        boxContainer.appendChild(colContainer);
        for (let j = 0; j < rowQuantity; j++) {
            box = document.createElement('div');
            box.classList.add('single');
            boxArray.push(box);
            colContainer.appendChild(box);
        };
    };
};


makeRows(36, 36);

const boxColor = document.getElementsByClassName('single');

for (let i = 0; i < boxColor.length; i++) {
    boxColor[i].addEventListener('mouseover', function(event) {
        event.target.style.backgroundColor = 'black';
    })
}