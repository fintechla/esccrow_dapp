import { useState } from "react";
import { BuyerFlowView } from "./BuyerFlowView";
import { hideMenu } from "../tab-navigation/TabNavigationView";
import { changeTitle } from "../../pages/home/HomeView";
import { showModal, hideModal } from "../Modal/ModalContainer";
import { TokenSelector } from "../token-selector";
import { NearService } from "../../services/NearService";

export function BuyerFlowContainer(props) {
  const [activeStep, setStep] = useState(1);
  const nearService = new NearService();
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
  const handleSubmitStepTwo = async () => {
    changeTitle("Make secure transaction");
    setStep(3);
  };
  const handleSubmitStepThree = () => {
    changeTitle("Confirm transaction");
    setStep(4);
  };
  const handleSubmitStepFour = async () => {
    changeTitle("Approve payment");
    const result = await nearService.createTransaction(data);
    console.log("T RESULT", result);
    // setStep(5);
  };
  const handleChangeData = (patch) => {
    setData({ ...data, ...patch });
  };
  const handleClickSelectTokenBtn = async () => {
    const content = (
      <TokenSelector
        contractAddress={data.contractAddress}
        sellerWallet={data.sellerWallet}
        onSubmitTokenSelector={(tokenId) => {
          handleChangeData({ tokenId });
          hideModal();
        }}
      />
    );
    showModal(content);
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
      onClickSelectTokenBtn={handleClickSelectTokenBtn}
      startBuyerFlow={startBuyerFlow}
    />
  );
}
