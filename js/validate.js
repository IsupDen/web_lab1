function updateY() {
    let separator1 = '.';
    let separator2 = ',';
    let maxValue = 5;
    let minValue = -5;
    let valid = false;
    let value = NaN;
    if (this.value[0] === separator1 || this.value[0] === separator2) {
        this.value = '0' + this.value;
    }
    let y = this.value.replace(',', '.')

    if (isFinite(y)) {
        value = parseFloat(y);
    }
    if (!isNaN(value)) {
        if (value > minValue && value < maxValue) {
            valid = true;
            moveY(value);
        }
    }
    if (valid || this.value === '') {
        document.getElementById('inputY').style.border = "";
    } else {
        document.getElementById('inputY').style.border = "3px solid #ff1867";
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