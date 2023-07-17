//Choose container in html file
let body = document.querySelector('body');

// //Create header section
// let header = document.createElement('div');
// header.classList.add('header');
// body.appendChild(header);

let container = document.querySelector('#container');



//Create and add left side section
let leftSide = document.createElement('div');
leftSide.classList.add('left-side');
let eraser = document.createElement('button');
eraser.classList.add('eraser', 'button');
eraser.textContent = 'Erase';
let clear = document.createElement('button');
clear.classList.add('clear', 'button');
clear.textContent = 'Clear';
leftSide.appendChild(eraser);
leftSide.appendChild(clear);
container.appendChild(leftSide);

//Create center section
let center = document.createElement('div');
center.classList.add('center');
center.textContent = "Hello";
container.appendChild(center);

//Create left side section
let rightSide = document.createElement('div');
rightSide.classList.add('right-side');
let color = document.createElement('button');
color.classList.add('color', 'button');
color.textContent = 'Color';
let black = document.createElement('button');
black.classList.add('black', 'button');
black.textContent = 'Black';
rightSide.appendChild(color);
rightSide.appendChild(black);
container.appendChild(rightSide);

//Create footer section
let footer = document.createElement('div');
footer.classList.add('footer');
body.appendChild(footer);

//Connect buttons
let eraseButton = document.querySelector('.eraser');
let clearButton = document.querySelector('.clear');
let colorButton = document.querySelector('.color');
let blackButton = document.querySelector('black');

//Add events to the buttons
clearButton.addEventListener('click', () => {
    center.style.backgroundColor = "#fff";
})
