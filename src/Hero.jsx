import "./Hero.css";
import heroImg from "./assets/hero-img.png";

function Hero(){
    return (
        <div className="hero-sec">
            <div className="hero-text">
                <h1><b>Create Beutiful <br/>  Wellcome Card For<br/> <span className="changecolor">Every Occation</span></b></h1>
                <p>Choose from wide range of ellegant and modern <br/> welcome  card for evry special momement in life</p>
                <button> Explore Cards</button>
            </div>
            <div className="hero-image">
                <img src={heroImg} alt="Welcome Hero" />
            </div>
        </div>
    );
};

export default Hero;