import Line from "./Line";

const Cart = ({ cartItems, setCartItems }) => {
  let subTotal = 0;
  for (let i = 0; i < cartItems.length; i++) {
    subTotal += cartItems[i].price * cartItems[i].quantity;
  }

  return (
    <div className="cart-column">
      <div className="cart-box">
        <button className={cartItems.length > 0 ? "active" : "inactive"}>
          Valider mon panier
        </button>
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Votre panier est vide</p>
          </div>
        ) : (
          <div className="full-cart">
            <Line cartItems={cartItems} setCartItems={setCartItems} />
            <div>
              <div className="sub-total">
                <div>
                  <p>Sous Total</p>
                  <p>{`${subTotal.toFixed(2)} €`}</p>
                </div>
                <div>
                  <p>Frais de livraison</p>
                  <p>2,50€</p>
                </div>
              </div>
              <div className="total">
                <p>Total</p>
                <p>{`${(subTotal + 2.5).toFixed(2)} €`}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
