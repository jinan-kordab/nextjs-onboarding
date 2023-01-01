import React from "react";
import Pulse from "react-reveal/Pulse";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

function StepOne(props) {
  return (
    <>
      <div className="home-container">
        <div className="home-container02">
          <div className="home-hero">
            <div className="home-hero-text-container">
              <h1 className="home-heading2 Section-Heading">
                <Slide left cascade>
                  We design and make digital keys &nbsp; that you need
                </Slide>
              </h1>

              <span className="home-text Section-Text">
                <span>
                  <Slide right cascade>
                    c. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus
                    sed augue semper porta. Mauris massa. Vestibulum lacinia
                    arcu eget nulla. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos.
                  </Slide>
                </span>
              </span>
              <div className="home-cta-btn-container">
                <button className="home-cta-btn Anchor button">
                  <span className="home-text02">
                    <Fade right cascade duration={7000}>
                      LEARN MORE
                    </Fade>
                  </span>
                </button>
                <button className="home-cta-btn button Anchor">
                  <Fade left cascade duration={6000}>
                    ABOUT
                  </Fade>
                </button>
              </div>
            </div>

            <Pulse duration={3000}>
              <img
                alt="image"
                src="./pexels-aphiwat-chuangchoem-347226.jpg"
                className="home-image"
              />
            </Pulse>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
}

export default StepOne;
