var hocSinh = [

    {hoTen: "Nguyen VAn hung",
    maSinhVien: "1971020234",
    diem: 9,
    gioiTinh: false,
    },

    {hoTen: "Nguyen Nam CUong",
    maSinhVien: "1971020366",
    diem: 8.5,
    gioiTinh: false,
    },

    {hoTen: "Doan Van Sang",
    maSinhVien: "1971020394",
    diem: 7,
    gioiTinh: false,
    },
];

// lam viec voi mang
var divEL = document.getElementById("danhSach");

// for (var i = 0; i < hocSinh.length; i++) {
//     hocSinh.forEach(function (hs)) {
//     const maSVEL = document.createElement("p");
//     const tenEL = document.createElement("span");

//     maSVEL.innerText = "Ma sinh vien: " + hs.maSinhVien;
//     tenEL.innerText = "Ho ten: " + hs.hoTen;

//     divEL.appendChild(maSVEL);
//     divEL.appendChild(tenEL);
//     divEL.appendChild(document.createElement("br"));

//foreach lap tung phan tu
hocSinhDuocCongDiem = hocSinh.map(function (hs) {
return {
    hoTen: hs.hoTen,
    maSinhVien: hs.maSinhVien,
    diem: hs.diem + 1,
    gioiTinh: hs.gioiTinh,
};
});

hocSinhDuocCongDiem.forEach(function (hs) 
    const maSVEL = document.createElement("p");
    const tenEL = document.createElement("span");
    const diemEL = document.createElement("p");

    maSVEL.innerText = "Ma sinh vien: " + hs.maSinhVien;
    tenEL.innerText = "Ho ten: " + hs.hoTen;
    diemEL.innerText = "Diem: " + hs.diem;

    divEL.appendChild(maSVEL);
    divEL.appendChild(tenEL);
    divEL.appendChild(diemEL);
    divEL.appendChild(document.createElement("br"));
)};

hocSinh