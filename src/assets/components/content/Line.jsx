const Line = ({ cartItems, setCartItems }) => {
  const handleMinus = (index) => {
    const newArray = [...cartItems];

    newArray[index].quantity--;
    newArray[index].quantity === 0 && newArray.splice(index, 1);

    setCartItems(newArray);
  };

  const handlePlus = (index) => {
    const newArray = [...cartItems];

    newArray[index].quantity++;

    setCartItems(newArray);
  };

  return (
    <>
      {cartItems.map(({ name, quantity, price }, index) => {
        return (
          <div key={name} className="line">
            <div>
              <button
                onClick={() => {
                  handleMinus(index);
                }}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => {
                  handlePlus(index);
                }}
              >
                +
              </button>
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
