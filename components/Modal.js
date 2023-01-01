import React from "react";
import classes from "../styles/Modal.module.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import IconButton from "@mui/material/IconButton";
import OnBoardingFlow from "./OnBoardingFlow";

import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";

import { useSelector, useDispatch } from "react-redux";
import { stepActions } from "../store/step";

function Modal(props) {
  const stepNumber = useSelector((state) => state.step.stepNumber);

  const dispatch = useDispatch();

  const previousStep = () => {
    dispatch(stepActions.decrement());
  };

  const nextStep = () => {
    dispatch(stepActions.increment());
  };

  return (
    <div className={classes.modal}>
      {/* Top Right Close Button */}
      <IconButton
        onClick={props.onClose}
        sx={{
          "&:hover": {
            color: "red",
            backgroundColor: "darkred",
          },
        }}
        className={classes.closeIcon}
      >
        <HighlightOffIcon fontSize="large" />
      </IconButton>
      {/* Top Right Close Button */}

      <OnBoardingFlow stepNumber={stepNumber} />

      {/* Previous Next Buttons */}
      <IconButton
        sx={{
          "&:hover": {
            color: "black",
            backgroundColor: "lightblue",
          },
        }}
        onClick={previousStep}
      >
        <ArrowBackTwoToneIcon fontSize="large" />
      </IconButton>
      <IconButton
        sx={{
          "&:hover": {
            color: "black",
            backgroundColor: "lightblue",
          },
        }}
        onClick={nextStep}
      >
        <ArrowForwardTwoToneIcon fontSize="large" />
      </IconButton>
      {/* Previous Next Buttons */}
    </div>
  );
}

export default Modal;
