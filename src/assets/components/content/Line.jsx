const Line = ({ cartItems, setCartItems }) => {
  return (
    <>
      {cartItems.map(({ name, quantity, price }, index) => {
        const handleMinus = () => {
          const newArray = [...cartItems];

          newArray[index].quantity--;
          newArray[index].quantity === 0 && newArray.splice(index, 1);

          setCartItems(newArray);
        };

        const handlePlus = () => {
          const newArray = [...cartItems];

          newArray[index].quantity++;

          setCartItems(newArray);
        };
        return (
          <div key={name} className="line">
            <div>
              <button onClick={handleMinus}>-</button>
              <span>{quantity}</span>
              <button onClick={handlePlus}>+</button>
              <span>{name}</span>
            </div>
            <span>{`${(quantity * price).toFixed(2)} €`}</span>
          </div>
        );
      })}
    </>
  );
};

export default Line;
