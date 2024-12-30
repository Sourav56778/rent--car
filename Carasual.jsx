import React from 'react';
import "./Carasual.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Carasual() {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000"> {/* Auto-slide with 1-second interval */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner newclass">
          <div className="carousel-item active newimg">
            <img src="https://www.toyota.com.kh/content/dam/cambodia/models/suv/fortuner/masthead/Fortuner%20Legender%20Masthed%20Desktop.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item newimg">
            <img src="https://cdn.wallpapersafari.com/30/93/6QglNf.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item newimg">
            <img src="https://5.imimg.com/data5/SELLER/Default/2023/11/363215902/QM/PH/TQ/83088084/toyota-fortuner-legender-car.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carasual;
