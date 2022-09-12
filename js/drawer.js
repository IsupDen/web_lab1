let element = document.getElementById("graphics")
let canvas = element.getContext('2d');

let colorStroke = "#fff";
let colorText = "#fff";
let colorGraphFill = "#6eff3e";
let colorPointStroke = "#730024";
let colorPointFill = "#ff1867";

let small = 5;
let big = 15;

let point_x = 0;
let point_y = 0;
let radius = 5;

function drawText() {
    canvas.fillText("R", element.width/2 + 2*small, element.height*1/6 + small);
    canvas.fillText("R", element.width/2 + 2*small, element.height*5/6 + small);
    canvas.fillText("R", element.width*5/6 - small, element.height/2 - 2*small);
    canvas.fillText("R", element.width*1/6 - small, element.height/2 - 2*small);
}

function drawLines() {
    canvas.moveTo(element.width/2, element.height);
    canvas.lineTo(element.width/2, 0);
    canvas.lineTo(element.width/2 + small, big);
    canvas.moveTo(element.width/2, 0);
    canvas.lineTo(element.width/2 - small, big);
    canvas.moveTo(0, element.height/2);
    canvas.lineTo(element.width, element.height/2);
    canvas.lineTo(element.width - big, element.height/2 + small);
    canvas.moveTo(element.width, element.height/2);
    canvas.lineTo(element.width - big, element.height/2 - small);
    canvas.moveTo(element.width/2 - small, element.height*1/6);
    canvas.lineTo(element.width/2 + small, element.height*1/6);

    canvas.moveTo(element.width/2 - small, element.height*2/6);
    canvas.lineTo(element.width/2 + small, element.height*2/6);
    canvas.moveTo(element.width/2 - small, element.height*4/6);
    canvas.lineTo(element.width/2 + small, element.height*4/6);
    canvas.moveTo(element.width/2 - small, element.height*5/6);
    canvas.lineTo(element.width/2 + small, element.height*5/6);

    canvas.moveTo(element.width*1/6, element.height/2 + small);
    canvas.lineTo(element.width*1/6, element.height/2 - small);

    canvas.moveTo(element.width*2/6, element.height/2 + small);
    canvas.lineTo(element.width*2/6, element.height/2 - small);
    canvas.moveTo(element.width*4/6, element.height/2 + small);
    canvas.lineTo(element.width*4/6, element.height/2 - small);
    canvas.moveTo(element.width*5/6, element.height/2 + small);
    canvas.lineTo(element.width*5/6, element.height/2 - small);
}


function drawGraph(x = point_x, y = point_y, r = radius) {
    canvas.fillStyle = $('body').css('backgroundColor');
    canvas.fillRect(0, 0, element.width, element.height);
    
    canvas.lineWidth = 1;
    canvas.strokeStyle = "hsl(0,0%,0%)";
    canvas.fillStyle = colorGraphFill;
    
    canvas.fillRect(element.width/6, element.height/2, element.width/3, element.height/3);

    canvas.beginPath();
    canvas.moveTo(element.width/2, element.height/6);
    canvas.lineTo(element.width/2, element.height/2);
    canvas.lineTo(element.width*5/6, element.height/2);
    canvas.lineTo(element.width/2, element.height/6);
    canvas.fill();
    canvas.closePath();

    canvas.beginPath();
    canvas.arc(element.width/2, element.height/2, element.width/3, 0, Math.PI/2, false);
    canvas.moveTo(element.width/2, element.height/2);
    canvas.lineTo(element.width*5/6, element.height/2);
    canvas.lineTo(element.width/2, element.height*5/6);
    canvas.lineTo(element.width/2, element.height/2);
    canvas.fill();
    canvas.closePath();

    canvas.fillStyle = colorText;
    canvas.strokeStyle = colorStroke;
    canvas.lineWidth = 1;
    canvas.setTransform(1,0,0,1,0.5,0.5);
    canvas.font = "10pt serif";

    canvas.beginPath();

    drawLines()
    drawText();

    canvas.stroke();
    canvas.closePath();

    canvas.fillStyle = colorPointFill;
    canvas.strokeStyle = colorPointStroke;
    canvas.lineWidth = 1;
    let valx = element.width/2 + (x/r)*element.width/3;
    let valy = element.height/2 - (y/r)*element.height/3

    canvas.beginPath();
    canvas.arc(valx, valy, 4, 0, 2*Math.PI, true);
    canvas.fill();
    canvas.stroke();
    canvas.closePath();

}

function changeR(r) {
    radius = r;
    drawGraph();
}

function moveY(y) {
    point_y = y;
    drawGraph();
}

function moveX(x) {
    point_x = x;
    drawGraph();
}

drawGraph();