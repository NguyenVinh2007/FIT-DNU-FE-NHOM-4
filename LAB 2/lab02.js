var oto1 = {
    hangXe: "Toyota",
    mauSac: "Đỏ",
    namSanXuat: 2020,
    giaXe: 700000000,

    hienThongTinXe: function () {
        console.log("Hang xe: " + this.hangXe);
        console.log("Mau sac: " + this.mauSac);
        console.log("nam san xuat: " + this.namSanXuat);
        console.log("Gia xe: " + this.giaXe + " VND");;
    }
};

var oto2 = {
    hangXe: "Honda",
    mauSac: "Xanh",
    namSanXuat: 2021,
    giaXe: 650000000,

    hienThongTinXe: function () {
        console.log("Hang xe: " + this.hangXe);
        console.log("Mau sac: " + this.mauSac);
        console.log("nam san xuat: " + this.namSanXuat);
        console.log("Gia xe: " + this.giaXe + " VND");
    }
};

var oto3 = {
    hangXe: "Ford",
    mauSac: "Đen",
    namSanXuat: 2019,
    giaXe: 800000000,

    hienThongTinXe: function () {
        console.log("Hang xe: " + this.hangXe);
        console.log("Mau sac: " + this.mauSac);
        console.log("nam san xuat: " + this.namSanXuat);
        console.log("Gia xe: " + this.giaXe + " VND");
    }
};
var danhSachOto = [oto1, oto2, oto3];
for (var i = 0; i < danhSachOto.length; i++) {
    danhSachOto[i].hienThongTinXe();
}
var oto4 = {
    hangXe: "Mazda",
    mauSac: "Trắng",
    namSanXuat: 2022,
    giaXe: 750000000,

    hienThongTinXe: function () {
        console.log("Hang xe: " + this.hangXe);
        console.log("Mau sac: " + this.mauSac);
        console.log("nam san xuat: " + this.namSanXuat);
        console.log("Gia xe: " + this.giaXe + " VND");
    }
};

danhSachOto.push(oto4);
danhSachOto.splice(1, 1);