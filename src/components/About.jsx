import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faGamepad,
  faMountain,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import "./About.css";

const hobbies = [
  {
    icon: faCoffee,
    title: "Cooking",
    text: "I love experimenting with new ingredients and creating delicious meals.",
  },
  {
    icon: faGamepad,
    title: "Gaming",
    text: "Gaming is a great way to relax and it's where I spend the most time with my friends.",
  },
  {
    icon: faMountain,
    title: "Hiking",
    text: "I like the hiking options in Utah and all the beautiful views. It's my goal to see them all!",
  },
  {
    icon: faPlane,
    title: "Traveling",
    text: "I love to travel and see new things, my favorite places to go are historical sites and museums.",
  },
];

function About() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % hobbies.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="hobby-carousel-container">
        <div
          className="hobby-carousel-track"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {hobbies.map((hobby, idx) => (
            <div className="hobby-card" key={idx}>
              <FontAwesomeIcon icon={hobby.icon} style={{ fontSize: "3rem", color: "#6116c9" }} />
              <h5>{hobby.title}</h5>
              <p>{hobby.text}</p>
            </div>
          ))}
        </div>
        <div className="hobby-dots">
          {hobbies.map((_, idx) => (
            <span
              key={idx}
              className={`hobby-dot${current === idx ? " active" : ""}`}
              onClick={() => setCurrent(idx)}
            ></span>
          ))}
        </div>
      </div>

      <div className="row p-3 education">
        <h3 className="text-center">Education</h3>

        {/* card 1 */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-uppercase mb-1">
                    Web Essentials Certificate of Proficiency
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    Spring 2024, GPA: 3.80
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-uppercase mb-1">
                    Programming Essentials Certificate of Proficiency
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    In-progress: Spring 2025
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-uppercase mb-1">
                    Associate of Science in General Studies
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    Fall 2023, GPA: 3.76
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-uppercase mb-1">
                    Bachelor of Science
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    In-progress: Fall 2025, GPA: 3.86
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
