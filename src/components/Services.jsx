import "./Services.css";

function Services() {
  return (
    <div>
      {/* services section */}
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div className="services-section">
        <div className="mt-5 pt-5 container" id="services">
          <div>
            <div className="row">
              <div className="col-md-12 pb-20 text-center">
                <h2 className="section-title mb-10">
                  <span>
                    <strong className="primary-color">Services</strong>
                  </span>
                </h2>
                <p className="section-sub-title">
                  Discover the range of services I offer to help you bring your
                  digital projects to life.
                </p>
              </div>
            </div>

            <div className="row serviceicon">
              <div className="col-md-4">
                <ul className="i-list medium">
                  <li className="i-list-item">
                    <div className="icon">
                      <i className="fa fa-code" aria-hidden="true"></i>
                    </div>

                    <div className="icon-content">
                      <h3 className="title">Web Development</h3>
                      <p className="sub-title">
                        Custom web development solutions tailored to meet your
                        business needs, from front-end design to back-end
                        functionality.
                      </p>
                    </div>
                    <div className="iconlist-timeline"></div>
                  </li>
                  <li className="i-list-item">
                    <div className="icon">
                      <i className="fa fa-desktop" aria-hidden="true"></i>
                    </div>

                    <div className="icon-content">
                      <h3 className="title">UI/UX Design</h3>
                      <p>
                        Creating intuitive and engaging user interfaces that
                        provide a seamless user experience.
                      </p>
                    </div>
                    <div className="iconlist-timeline"></div>
                  </li>
                  <li className="i-list-item">
                    <div className="icon">
                      <i className="fa fa-paper-plane" aria-hidden="true"></i>
                    </div>

                    <div className="icon-content">
                      <h3 className="title">Consulting</h3>
                      <p>
                        Offering expert advice and strategies to enhance your
                        web presence and optimize your digital projects.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="i-list medium">
                  <li className="i-list-item">
                    <div className="icon">
                      <i className="fa fa-diamond" aria-hidden="true"></i>
                    </div>
                    <div className="icon-content">
                      <h3 className="title">Endless Possibilites</h3>
                      <p className="sub-title">
                        I'm dedicated to exploring the endless possibilities
                        that technology offers.
                      </p>
                    </div>
                    <div className="iconlist-timeline"></div>
                  </li>
                  <li className="i-list-item">
                    <div className="icon">
                      <i className="fa fa-recycle" aria-hidden="true"></i>
                    </div>
                    <div className="icon-content">
                      <h3 className="title">Easy &amp; Clean Code</h3>
                      <p>
                        With clean code as the foundation, your project will be
                        well-organized, scalable, and adaptable to future
                        changes.
                      </p>
                    </div>
                    <div className="iconlist-timeline"></div>
                  </li>
                  <li className="i-list-item">
                    <div className="icon">
                      <i className="fa fa-check" aria-hidden="true"></i>
                    </div>
                    <div className="icon-content">
                      <h3 className="title">Clean &amp; Modern Design</h3>
                      <p>
                        I specialize in crafting visually appealing interfaces
                        that are intuitive, user-friendly, and aligned with your
                        brand identity.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="i-list medium">
                  <li className="i-list-item">
                    <div className="icon">
                      <i className="fa fa-codepen" aria-hidden="true"></i>
                    </div>
                    <div className="icon-content">
                      <h3 className="title">Maintenance &amp; Support</h3>
                      <p className="sub-title">
                        Providing ongoing maintenance and support to ensure your
                        website remains up-to-date and performs optimally.
                      </p>
                    </div>
                    <div className="iconlist-timeline"></div>
                  </li>
                  <li className="i-list-item">
                    <div className="icon">
                      <i className="fa fa-newspaper-o" aria-hidden="true"></i>
                    </div>
                    <div className="icon-content">
                      <h3 className="title">Multipurpose Concept</h3>
                      <p>
                        I design and develop solutions that are flexible,
                        scalable, and tailored to meet your specific needs."
                      </p>
                    </div>
                    <div className="iconlist-timeline"></div>
                  </li>
                  <li className="i-list-item">
                    <div className="icon">
                      <i className="fa fa-heart-o" aria-hidden="true"></i>
                    </div>
                    <div className="icon-content">
                      <h3 className="title">Crafted With Love</h3>
                      <p>
                        Every project I undertake is crafted with passion,
                        dedication, and attention to detail. With a focus on
                        quality and excellence, I strive to exceed your
                        expectations and deliver results that you'll love.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end services section */}
    </div>
  );
}

export default Services;
