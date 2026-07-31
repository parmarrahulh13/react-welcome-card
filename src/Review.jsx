import "./Review.css";
import services from "./data/services.js";


function Review() {
  return (
    <>
      <div className="services">
        <h3>Why Choose Us?</h3>
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
    </>
  );
}

export default Review;
