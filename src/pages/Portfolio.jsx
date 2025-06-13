import recipes from "/assets/recipe-reverie.png";
import stellr from "/assets/stellr-prototype.png";
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
            <a href="https://recipe-reverie.netlify.app/">Recipe Reverie</a>, also
            using custom hooks and Firebase Auth.
          </p>

          <h2>Key Features:</h2>
          <ol>
            <li>Display recipe name, description and author on cards.</li>
            <li>Use Firebase to store recipes.</li>
            <li>Have a GET and POST requests from Firebase.</li>
            <li>Practice form validation.</li>
            <li>Have a login page</li>
            <li>Dynamically display recipe details on click.</li>
          </ol>

          <h2>Technology Used:</h2>
          <ul>
            <li>Front-End: React, Vite, HTML, CSS, JavaScript</li>
            <li>Back-End: Firebase</li>
            <li>Design Tools: Figma</li>
            <li>Authentication: Firebase Auth</li>
            <li>UI Framework: React Bootstrap</li>
            <li>Routing: React Router</li>
          </ul>
        </div>
      </div>
      {/* end slide 1 */}
      <div className="slide border-bottom">
        <div className="img">
          <img
            src={stellr}
            alt="Stellr High Fidelity Prototype"
            className="img-fluid"
          />
        </div>
        <div className="port-content">
          <p>
            Developed a high-fidelity prototype for a mobile app called  <a href="https://www.figma.com/design/tIk8WdsKjAc3QtDAgYxiGQ/High-Fidelity-Prototype--Copy-?node-id=0-1&t=AhzAbE8nQxwIwjsG-1">Stellr</a>,
            which allows users to explore short form vidoe content and join communities to discuss and share their favorite content.
          </p>

          <h3>Key Features:</h3>
          <ol>
            <li>
              Community: Users can join communities to discuss and share their favorite content.
            </li>
            <li>Scrolling Feed: Users can scroll through a feed of short form video content.</li>
            <li>Posting Options: Users can post videos and images to the feed, specific communities, or to friends and family.</li>
          </ol>

          <h3>Technology Used:</h3>
          <ul>
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
            <a href="https://www.figma.com/design/PRn70W9emukKJFQxttNLCz/Streamline---Updated--Copy-?t=AhzAbE8nQxwIwjsG-1">Streamline</a> is an interactive and comprehensive website dedicated to
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
