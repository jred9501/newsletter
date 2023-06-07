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
      console.log(data.articles, data.url);
    } catch (error) {
      console.log("Error fetching news:", error);
    }
  };

  return (
    <div className="container">
      <div className="home-page-header">
        <h1>World Headlines</h1>
      </div>
      <main className="news-grid">
        {/* Your page content */}
        {newsData.map((newsItem, index) => (
          <div className="news-field" key={index}>
            <img
              src={newsItem.urlToImage}
              alt={newsItem.title}
              href={newsItem.url}
            />
            <h3>{newsItem.title}</h3>
            <h4>Author: {newsItem.author}</h4>
            <h5>Published on: {newsItem.publishedAt}</h5>

            <h5>Source: {newsItem.source.name}</h5>
            <h3 className="source-link">
              <a href={newsItem.url}>Read More</a>
            </h3>
            <p>{newsItem.description}</p>

            {/* Render other news data fields */}
          </div>
        ))}
      </main>

      {/* <div id="sidebar">Sidebar</div>
      <div id="content1">Content1</div>
      <div id="content2">Content2</div>
      <div id="content3">Content3</div> */}
      <div className="footer">&copy; 2023 News Feed</div>

      <style jsx>{`
        .news-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .news-item {
          border: 1px solid #ddd;
          padding: 20px;
        }
      `}</style>
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
