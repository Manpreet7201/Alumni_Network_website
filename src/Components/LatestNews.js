import React, { useState } from 'react';
import '../CSS/LatestNews.css'; // Make sure the path is correct
import My_image from '../Assets/Img/News.webp';

const newsData = [
  {
      id: 1,
      title: "Entrance Exam News",
      summary: "Notification for Entrance Test for Admission to B.Sc. Nursing Programme (Academic Session 2024-25)",
      imageUrl: My_image,
      articleLink: "https://eternaluniversity.edu.in/docs/Entrance.pdf",
      fullArticleLink: "https://eternaluniversity.edu.in/docs/Entrance.pdf"
  },
  {
      id: 2,
      title: "Entrance Exam News",
      summary: "Notification for Entrance Test for Admission to B.Sc. Nursing Programme (Academic Session 2024-25)",
      imageUrl: My_image,
      articleLink: "https://eternaluniversity.edu.in/docs/Entrance.pdf",
      fullArticleLink: "https://eternaluniversity.edu.in/docs/Entrance.pdf"
  },
  {
      id: 3,
      title: "Entrance Exam News",
      summary: "Notification for Entrance Test for Admission to B.Sc. Nursing Programme (Academic Session 2024-25)",
      imageUrl: My_image,
      articleLink: "https://eternaluniversity.edu.in/docs/Entrance.pdf",
      fullArticleLink: "https://eternaluniversity.edu.in/docs/Entrance.pdf"
  },
  {
      id: 4,
      title: "Entrance Exam News",
      summary: "Notification for Entrance Test for Admission to B.Sc. Nursing Programme (Academic Session 2024-25)",
      imageUrl: My_image,
      articleLink: "https://eternaluniversity.edu.in/docs/Entrance.pdf",
      fullArticleLink: "https://eternaluniversity.edu.in/docs/Entrance.pdf"
  },
  {
      id: 5,
      title: "Entrance Exam News",
      summary: "Notification for Entrance Test for Admission to B.Sc. Nursing Programme (Academic Session 2024-25)",
      imageUrl: My_image,
      articleLink: "https://eternaluniversity.edu.in/docs/Entrance.pdf",
      fullArticleLink: "https://eternaluniversity.edu.in/docs/Entrance.pdf"
  },
  
];

function LatestNews() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % newsData.length);
    };

    return (
        <div className="news-wrapper">
            <h2 className="latest-news-heading">Latest Updates</h2>
            <div className="news-slider">
                <div className="news-section" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {newsData.map((item) => (
                        <div className="news-item" key={item.id}>
                            <img src={item.imageUrl} alt="News" className="news-image"/>
                            <div className="news-content">
                                <a href={item.articleLink} className="news-title">{item.title}</a>
                                <p>{item.summary}</p>
                                <a href={item.fullArticleLink} className="read-more">Read Full Article</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button className="next-button1" onClick={handleNext}>NEXT &gt;</button>
        </div>
    );
}

export default LatestNews;
