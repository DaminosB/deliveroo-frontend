const Meals = ({ category, cartItems, setCartItems }) => {
  const handleAddToCart = (meal) => {
    const newCart = [...cartItems];

    const indexItem = newCart.findIndex((element) => element.id === meal.id);

    if (indexItem === -1) {
      newCart.push({
        name: meal.title,
        quantity: 1,
        price: meal.price,
        id: meal.id,
      });
    } else {
      newCart[indexItem].quantity++;
    }
    setCartItems(newCart);
  };

  return (
    <>
      {category.meals.map((meal) => {
        return (
          <div
            key={meal.id}
            onClick={() => {
              handleAddToCart(meal);
            }}
          >
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
