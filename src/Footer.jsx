import "./Footer.css";
import logo from "./assets/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <div className="footer-logo">
            <img src={logo} alt="Logo" />
            <div className="footer-hadding">
              <h3>Welcome Card</h3>
              <span>React</span>
            </div>
          </div>

          <p className="Summary">
            Create, share and celebrate every <br />special moment  with beautiful
            welcome cards.
          </p>

          <div className="social-icons">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-pinterest-p"></i>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <a href="#">Home</a>
          <a href="#">Categories</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-section">
          <h4>Categories</h4>
          <a href="#">Birthday</a>
          <a href="#">Wedding</a>
          <a href="#">Graduation</a>
          <a href="#">New Job</a>
          <a href="#">Thank You</a>
          <a href="#">Friendship</a>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <a href="#">Help Center</a>
          <a href="#">FAQ</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>

          <p><i className="fa-regular fa-envelope"></i> hello@welcomecard.com</p>

          <p><i className="fa-solid fa-phone"></i> +91 98765 43210</p>

          <p><i className="fa-solid fa-location-dot"></i> Surat, Gujarat, India</p>
        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        © 2025 Welcome Card React. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;