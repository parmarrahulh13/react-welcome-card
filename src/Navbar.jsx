import "./Navbar.css";
import logo from "./assets/logo.png";

function Navbar({websitename}){
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
                <div className="logo-text">
                    <h2><b>{websitename} </b></h2> 
                    <h3>React</h3>
                </div>
                
            </div>
            <div className="links">

              <ul className="nav-link">
                <li><a href="#">Home</a></li>
                <li><a href="#">Categories</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
             <button className="nav-btn">Explore Cards</button>

            </div>
            
        </div>
    );
};

export default Navbar;