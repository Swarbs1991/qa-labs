
function changeColor()
{
    document.body.classList.add('gradient');
};

function show() {
    //document.getElementById('hi').classList.add('show');
    //document.getElementById('hi').classList.remove('hide');
    document.getElementById('hi').style.display = 'block';
}

function hide() {
    //document.getElementById('hi').classList.add('hide');
    //document.getElementById('hi').classList.remove('show');
    document.getElementById('hi').style.display = 'none';
}