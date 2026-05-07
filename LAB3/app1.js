let soAn = Math.floor(Math.random() * 100) + 1;
let soLanDoan = 0;

function doanSo() {
    let input = document.getElementById("soDoan");
    let soNhap = Number(input.value);
    let ketQua = document.getElementById("ketQua");

 
    if (input.value === "") {
        ketQua.innerText = "Vui lòng nhập số!";
        ketQua.style.color = "orange";
        return;
    }

   
    if (soNhap < 1 || soNhap > 100) {
        ketQua.innerText = "Nhập số từ 1 đến 100!";
        ketQua.style.color = "orange";
        return;
    }

    soLanDoan++;

    if (soNhap > soAn) {
        ketQua.innerText = "Quá lớn!";
        ketQua.style.color = "red";
    } 
    else if (soNhap < soAn) {
        ketQua.innerText = "Quá nhỏ!";
        ketQua.style.color = "blue";
    } 
    else {
        ketQua.innerText = "🎉 Đúng rồi sau " + soLanDoan + " lần đoán!";
        ketQua.style.color = "green";
    }

    input.value = "";
    input.focus();
}
