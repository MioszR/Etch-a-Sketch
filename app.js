document.addEventListener('DOMContentLoaded', function(){
    console.log("hi")
})


let currentValue = 3;

//Connect grid place

//Connect buttons
let eraseButton = document.querySelector('.eraser');
let clearButton = document.querySelector('.clear');
let colorButton = document.querySelector('.color');
let blackButton = document.querySelector('black');
let sizer = document.querySelector('.sizer-button');
let value = document.querySelector('.value');

function createCenter(currentValue) {
    let center = document.querySelector('.center');
    center.style.gridTemplateColumns = `repeat(${currentValue}, 1fr)`
    center.style.gridTemplateRows = `repeat(${currentValue}, 1fr)`

    let divsNum = currentValue * currentValue

    for(let i = 0; i < divsNum; i++) {
        let div = document.createElement('div');
        div.style.backgroundColor = '#fff';
        center.appendChild(div)
    }
}

console.log(sizer.value)
//Add events to the buttons
clearButton.addEventListener('click', () => {
    center.style.backgroundColor = "#fff";
})
sizer.addEventListener('mousemove', () => {
    value.textContent = `${sizer.value} x ${sizer.value}`
})

sizer.addEventListener('mouseup', () => {
    gridReset()
    setSizerValue()
    createCenter(currentValue)

    // gridMaker()
})

let setSizerValue = () => {
    currentValue = sizer.value;
}



let gridReset = () => {
    createCenter(32)
}


