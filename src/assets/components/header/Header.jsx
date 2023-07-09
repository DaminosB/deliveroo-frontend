import "./Header.css";
import logo from "../../img/logo-teal.svg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="" />
      </div>
    </header>
  );
};

export default Header;
