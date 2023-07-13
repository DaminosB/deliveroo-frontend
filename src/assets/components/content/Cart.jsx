import Line from "./Line";

const Cart = ({ cartItems, setCartItems }) => {
  let subTotal = 0;
  for (let i = 0; i < cartItems.length; i++) {
    subTotal = subTotal + cartItems[i].price * cartItems[i].quantity;
  }

  return (
    <div className="cart-column">
      <div className="cart-box">
        <button>Valider mon panier</button>
        <div>
          {cartItems.length === 0 ? (
            <p>Votre panier est vide</p>
          ) : (
            <>
              <Line cartItems={cartItems} setCartItems={setCartItems} />
              <div>
                <div>
                  <span>Sous Total</span>
                  <span>{`${subTotal.toFixed(2)} €`}</span>
                </div>
                <div>
                  <span>Frais de livraison</span>
                  <span>2,50€</span>
                </div>
                <div>
                  <span>Total</span>
                  <span>{`${(subTotal + 2.5).toFixed(2)} €`}</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
