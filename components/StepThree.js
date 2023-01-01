import React from "react";
import Bounce from "react-reveal/Bounce";
import RubberBand from "react-reveal/RubberBand";

function StepThree(props) {
  return (
    <>
      <div className="home-container">
        <div id="resources" className="home-hero">
          <div className="home-content-container">
            <div className="home-hero-text">
              <h1 className="home-heading Section-Heading">
                <Bounce left>
                  <h1>Generate your personal digital key now</h1>
                </Bounce>
              </h1>
              <span className="home-text Section-Text">
                <RubberBand>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                  Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
                  augue semper porta. Mauris massa. Vestibulum lacinia arcu eget
                  nulla. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos.
                </RubberBand>
              </span>
              <button className="home-cta-btn Anchor button">
                GET YOUR KEY
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StepThree;
