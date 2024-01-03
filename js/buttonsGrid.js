var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var wrp = document.createElement('div');
wrp.id = "btns";
document.body.appendChild(wrp);

arr.forEach((item, i) => {
    let btn = document.createElement('button');
    btn.id = 'btn' + (i + 1);
    btn.innerHTML = item;
    wrp.appendChild(btn);

});

document.getElementById('btn5').onclick = function () {
    rotate45(arr);
    fill();
};

function fill() {
    arr.forEach((item, i) => {
        document.getElementById('btn' + (i + 1)).innerHTML = item;
    });
}

function rotate45(arr) {
    let temp = arr[0];
    arr[0] = arr[3];
    arr[3] = arr[6];
    arr[6] = arr[7];
    arr[7] = arr[8];
    arr[8] = arr[5];
    arr[5] = arr[2];
    arr[2] = arr[1];
    arr[1] = temp;
}