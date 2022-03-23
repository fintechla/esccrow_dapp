import { useState } from "react";
import { BuyerFlowView } from "./BuyerFlowView";
import { hideMenu } from "../tab-navigation/TabNavigationView";
import { changeTitle } from "../../pages/home/HomeView";

export function BuyerFlowContainer(props) {
  const [activeStep, setStep] = useState(1);
  const [data, setData] = useState({
    tokenId: "",
    contractAddress: "",
    amount: 0,
    sellerWallet: "",
    maxDatePayment: "",
  });
  const handleSubmitStepOne = () => {
    hideMenu(true);
    changeTitle("Begin a transaction");
    setStep(2);
  };
  const handleSubmitStepTwo = () => {
    changeTitle("Confirm transaction details");
    setStep(3);
  };
  const handleSubmitStepThree = () => {
    changeTitle("Approve payment");
    setStep(4);
  };
  const handleSubmitStepFour = () => {
    changeTitle("Approve payment");
    setStep(5);
  };
  const handleChangeData = (patch) => {
    setData({ ...data, ...patch });
  };
  const startBuyerFlow = () => {
    console.log(data);
  };
  return (
    <BuyerFlowView
      step={activeStep}
      data={data}
      onChangeData={handleChangeData}
      onSubmitStepOne={handleSubmitStepOne}
      onSubmitStepTwo={handleSubmitStepTwo}
      onSubmitStepThree={handleSubmitStepThree}
      onSubmitStepFour={handleSubmitStepFour}
      startBuyerFlow={startBuyerFlow}
    />
  );
}
