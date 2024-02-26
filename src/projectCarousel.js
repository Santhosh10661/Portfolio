const ImgCarousel = (images) => {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div
        className="carousel-inner "
        style={{ borderRadius: "10px", overflow: "hidden" }}
      >
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src={images.img1}
            alt=""
            className="col-12"
            style={{ height: "100%" }}
          />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src={images.img2}
            alt=""
            className="col-12"
            style={{ height: "100%" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src={images.img3}
            alt=""
            className="col-12"
            style={{ height: "100%" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src={images.img4}
            alt=""
            className="col-12"
            style={{ height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};
export default ImgCarousel;
