import Image from "next/image";
import image from "../public/pic.jpg";

export default function Home() {
  return (
    <div className="jumbotron">
      <div className="jumbotron">
        <Image
          src={image}
          className="header-img img img-responsive"
          alt="..."
        />
      </div>

      <footer>&copy; 2023 News Feed</footer>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
