import { useEffect, useState } from "react";

export default function Home() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=2d3eb0d29c8d4341a0e551011ea58999"
      );
      const data = await response.json();
      setNewsData(data.articles);
    } catch (error) {
      console.log("Error fetching news:", error);
    }
  };

  return (
    <div className="container">
      <div className="home-page-header"></div>
      <main>
        {/* Your page content */}
        {newsData.map((newsItem, index) => (
          <div key={index}>
            <h3>{newsItem.title}</h3>
            <p>{newsItem.description}</p>
            <img src={newsItem.image} alt={newsItem.title} />
            {/* Render other news data fields */}
          </div>
        ))}
      </main>

      <div id="sidebar">Sidebarr22</div>
      <div id="content1">Content1</div>
      <div id="content2">Content2</div>
      <div id="content3">Content3</div>
      <footer>Footer</footer>
    </div>
  );
}

// export default home;
//   <div className="container">
//     <div className="name-box">
//       <Image src={image} className="header-img img img-responsive" alt="..."  />
//     </div>
//     <div className="main">
//       this is the main content
//     </div>
//     <div id="sidebar">

//     </div>

//     <footer>Footer</footer>
//   </div>function home() {

//   return (
//     <div className="container">
//     <div className="home-page-header">
//     </div>
//     <main>Main</main>
//     <div id="sidebar">Sidebar</div>
//     <div id="content1">Content1</div>
//     <div id="content2">Content2</div>
//     <div id="content3">Content3</div>
//     <footer>Footer</footer>
//   </div>

//   );
// }
