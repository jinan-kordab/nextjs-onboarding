import React from "react";
import Fade from "react-reveal/Fade";
import Tada from "react-reveal/Tada";
import Flash from "react-reveal/Flash";
function StepFour(props) {
  return (
    <>
      <div className="home-container">
        <div className="home-subscribe">
          <Tada duration={3000}>
            <img
              alt="image"
              src="./digit_soft_key.jpg"
              className="home-image"
              height={505}
            />
          </Tada>

          <div className="home-container17">
            <div className="home-heading-container4">
              <h1 className="home-text39 Section-Heading">
                <Fade right>Get in touch for a free consultation</Fade>
              </h1>
              <span className="Section-Text home-text40">
                <Fade right cascade duration={2000}>
                  We will send more information about us, including free
                  promotional services to begin with.Our digital keys will help
                  your online solution.
                </Fade>
              </span>
            </div>

            <input
              type="text"
              required="true"
              placeholder="E-mail"
              className="home-textinput Section-Text input"
            />

            <Flash delay={3050}>
              <button className="home-button Anchor button">SEND</button>
            </Flash>
          </div>
        </div>
      </div>
    </>
  );
}

export default StepFour;
