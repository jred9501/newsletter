import Image from "next/image";
import image from "../public/pic.jpg";

function Home() {
  return (
    <div className="jumbotron">
   <Image src={image} className="header-img img img-responsive" alt="..."  />
    </div>
  );
}
export default Home;
