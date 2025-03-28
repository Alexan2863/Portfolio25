import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faGamepad,
  faMountain,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <>
      <div
        id="hobbiesCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        <div className="carousel-inner">
          {/* Card 1: Cooking */}
          <div className="carousel-item active">
            <div className="card text-center">
              <div className="card-body">
                <FontAwesomeIcon
                  icon={faCoffee}
                  style={{ fontSize: "3rem", color: "#6116c9" }}
                />
                <h5 className="card-title">Cooking</h5>
                <p className="card-text">
                  I love experimenting with new ingredients and creating
                  delicious meals.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Gaming */}
          <div className="carousel-item">
            <div className="card text-center">
              <div className="card-body">
                <FontAwesomeIcon
                  icon={faGamepad}
                  style={{ fontSize: "3rem", color: "#6116c9" }}
                />
                <h5 className="card-title">Gaming</h5>
                <p className="card-text">
                  Gaming is a great way to relax and it's where I spend the most
                  time with my friends.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Hiking */}
          <div className="carousel-item">
            <div className="card text-center">
              <div className="card-body">
                <FontAwesomeIcon
                  icon={faMountain}
                  style={{ fontSize: "3rem", color: "#6116c9" }}
                />
                <h5 className="card-title">Hiking</h5>
                <p className="card-text">
                  I like the hiking options in Utah and all the beautiful views.
                  It's my goal to see them all!
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Traveling */}
          <div className="carousel-item">
            <div className="card text-center">
              <div className="card-body">
                <FontAwesomeIcon
                  icon={faPlane}
                  style={{ fontSize: "3rem", color: "#6116c9" }}
                />
                <h5 className="card-title">Traveling</h5>
                <p className="card-text">
                  I love to travel and see new things, my favorite places to go
                  are historical sites and museums.
                </p>
              </div>
            </div>
          </div>
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
