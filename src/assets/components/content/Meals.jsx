const Meals = ({ category }) => {
  return (
    <>
      {category.meals.map((meal, index) => {
        // console.log(meal);
        return (
          <div key={meal.id}>
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
