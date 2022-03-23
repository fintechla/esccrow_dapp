import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
import { StepFour } from "./StepFour";
import { StepFive } from "./StepFive";

const steps = {
  1: (props) => {
    return StepOne(props);
  },
  2: (props) => {
    return StepTwo(props);
  },
  3: (props) => {
    return StepThree(props);
  },
  4: (props) => {
    return StepFour(props);
  },
  5: (props) => {
    return StepFive(props);
  },
};

export function BuyerFlowView(props) {
  return steps[props.step](props);
}
