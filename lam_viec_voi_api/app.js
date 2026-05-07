const API_URL = "https://69e9873a55d62f34797a997e.mockapi.io/sinh_vien";

function hienThiDanhSachSinhVien(danhSach) {
  const el = document.getElementById("danhSach");
  if (!el) return;

  el.innerHTML = `
    <table border="1" cellpadding="10">
      <thead>
        <tr>
          <th>ID</th>
          <th>Tên sinh viên</th>
        </tr>
      </thead>
      <tbody>
        ${danhSach.map(sv => `
          <tr>
            <td>${sv.id}</td>
            <td>${sv.ho_ten || sv.name || "Chưa có tên"}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

async function laySinhVien() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Không thể lấy danh sách sinh viên");
    }

    const data = await response.json();
    console.log("Danh sách sinh viên:", data);
    hienThiDanhSachSinhVien(data);
  } catch (error) {
    console.error("Lỗi:", error);
  }
}

async function layMotSinhVien(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`);

    if (!response.ok) {
      throw new Error(`Không thể lấy sinh viên có id = ${id}`);
    }

    const data = await response.json();
    console.log("Một sinh viên:", data);
  } catch (error) {
    console.error(error);
  }
}

// Gọi API
laySinhVien();
// layMotSinhVien(1); // có thể lỗi nếu id không tồn tại