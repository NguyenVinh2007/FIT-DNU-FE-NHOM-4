class APIResource {
  constructor(apiBaseURL, resourceName) {
    this.resourceName = resourceName;
    this.baseUrl = `${apiBaseURL}/${resourceName}`;
  }

  async layDanhSach() {
    const response = await fetch(this.baseUrl);

    if (!response.ok) {
      throw new Error(`Không thể lấy danh sách ${this.resourceName}`);
    }

    const data = await response.json();
    console.log(`Danh sách ${this.resourceName}:`, data);
    return data;
  }

  async layMotPhan(id) {
    const response = await fetch(`${this.baseUrl}/${id}`);

    if (!response.ok) {
      throw new Error(`Không thể lấy ${this.resourceName} có id = ${id}`);
    }

    const data = await response.json();
    console.log(`Một ${this.resourceName}:`, data);
    return data;
  }

  async themMoi(dinhNghia) {
    const response = await fetch(this.baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dinhNghia),
    });

    if (!response.ok) {
      throw new Error(`Không thể thêm ${this.resourceName}`);
    }

    const data = await response.json();
    console.log(`Đã thêm ${this.resourceName}:`, data);
    return data;
  }

  async capNhat(id, thongTinMoi) {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(thongTinMoi),
    });

    if (!response.ok) {
      throw new Error(`Không thể cập nhật ${this.resourceName} có id = ${id}`);
    }

    const data = await response.json();
    console.log(`Đã cập nhật ${this.resourceName}:`, data);
    return data;
  }

  async xoa(id) {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Không thể xóa ${this.resourceName} có id = ${id}`);
    }

    const data = await response.json();
    console.log(`Đã xóa ${this.resourceName}:`, data);
    return data;
  }
}

// API_URL_1 services và technicians
const API_URL_1 = "https://69fbe827fce564e25916ff71.mockapi.io/api/v1";

// API_URL_2 bookings
const API_URL_2 = "https://69fbe92dfce564e259170423.mockapi.io/api/v1"; 

// API xu li services
const courseAPI = new APIResource(API_URL_1, "services");

// API xu li technicians
const technicianAPI = new APIResource(API_URL_1, "technicians");  

// API xu li bookings
const bookingAPI = new APIResource(API_URL_2, "bookings");

async function khoiTao() {
  try {

    // lay danh sach dich vu
    const dichVu = await courseAPI.layDanhSach();

    // hien thi danh sach dich vu
    root.innerHTML = dichVu.map(function (kh) {
      return (
        "<div>" +
          "<p>ten dich vu " + kh.tenDichVu + "</p>" +
        "</div>"
      );
    }).join("");

  } catch (e) {
    console.log(e);
  }
}
