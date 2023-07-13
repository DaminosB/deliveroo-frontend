import Meals from "./Meals";

const Categories = ({ data, cartItems, setCartItems }) => {
  return (
    <div>
      {data.categories.map((category, index) => {
        if (category.meals.length > 0) {
          return (
            <div key={category.name} className="meals">
              <h2>{category.name}</h2>
              <div className="category">
                <Meals
                  category={category}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Categories;
