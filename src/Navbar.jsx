import "./Navbar.css";
import logo from "./assets/logo.png";

function Navbar(){
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
                <h2>Welcome Card React</h2>
            </div>
            <ul className="nav-link">
                <li><a href="#">Home</a></li>
                <li><a href="#">Categories</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                
            </ul>
             <button className="nav-btn">Explore Cards</button>
        </div>
    );
};

export default Navbar;