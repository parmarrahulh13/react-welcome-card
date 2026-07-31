import "./Featuredcard.css"
import featuredCard from "./data/Featuredcard.js";

function Featuredcard(){
    return(
        
        <div className="Featuredcard">
            <h2 className="Feature-hadding"><b>Featured Card</b></h2>

            <div className="cards">
                {featuredCard.map((card)=>(
                <div className="card" key={card.name}>
                    <img src={card.image} alt="" />
                    <div className="card-content">
                        <p><b>{card.name}</b></p>
                        <p id="viewcard"><a href="#">View Card <i class="fa-solid fa-arrow-right"></i></a></p>
                    </div>
                    
                </div>
                ))}
                
            </div>

        </div>
    )
}


export default Featuredcard;