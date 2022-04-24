import { useState, useEffect, useMemo } from "react";
import { BuyerFlowView } from "./BuyerFlowView";
import { hideMenu, showMenu } from "../tab-navigation/TabNavigationView";
import { changeTitle, showSubTitle } from "../../pages/home/HomeView";
import { showModal, hideModal } from "../Modal/ModalContainer";
import { TokenSelector } from "../token-selector";
import { NearService } from "../../services/NearService";
// import { useLocation } from "react-router-dom";
import { validate, validateStep2 } from "./validate";
import { Query } from "../fleek-router/utils/Query";

// function useQuery() {
//   const { search } = useLocation();
//   return useMemo(() => new URLSearchParams(search), [search]);
// }

export function BuyerFlowContainer(props) {
  const [activeStep, setStep] = useState(1);
  const [data, setData] = useState({
    transactionId: "",
    tokenId: "",
    contractAddress: "",
    amount: 0,
    sellerWallet: "",
    maxDatePayment: "",
  });
  // // const query = useQuery();
  const query = new Query();
  const nearService = new NearService();

  const validateTransactionStatus = async () => {
    const transactionHashes = query.params.transactionHashes;

    if (!transactionHashes) return;

    const result = await nearService.getTransactionResult(transactionHashes);

    setData({ ...data, transactionId: result.transaction_id });
    changeTitle("Begin a transaction");
    showSubTitle();
    setStep(5);
  };

  const handleClickReset = async () => {
    setData({
      transactionId: "",
      tokenId: "",
      contractAddress: "",
      amount: 0,
      sellerWallet: "",
      maxDatePayment: "",
    });
    showMenu();
    changeTitle(
      "Easiest, safest and most decentralized way to buy and sell NFTs"
    );
    setStep(1);
  };

  const handleSubmitStepOne = async () => {
    if (!(await validate(data))) return;

    hideMenu();
    changeTitle("Begin a transaction");
    setStep(2);
  };

  const handleSubmitStepTwo = async () => {
    if (!validateStep2(data)) return;
    changeTitle("Confirm transaction details");
    setStep(3);
  };

  const handleSubmitStepThree = () => {
    changeTitle("Approve payment");
    setStep(4);
  };

  const handleSubmitStepFour = async () => {
    nearService.createTransaction(data);
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

  // const startBuyerFlow = () => {};

  useEffect(() => {
    validateTransactionStatus();
  }, []);

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
      // startBuyerFlow={startBuyerFlow}
      reset={handleClickReset}
    />
  );
}
