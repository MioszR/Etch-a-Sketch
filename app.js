let currentValue = 32;

//Connect grid place
center = document.querySelector('.center');

//Connect buttons
let eraseButton = document.querySelector('.eraser');
let clearButton = document.querySelector('.clear');
let colorButton = document.querySelector('.color');
let blackButton = document.querySelector('black');
let sizer = document.querySelector('.sizer-button');
let value = document.querySelector('.value');
console.log(sizer.value)

//Add events to the buttons
clearButton.addEventListener('click', () => {
    center.style.backgroundColor = "#fff";
})
sizer.addEventListener('mousemove', () => {
    value.textContent = `${sizer.value} x ${sizer.value}`
})
