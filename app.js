const boxContainer = document.querySelector('#box-container');
let rowContainer = document.createElement('div');
let row = document.createElement('div');
boxContainer.style.display = 'inline-flex';


function makeRows(colQuantity, rowQuantity) {
    for(let i = 0; i < colQuantity; i++) {
        rowContainer = document.createElement('div');
        rowContainer.classList.add('container');
        boxContainer.appendChild(rowContainer);
        for (let j = 0; j < rowQuantity; j++) {
            row = document.createElement('div');
            row.classList.add('box');
            row.textContent = 'test';
            rowContainer.appendChild(row);
        };
    }
};


makeRows(36, 36);