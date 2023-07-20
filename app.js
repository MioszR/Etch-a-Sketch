document.addEventListener('DOMContentLoaded', function(){
    createCenter(currentValue)
    sizerAddEvents()


    console.log("hi")
})


let currentValue = 32;
let currentMode = 'black';


let mouseDown = false;
document.body.onmousedown = () => true;
document.body.onmouseup = () => false;

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

let changeColor = (e) => {
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentMode === 'color') {
        const randomR = Math.floor(Math.random() * 255);
        const randomG = Math.floor(Math.random() * 255);
        const randomB = Math.floor(Math.random() * 255);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (currentMode === 'black') {
        e.target.style.backgroundColor === '#000';
    } else if (currentMode === 'eraser') {
        e.target.style.backgroundColor === '#fff';
    }
}

let activateButton = () => {
    if (currentMode === 'color') {
        colorButton.classList.remove('activate');
    } else if (currentMode === 'black') {
        blackButton.classList.remove('activate');
    } else if (currentMode === 'eraser') {
        eraseButton.classList.remove('actiavte');
    }

    if (newMode === 'color') {
        colorButton.classList.add('activate');
    } else if (newMode === 'black') {
        blackButton.classList.add('activate');
    } else if (newMode === 'eraser') {
        eraseButton.classList.add('activate');
    }
}

let sizerAddEvents = () => {
    sizer.addEventListener('mousemove', () => {
        value.textContent = `${sizer.value} x ${sizer.value}`
    })

    sizer.addEventListener('click', () => {
        value.textContent = `${sizer.value} x ${sizer.value}`
    })
    
    sizer.addEventListener('mouseup', () => {
        gridReset()
        setSizerValue()
        createCenter(currentValue)
    })
}

//Add events to the buttons
clearButton.addEventListener('click', () => {
    createCenter(32)
})



let setSizerValue = () => {
    currentValue = sizer.value;
}

let gridReset = () => {
    createCenter(32)
}


