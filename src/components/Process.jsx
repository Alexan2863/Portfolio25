import "./Process.css";
import process1 from "/assets/stellr-design.png";
import process2 from "/assets/stellr-paper.png";
import process3 from "/assets/stellr-medium.png";
import process4 from "/assets/stellr-home.png";

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
              A deep dive into Stellr
            </p>
          </div>
        </div>

        <div className="process-cards">
          <div className="card shadow mb-2" style={{ width: "18rem" }}>
            <img src={process1} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                <strong>Step 1: Research and Design</strong> <br />
                Create a site map outlining the main pages and how they will be
                connected. Conduct interviews to learn about user needs and
                expectations. Identify brand standards, colors & fonts, create visual assets,
                and determine overall visual feel.
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
                <strong>Step 3: Medium Fidelity Prototype</strong> <br />
                Create a medium fidelity prototype to test the design and functionality of the app.
              </p>
            </div>
          </div>

          <div className="card shadow mb-2" style={{ width: "18rem" }}>
            <img src={process4} className="card-img-top process4-img" alt="..." />
            <div className="card-body">
              <p className="card-text">
                <strong>Step 4: High Fidelity Prototype</strong> <br />
                Apply design elements to test the feel and function
                of the app with real users.
              </p>
            </div>
          </div>
        </div>

        <div className="study-description">
          <h2 className="text-decoration-underline mt-5">Introduction</h2>
          <p className="mb-3">
          Stellr is a high-fidelity mobile app prototype designed to help users discover, share, and discuss short-form video content within vibrant communities. The app aims to create a social space where users can join interest-based groups, post their favorite videos, and connect with others who share similar tastes.
          </p>

          <hr className="solid" />

          <h2 className="text-decoration-underline">Project Background</h2>
          <p className="mb-3">
          The idea for Stellr emerged from the growing popularity of short-form video platforms and the need for more community-driven discovery. The goal was to combine the addictive nature of video feeds with the depth of community interaction, allowing users to consume content and participate in discussions and communities that align with their interests. <br/> This project was a test of our abilities to design and develop a mobile-first app following Google's Material Design Principles and Apple's Human Interface Guidelines to compare and contrast Android and iOS.
          </p>

          <hr className="solid" />

          <h2 className="text-decoration-underline">
            Design and Development Process
          </h2>
          <h3>User Experience Design</h3>
          <p>
          To ensure Stellr would be engaging and intuitive, the following steps were taken:
          </p>
          <ul className="mb-3">
            <li>
            Sitemaps: Outlined the app’s main sections, including the feed, communities, and user profiles.
            </li>
            <li>
            User Flows: Mapped out how users would navigate between discovering content, joining communities, and posting.
            </li>
            <li>
            Personas: Developed to represent different user motivations, such as content creators, casual viewers, and community leaders.
            </li>
            <li>
            Usability Testing: Conducted with interactive prototypes to gather feedback on navigation, posting, and community features.
            </li>
          </ul>

          <h3>Tools and Technologies</h3>
          <ul className="mb-3">
            <li>
              Illustrator: Used for initial designs and creating specific
              elements.
            </li>
            <li>Figma: Used extensively for wireframing, prototyping, and high-fidelity design.</li>
            <li>
            User Research: Interviews and surveys to understand what users want from a video community app.
            </li>
          </ul>

          <h3>Color and Font</h3>
          <p className="mb-3">
          The color palette was chosen to be modern and energetic, appealing to a young, social audience. Clean, readable fonts were selected to ensure clarity and accessibility across devices. We used a space theme for our brand identity to signify the vastness of the web and the potential to connect with others around the world.
          </p>

          <h3>Layout</h3>
          <p>
            Based on user testing and feedback, the layout was designed to
            prioritize visual engagement:
          </p>
          <ul className="mb-3">
            <li>
            Visual Engagement: The design emphasizes video thumbnails and community icons to draw users into content and groups.
            </li>
            <li>
            Navigation: A bottom navigation bar provides quick access to the feed, communities, posting, and user profile.
            </li>
            <li>
              Iconography: Clear icons for actions like posting, joining communities, and viewing profiles.
            </li>
          </ul>

          <h3>User Interviews and Personas</h3>
          <p>
            User interviews and the creation of personas highlighted key user
            needs:
          </p>
          <ul>
            <li>
            Community: Users wanted spaces to discuss and recommend content.
            </li>
            <li>
            Ease of Posting: Simple, fast ways to share videos and images.
            </li>
            <li>
            Personalization: Ability to follow communities and see tailored feeds.
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
          <h3>Challenge: Balancing Feed and Community</h3>
          <p>
          It was challenging to design an experience that felt both like a content feed and a community platform.
          </p>
          <p className="mb-3">
          Solution: Integrated community features directly into the feed and allowed users to filter by group or trending topics.
          </p>

          <h3>Challenge: Encouraging Engagement
          </h3>
          <p>
          Getting users to post and interact, not just consume.

          </p>
          <p className="mb-3">
          Solution: Added prompts, easy posting options, and visible community activity to encourage participation.

          </p>

          <h3>Results and Impact</h3>
          <p className="mb-3">
          The Stellr prototype was well-received in user testing, with participants praising the clean design and the ability to join and interact with communities. Feedback indicated that the app successfully blended content discovery with social interaction.

          </p>

          <hr className="solid" />

          <h2 className="text-decoration-underline">Conclusion</h2>
          <p>
          Stellr demonstrates the value of combining user research, thoughtful design, and iterative testing to create a compelling social video app. The project highlights the importance of community in content platforms and the need for intuitive, engaging user experiences. <br/> This project was a great learning experience in applying Google's Material Design Principles and Apple's Human Interface Guidelines to design and develop a mobile-first app.
          </p>
        </div>
      </div>
    </>
  );
}

export default Process;
