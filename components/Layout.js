import React from 'react';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  // Array of news feeds
  const feeds = [
    { id: 1, title: 'News Feed 1', content: 'Content for News Feed 1' },
    { id: 2, title: 'News Feed 2', content: 'Content for News Feed 2' },
    { id: 3, title: 'News Feed 3', content: 'Content for News Feed 3' },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {/* Add your header content here */}
        <h1>My Website</h1>
      </header>

      <div className={styles.newsFeeds}>
        {/* Loop through the feeds array */}
        {feeds.map((feed) => (
          <div className={styles.newsFeed} key={feed.id}>
            <h2>{feed.title}</h2>
            <p>{feed.content}</p>
          </div>
        ))}
      </div>

      <footer className={styles.footer}>
        {/* Add your footer content here */}
        <p>&copy; 2023 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
