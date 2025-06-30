import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './News.css';

const News = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="news-page">
      <header className="main-header">
        <div className="logo">
          <img src="./src/imgs/Slogo.png" alt="logo" width={186} />
        </div>
        <NavBar />
      </header>
      
      <main className="news-content">
        <h1>News & Services</h1>
        <div className="news-grid">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="news-card">
              <div className="news-image">
                <img src="./src/imgs/pic.jpg" alt="News" />
              </div>
              <div className="news-text">
                <h3>Latest Agricultural Updates</h3>
                <p>Stay informed about the latest developments in agriculture and fertilizer technology.</p>
                <button>Read More <span>&rarr;</span></button>
              </div>
            </div>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default News; 