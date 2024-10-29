import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import "./homepage.css";

function Homepage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/items/")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="homepage">
      <HeroSection />
      <div className="container">
        <ul className="list-group">
          {data.map((item) => (
            <li key={item.id} className="list-group-item">
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
