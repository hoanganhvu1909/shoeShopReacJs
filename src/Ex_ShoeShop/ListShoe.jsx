import ShoeItem from "./ShoeItem";

const ListShoe = ({ listShoe, addShoeCart }) => {
  // console.log(props);
  return (
    <div className="list_shoe grid grid-cols-3 gap-5">
      {listShoe.map((shoe, index) => {
        // Yêu cầu: mang giao diện các item đôi giày đưa vào bên trong component shoeItem và quản lí
        return <ShoeItem addShoeCart={addShoeCart} shoe={shoe} key={index} />;
      })}
    </div>
  );
};

export default ListShoe;
