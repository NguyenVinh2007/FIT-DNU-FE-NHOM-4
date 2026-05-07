// Lay input ten
const tenEl = document.getElementById("a");

// Lay input tuoi
const tuoiEl = document.getElementById("b");

// Lay the ket qua
const ketQuaEl = document.getElementById("ketQua");



function xinChao (){
    let ten = tenEl.value;
    let tuoi = Number(tuoiEl.value);
    ketQuaEl.innerText =  + a + b + " = " + (a + b);
}
var soA = document.getElementById("a");
var soB = document.getElementById("b");
var ketQuaHienThi = document.getElementById("ketQua");



function tong() {
    let ketQua = Number(soA.value) + Number(soB.value);
    ketQuaHienThi.innerText = "Tổng: " + ketQua;
}


function hieu() {
    let ketQua = Number(soA.value) - Number(soB.value);
    ketQuaHienThi.innerText = "Hiệu: " + ketQua;
}


function tich() {
    let ketQua = Number(soA.value) * Number(soB.value);
    ketQuaHienThi.innerText = "Tích: " + ketQua;
}


function thuong() {
    let ketQua = Number(soA.value) / Number(soB.value);
    ketQuaHienThi.innerText = "Thương: " + ketQua;
}  
