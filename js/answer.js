function answer() {
    let xs = document.getElementsByName("X");
    let x;
    for (let i = 0; i < xs.length; i++) {
        if (xs[i].type === "radio" && xs[i].checked) {
            x = xs[i].value;
            break;
        }
    }
    let y = parseFloat(document.getElementsByName("Y")[0].value);
    let r = document.getElementsByName("R")[0].value;
    if (!(isNaN(x) || isNaN(y) || isNaN(r))) {
        $.ajax({
            type: "GET",
            url: "php/answer.php",
            data: {
                "x": x,
                "y": y,
                "r": r,
                "time": (new Date()).getTimezoneOffset()
            },
            success: onAnswer,
            dataType: "json"
        });
    }
    else
        alert('Заполните форму до конца!');
}

function onAnswer(answer) {
    let data = JSON.parse(JSON.stringify(answer));
    let result;
    result = '<tr>';
    result += `<td>(${data.x}, ${data.y}) </td>`;
    result += `<td>${data.r} </td>`;
    result += `<td>${data.currentTime}</td>`;
    result += `<td>${data.scriptTime} ms</td>`;
    result += `<td>${data.hit} </td>`;
    result += '</tr>'
    localStorage.setItem(localStorage.length, result);
    resultss.innerHTML = result + resultss.innerHTML;
}

function loadTable() {
    for (let i = 0; i < localStorage.length; i++) {
        resultss.innerHTML = localStorage.getItem(i) + resultss.innerHTML;
    }
}

function clearTable() {
    localStorage.clear();
    resultss.innerHTML = '';
}

loadTable()

