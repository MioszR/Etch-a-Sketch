let container = document.querySelector('#container');


let leftSide = document.createElement('div');
leftSide.classList.add('left-side');
let eraser = document.createElement('button');
eraser.classList.add('eraser');
eraser.classList.add('button');
eraser.textContent = 'Eraser';
let clear = document.createElement('button');
clear.classList.add('clear');
clear.classList.add('button');
clear.textContent = 'Clear';
leftSide.appendChild(eraser);
leftSide.appendChild(clear);
container.appendChild(leftSide);

let center = document.createElement('div');
center.classList.add('center');
center.textContent = "Hello";
container.appendChild(center);

let rightSide = document.createElement('div');
rightSide.classList.add('right-side');
let