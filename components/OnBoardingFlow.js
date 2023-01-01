import React from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";

function OnBoardingFlow(props) {
  return (
    <div>
      {/* Depending on a step number from redux store, we show the appropriate component */}
      {props.stepNumber &&
        ((props.stepNumber == 1 && <StepOne />) ||
          (props.stepNumber == 2 && <StepTwo />) ||
          (props.stepNumber == 3 && <StepThree />) ||
          (props.stepNumber == 4 && <StepFour />))}
    </div>
  );
}

export default OnBoardingFlow;
