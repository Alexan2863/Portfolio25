import recipes from "/assets/recipes-app.png";
import spiceThumbnail from "/assets/spiceGuideThumbnail.png";
import Streamline from "/assets/Streamline-final.png";
import Button from "../components/UI/Button";
import Process from "../components/Process.jsx";
import "./Portfolio.css";

function Portfolio() {
  const openReport = () => {
    window.open("/assets/Report.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="main-container mt-4">
      <h1 className="text-center">Portfolio</h1>

      <div className="slide border-bottom">
        <div className="img">
          <img
            src={recipes}
            alt="Recipe storage and display website"
            className="img-fluid"
          />
        </div>
        <div className="port-content">
          <p>
            Practiced HTTP requests on this{" "}
            <a href="https://recipes-powell.netlify.app/">Recipe App</a> and
            using custom hooks in this Vite project.
          </p>

          <h2>Key Features:</h2>
          <ol>
            <li>Display recipe information nicely.</li>
            <li>Use Firebase to store recipes.</li>
            <li>Have a GET and POST requests from Firebase.</li>
            <li>Practice form validation.</li>
          </ol>

          <h2>Technology Used:</h2>
          <ul>
            <li>Front-End: HTML, CSS, JavaScript</li>
          </ul>
        </div>
      </div>
      {/* end slide 1 */}
      <div className="slide border-bottom">
        <div className="img">
          <img
            src={spiceThumbnail}
            alt="Ultimate Spice Guide Website Thumbnail"
            className="img-fluid"
          />
        </div>
        <div className="port-content">
          <p>
            The Ultimate Spice Guide provides users with detailed information on
            various spices, including their origins, culinary uses, health
            benefits, and flavor profiles.
          </p>

          <h3>Key Features:</h3>
          <ol>
            <li>
              User Contributions: Enabled users to submit their own spices and
              recipes, as well as reviews, fostering a community of spice
              enthusiasts.
            </li>
          </ol>

          <h3>Technology Used:</h3>
          <ul>
            <li>Front-End: HTML, CSS, JavaScript</li>
            <li>Design Tools: Figma</li>
          </ul>
        </div>
      </div>
      {/* end slide 2 */}
      <div className="slide">
        <div className="img">
          <img
            src={Streamline}
            alt="Streamline website full mobile prototype"
            className="img-fluid"
          />
        </div>
        <div className="port-content">
          <p>
            Developed an interactive and comprehensive website dedicated to
            simplifying the search process involved in finding a new show to
            watch.
          </p>

          <h3>Key Features:</h3>
          <ol>
            <li>
              Allow users to select the streaming services they already pay for
              to help them get the most out of their subscription.
            </li>
            <li>
              Users can also connect with friends and family for more
              recommendations and reviews from people they care about. See what
              your friends loved and highly recommend, and see also what they
              wouldn't watch again.
            </li>
            <li>
              Responsive Design: Ensured the website is fully responsive,
              providing an optimal viewing experience on desktops, tablets,
              mobile devices, and TV.
            </li>
          </ol>

          <h3>Technology Used:</h3>
          <ul>
            <li>Design Tools: Figma </li>
          </ul>

          <Button onClick={openReport} className="btn">
            View User Research Report
          </Button>
        </div>
      </div>
      {/* end slide 3 */}

      <Process />
    </div>
  );
}

export default Portfolio;
