// câu lệnh giúp tạo một arrow function component: rafce
// Tất cả các thẻ về UI được sử dụng trong thư viện đều là thẻ jsx tới từ thư viện react
const Header = () => {
  // Cơ chế data binding
  // Cơ chế giúp đưa các giá trị từ biến, hàm lên giao diện, cách sử dụng gọi một {} và truyền giá trị từ biến hoặc hàm return về vào bên trong
  let hoTen = "Đỗ Quang Khải";

  let style = { backgroundColor: "pink", padding: "40px 20px" };

  // thẻ fragment (<></>) giúp kết hợp layout và trả về 2 div cha cùng một lúc
  return (
    <div style={style}>
      <div>Hello</div>
      <div>Holla</div>
    </div>
  );
};

export default Header;
