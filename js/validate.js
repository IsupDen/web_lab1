function updateY() {
    let separator = '.';
    let maxValue = 5;
    let minValue = -5;
    let valid = false;
    let value = NaN;

    if (this.value[0] === separator) {
        this.value = '0' + this.value;
    }
    if (isFinite(this.value)) {
        value = parseFloat(this.value);
    }
    if (!isNaN(value)) {
        if (value > minValue && value < maxValue) {
            valid = true;
            moveY(value);
        }
    }
    $('#submit-button').attr('disabled', !valid);
}

function updateX() {
    let x = parseInt(this.value);
    moveX(x)
}

function updateR() {
    let r = parseInt(this.value);
    changeR(r);
}



document.querySelector(".inputY").onkeyup = updateY;
let inputsX = document.getElementsByName('X');
for (let i = 0; i < inputsX.length; i ++) {
    inputsX[i].onchange = updateX;
}
document.querySelector(".inputR").onchange = updateR;