import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";

function StepTwo(props) {
  return (
    <>
      <div className="home-container">
        <div className="home-features">
          <div className="home-heading-container">
            <h2 className="home-text03 Section-Heading-2">
              <Fade right>
                <h1>Process</h1>
              </Fade>
            </h2>
            <span className="home-text04 Section-Text">
              <Fade left cascade>
                Lorme ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero.
              </Fade>
            </span>
          </div>
          <div className="home-cards-container">
            <div className="home-card">
              <div className="home-icon-container">
                <Zoom top delay={100} duration={1500}>
                  <InfoOutlinedIcon className="home-icon04" />
                </Zoom>
              </div>
              <div className="home-content-container">
                <span className="home-heading3 Card-Heading">
                  Information Gathering
                </span>
                <span className="home-text05 Card-Text">
                  <Flip top>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio. Praesent libero. Sed cursus ante dapibus
                    diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                  </Flip>
                </span>
              </div>
            </div>
            <div className="home-card1">
              <div className="home-icon-container1">
                <Zoom top delay={400} duration={1200}>
                  <PsychologyOutlinedIcon className="home-icon04" />
                </Zoom>
              </div>
              <div className="home-content-container1">
                <span className="home-heading4 Card-Heading">Analysis</span>
                <span className="home-text06 Card-Text">
                  <Flip top delay={250}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio. Praesent libero. Sed cursus ante dapibus
                    diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                  </Flip>
                </span>
              </div>
            </div>
            <div className="home-card2">
              <div className="home-icon-container2">
                <Zoom top delay={700} duration={1650}>
                  <DesignServicesOutlinedIcon className="home-icon04" />
                </Zoom>
              </div>
              <div className="home-content-container2">
                <span className="home-heading5 Card-Heading">Key Design</span>
                <span className="home-text07 Card-Text">
                  <Flip top delay={350}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio. Praesent libero. Sed cursus ante dapibus
                    diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                  </Flip>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StepTwo;
