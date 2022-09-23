const boxContainer = document.querySelector('#box-container');
let rowContainer = document.createElement('div');
let row = document.createElement('div');
let rowHoverColor = document.getElementById('#color-box');
boxContainer.style.display = 'inline-flex';

var mouseOverFunction = function() {
    this.style.backgroundColor = 'yellow';
};

// rowHoverColor.onmouseover = mouseOverFunction;

// rowHoverColor.addEventListener('mouseover', function(e) {
//     row.style.backgroundColor = 'yellow';
// })





// row.addEventListener('mouseover', functtion(e) {
//     rowHoverColor = row.style.backgroundColor = 'yellow'
// })


function makeRows(colQuantity, rowQuantity) {
    for(let i = 0; i < colQuantity; i++) {
        rowContainer = document.createElement('div');
        rowContainer.classList.add('container');
        boxContainer.appendChild(rowContainer);
        for (let j = 0; j < rowQuantity; j++) {
            row = document.createElement('div');
            row.classList.add('box');
            row.setAttribute('id', 'color-box');
            // row.textContent = 'test';
            // row.style.backgroundColor = 'black';
            rowContainer.appendChild(row);
        };
    }
};

// function changeColor() {
//     row.onmouseover = function(e)
// }


makeRows(36, 36);