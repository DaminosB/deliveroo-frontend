const Meals = ({ category, cartItems, setCartItems }) => {
  return (
    <>
      {category.meals.map((meal) => {
        const handleAddToCart = () => {
          const newCart = [...cartItems];
          let isExist = false;
          let index = 0;

          for (let i = 0; i < newCart.length; i++) {
            if (newCart[i].name === meal.title) {
              isExist = true;
              index = i;
            }
          }

          if (isExist) {
            newCart[index].quantity++;
            setCartItems(newCart);
          } else {
            newCart.push({ name: meal.title, quantity: 1, price: meal.price });
            setCartItems(newCart);
          }
        };
        return (
          <div key={meal.id} onClick={handleAddToCart}>
            <div className="meal-description">
              <h3>{meal.title}</h3>
              {meal.description && <p>{meal.description}</p>}
              <div>
                <span>{meal.price} €</span>
                {meal.popular && (
                  <span className="popular">
                    <i className="icon-STAR_FILL"></i>Populaire
                  </span>
                )}
              </div>
            </div>
            {meal.picture && (
              <img src={meal.picture} alt={`Photo d'un ${meal.title}`} />
            )}
          </div>
        );
      })}
    </>
  );
};

export default Meals;
