const boxContainer = document.querySelector('#box-container');
let rowContainer = document.createElement('div');
// let row = document.createElement('div');
let row;
// rowHoverColor.classList.add('yellow-box');
boxContainer.style.display = 'inline-flex';




function makeRows(colQuantity, rowQuantity) {
    for(let i = 0; i < colQuantity; i++) {
        rowContainer = document.createElement('div');
        rowContainer.classList.add('container');
        boxContainer.appendChild(rowContainer);
        for (let j = 0; j < rowQuantity; j++) {
            row = document.createElement('div');
            row.classList.add('box');
            // row.setAttribute('id', 'color-box');
            rowContainer.appendChild(row);
            console.log(row);
        };
    };
};

const newColor = document.getElementsByClassName('box');

// function changeColor() {
//     for (let i = 0; i < newColor.length; i++) {
//         document.addEventListener('mouseover', function(){
//             newColor[i].style.backgroundColor = 'yellow';
//             });
//         };
//     };

// function mouseOver() {
//     newColor.style.backgroundColor = 'yellow';
// }

makeRows(10, 10);

document.addEventListener('mouseover', function() {
    const newColor = document.querySelectorAll('box');
    console.log(newColor.style)
})
// changeColor();


// document.addEventListener ('mouseover', () => {
//     document.getElementsByClassName('.box').style.backgroundColor = 'yellow';
// })



// window.addEventListener('mouseover', mouseOver());

// newRow = document.getElementsByClassName('box');
// document.addEventListener('mouseover', function() {
//     row.classList.remove('box');
//     row.classList.add('new-class');
// })

// const rowHoverColor = document.getElementsByClassName('box');

// document.addEventListener('mouseover', function() {
//     row.classList.remove('box');
// });
