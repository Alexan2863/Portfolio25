import "./Process.css";
import process1 from "/assets/process1.png";
import process2 from "/assets/process2.png";
import process3 from "/assets/process3.png";
import process4 from "/assets/process4.png";

function Process() {
  return (
    <>
      <div className="case-study pt-4">
        <div className="row">
          <div className="col-md-12 pb-20 text-center">
            <h2 className="mb-2">
              <strong>My Process</strong>
            </h2>
            <p className="text-center">
              A deep dive into the Ultimate spice guide
            </p>
          </div>
        </div>

        <div className="process-cards">
          <div className="card shadow mb-2" style={{ width: "18rem" }}>
            <img src={process1} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                <strong>Step 1: Research and Strategy</strong> <br />
                Create a site map outlining the main pages and how they will be
                interconnected. Conduct interviews to learn about user needs and
                expectations.
              </p>
            </div>
          </div>

          <div className="card shadow mb-2" style={{ width: "18rem" }}>
            <img src={process2} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                <strong>Step 2: Wireframes</strong> <br />
                Create wireframes to establish visual hierarchy and placement of
                content.
              </p>
            </div>
          </div>

          <div className="card shadow mb-2" style={{ width: "18rem" }}>
            <img src={process3} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                <strong>Step 3: Design</strong> <br />
                Identify brand standards, colors & fonts, create visual assets,
                and determine overall visual feel.
              </p>
            </div>
          </div>

          <div className="card shadow mb-2" style={{ width: "18rem" }}>
            <img src={process4} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                <strong>Step 4: Prototypes</strong> <br />
                Apply design elements to better understand the feel and function
                of the website.
              </p>
            </div>
          </div>
        </div>

        <div className="study-description">
          <h2 className="text-decoration-underline mt-5">Introduction</h2>
          <p className="mb-3">
            The Ultimate Spice Guide is a user-friendly website designed to help
            college students and young adults explore new cultural foods at home
            by introducing them to a variety of spices. The website offers
            easy-to-follow recipes that incorporate these spices while using
            familiar ingredients. The site aims to make cooking accessible and
            enjoyable for those on a budget.
          </p>

          <hr className="solid" />

          <h2 className="text-decoration-underline">Project Background</h2>
          <h3>Initial Concept</h3>
          <p className="mb-3">
            The idea for the Ultimate Spice Guide originated from the need to
            address the lack of cooking knowledge among young adults and college
            students. Initially, the project focused on the history and health
            benefits of spices, targeting enthusiasts. However, during the
            planning stage, the scope was redefined to cater to budget-conscious
            users, making it a niche market for easy-to-browse and
            budget-friendly cooking guides.
          </p>

          <hr className="solid" />

          <h2 className="text-decoration-underline">
            Design and Development Process
          </h2>
          <h3>User Experience Design</h3>
          <p>
            To ensure the website was user-friendly, extensive research and
            design processes were undertaken:
          </p>
          <ul className="mb-3">
            <li>
              Sitemaps: Detailed sitemaps were created to outline the website
              structure.
            </li>
            <li>
              User Flows: Developed to visualize how users would navigate the
              site.
            </li>
            <li>
              Personas: Created to represent different user types and their
              needs.
            </li>
            <li>
              Usability Testing: Conducted to gather feedback and make necessary
              adjustments.
            </li>
          </ul>

          <h3>Tools and Technologies</h3>
          <ul className="mb-3">
            <li>
              Illustrator: Used for initial designs and creating specific
              elements.
            </li>
            <li>Figma: Employed for creating interactive prototypes.</li>
            <li>
              HTML/CSS/JavaScript: Utilized for front-end development to ensure
              responsiveness and user interaction.
            </li>
          </ul>

          <h3>Color and Font</h3>
          <p className="mb-3">
            The color palette was chosen to create a warm, inviting, and
            appetizing look. I chose EB Garamond for its classic, elegant feel,
            making the text easy to read and giving the site a touch of
            sophistication; Montserrat I chose for its modern and clean look,
            ideal for headings and ensuring readability across different
            devices.
          </p>

          <h3>Layout</h3>
          <p>
            Based on user testing and feedback, the layout was designed to
            prioritize visual engagement:
          </p>
          <ul className="mb-3">
            <li>
              Use of Pictures: Lots of pictures were used to draw users around
              the site. During testing, it was observed that users mostly
              skimmed content and clicked on images that interested them.
              Therefore, the final layout limits the amount of written content
              required to find a recipe, focusing on visual appeal.
            </li>
            <li>
              Responsive Design: Ensured the website is mobile-friendly, with
              images and lists stacking in a single column on smaller screens.
            </li>
            <li>
              Navigation: Full navigation is visible on medium screens, making
              it easy for users to find what they need.
            </li>
          </ul>

          <h3>User Interviews and Personas</h3>
          <p>
            User interviews and the creation of personas highlighted key user
            needs:
          </p>
          <ul>
            <li>
              Simplicity: Users wanted straightforward recipes that didn't
              require obscure ingredients.
            </li>
            <li>
              Visuals: High-quality images of spices and dishes were important
              for engagement.
            </li>
            <li>
              Educational Content: Users appreciated brief educational content
              about the spices.
            </li>
          </ul>
          <p className="mb-3">
            These findings guided the design decisions, ensuring the website met
            user expectations and provided value.
          </p>

          <hr className="solid" />

          <h2 className="text-decoration-underline">
            Challenges and Solutions
          </h2>
          <h3>Challenge: Limited Experience</h3>
          <p>
            As a student, the project was a significant learning experience. The
            main challenge was understanding user needs from a perspective
            outside of the creator’s own.
          </p>
          <p className="mb-3">
            Solution: Conducted usability testing with potential users to gather
            feedback and made necessary adjustments to improve the user
            experience.
          </p>

          <h3>Challenge: Time Constraints</h3>
          <p>
            Balancing the project with academic responsibilities was
            challenging.
          </p>
          <p className="mb-3">
            Solution: Effective time management and breaking the project into
            smaller, manageable tasks helped in meeting deadlines.
          </p>

          <h3>Results and Impact</h3>
          <p className="mb-3">
            The Ultimate Spice Guide website successfully met its objectives by
            providing a user-friendly platform for young adults and college
            students to explore new spices and recipes. Feedback from usability
            testing showed that users found the site easy to navigate and
            appreciated the detailed information on each spice.
          </p>

          <hr className="solid" />

          <h2 className="text-decoration-underline">Conclusion</h2>
          <p>
            The Ultimate Spice Guide project was an enriching experience that
            combined research, design, and development skills to create a
            valuable resource for young cooks. The project highlighted the
            importance of user-centered design and the need for continuous
            improvement based on user feedback.
          </p>
        </div>
      </div>
    </>
  );
}

export default Process;
