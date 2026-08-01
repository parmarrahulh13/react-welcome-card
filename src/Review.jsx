import "./Review.css";
import services from "./data/services.js";
import reviews from "./data/reviews.js";


function Review() {
  return (
    <>
      <div className="services">
        <h2 className="service-hadding"><b>Why Choose Us?</b></h2>
        <div className="service">
          {services.map((service) => (
            <div className="servicecards" key={service.heading}>
              <div className="icon">{service.icon}</div>

              <div className="details">
                <h4>{service.heading}</h4>
                <p>{service.explain}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="reviews">
        <h2 className="review-hadding"><b>What People Say</b></h2>
        <div className="review">
          {reviews.map((review)=>(
            <div className="review-card" key={review.name}>
              <div className="review-img"><img src={review.image} alt={review.name} className="review-image" /></div>
              
              <div className="stars">
                {"⭐".repeat(review.stars)}
               
                <p>{review.review}</p>
               <h4>-{review.name}</h4>
               <span>{review.profession}</span>
               </div>
              
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Review;
