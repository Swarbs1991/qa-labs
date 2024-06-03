function changeColour() {
    document.body.classList.add('gradient');
}

function changeColourPink() {
    document.body.classList.remove('gradient-green');
    document.body.classList.add('gradient-pink');
}

function changeColourGreen() {
    document.body.classList.remove('gradient-pink');
    document.body.classList.add('gradient-green');
}

function changeColourSolid() {
    document.body.classList.add('solid');
}