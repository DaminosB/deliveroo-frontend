// import { useState, useEffect } from "react";
// import "./Content.css";
// import axios from "axios";

// const Content = () => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://site--deliveroo-backend--kc7q9tc45mqv.code.run"
//         );
//         setData(response.data);
//         setIsLoading(false);
//       } catch (error) {
//         console.log(error.response);
//       }
//     };
//     fetchData();
//   }, []);

//   return isLoading ? (
//     <span>En cours de chargement</span>
//   ) : (
//     <main>
//       <div className="container">
//         <div className="title">
//           <div>
//             <h1>{data.restaurant.name}</h1>
//             <p>{data.restaurant.description}</p>
//           </div>
//           <img src={data.restaurant.picture} alt="Photo" />
//         </div>
//       </div>
//       <div>
//         <div className="container">
//           <div className="meals">
//             {data.categories.map((category, index) => {
//               if (category.meals.length > 0) {
//                 return (
//                   <>
//                     <h2>{category.name}</h2>
//                     <div key={category.name} className="category">
//                       {category.meals.map((meal, index) => {
//                         console.log(meal);
//                         return (
//                           <div key={meal.id}>
//                             <div className="meal-description">
//                               <h3>{meal.title}</h3>
//                               {meal.description && <p>{meal.description}</p>}
//                               <div>
//                                 <span>{meal.price} €</span>
//                                 {meal.popular && (
//                                   <span className="popular">
//                                     <i className="icon-STAR_FILL"></i>Populaire
//                                   </span>
//                                 )}
//                               </div>
//                             </div>
//                             {meal.picture && (
//                               <img
//                                 src={meal.picture}
//                                 alt={`Photo d'un ${meal.title}`}
//                               />
//                             )}
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </>
//                 );
//               }
//             })}
//           </div>
//         </div>
//         <div className="cart">
//           <p>Panier</p>
//         </div>
//       </div>
//     </main>
//   );
// };
// export default Content;

import { useState, useEffect } from "react";
import "./Content.css";
import axios from "axios";
import Categories from "./Categories";

const Content = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--deliveroo-backend--kc7q9tc45mqv.code.run"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <main>
      <div className="container">
        <div className="title">
          <div>
            <h1>{data.restaurant.name}</h1>
            <p>{data.restaurant.description}</p>
          </div>
          <img src={data.restaurant.picture} alt="Photo" />
        </div>
      </div>
      <div className="content-box">
        <div className="container">
          <Categories data={data} />
          <div className="cart">{/* <p>Panier</p> */}</div>
        </div>
      </div>
    </main>
  );
};
export default Content;
