import React from 'react'
import sliderImg from '../../images/wepik.jpeg'
const Slider = () => {
  return (
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src={sliderImg} className="d-block w-100" style={{ height: '380px' }} alt="..." />
    </div>
    <div className="carousel-item">
    <img src={sliderImg} className="d-block w-100" style={{ height: '380px' }} alt="..." />
    </div>
    <div className="carousel-item">
    <img src={sliderImg} className="d-block w-100" style={{ height: '380px' }} alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Slider