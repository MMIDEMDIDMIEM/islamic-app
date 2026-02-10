import React from 'react';
import { Link } from 'react-router-dom';
import "./AllAzkar.css"

function AllAzkar() {
  const categories = [
    {
      id: 1,
      title: "أذكار الصباح",
      icon: "☀️",
      path: "أذكار الصباح",
      color: "#ff9f43"
    },
    {
      id: 2,
      title: "أذكار المساء",
      icon: "🌙",
      path: "أذكار المساء",
      color: "#54a0ff"
    }
  ];

  return (
    <div className="azkar-section  ">
      <div className="container">
        <h2 className="text-center mb-5 section-title mt-5  ">الأذكار اليومية</h2>
        
        <div className="row justify-content-center gap-4">
          {categories.map((cat) => (
            <Link 
              to={`/detalAzkar/${cat.path}`} 
              key={cat.id} 
              className="azkar-main-card col-md-5"
              style={{ '--card-color': cat.color }}
            >
              <div className="card-content">
                <span className="card-icon">{cat.icon}</span>
                <h3 className="card-title">{cat.title}</h3>
                <p className="card-text">قراءة أذكار {cat.title.split(' ')[1]}</p>
                <div className="go-btn">ابدأ الآن ←</div>
              </div>
            </Link>
          ))}
        </div> {/* نهاية الـ row */}
      </div> {/* نهاية الـ container */}
    </div> 
  );
}

export default AllAzkar;