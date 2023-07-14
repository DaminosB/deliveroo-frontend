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
              <p>{quantity}</p>
              <button
                onClick={() => {
                  handlePlus(index);
                }}
              >
                +
              </button>
            </div>
            <p>{name}</p>
            <p>{`${(quantity * price).toFixed(2)}\u00a0€`}</p>
          </div>
        );
      })}
    </>
  );
};

export default Line;
