import React from "react";

function ProjectImg(props) {
  let { pro } = props;

  return (
    <div
      id={`carouselExampleDark${pro.id}`}
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
      key={pro.id}
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target={`#carouselExampleDark${pro.id}`}
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target={`#carouselExampleDark${pro.id}`}
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target={`#carouselExampleDark${pro.id}`}
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src={pro.image.img1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={pro.image.img2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={pro.image.img3} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev "
        type="button"
        data-bs-target={`#carouselExampleDark${pro.id}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next "
        type="button"
        data-bs-target={`#carouselExampleDark${pro.id}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default ProjectImg;
