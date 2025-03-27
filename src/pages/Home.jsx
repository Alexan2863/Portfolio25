import me from "/assets/profilepic.jpg";
import "./Home.css";
import Button from "../components/UI/Button";
import Services from "../components/Services";

function Home() {
  const openResume = () => {
    window.open("/assets/Resume.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      <div className="container pt-4">
        <div className="content">
          <img
            src={me}
            alt="I have short curly hair and large round glasses"
            className="selfie mb-5"
          />

          <div className="description">
            <h1>Hey, I'm Alex Powell</h1>
            <h2>
              I do UX & UI Design and Front-End Development. Come see what I've
              been up to!
            </h2>

            <Button className="btn" role="button" onClick={openResume}>
              View Resume
            </Button>
          </div>
        </div>
      </div>
      <Services />
    </div>
  );
}

export default Home;
