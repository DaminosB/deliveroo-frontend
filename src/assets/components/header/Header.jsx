import "./Header.css";
import logo from "../../img/logo-teal.svg";

const Header = ({ data }) => {
  return (
    <header>
      <div className="baseline">
        <div className="container">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="title">
          <div>
            <h1>{data.restaurant.name}</h1>
            <p>{data.restaurant.description}</p>
          </div>
          <img src={data.restaurant.picture} alt="Photo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
