import Image from "next/image";
import image from "../images/pic.jpg";

function Home() {
  return (
    <div className="jumbotron">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image src={image} className="d-block w-50" alt="..." />
          </div>
          <div className="carousel-item active">
            <Image src={image} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item active">
            <Image src={image} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
