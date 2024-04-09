const ShoeItem = ({ shoe, addShoeCart }) => {
  return (
    <div className="border-2 p-5 rounded-md space-y-2">
      <img src={shoe.image} alt="" />
      <h2 className="text-2xl font-semibold">{shoe.name}</h2>
      <p className="text-lg text-gray-500">Giá tiền: {shoe.price}$</p>
      <button
        onClick={() => {
          addShoeCart(shoe);
        }}
        className="py-2 px-5 rounded-md text-white bg-black"
      >
        Add to cart
      </button>
    </div>
  );
};

export default ShoeItem;
