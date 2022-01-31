import {
  FaPhone,
  FaEnvelope,
  FaUserCircle,
  FaShoppingCart,
} from "react-icons/fa";
import Image from "next/image";
const Header = () => {
  return (
    <header className="header">
      <div className="sec1">
        <h5>Have any question?</h5>
        <h5>
          <FaPhone /> (+91) 8090070073{" "}
        </h5>
        <h5>
          <FaEnvelope /> info@vvlearnings.com
        </h5>
      </div>
      <div className="sec2">
        <div className="logo">
          <Image src="/logo.png" alt="logo" width={153} height={40} />
        </div>
        <div className="searchbox">This is searchbox</div>
        <div className="profile">
          <FaUserCircle />
        </div>
        <div className="cart">
          <FaShoppingCart />
        </div>
        <div>
          <a href="https://admin-vlearning.herokuapp.com/admin">Admin Login</a>
        </div>
      </div>
      <nav className="sec3">
        <ul>
          <li>
            <a href="#">Video Lectures</a>
          </li>
          <li>
            <a href="#">Books</a>
          </li>
          <li>
            <a href="#">Faculty</a>
          </li>
          <li>
            <a href="#">Subjects</a>
          </li>
          <li>
            <a href="#">Test Series</a>
          </li>
          <li>
            <a href="#">Student Login</a>
          </li>
          <li>
            <a href="#">Free Resources</a>
          </li>
          <li>
            <a href="#">Faculty Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
