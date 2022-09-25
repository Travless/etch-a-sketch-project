const boxContainer = document.querySelector('#box-container');
let rowContainer = document.createElement('div');
// let row = document.createElement('div');
let row;
// rowHoverColor.classList.add('yellow-box');
boxContainer.style.display = 'inline-flex';
let newRow;



function makeRows(colQuantity, rowQuantity) {
    for(let i = 0; i < colQuantity; i++) {
        rowContainer = document.createElement('div');
        rowContainer.classList.add('container');
        boxContainer.appendChild(rowContainer);
        for (let j = 0; j < rowQuantity; j++) {
            row = document.createElement('div');
            row.classList.add('box');
            rowContainer.appendChild(row);
            console.log(row);
        };
    };
};



makeRows(10, 10);

const rowHoverColor = document.getElementsByClassName('box');

// document.addEventListener('mouseover', function() {
//     row.classList.remove('box');
// });
